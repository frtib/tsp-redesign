
function myPageChange() {
  $('#search-terms').blur();
  return false;
}
function myPage(page) {
  $('#popular-forms').addClass("hide");
  $('#popular-resources').addClass("hide");
  $('#select-forms-topic').val('-1');
  $('.select-forms-div').addClass('hide');
  $('.select-resources-div').addClass('hide');
  gotoPage(page); // from search.js
}

function selectFormsSearchResult(queryBox) {
  $('.select-forms-div').addClass('hide');
  $('.select-resources-div').addClass('hide');
  $('#select-forms-SR').removeClass('hide');
  $('#select-forms-topic').prop('selectedIndex', 0);
  $('#'+queryBox).blur();
  $('#'+queryBox).val('');
}

function inlineSearch(queryBox, resultDiv) {
  search(queryBox, resultDiv, 0, 0);
  selectFormsSearchResult(queryBox);
}

// only call this on page load!
function setTopic(dropdown) {
  var topic = getCleanParm('topic', 30);
  if (topic == '') { topic = getCleanParm('select-forms-topic', 30); }
  if (topic == '') { return false; }
  $('#'+dropdown).val(topic);
  if (($('#'+dropdown).val()) == null) { $('#'+dropdown).val(-1); return false; };
  // $('#'+dropdown).change();
  selectFormsTopic();
  return true;
}

function selectFormsTopic() {
  var val = document.getElementById("select-forms-topic").value;
  // console.log('selectFormsTopic: |' + val + '|');
  resetInline('forms');
  $('.select-forms-div').addClass('hide');
  $('#select-forms-'+val).removeClass("hide");
  $('.select-resources-div').addClass('hide');
  $('#select-resources-'+val).removeClass("hide");
  $('#popular-forms').removeClass("hide");
  $('#popular-resources').removeClass("hide");
}

function showMoreForms(type, formNum) {
  var controlDiv = 'more-'+type+'-'+formNum;
  var contentDiv = 'more-'+type+'-content-'+formNum;
  if ($('#'+controlDiv).hasClass('see-less')) {
    $('#'+contentDiv).addClass('hide');
    $('#'+controlDiv).removeClass('see-less');
    $('#'+controlDiv).html("<span>See more "+type+"</span>");
  } else {
    $('#'+contentDiv).removeClass('hide');
    $('#'+controlDiv).addClass('see-less');
    $('#'+controlDiv).html("<span>See fewer "+type+"</span>");
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
function addOneMatchToList(url, formList, resList, foundList) {
  if (typeof url === 'undefined') { return false; }
  if (url == '') { return false; }
  if (url == null) { return false; }
  var str = getSTRfromURL(url);
  if ($(str).length == 0) { console.log('rejecting '+str, url); return false; }
  if ($(str).length > 0) {
    // console.log(str);
    if (!(str in foundList)) {
      foundList[str] = str;
      if (url.includes('/forms/')) { formList.push(str); return true; }
      if (url.includes('/publications/')) { resList.push(str); return true; }
      if ($(str).hasClass('div-form-class')) { formList.push(str); return true; }
      if ($(str).hasClass('div-resource-class')) { resList.push(str); return true; }
    }
    else { console.log( 'ignoring second '+str); }
  }
  return false;
}
// share-bar callback
// take a list of hits and add it to the form or resource pile.
// maintain the order.  use foundList to avoid duplicates
function addMatchesToList(matches, formList, resList, foundList) {
  if (typeof matches === 'undefined') { return false; }
  if (matches.length <= 0) { return false; }

  var i = -1;
  var j = -1;
  if (matches[0].links) {
    for (j = 0; j < matches.length; j++) {
      addOneMatchToList(matches[j].title_url, formList, resList, foundList);
      if (matches[j].links) {
        for (i = 0; i < matches[j].links.length; i++) {
          addOneMatchToList(matches[j].links[i].url, formList, resList, foundList);
        }
      }
      return true;
    }
  }
  for (i = 0; i < matches.length; i++) {
    addOneMatchToList(matches[i].url, formList, resList, foundList);
  }
  return true;
}
function formsCallback(searchName, result) {
  $('#'+'search-message-'+searchName).html('');
  // console.log('in callback formsCallback()');
  // console.log(result);
  var jsonBlock = result;
  // $('.div-block-class').addClass('hide'); // hide them all
  var formList = [];
  var resList = [];
  var foundList = [];
/*
  addMatchesToList(jsonBlock.text_best_bets, formList, resList, foundList);
  addMatchesToList(jsonBlock.graphic_best_bets, formList, resList, foundList);
  addMatchesToList(jsonBlock.web.results, formList, resList, foundList);

*/
$('#inline-search-forms-results').html('results here');
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
  $("#inline-search-forms-message").html(
    makeFoundMessage(Object.keys(formList).length, Object.keys(resList).length, terms));

  // hide topics, show inline searh copy
  $('#inline-search-forms').removeClass('hide');
  $('#inline-search-resources').removeClass('hide');
  $('.select-forms-div').addClass('hide');
  $('.select-resources-div').addClass('hide');
  return true;
}

function makeFoundMessage(fCnt, rCnt, terms) {
  var forms = 'forms';
  var resources = 'resources';
  if (fCnt == 1) { forms = 'form'; }
  if (rCnt == 1) { resources = 'resource'; }
  var message = "We found <strong>" + fCnt + "</strong> "+ forms+ " and <strong>"
              + rCnt + "</strong> " + resources + " about <strong>" + terms + "</strong>.";
  return message;
}

// reset back to the forms page default
function resetInline(searchName) {
  clearResultDivs();  // search.js
  $('.select-forms-div').removeClass('hide');
  $('.select-resources-div').removeClass('hide');
}
