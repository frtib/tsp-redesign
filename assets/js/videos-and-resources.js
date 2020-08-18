
function onPlayerReady(event) {
  event.target.playVideo();
}
function showVideo(vidCode, changeURL, resetScroll) {
  $('.video-details').hide();
  $('#'+vidCode+'-block').show();
  // console.log('show '+vidCode);
  var ytURL = "https://www.youtube.com/embed/";
  var ytOptions = "?modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&showinfo=0&autoplay=0";
  $('#video-iframe').attr("src", ytURL+vidCode+ytOptions);
  if (changeURL) {
    window.history.pushState({}, vidCode, '/videos-and-resources/?vidCode='+vidCode);
  }
  // scroll to video entry
  if (resetScroll) {
    var elem = $('#show-'+vidCode);
    if (elem) {
      var main = $('#search-videos-ul');
      var e = elem.position().top;
      var m = main.offset().top;
      main.scrollTop(e - m);
    }
  }
  // highlight selected video
  // $('.show-video-link').removeClass('focus');
  // $('#show-'+vidCode).addClass('focus');
  $('#'+vidCode+'-atag').focus();
}

// only call this on page load!
function initVideoFromURL(def, updateURL, resetScroll) {
  var vidCode = getQueryString('vidCode');
  if (typeof vidCode === 'undefined') { vidCode = def; }
  vidCode = decodeURIComponent(vidCode);
  vidCode = vidCode.replace(/[^A-Z0-9_-]/ig,'');
  vidCode = vidCode.substring(0,15);
  if ($('#show-'+vidCode).length) { 1; } else { vidCode = def; }
  showVideo(vidCode, updateURL, resetScroll);
  return false;
}

function initVideoList() {
  // showVideo('r6rRMcgBNCc', 0, 0);
  initVideoFromURL('sppDf-oZm-o', 0, 1);

  // do a search to get all the video details
  // inlineUSAsearch('videos', 'search-status', 'beta.tsp', 'video', 'tsp', 1, 0, videoSearchCallback);

  // initialize the inline search on the page
  addToVidArraysInline();
}

function doVideoSearch(term) {
  // console.log(term);
  $('#browse-titles').val(term);
  videoOnKeyUp();
}
function doCatSearch(term) {
  $('#browse-titles').val(term);
  showVideoTitles(term, 'cat');
}

var keyHash = {};
var vidKeys = [];
var vidTitles = [];
var vidDescs = [];
var vidTrans = [];
var vidCats = [];

function clearVidArrays() {
  keyHash = {};
  vidKeys = [];
  vidTitles = [];
  vidDescs = [];
  vidTrans = [];
  vidCats = [];
}

function addToVidArraysInline() {
  var items = $('.show-video-link');
  var name;
  for (var i = 0; i < items.length; i++) {
      key = items[i].id.slice(5);
      // console.log(key);
      if (!(key in keyHash)) {
        // console.log('adding '+key);
        keyHash[key] = key;
        vidKeys.push(key);
        vidTitles.push($('#'+key+'-title').text().toUpperCase());
        vidDescs.push($('#'+key+'-description').text().toUpperCase());
        vidTrans.push($('#'+key+'-transcript').text().toUpperCase());
        vidCats.push($('#'+key+'-categories').text().toUpperCase());
      }
  }
  // for (i = 0; i < vidKeys.length; i++) { console.log(vidKeys[i], vidTitles[i], vidCats[i], vidDescs[i], vidTrans[i]); }
  return true;
}

function addToVidArrays(key, result) {
  if (!(key in keyHash)) {
    // console.log('adding '+key);
    keyHash[key] = key;
    vidKeys.push(key);
    vidTitles.push(cleanSnippet(result.title.toUpperCase()));
    // $('#'+vidCode+'-description').html(formatSnippet(results.snippet));
    vidDescs.push($('#'+key+'-description').text().toUpperCase());
    vidTrans.push($('#'+key+'-transcript').text().toUpperCase());
    vidCats.push($('#'+key+'-categories').text().toUpperCase());
  }

}

