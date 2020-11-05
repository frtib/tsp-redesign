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
console.log(' panel good ', acctFlag , addressGood(0, 0, role) , SSNGood(0, 0, role));
  return  acctFlag & addressGood(0, 0, role) & SSNGood(0, 0, role);
};
panelSure[{{ panelID }}] = function(forceValue) {
  var role = 'pay';
  var acctFlag = true;
  if ((getPayeePart() == 'Yes') && (getReceive() == 'Both')) { acctFlag = accountNumbersGood(forceValue, role); }
console.log(' panel sure ', acctFlag , addressGood(0, forceValue, role) , SSNGood(0, forceValue, role));
  return acctFlag & addressGood(0, forceValue, role) & SSNGood(0, forceValue, role);
};

panelEnter[{{ panelID }}] = function(panel) {
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
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
