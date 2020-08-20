function myPageChange() {
  $('#search-terms').blur();
  return false;
}
function myPage(page) {
  $('#bulletins-container').addClass("hide");
  $('#select-bulletins-topic').val('-1');
  $('.select-bulletins-div').addClass('hide');
  gotoPage(page); // from search.js
}

function usvOnlyChecked() {
  if ($('#usv-only').is(":checked")) { return true; }
  return false;
}

function usvOnlyGood() {
  var flag = usvOnlyChecked();
  if (flag) {
    $('.not-service-bulletin').addClass('hide');
    $('.is-service-bulletin').removeClass('hide');
  } else {
    $('.is-service-bulletin').addClass('hide');
    $('.not-service-bulletin').removeClass('hide');
  }
}



<!-- ------------------------------------------------ -->

function selectBulletinsSearchResult(queryBox) {
  $('.select-bulletins-div').addClass('hide');
  $('#select-bulletins-SR').removeClass('hide');
  $('#select-bulletins-topic').prop('selectedIndex', 0);
  $('#'+queryBox).blur();
  $('#'+queryBox).val('');
}

function inlineSearch(queryBox, resultDiv) {
  search(queryBox, resultDiv, 0, 0);
  selectBulletinsSearchResult(queryBox);
}

// only call this on page load!
function setTopic(dropdown) {
  var topic = getCleanParm('topic', 30);
  if (topic == '') { topic = getCleanParm('select-bulletins-topic', 30); }
  if (topic == '') { return false; }
  topic = topic.toLowerCase().replace(' ', '-');
  // console.log('set Topic ', dropdown, topic);
  $('#'+dropdown).val(topic);
  if (($('#'+dropdown).val()) == null) { $('#'+dropdown).val(-1); return false; };
  $('#'+dropdown).change();
  return true;
}
function setQS(inputBox) {
  qs = getCleanParm('search-terms', 150);
  $('#'+inputBox).val(qs);
}

function selectBulletinsTopic() {
  var val = document.getElementById("select-bulletins-topic").value;
  // console.log('selectBulletinsTopic: |' + val + '|');
  resetInline('bulletins');
  $('.select-bulletins-div').addClass('hide');
  $('#select-bulletins-'+val).removeClass("hide");
  $('#bulletins-container').removeClass("hide");
}

function showMoreBulletins(type, bulletinNum) {
  var controlDiv = 'more-'+type+'-'+bulletinNum;
  var contentDiv = 'more-'+type+'-content-'+bulletinNum;
  var arrowIcon = 'more-'+type+'-arrow-'+bulletinNum;
  if ($('#'+controlDiv).hasClass('see-less')) {
    $('#'+contentDiv).addClass('hide');
    $('#'+controlDiv).removeClass('see-less');
    $('#'+controlDiv).html("<span>See more "+type+"</span>");
    $('#'+arrowIcon).removeClass('down');
  } else {
    $('#'+contentDiv).removeClass('hide');
    $('#'+controlDiv).addClass('see-less');
    $('#'+controlDiv).html("<span>See fewer "+type+"</span>");
    $('#'+arrowIcon).addClass('down');
  }
}

function makeBlockofHits (hitList) {
    var divStart = '<div class="usa-grid-full">'+"\n";
    var divEnd = '</div>'+"\n";
    var divBlock = divStart;
    var cnt = 0;
    var rowCnt = 2;
    var len = hitList.length;
    for (var i = 0; i < len; i++) {
      var block = $(hitList[i]).html();
      block = '<div class="usa-width-one-half">' +block+ '</div>';
      divBlock += "\n" + block + "\n";
      cnt++;
      if (cnt >= rowCnt) { divBlock += divEnd + "\n" + divStart; cnt = 0; }
    }
    divBlock += divEnd;
    return divBlock;
}
function getSTRfromURL(url) {
  var parts = url.split(/\//);
  var str = parts.pop();
  if (url.slice(-1) == '/') {
    // directory, different parsing
    str = parts[parts.length-1];
  }
  if (str.includes('=')) {
    var parts = str.split('=');
    str = parts[parts.length-1];
  }
  str = str.replace(/\./, '-');
  str = '#' + str+'-block';
  return str;
}
function addOneMatchToList(url, bulletinList, foundList) {
  if (typeof url === 'undefined') { return false; }
  if (url == '') { return false; }
  if (url == null) { return false; }
  var str = getSTRfromURL(url);
  if ($(str).length == 0) { console.log('rejecting '+str, url); return false; }
  if ($(str).length > 0) {
    // console.log(str);
    if (!(str in foundList)) {
      foundList[str] = str;
      if (url.includes('/bulletins/')) { bulletinList.push(str); return true; }
      if ($(str).hasClass('div-bulletin-class')) { bulletinList.push(str); return true; }
      if ($(str).hasClass('div-resource-class')) { resList.push(str); return true; }
    }
    else { console.log( 'ignoring second '+str); }
  }
  return false;
}
// share-bar callback
// take a list of hits and add it to the bulletin pile.
// maintain the order.  use foundList to avoid duplicates
function addMatchesToList(matches, bulletinList, foundList) {
  if (typeof matches === 'undefined') { return false; }
  if (matches.length <= 0) { return false; }

  var i = -1;
  var j = -1;
  if (matches[0].links) {
    for (j = 0; j < matches.length; j++) {
      addOneMatchToList(matches[j].title_url, bulletinList, foundList);
      if (matches[j].links) {
        for (i = 0; i < matches[j].links.length; i++) {
          addOneMatchToList(matches[j].links[i].url, bulletinList, foundList);
        }
      }
      return true;
    }
  }
  for (i = 0; i < matches.length; i++) {
    addOneMatchToList(matches[i].url, bulletinList, foundList);
  }
  return true;
}
function bulletinsCallback(searchName, result) {
  $('#'+'search-message-'+searchName).html('');
  // console.log('in callback bulletinsCallback()');
  // console.log(result);
  var jsonBlock = result;
  // $('.div-block-class').addClass('hide'); // hide them all
  var bulletinList = [];
  var foundList = [];
/*
  addMatchesToList(jsonBlock.text_best_bets, bulletinList, foundList);
  addMatchesToList(jsonBlock.graphic_best_bets, bulletinList, foundList);
  addMatchesToList(jsonBlock.web.results, bulletinList, foundList);

*/
$('#inline-search-bulletins-results').html('results here');
console.log('result ', result);
if (result) {
  var results = result.web.results;
  block = '';
  var len = results.length;
  for (i = 0; i < len; i++) {
    block += oneHitHTML(results[i], 'web');
  }
}

  var terms = $('#search-input-'+searchName).val();
  $("#inline-search-bulletins-message").html(
    makeFoundMessage(Object.keys(bulletinList).length, terms));

  // hide topics, show inline searh copy
  $('#inline-search-bulletins').removeClass('hide');
  $('.select-bulletins-div').addClass('hide');
  return true;
}

function makeFoundMessage(bCnt, terms) {
  var bulletins = 'bulletins';
  if (bCnt == 1) { bulletins = 'bulletin'; }
  var message = "We found <strong>" + fCnt + "</strong> "+ bulletins + " about <strong>" + terms + "</strong>.";
  return message;
}

// reset back to the bulletins page default
function resetInline(searchName) {
  clearResultDivs();  // search.js
  $('.select-bulletins-div').removeClass('hide');
}