function videoSearchCallback(searchName, returnedJSON, offset) {
  if (typeof returnedJSON === 'undefined') { return false; }
  var results;  // JSON block of hits
  var resultsTotal = 0;
  var totalHits = 0;
  var qs = $('#search-terms').val();
  var hitFormat = 'web';
  var vidCode = '';
  var tmp;
  clearVidArrays();

  // console.log(returnedJSON);
  results = returnedJSON.video.results;
  resultsTotal = returnedJSON.video.total;
  totalHits = resultsTotal;
  hitFormat = 'video';

  $('.show-video-link').hide();
  var vidList = $('.show-video-link');

  if (results) {
    var len = results.length;
    for (i = 0; i < len; i++) {
      // console.log(i, ': ', results[i]);
      vidCode = '';
      if (results[i].url != null) {
        tmp = results[i].url.split('=');
        if (tmp.length > 1) { vidCode = tmp[tmp.length-1]; }
      }
      if (vidCode != '') {
        $('#show-'+vidCode).show();
        if ($("#"+vidCode+'-block').length > 0) {
          // console.log(i, ' vidCode = ', vidCode, ' ', results[i].publication_date, ' ', results[i].duration);
          $('#'+vidCode+'-pub-date').html(formatDuration(results[i].publication_date));
          $('#'+vidCode+'-duration').html(results[i].duration);
          addToVidArrays(vidCode, results[i]);
        } else {
          console.log('not in yml file '+vidCode);
        }
      }
    }
  }
  var i;
  for (i = 0; i < vidList.length; i++) {
    if ($('#'+vidList[i].id).is(':hidden')) { console.log('not in search result: ' + vidList[i].id); }
  }
  // for (i = 0; i < vidKeys.length; i++) { console.log(vidKeys[i], vidTitles[i], vidDescs[i], vidTrans[i]); }
  return false;
}

function videoOnKeyUp() {
  var input = $('#'+'browse-titles').val();
  // console.log('input '+input);
  showVideoTitles(input, '');
}

function strInTitle(str, idx) {
  if (vidTitles[idx].includes(str)) { return true; }
  return false;
}
function strInDesc(str, idx) {
  if (vidDescs[idx].includes(str)) { return true; }
  return false;
}
function strInTran(str, idx) {
  if (vidTrans[idx].includes(str)) { return true; }
  return false;
}
function strInCat(str, idx) {
  if (vidCats[idx].includes(str)) { return true; }
  return false;
}
function testVideoString(str, i, group) {
  if (group == 'cat') {
    return strInCat(str, i);
  }
  return (strInTitle(uStr,i)||strInDesc(uStr,i)||strInTran(uStr,i)||strInCat(uStr,i));
}
function showVideoTitles(str, group) {
  uStr = str.toUpperCase();
  if (uStr == '') {
    // show all the ones we've got data for
    for (var i = 0; i < vidKeys.length; i++) {
      $('#show-'+vidKeys[i]).show();
    }
    // console.log('count is '+($('.show-video-link:visible').length));
    return false;
  }
  // str has a value, use it as a search key
  for (var i = 0; i < vidKeys.length; i++) {
    if (testVideoString(uStr, i, group)) {
      $('#show-'+vidKeys[i]).show();
    } else {
      $('#show-'+vidKeys[i]).hide();
    }
  }
  // console.log('count is '+($('.show-video-link:visible').length));
  return true;
}


function buildYML(apiKey, resultDiv) {
  var youtubeSite = "https://www.googleapis.com/youtube/v3/videos?";
  // var key = "key=AIzaSyDLozGtZFvP49NZxV1SodEiUdqDJvaG0M8";
  var key = "key=" + $('#'+apiKey).val().trim();
  var channelID = "&channelId=UCOmEoeuWWCbDNeQi5iH9z-w";
  var items = $('.vid-name');
  var ids = '&id=' + items[0].id;
  for (var i = 1; i < items.length; i++) { ids += ',' + items[i].id; }
  // ids = "&id=r6rRMcgBNCc,fE_6wGds0ac,zY42j4tBXfc";
  var parts = "&part=contentDetails,snippet";

  var fullURL = youtubeSite + key + channelID + ids + parts;

  // $('#'+resultDiv).html(fullURL);
  getFromYouTube(fullURL, resultDiv);
}

