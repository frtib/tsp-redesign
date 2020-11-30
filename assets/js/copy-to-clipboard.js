// added by Dav to include posted text
function copyPlanNewsToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#'+element+'-div').text() + ' ' + $('#'+element+'-posted').text()).select();
  document.execCommand("copy");
  // $temp.remove();

  var tooltip = document.getElementById("tooltip_"+element);
  tooltip.innerHTML = "Copied!";
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#'+element).text()).select();
  document.execCommand("copy");
  // $temp.remove();

  var tooltip = document.getElementById("tooltip_"+element);
  tooltip.innerHTML = "Copied!";
}

function copyDivToClipboard(element) {
  var el = document.getElementById(element);
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  document.execCommand('copy');
  console.log("Contents copied to clipboard.");
  return false;
}

function inputToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#'+element).val()).select();
  document.execCommand("copy");
  // $temp.remove();
}

function inputToClipboardParm(element, inputThis) {
  console.log('inputToClipboardParm ', inputThis, window.location);
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#'+element).val()).select();
  document.execCommand("copy");
  // $temp.remove();
}

// ref: https://codepen.io/shaikmaqsood/pen/XmydxJ

// Using outFunc() with copyToClipboard(element)
function outFunc(element) {
  var tooltip = document.getElementById("tooltip_"+element);
  tooltip.innerHTML = "Copy to clipboard";
}

// ref: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_copy_clipboard2

// header--extended share button
$('#shareModal').on('show.bs.modal', function (e) {
  $('#fullURL').val(window.location.href);
});
