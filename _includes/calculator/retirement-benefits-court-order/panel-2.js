{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return panel2Good(forceValue);
};

panelEnter[{{ panelID }}] = function(panel) {
  getPrimeSettingsPath();
  return panel2Good(false);
}
panelExit[{{ panelID }}] = function(panel) {
  panelGood[{{panelID}}](0);
  testPrimeSettingsPath();
  myInitBeforeUnload();
  return true;
}

// too many interconnecitons
function panel2Good(submit) {
  return payeePartGood(submit) & relationshipGood(submit) & receiveGood(submit)
    & partfullnameGood(submit) & payfullnameGood(submit);
}

// highwater
var cachePath = [];
cachePath["highwater"] = getHighwater();
cachePath["payeePartYes"] = null;
cachePath["payeePartNo"] = null;
cachePath["relationshipSpouse"] = null;
cachePath["relationshipDependent"] = null;
cachePath["receiveOne"] = null;
cachePath["receiveTwo"] = null;
cachePath["PayeePanel"] = 4;
cachePath["PayeePanelState"] = null;
cachePath["PayeePanelError"] = null;
function getPrimeSettingsPath() {
  // console.log('called get');
  cachePath["highwater"] = getHighwater();
  cachePath["payeePartYes"] = $('#payeePartYes').prop('checked');
  cachePath["payeePartNo"] = $('#payeePartNo').prop('checked');
  cachePath["relationshipSpouse"] = $('#relationshipSpouse').prop('checked');
  cachePath["relationshipDependent"] = $('#relationshipDependent').prop('checked');
  cachePath["receiveOne"] = $('#receiveOne').prop('checked');
  cachePath["receiveTwo"] = $('#receiveTwo').prop('checked');
  // cachePath["PayeePanel"] = getIDbyName('{{payeePanel}}');
  cachePath["PayeePanelState"] = getProgressState(cachePath["PayeePanel"]);
  cachePath["PayeePanelError"] = getProgressStateError(cachePath["PayeePanel"]);
  // console.log({cachePath}, )
}
// did user change something important
function anyChangesPath() {
  // console.log('in any changes+',cachePath["PayeePanel"],cachePath["PayeePanelState"],cachePath["PayeePanelError"]);
  if (cachePath["payeePartYes"] != $('#payeePartYes').prop('checked')) { return true; }
  if (cachePath["payeePartNo"] != $('#payeePartNo').prop('checked')) { return true; }
  if (cachePath["receiveOne"] != $('#receiveOne').prop('checked')) { return true; }
  if (cachePath["receiveTwo"] != $('#receiveTwo').prop('checked')) { return true; }
  if (cachePath["relationshipSpouse"] != $('#relationshipSpouse').prop('checked')) { return true; }
  // if (cachePath["relationshiDependent"] != $('#relationshipDependent').attr('checked')) { return true; }
  // console.log('any changes false');
  return false;
}
// set error if we changed something while all was good, return true if we set error
function testPrimeSettingsPath() {
  // console.log("\n\ntest Prime ", $('#payeePartNo').prop('checked'), $('#relationshipDependent').prop('checked'), 'in test',cachePath["PayeePanel"],cachePath["PayeePanelState"],cachePath["PayeePanelError"]);
  if (($('#payeePartNo').prop('checked')) && ($('#relationshipDependent').prop('checked'))) {
    // this setting overrides any other consideration - do not advance!
    setHighwater(2);
    setProgress(2);
    // console.log($('#payeePartNo').prop('checked'), $('#relationshipDependent').prop('checked'), '1 leaving test true');
    return true;
  }
  if (cachePath["PayeePanelError"]) { return false } // console.log('2 leaving test false'); return false; } // somebody else did it
  if (cachePath["PayeePanelState"] != '-done') { return false; } // console.log('3 leaving test false'); return false; } // somebody else's problem
  if (anyChangesPath() == false) {
    // nothing changed
    // unsetProgressStateError(cachePath["PayeePanel"]);
    setHighwater(cachePath["highwater"]);
    // setProgress(2);
    // console.log('4 leaving test false');
    return false;
  }
  // xxx something changed and Payee panel cares about it.
  // something changed and we care about it.
  // setProgressStateError(cachePath["PayeePanel"]);
  // we need to recheck Payee page
  // setHighwater(cachePath["PayeePanel"]);
  setHighwater(2);
  setProgress(2);
  // console.log('5 leaving test true');
  return true;
}

