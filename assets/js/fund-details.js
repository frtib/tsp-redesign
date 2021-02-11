function initFundTab() {
  var tabs = [ 'summary', 'performance-and-risks', 'composition', 'fees'];
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

// reset URL to include clicked Tab on fund pages
function fundTabClicked(tabObj, siteTitle) {
  var uri = window.location.toString();
	if (uri.indexOf("?") > 0) { uri = uri.substring(0, uri.indexOf("?")); }
  var new_uri = uri + '?tab='+tabObj.id;  // +'#performance';
  var newTitle = $('#pageTitle').val().trim() + ' ' + tabObj.id + ' | ' + siteTitle;
  window.history.replaceState({}, newTitle, new_uri);
  document.title = newTitle;
  // window.location.href = new_uri;
}
