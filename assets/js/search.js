
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

// only call this on page load!
function getCleanParm(parm, maxLength) {
  var qs = getQueryString(parm);
  if (typeof qs === 'undefined') { return ''; }
  qs = decodeURIComponent(qs);
  qs = qs.replace(/[^"A-Z0-9_-]+/ig,' ');
  qs = qs.substring(0,maxLength);
  return qs;
}
// only call this on page load!
function setQS(inputBox) {
  var qs = getCleanParm('qs', 150);
  if (qs == '') { qs = getCleanParm('search-terms', 150); }
  $('#'+inputBox).val(qs);
  var group = getCleanParm('group', 150);
  setGroup(group);
}
// for search-container.html
function doSearch(inputBox) {
  qs = getCleanParm('search-terms', 150);
  if (qs != '') {
    $('#'+inputBox).val(qs);
    myPage(1);
  }
}

// only call this on page load!
function initGroup() {
  var group = getQueryString('group');
  if (typeof group === 'undefined') { group = getGroup(); }
  group = decodeURIComponent(group);
  group = group.replace(/[^A-Z0-9]/ig,'');
  group = group.substring(0,10);
  if ($('#'+group).length) { setGroup(group); } else { setGroup(getGroup()); }
  return false;
}
function setGroup(group) {
  if (group == '') { return false; }
  if ($('#'+group).length) {
    $('.group-option').removeClass('active');
    $('#group').val(group);
    $('#'+group).addClass('active');
  }
  return false;
}
function getGroup() {
  return $('#group').val();
}
function selectSearchGroup(group, doSearch) {
  setGroup(group);
  // if (doSearch) { gotoPage(1); }
  if (doSearch) { $('#search_form_page').submit(); }
}


var searchStringChanged = false;

/*
document.getElementById('search-terms').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;
    if ( charCode == '13' ) { startSearch(1); }
}
*/
function gotoPage(page) {
  searchOnChange();
  startSearch(page);
  return false;
}
function searchOnChange() {
  searchStringChanged = true;
  // startSearch(1);
  return false; // prevent default
}

function startSearch(page) {
  page = parseInt(page);
  if (page <= 0) { page = 1; }
  var offset = (page-1) * getSearchLimit();
  var getAll = 0;
  if (searchStringChanged == false) { return; }
  searchStringChanged = false;
  var group = getGroup();
  var siteName = 'i14y';
  if (getGroup() == 'videos') { siteName = 'video'; }
  var searchSite = 'beta.tsp';
  if (getGroup() == 'forms') { searchSite = 'beta.tsp.forms'; }
  if (getGroup() == 'plan-news') { searchSite = 'beta.tsp.plan-news'; }
  if (getGroup() == 'bulletins') { searchSite = 'beta.tsp.bulletins'; }
  clearResultDivs();
  var qs = $('#search-terms').val();
  inlineUSAsearch('all', 'search-status', searchSite, siteName, qs, getAll, offset, searchCallback);
  return false; // prevent default
}

function unsetResultString() {
  $('#results-count').html('');
  $('#results-terms').html('');
}
function setResultString(cnt, qs) {
  $('#results-count').html(cnt);
  $('#results-terms').html(qs);
  if (cnt == 1) {
    $('#formsResourcesSpan').text('form/resource');
    $('#bulletinsResourcesSpan').text('bulletin');
  } else {
    $('#formsResourcesSpan').text('forms and resources');
    $('#bulletinsResourcesSpan').text('bulletins');
  }
}
function clearResultDivs() {
  unsetResultString();
  $('#results-count-block').addClass('hide');
  $('#best-bets').addClass('hide');
  $('#results-best-bets').html('');
  $('#web-results').addClass('hide');
  $('#results-web-results').html('');
  $('#pagination').addClass('hide');
  $('#pagination-block').html('');
}
function showResultDivs(set) {
  $('#results-count-block').removeClass('hide');
  if (set == 'best-bets') {
    $('#best-bets').removeClass('hide');
  }
  if (set == 'web') {
    $('#web-results').removeClass('hide');
  }
  if (set == 'pagination') {
    $('#pagination').removeClass('hide');
  }
}
function cleanSnippet(snippet) {
  if (snippet == null) { return; }
  var str = snippet.replace(/[\ue000]/g, '');
  str = str.replace(/[\ue001]/g, '');
  return str;
}
function formatSnippet(snippet) {
  if (snippet == null) { return; }
  var str = snippet.replace(/[\ue000]/g, '<strong>');
  str = str.replace(/[\ue001]/g, '</strong>');
  return str;
}
function formatDuration(dateStr) {
  var raw_date = new Date(dateStr);
  return flatpickr.formatDate(raw_date, "F j, Y");
}
function oneHitHTML(theHit, hitType) {
  var title = theHit.title;
  var url = theHit.url;
  var snippet = theHit.snippet;
  if (snippet == null) { snippet = ''; }
  if (theHit.description) { snippet = theHit.description; }
  // var pub_date = theHit.publication_date;
  var pub_date = formatDuration(theHit.publication_date);

  var theHTML = $('#hit-web-format').html();
  if (hitType == 'video') { theHTML = $('#hit-video-format').html(); }
  theHTML = theHTML.replace(/TITLE/g, formatSnippet(title));
  theHTML = theHTML.replace(/URL/g, url);
  theHTML = theHTML.replace(/SNIPPET/g, formatSnippet(snippet));
  theHTML = theHTML.replace(/PUBDATE/g, pub_date);
  if (hitType == 'video') {
    theHTML = theHTML.replace(/SOURCE/g, theHit.source);
    theHTML = theHTML.replace(/DURATION/g, theHit.duration);
    theHTML = theHTML.replace(/SRC_THUMBNAIL/g, 'src="'+theHit.thumbnail_url+'"');
    theHTML = theHTML.replace(/src_thumbnail/g, 'src="'+theHit.thumbnail_url+'"');
    theHTML = theHTML.replace(/THUMBNAIL/g, theHit.thumbnail_url);
  }
  return theHTML;
}

function makePaginationLink(page, linkFlag, maxPage) {
  if (page < 1) { return ''; }
  if (page > maxPage) { return ''; }
  if (linkFlag) {
    return '<a href="#" onClick="gotoPage('+page+');">'+page+'</a>'+"\n";
  }
  return '<em>'+page+'</em>'+"\n";
}
function makePrevNextLink(direction, page, maxPage) {
  page = parseInt(page);
  var rel = 'prev';
  if (direction == 'Next') { rel = 'next'; }
  if ((page < 1) || (page > maxPage)) {
    return '<span class="'+ direction.toLowerCase() + '-page disabled">'
        + direction +'</span>'+"\n";
  }
  return '<a rel="'+rel+'" class="'+ direction.toLowerCase()
      +'-page" href="#" onClick="gotoPage('+page+');">'
      + direction +'</a>'+"\n";
}
function buildPaginationBlock(total, page, offset) {
  page = parseInt(page);

  var maxPage = parseInt((total-1) / getSearchLimit())+1;
  var maxLinks = 5;
  var numLinks = 0;
  var paginationBlock = '';
  var str = '';
  paginationBlock += makePrevNextLink('Previous', page-1, maxPage);
  var i = page - parseInt(maxLinks/2);
  if (i > 1) { paginationBlock += makePaginationLink(1, true, maxPage); }
  if (i == 3) { paginationBlock += makePaginationLink(2, true, maxPage); }
  if (i > 3) { paginationBlock += '<span class="gap">...</span>' + "\n"; }
  for (; i < page+maxLinks; i++) {
    str = makePaginationLink(i, (i != page), maxPage);
    paginationBlock += str;
    if (str != '') { numLinks++; }
    if (numLinks >= maxLinks) { break; }
  }
  paginationBlock += makePrevNextLink('Next', page+1, maxPage);
  return paginationBlock;
}
function searchCallback(searchName, returnedJSON, offset) {
  $('#'+'search-message-'+searchName).html('');
  var page = parseInt(offset / getSearchLimit()) + 1;
  if (typeof returnedJSON === 'undefined') { return false; }
  var results;  // JSON block of hits
  var resultsTotal = 0;
  var totalHits = 0;
  var qs = $('#search-terms').val();
  var hitFormat = 'web';
  if (getGroup() == 'videos') {
    console.log(returnedJSON);
    results = returnedJSON.video.results;
    resultsTotal = returnedJSON.video.total;
    totalHits = resultsTotal;
    hitFormat = 'video';
  } else {
    results = returnedJSON.web.results;
    resultsTotal = returnedJSON.web.total;
    totalHits = resultsTotal; //  + returnedJSON.text_best_bets.length;
  }
  var block = '';
  var i;
  setResultString(totalHits, qs);
  if (returnedJSON.text_best_bets) {
    for (i = 0; i < returnedJSON.text_best_bets.length; i++) {
      block += oneHitHTML(returnedJSON.text_best_bets[i], hitFormat);
      $('#results-best-bets').html(block);
    }
    if (block.length > 2) { showResultDivs('best-bets'); }
  }
  if (results) {
    block = '';
    var len = results.length;
    for (i = 0; i < len; i++) {
      block += oneHitHTML(results[i], hitFormat);
      $('#results-web-results').html(block);
      // $('#results-web-results-header').html('Hits '+(offset+1)+'-'+(offset+len));
    }
    showResultDivs('web');
  }
  var pagination = buildPaginationBlock(resultsTotal, page, offset);
  $('#pagination-block').html(pagination);
  showResultDivs('pagination');
  if (typeof addFormModals == 'function') { addFormModals(); }
  return false;
}

function searchPageLoad() {
  var refer = location.pathname;
  if (refer.slice(0, 14) == '/PDF/formspubs') { window.location.href = '/forms'; }
}