// my functions
function getPayeePart() {
  testPrimeSettingsPath();
  if ($('#payeePartYes').prop('checked')) { return 'Yes'; }
  if ($('#payeePartNo').prop('checked')) { return 'No'; }
  return '';
}
function payeePartGood(submit) {
  var payeePart = getPayeePart();
  $('#payeePartAYR').html(payeePart);
  // console.log('getPayeePart ', submit, payeePart);
  if (payeePart == '') {
    $('#partyRelationship').addClass('hide');
    $('#howDivided').addClass('hide');
    $('#partyNames').addClass('hide');
    if (submit) { return showError('payeePart', "This question is required."); }
    return clearError('payeePart');
  }
  if (payeePart == 'Yes') {
    $('#relationship-label').html("Select the parties' relationship to one another");
  }
  if (payeePart == 'No') {
    $('#relationship-label').html("What is the payee's relationship to the TSP participant?");
  }

  $('#partyRelationship').removeClass('hide');
  // show setting in adjust results?
  return clearError('payeePart');
}

function getRelationship() {
  testPrimeSettingsPath();
  if ($('#relationshipSpouse').prop('checked')) { return 'Spouse'; }
  if ($('#relationshipDependent').prop('checked')) { return 'Dependent'; }
  if ($('#relationshipOther').prop('checked')) { return 'Other'; }
  return '';
}
function relationshipGood(submit) {
  var payeePart = getPayeePart();
  if (payeePart == '') { return clearError('relationship'); }
  var relationship = getRelationship();
  $('#relationshipAYR').html('Payee is ' + relationship);

  if (relationship == '') {
    $('#howDivided').addClass('hide');
    $('#partyNames').addClass('hide');
    if (submit) { return showError('relationship', "Indicate the payee–participant relationship."); }
    return clearError('relationship');
  }

  if (relationship == 'Dependent') {
    setNamesInstruction('NoDependent');
    clearError('relationship');
    return showError('relationship', '');
    return false;
  }
  if (relationship == 'Other') {
    setNamesInstruction('NoOther');
    clearError('relationship');
    return showError('relationship', '');
    return false;
  }
  // must be Spouse
  if (payeePart == 'Yes') {
    $('#howDivided').removeClass('hide');
    $('#partyNames').addClass('hide');
  } else {
    $('#howDivided').addClass('hide');
    $('#partyNames').removeClass('hide');
    setNamesInstruction('No');
  }
  return clearError('relationship');
}

function getReceive() {
  testPrimeSettingsPath();
  if ($('#receiveOne').prop('checked')) { $('#receiveBothAYR').html('No'); return 'One'; }
  if ($('#receiveBoth').prop('checked')) { $('#receiveBothAYR').html('Yes'); return 'Both'; }
  return '';
}
function receiveGood(submit) {
  if ((getPayeePart() != 'Yes') || (getRelationship() != 'Spouse')) { return clearError('receive'); }

  var receive = getReceive();

  if (receive == '') {
    if (submit) { return showError('receive', "This question is required."); }
    return clearError('receive');
  }

  if (receive == 'One') { setNamesInstruction('YesNo'); } else { setNamesInstruction('YesYes'); }
  return clearError('receive');
}

function partfullnameGood(submit, role) {
  var name = launderInput('partfullname');
  // set name in various fields
  return myStringGood2(submit, 0, '', 'partfullname', 'Enter the name of the person whose account will be divided pursuant to this court order.');
}
function payfullnameGood(submit) {
  var name = launderInput('payfullname');
  // set name in various fields
  return myStringGood2(submit, 0, '', 'payfullname', 'Enter the name of the person who is the intended recipient of the court order award.');
  return false;
}