function parseYouTubeDataYML(resultDiv, data) {
  var rc = '';
  var items = data.items;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    rc += "- video_title: \"" + item.snippet.title + "\"\n";
    rc += "  video_id: " + item.id + "\n";
    var description = item.snippet.description;
    description = description.replace(/"/g, "'");
    description = description.replace(/\n/g, "<br><br>");
    console.log('description');
    console.log(description);
    rc += "  video_description: \"" + description + "\"\n";
    rc += "  video_duration: \"" + durationToTime(item.contentDetails.duration) + "\"\n";
    var date = item.snippet.publishedAt;
    date = date.split('T')[0];
    rc += "  video_date: " + date + "\n";
    if ($('#'+item.id+'-categories').text() != '') {
      var categories = $('#'+item.id+'-categories').text().split(',');
      categories = categories.join("\n    - ");
      rc += "  video_categories: " + "\n    - " + categories + "\n";
    }
    if ($('#'+item.id+'-download').text() != '') {
      rc += "  video_download: " + $('#'+item.id+'-download').text() + "\n";
    }
    if ($('#'+item.id+'-transcript').text() != '') {
      var transcript = $('#'+item.id+'-transcript').text();
      // transcript = transcript.replace(/"/g, "'");
      // transcript = transcript.replace(/\n/g, "\n  ");
      rc += "  video_transcript: \"" + transcript + "\"\n";
    }
  }
  // console.log('|', rc, '|', data, '|');
  $('#'+resultDiv).text(rc);
}

function parseYouTubeDataJS(resultDiv, data) {
  var rc = '';
  rc += "function setYouTubeVideoData() {\n";
  // rc += "  console.log('setting YouTube data');\n";
  var id = '';
  var date = '';
  var title = '';
  var duration = '';
  var description = '';
  var item = null;

  var items = data.items;
  for (var i = 0; i < items.length; i++) {
    item = items[i];
    id = item.id;
    title = item.snippet.title;
    date = item.snippet.publishedAt;
    date = date.split('T')[0];
    date = flatpickr.formatDate(flatpickr.parseDate(date, "Y-m-d"), "F j, Y");
    description = item.snippet.description;
    description = description.replace(/\n/g, "<br>");
    duration = durationToTime(item.contentDetails.duration);
    title = title.replace(/"/g, "'");
    description = description.replace(/"/g, "'");

    rc += "\n";
    rc += "  $(\"#"+id+"-link-title\").html(\""+title+"\");\n"
    rc += "  $(\"#"+id+"-title\").html(\""+title+"\");\n"
    rc += "  $(\"#"+id+"-download-title\").html(\""+title+"\");\n"
    rc += "  $(\"#"+id+"-pub-date\").html(\""+date+"\");\n"
    rc += "  $(\"#"+id+"-description\").html(\""+description+"\");\n"
    rc += "  $(\"#"+id+"-duration\").html(\""+duration+"\");\n"
  }
  // console.log('|', rc, '|', data, '|');
  rc += "}\n\n";
  $('#'+resultDiv).text(rc);
}

var getFromYouTube = function(url, resultDiv) {
  console.log(url);
  var serverCall = $.get(url);
    serverCall.done(
      function (data) {
          parseYouTubeDataJS(resultDiv, data);
      }
    );
    serverCall.fail(
      function (jqXHR, textStatus, errorThrown) {
          var errMsg = textStatus + ': ' + errorThrown;
          // $('#aar_caption').html("Average annual returns (as of December "+values[7]+")");
          console.log('get data from YouTube failed');
          $('#'+resultDiv).html('getting data failed');
      }
    );
}

function leadZero(i) { return (i>9) ? i : "0" + i; }

function durationToTime(duration) {
  // console.log(duration);
  var str = duration.replace(/^PT/,'');
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  // console.log(str);
  if (str.includes('H')) {
    var tmp = str.split('H');
    hours = tmp[0];
    str = tmp[1];
    // console.log('found H', hours, str);
  }
  if (str.includes('M')) {
    var tmp = str.split('M');
    minutes = tmp[0];
    str = tmp[1];
    // console.log('found M', minutes, str);
  }
  if (str.includes('S')) {
    var tmp = str.split('S');
    seconds = tmp[0];
    str = tmp[1];
    // console.log('found S', seconds, str);
  }

  if (hours > 0) { return hours + ':' + leadZero(minutes) + ':' + leadZero(seconds); }
  if (minutes > 0) { return minutes + ':' + leadZero(seconds); }
  // return seconds + ' seconds';
  return minutes + ':' + leadZero(seconds);
}
