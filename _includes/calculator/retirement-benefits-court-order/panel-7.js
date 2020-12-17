{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
var maxAwards = 6;

panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return true;
};
panelEnter[{{ panelID }}] = function(panel) {
  // for (var i = 1; i <= maxAwards; i++) { buildString(0, '' + i); }
  buildAccountSelect(0);
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

// my functions
// put all the accounts in drop down. We are only called when a number has changed and there is no error
function getpartciv(role) { if ($('#'+role+'civcb').prop('checked')) {console.log('getciv', 'Y', role); return 'Y'; } console.log('getciv', 'N', role); return '';}
function getpartus(role) { if ($('#'+role+'usvcb').prop('checked')) {console.log('getus', 'Y', role); return 'Y'; } console.log('getus', 'N', role); return '';}
function getpartBPA(role) { if ($('#'+role+'BPAcb').prop('checked')) {console.log('getbpa', 'Y', role); return 'Y'; } console.log('getbpa', 'N', role); return '';}
function addToDropDown(dd, value, str) {
  console.log('addToDropDown', {dd}, {value}, {str});
  var newOption = $('<option value="' + value + '" >' + str + '</option>');
  dd.append(newOption);
}
function buildAccountSelect(submit) {
  for (var i = 1; i <= maxAwards; i++) { buildAccountSelectX(submit, i); }
  return true;
}
function buildAccountSelectX(submit, awX) {
  var awardAccountDrop = $("#" + awX + "awardAccount");
  if (awardAccountDrop.length <= 0) { return;}
  console.log('buildAccountSelect', submit, awX, "#" + awX + "awardAccount");
  var value = awardAccountDrop.val();
  awardAccountDrop.empty();
  addToDropDown(awardAccountDrop, 'Select', 'Select One', '');
  // var newOption = $('<option value="Select" >Select One</option>');
  // awardAccountDrop.append(newOption);
  var partName = $.trim($('#partfullname').val());
  var payName = $.trim($('#payfullname').val());
  buildAccountSelectAddAccounts(submit, 'part', partName, awardAccountDrop);
  buildAccountSelectAddAccounts(submit, 'pay', payName, awardAccountDrop);
  // awardAccountDrop.val('Select');
  // awardAccountDrop.trigger("chosen:updated");
  awardAccountDrop.val(value);
  awardAccountDrop.trigger("chosen:updated");
  return;
}
function buildAccountSelectAddAccounts(submit, role, name, dd) {
  var acct;
  var value;
  var str;
  var usePayee = $('#receiveBoth').prop('checked') && $('#payeePartYes').prop('checked');
  if ((role == 'part') || (usePayee)) {
    if (getpartciv(role) == 'Y') {
      acct = $.trim($('#'+role+'civacctNum').prop('placeholder'));
      value = role + ',' + acct + ',Civ';
      str = name + ', Civ '+ acct;
      addToDropDown(dd, value, str);
    }
    if (getpartus(role) == 'Y') {
      acct = $.trim($('#'+role+'usvacctNum').prop('placeholder'));
      value = role + ',' + acct + ',US';
      str = name + ', US '+ acct;
      addToDropDown(dd, value, str);
    }
    if (getpartBPA(role) == 'Y') {
      acct = $.trim($('#'+role+'BPAacctNum').prop('placeholder'));
      value = role + ',' + acct + ',BPA';
      str = name + ', BPA ' + acct;
      addToDropDown(dd, value, str);
    }
  }
}

function buildStrings(submit) {
  for (var aw = 1; aw <= maxAwards; aw++) { buildString(submit, aw); }
}
function buildString(submit, aw) {
  console.log('buildString called', submit, aw);
}

-->
</script>
