{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  var role = 'pay';
  var acctFlag = true;
  if ((getPayeePart() == 'Yes') && (getReceive() == 'Both')) { acctFlag = accountNumbersGood(forceValue, role); }
  // console.log(' panel good ', acctFlag , addressGood(0, 0, role) , SSNGood(0, 0, role));
  return  acctFlag & addressGood(0, 0, role) & SSNGood(0, 0, role);
};
panelSure[{{ panelID }}] = function(forceValue) {
  var role = 'pay';
  var acctFlag = true;
  if ((getPayeePart() == 'Yes') && (getReceive() == 'Both')) { acctFlag = accountNumbersGood(forceValue, role); }
  // console.log(' panel sure ', acctFlag , addressGood(0, forceValue, role) , SSNGood(0, forceValue, role));
  return acctFlag & addressGood(0, forceValue, role) & SSNGood(0, forceValue, role);
};

panelEnter[{{ panelID }}] = function(panel) {
    getPrimeSettingsPay();
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    testPrimeSettingsPay();
    return true;
}

var cachePay = [];
cachePay["highwater"] = getHighwater();
cachePay["paycivilian"] = null;
cachePay["payuniformed"] = null;
cachePay["payBPA"] = null;
cachePay["AwardPanel"] = 7;
cachePay["AwardPanelState"] = null;
cachePay["AwardPanelError"] = null;
function getPrimeSettingsPay() {
  cachePay["highwater"] = getHighwater();
  cachePay["paycivilian"] = $('#paycivilian').prop('checked');
  cachePay["payuniformed"] = $('#payuniformed').prop('checked');
  cachePay["payBPA"] = $('#payBPAcivilian').prop('checked');
  cachePay["AwardPanel"] = getIDbyName('Award');
  cachePay["AwardPanelState"] = getProgressState(cachePay["AwardPanel"]);
  cachePay["AwardPanelError"] = getProgressStateError(cachePay["AwardPanel"]);
}
// did user change something impotant
function anyChangesPay() {
  if (cachePay["paycivilian"] != ($('#paycivilian').prop('checked'))) { return true; }
  if (cachePay["payuniformed"] != ($('#payuniformed').prop('checked'))) { return true; }
  if (cachePay["payBPA"] != ($('#payBPAcivilian').prop('checked'))) { return true; }
  return false;
}
// set error if we changed something while all was good, return true if we set error
function testPrimeSettingsPay() {
  if (cachePay["AwardPanelError"]) { return false; } // somebody else did it
  if (cachePay["AwardPanelState"] != '-done') { return false; } // somebody else's problem
  if (anyChangesPay() == false) {
    // nothing changed
    // unsetProgressStateError(cachePay["AwardPanel"]);
    setHighwater(cachePay["highwater"]);
    setProgress(4);
    return false;
  }
  // something changed and Awards panel cares about it.
  // setProgressStateError(cachePay["AwardPanel"]);
  // we need to recheck Awards page
  setHighwater(cachePay["AwardPanel"]);
  setProgress(4);
  return true;
}

// my functions
function SSNGood(submit, writein, prefix) {
  var payeePart = getPayeePart();
  var receive = getReceive();
  if (payeePart == 'Yes') { clearError(prefix+'SSN'); }
  if (receive == 'Both') { clearError(prefix+'SSN'); }
  var val = $('#'+prefix+'SSN').val();
  if (val.length != 9) {
    // if (writein) { return showWriteIn(prefix+'SSN', 'Enter social security number.'); }
    if (writein) { return showWriteIn(prefix+'SSN', ''); }
    clearWriteIn(prefix+'SSN');
    if (submit) { console.log('error SSN ' + prefix); return showError(prefix+'SSN', 'Social security number must be 9 characters long.'); }
  }

  clearWriteIn(prefix+'SSN');
  return clearError(prefix+'SSN');
}

-->
</script>
