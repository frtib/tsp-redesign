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
  return panel2Good(false);
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

// too many interconnecitons
function panel2Good(submit) {
  return payeePartGood(submit) & relationshipGood(submit) & receiveGood(submit)
    & partfullnameGood(submit) & payfullnameGood(submit);
}

// my functions
function getPayeePart() {
  if ($('#payeePartYes').prop('checked')) { return 'Yes'; }
  if ($('#payeePartNo').prop('checked')) { return 'No'; }
  return '';
}
function payeePartGood(submit) {
  var payeePart = getPayeePart();
console.log('getPayeePart ', submit, payeePart);
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
  if ($('#relationshipSpouse').prop('checked')) { return 'Spouse'; }
  if ($('#relationshipDependent').prop('checked')) { return 'Dependent'; }
  if ($('#relationshipOther').prop('checked')) { return 'Other'; }
  return '';
}
function relationshipGood(submit) {
  var payeePart = getPayeePart();
  if (payeePart == '') { return clearError('relationship'); }
  var relationship = getRelationship();
  $('#relationshipAYR').html(relationship);

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
  if ($('#receiveOne').prop('checked')) { return 'One'; }
  if ($('#receiveBoth').prop('checked')) { return 'Both'; }
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
  return stringGood2(submit, 0, '', 'partfullname', 'Enter the name of the person whose account will be divided pursuant to this court order.');
}
function payfullnameGood(submit) {
  var name = launderInput('payfullname');
  // set name in various fields
  return stringGood2(submit, 0, '', 'payfullname', 'Enter the name of the person who is the intended recipient of the court order award.');
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
    instruction = 'A court order can require a payment only to the participant’s current or former spouse or to the participant’s dependents. For more information on RBCOs, please review the TSP publication, <a href="/publications/tspbk11.pdf" class="pdf"><em>Court Orders and Powers of Attorney</em></a>.';
  }
  if (flag == 'NoDependent') {
    instruction = 'The online wizard cannot be used to draft a court order awarding funds to a child or dependent. For more information on RBCOs, please review the TSP publication, <a href="/publications/tspbk11.pdf" class="pdf"><em>Court Orders and Powers of Attorney</em></a>.</p>';
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

  $('#partfullname-label').addClass('hide');
  $('#partfullname-glabel').addClass('hide');
  $('#payfullname-label').addClass('hide');
  $('#payfullname-glabel').addClass('hide');
  $('#partfullname-div').addClass('hide');
  $('#payfullname-div').addClass('hide');
  $('#paySSN-outer-div').addClass('hide');
  $('#payAccountTypeDiv').addClass('hide');


  if (flag == 'Both') {
    $('#partfullname-label').removeClass('hide');
    $('#payfullname-label').removeClass('hide');
    $('#partfullname-div').removeClass('hide');
    $('#payfullname-div').removeClass('hide');
    $('#progressTrack3').html('Party 1');
    $('#progressTrack4').html('Party 2');
    $('#payAccountTypeDiv').removeClass('hide');
  }
  if (flag == 'One') {
    $('#partfullname-glabel').removeClass('hide');
    $('#payfullname-glabel').removeClass('hide');
    $('#partfullname-div').removeClass('hide');
    $('#payfullname-div').removeClass('hide');
    $('#progressTrack3').html('Participant');
    $('#progressTrack4').html('Payee');
    $('#paySSN-outer-div').removeClass('hide');
    $('#payPanel-H2').html('Contact information');
  }
}
-->
</script>