function setNamesInstruction(flag) {
  if (flag == '') {
    $('#partyNames').addClass('hide');
    return;
  }
  var instruction = '';
  $('#namesInstruction').removeClass('hide');
  setPartyNames('off');

  if (flag == 'NoOther') {
    instruction = 'A court order can require a payment only to the participant’s current or former spouse or to the participant’s dependents. For more information on RBCOs, please review the TSP publication, <a href="/publications/tspbk11.pdf" class="pdf" target="_blank"><em>Court Orders and Powers of Attorney</em></a>.';
  }
  if (flag == 'NoDependent') {
    instruction = 'The online wizard cannot be used to draft a court order awarding funds to a child or dependent. For more information on RBCOs, please review the TSP publication, <a href="/publications/tspbk11.pdf" class="pdf" target="_blank"><em>Court Orders and Powers of Attorney</em></a>.</p>';
  }
  if (flag == 'No') {
    $('#namesInstruction').addClass('hide');
    setPartyNames('One');
  }
  if (flag == 'YesNo') {
    instruction = 'You have indicated that both parties are TSP participants but that <strong>only one will receive an award</strong> pursuant to this court order. Please provide the following information:';
    setPartyNames('One');
  }
  if (flag == 'YesYes') {
    instruction = 'You have indicated that both parties are TSP participants and that <strong>both will receive awards</strong> pursuant to this court order. Please provide the following information:';
    setPartyNames('Both');
  }
  $('#namesInstruction').html(instruction);
  $('#partyNames').removeClass('hide');
  return;
}
function setPartyNames(flag) {
  var partName = $('#partfullname').val().trim();
  var payName = $('#payfullname').val().trim();
  $('#partPanel-H2').html('Contact information for '+partName);
  $('#payPanel-H2').html('Contact information for '+payName);
  $('#payPanel-H2-2').html('Information for '+payName);
  $('#partATPanel-H2').html('Attorney information for '+partName);
  $('#payATPanel-H2').html('Attorney information for '+payName);
  $('#QDROPanel-H2').html('Retirement Benefits Specialist (RBS) Information');
  $('#QDROretainer option[value=Participant]').text(partName + ' retained RBS');
  $('#QDROretainer option[value=Payee]').text(payName + ' retained RBS');
  $('#petitioner option[value=part]').text(partName + ' is Petitioner');
  $('#petitioner option[value=pay]').text(payName + ' is Petitioner');
  $('#partfullname-label').addClass('hide');
  $('#partfullname-glabel').addClass('hide');
  $('#payfullname-label').addClass('hide');
  $('#payfullname-glabel').addClass('hide');
  $('#partfullname-div').addClass('hide');
  $('#payfullname-div').addClass('hide');
  $('#paySSN-outer-div').addClass('hide');
  $('#payAccountTypeDiv').addClass('hide');

  var p1 = 'Participant';
  var p2 = 'Payee';
  if (flag == 'Both') {
    p1 = 'Party 1';
    p2 = 'Party 2';
    $('#partfullname-label').removeClass('hide');
    $('#payfullname-label').removeClass('hide');
    $('#partfullname-div').removeClass('hide');
    $('#payfullname-div').removeClass('hide');
    $('#payAccountTypeDiv').removeClass('hide');
  }
  if (flag == 'One') {
    $('#partfullname-glabel').removeClass('hide');
    $('#payfullname-glabel').removeClass('hide');
    $('#partfullname-div').removeClass('hide');
    $('#payfullname-div').removeClass('hide');
    $('#paySSN-outer-div').removeClass('hide');
    $('#payPanel-H2').html('Contact information');
  }
  $('#progressTrack3').html(p1);
  $('#progressTrack4').html(p2);
  $('#part1AYR').html(p1);
  $('#part2AYR').html(p1);
  $('#pay1AYR').html(p2);
  $('#pay2AYR').html(p2);
}
-->
</script>
