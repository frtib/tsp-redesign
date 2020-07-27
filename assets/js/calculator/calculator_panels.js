// shared code for panel manipulation 1.0
// user must supply calculatorSubmit();

var panelGood = [];
var panelEnter = [];
var panelExit = [];
var panelSure = [];
var panelNames = {};

var maxPanels = 3;
function setMaxPanels(cnt) {
  maxPanels = cnt;
}
var lastPanel = -1;

function getIDbyName(panel) {
  return panelNames[panel];
}

// return true if panel looks good.  call handlers to put panel in good state
// use after submit.
function checkPanel(panel) {
  var myPanel = panel;
  // if (myPanel < 0) myPanel = -myPanel;
  if (panelGood[myPanel]) {     // exist
    if (!panelGood[myPanel](1)) {
      if (panelSure[myPanel]) {   // exist
        if (!panelSure[myPanel](1)) { return false; }
      } else {
        return false;
      }
    }
    // panel is good, we will leave it so use exit strategy
    if (panelExit[myPanel]) {
      if (!panelExit[myPanel](myPanel)) { return false; }
    }
    unsetProgressStateError(myPanel);
  }
  return true;
}

// check panel if its in the warning state
function processWarnLastPanel() {
  var flag = $('#areYouSurebottomButtons'+lastPanel).is(":hidden");
  // console.log(lastPanel, flag);
  if (!flag) { processLastPanel(); }
}

function processLastPanel() {
  processCurrentPanel(lastPanel, 0);
}

// process the panel but not for leaving the panel (because of warning complications)
function processCurrentPanel(panel, submitFlag) {
  var myPanel = panel;
  if (myPanel < 0) myPanel = -myPanel;
  if (panelGood[myPanel]) {     // exist
    if (!panelGood[myPanel](submitFlag)) { return false; }
    if (panelSure[myPanel]) {   // exist
      // console.log('do panelSure');
      if (!doPanelSure(myPanel, 1)) { if (panel > 0) { return false; } }
    }
    // panel is good, we will leave it so use exit strategy
    if (panelExit[myPanel]) { panelExit[myPanel](myPanel); }
    unsetProgressStateError(myPanel);
    return false;
  }
  return true;
}

// always return false to override default HTML behaviors
function processPanel(panel, prev, next, submit) {
  // console.log('processing ' + 'panel ' + panel+ 'prev ' + prev+ 'next ' + next+ 'submit ' + submit);
  var myPanel = panel;
  if (myPanel < 0) myPanel = -myPanel;
  if (panelGood[myPanel]) {     // exist
    // console.log('do panelgood ' + panel);
    if (!panelGood[myPanel](1)) { return false; }
    if (panelSure[myPanel]) {   // exist
      // console.log('do panelSure');
      if (!doPanelSure(myPanel, 1)) { if (panel > 0) { return false; } }
    }
    // panel is good, we will leave it so use exit strategy
    if (panelExit[myPanel]) { panelExit[myPanel](myPanel); }
    unsetProgressStateError(myPanel);
    if (prev) { showPanel(prev); }
    if (next) { showPanel(next); }
    if (submit) {
      if (getProgressError() != 0) {
        alert('You have made changes and must review pages that may have changed.');
        setProgress(myPanel);
        return false;
      }
      // $('#calculatorForm').append('<input type="hidden" name="dav" value="test" /> ');
      // cancelBeforeUnload();
      $(window).off('beforeunload');
      // $('#calculatorForm').submit();
      calculatorSubmit();
    }
    return false;
  }
  return false;
}

function doPanelSure(panel, submit) {
  if (panelSure[panel](submit)) {
    allowContinue(true, panel);
    $('#areYouSurebottomButtons'+panel).hide();
    return true;
  }
  allowContinue(false, panel);
  $('#areYouSurebottomButtons'+panel).show();
  if (typeof calc_alert === 'function') { calc_alert(panel); }
  mySure = false;
  return false;
}

function allowContinue(flag, panel) {
  if (flag) {
    $('#continue'+panel+'OK').show();
    $('#submit'+panel+'OK').show();
    $('#continue'+panel+'NotOK').hide();
    $('#submit'+panel+'NotOK').hide();
  } else {
    $('#continue'+panel+'OK').hide();
    $('#submit'+panel+'OK').hide();
    $('#continue'+panel+'NotOK').show();
    $('#submit'+panel+'NotOK').show();
  }
}

function showPanel(num) {
  // console.log('show panel ' + num);
  for (var i=1; i<=maxPanels; i++) {
    if (i == num) {
      $('#panel-'+i).show();
    } else {
      $('#panel-'+i).hide();
    }
  }
  if (lastPanel >= 0) {
    if (panelExit[lastPanel]) { panelExit[lastPanel](lastPanel); }
  }
  setProgress(num);
  if (panelEnter[num]) { panelEnter[num](num);   gotoAnchor('calculator-top'); }
  lastPanel = num;
  return false;
}
