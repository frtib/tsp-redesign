function initFundTab() {
  var tabs = [ 'summary', 'performance', 'composition', 'fees'];
  var tab = getQueryString('tab');
  if (typeof tab === 'undefined') { tab = 'summary'; }
  if (tabs.includes(tab)) {
    var open = $('#'+tab).attr('aria-expanded');
    if (open == 'false') {
      $('#'+tab).click();
    }
  }
  return false;
}

function fundTabClicked(tabObj) {
  var uri = window.location.toString();
	if (uri.indexOf("?") > 0) { uri = uri.substring(0, uri.indexOf("?")); }
  var new_uri = uri + '?tab='+tabObj.id;  // +'#performance';
  var title = document.title.split('|');
  var newTitle = title[0].split(':')[0].trim() + ': ' + tabObj.id + ' | ' + title[1];
  window.history.replaceState({}, newTitle, new_uri);
  document.title = newTitle;
  // window.location.href = new_uri;
}
