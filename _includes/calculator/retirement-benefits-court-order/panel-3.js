{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  var role = 'part';
  return accountNumbersGood(forceValue, role) & addressGood(0, 0, role);
};
panelSure[{{ panelID }}] = function(forceValue) {
  var role = 'part';
  var writein = addressGood(0, forceValue, role);
  if (!writein) {
    // leaving with gold inputs
    showWarningModal(0, 1, 0);
  }
  return accountNumbersGood(forceValue, role) & addressGood(0, forceValue, role);
};

panelEnter[{{ panelID }}] = function(panel) {
  getPrimeSettingsPart();
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
  panelGood[{{panelID}}](0);
  testPrimeSettingsPart();
  return true;
}

var showSSNwarning = true;
var showAddressWarning = true;
var showCourtWarning = true;
var showQDROinfo = true;
function showWarningModal(ssn, address, court) {
  // console.log('showWarningModal', {ssn}, {showSSNwarning}, {address}, {showAddressWarning}, {court}, {showCourtWarning});
  var rc = false;
  if (ssn && showSSNwarning) {
    $('#writeinSSN').removeClass('hide');
    showSSNwarning = false;
    rc = true;
  } else {
    $('#writeinSSN').addClass('hide');
  }
  if (address && showAddressWarning) {
    $('#writeinAddress').removeClass('hide');
    showAddressWarning = false;
    rc = true;
  } else {
    $('#writeinAddress').addClass('hide');
  }
  if (court && showCourtWarning) {
    $('#writeinCourt').removeClass('hide');
    showCourtWarning = false;
    rc = true;
  } else {
    $('#writeinCourt').addClass('hide');
  }
  // console.log('showWarningModal', {ssn}, {showSSNwarning}, {address}, {showAddressWarning}, {court}, {showCourtWarning}, {rc});
  if (rc) {
    $('#write-in').modal('show');
    return true;
  }
  return false;
}
function showQDROModal(qdro) {
  var rc = false;
  if (qdro) {
    // showQDROinfo = false;
    rc = true;
  }
  if (rc) {
    $('#rbs-info').modal('show');
    return true;
  }
  return false;
}
function generatePDFmodal() {
  $('#generate-pdf').modal('show');
  return true;
}

var cachePart = [];
cachePart["highwater"] = getHighwater();
cachePart["partcivilian"] = null;
cachePart["partuniformed"] = null;
cachePart["partBPA"] = null;
cachePart["AwardPanel"] = 7;
cachePart["AwardPanelState"] = null;
cachePart["AwardPanelError"] = null;
function getPrimeSettingsPart() {
  cachePart["highwater"] = getHighwater();
  cachePart["partcivilian"] = $('#partcivilian').prop('checked');
  cachePart["partuniformed"] = $('#partuniformed').prop('checked');
  cachePart["partBPA"] = $('#partBPA').prop('checked');
  // cachePart["AwardPanel"] = getIDbyName('Award');
  cachePart["AwardPanelState"] = getProgressState(cachePart["AwardPanel"]);
  cachePart["AwardPanelError"] = getProgressStateError(cachePart["AwardPanel"]);
}
// did user change something important
function anyChangesPart() {
  if (cachePart["partcivilian"] != ($('#partcivilian').prop('checked'))) { return true; }
  if (cachePart["partuniformed"] != ($('#partuniformed').prop('checked'))) { return true; }
  if (cachePart["partBPA"] != ($('#partBPA').prop('checked'))) { return true; }
  return false;
}
// set error if we changed something while all was good, return true if we set error
function testPrimeSettingsPart() {
  if (cachePart["AwardPanelError"]) { return false; }
  // somebody else did it
  if (cachePart["AwardPanelState"] != '-done') { return false; }
  // somebody else's problem
  if (anyChangesPart() == false) {
    // nothing changed
    // unsetProgressStateError(cachePart["AwardPanel"]);
    setHighwater(cachePart["highwater"]);
    setProgress(3);
    return false;
  }
  // something changed and Awards panel cares about it.
  // setProgressStateError(cachePart["AwardPanel"]);
  // we need to recheck Awards page
  // setHighwater(cachePart["AwardPanel"]);
  setHighwater({{panelID}});
  setProgress(3);
  return true;
}


// my functions
function acctNumGood(submit, prefix, acct, showFlag) {
  var id = prefix + acct + 'acctNum';
  var val = $('#'+id).val();
  // $('#'+id+'AYR').html($('#'+id).attr('data-store'));
  $('#'+id+'AYR').html($('#'+id).val());

  // acct just has numbers
  // val = val.replace(/\D/g,'');
  $('#'+id).val(val);
  if (showFlag) {
    $('#'+id+'-div').removeClass('hide');
    $('#'+id+'AYR-row').removeClass('hide');
  } else {
    $('#'+id+'AYR-row').addClass('hide');
    $('#'+id+'-div').addClass('hide');
    return clearError(id);
  }
  // test acct
  if (val.length != 13) {
    if (submit) { return showError(id, 'Account number must be 13 characters long.'); }
  }
  return clearError(id);
}
function isCivilian(role) { return ($('#'+role+'civilian').prop('checked')); }
function isUniformed(role) { return ($('#'+role+'uniformed').prop('checked')); }
function isBPA(role) { return ($('#'+role+'BPA').prop('checked')); }
function getAcctNumber(role, BPA, redact, paren) {
  if (redact == 'F') { return ''; } // Full redact
  var acctType = '';
  if (BPA == 'BPA') { acctType = 'BPA'; }
  // if (BPA == 'BPA1') { acctType = 'BPA'; }
  // if (BPA == 'BPA2') { acctType = 'BPA'; }
  var acct = '';
  var field = '#'+role+acctType+'acctNum';
  // console.log('getAcctNumber', {role}, {BPA}, {redact}, {field}, {paren});
  if (redact == 'A') { acct = $.trim($(field).attr('data-store')); }  // show All
  if (redact == 'P') { acct = $.trim($(field).val()); }  // Partial redact
  if (paren) { return " (" + acct + ")"; }
  return acct;
}
function accountNumbersGood(submit, prefix) {
  // console.log('accountNumbersGood(', {submit}, {prefix},')');
  if (prefix == 'part') { testPrimeSettingsPart(); } else { testPrimeSettingsPay(); }
  var civCB = isCivilian(prefix);
  var usvCB = isUniformed(prefix);
  var BPACB = isBPA(prefix);
  if (civCB || usvCB || BPACB) { clearError(prefix+'-account-numbers'); }  // at least one cb is on
  var label = 'Account number';
  if (civCB) { label = 'Civilian account number'; }
  if (usvCB) { label = 'Uniformed Services account number'; }
  if (civCB && usvCB) { label = 'Civilian and Uniformed Services account number'; }
  $('#'+prefix+'acctNum-label').html(label + ':');
  dualAccountChecked(submit, prefix, civCB && usvCB);

  var BPA = acctNumGood(submit, prefix, 'BPA', BPACB);
  var both = acctNumGood(submit, prefix, '', civCB || usvCB);
  if (!(both && BPA)) { return false; }
  if (submit) {
    if (!(civCB || usvCB || BPACB)) { return showError(prefix+'-account-numbers', 'Select at least one account type.'); }
  }

  return clearError(prefix+'-account-numbers');
}

// both civ and usv checked?
function dualAccountChecked(submit, prefix, flag) {
  var acct = '#' + prefix + 'acctNum';
  var note = '#' + prefix + '-dual-account-info-box';
  if (flag) {
    $(note).removeClass('hide');
  } else {
    $(note).addClass('hide');
  }
  return flag;
}

function toggleAddress(prefix) {
  var foreign = $('#'+prefix+'foreignAddress').prop('checked');
  if (foreign) {
    $('#'+prefix+'-address-domestic').addClass('hide');
    $('#'+prefix+'-address-foreign').removeClass('hide');
  } else {
    $('#'+prefix+'-address-domestic').removeClass('hide');
    $('#'+prefix+'-address-foreign').addClass('hide');
  }
  return foreign;
}

function myStringGood2(submit, writein, prefix, id, errorMsg) {
  var rc = stringGood2(submit, writein, prefix, id, errorMsg);
  if (rc) { $('#'+prefix+id+'AYR').html( $('#'+prefix+id).val()); }
  return rc;
}

function street1Good(submit, writein, role) { launderInput(role+'street1'); return stringGood2(submit, writein, role, 'street1', "Enter street address.");}
function cityGood(submit, writein, role) { launderInput(role+'city'); return stringGood2(submit, writein, role, 'city', "Enter city.");}
function stateGood(submit, writein, role) { launderInput(role+'state'); return ddGood2(submit, writein, role, 'state', "Enter state.");}
function zipGood(submit, writein, role) { launderInput(role+'zip'); return stringGood2(submit, writein, role, 'zip', "Enter 5 digit zip code.");}
function phoneNumGood(submit, writein, role) {
  var myID = role + 'phoneNum';
  var phoneNum = launderInput(myID);
  var errorMsg = "Enter Phone Number."; $('#lblAYR'+myID).html('');
  if (writein) { clearWriteIn(myID); }
  if (phoneNum.length > 0) { $('#lblAYR'+myID).html(phoneNum + ' (T)'); return clearError(myID); }
  if (writein) { showWriteIn(myID, ''); }  // if (writein) { showWriteIn(myID, errorMsg); }
  if (submit) { return showError(myID, errorMsg); }
  return clearError(myID);
}
function faxNumGood(submit, writein, role) {
  var myID = role + 'faxNum';
  var faxNum = launderInput(myID);
  var errorMsg = "Enter Fax Number.";
  $('#lblAYR'+myID).html('');
  if (writein) { clearWriteIn(myID); }
  if (faxNum.length > 0) { $('#lblAYR'+myID).html(faxNum + ' (F)'); return clearError(myID); }
  if (writein) { showWriteIn(myID, ''); }  // if (writein) { showWriteIn(myID, errorMsg); }
  if (submit) { return showError(myID, errorMsg); }
  return clearError(myID);
}
function fullnameGood(submit, writein, role) { launderInput(role+'fullname'); return myStringGood2(submit, writein, role, 'fullname', "Enter fullname.");}
function lawfirmGood(submit, writein, role) { launderInput(role+'lawfirm'); return stringGood2(submit, writein, role, 'lawfirm', "Enter lawfirm.");}
function jurisdictionGood(submit, writein, role) { launderInput(role+'jurisdiction'); return stringGood2(submit, writein, role, 'jurisdiction', "Enter jurisdiction.");}
function licenseGood(submit, writein, role) {
  launderInput(role+'license');
  // ATjurisdictionGood(submit, writein, role);
  return stringGood2(submit, writein, role, 'license', "Enter license.");
}
function ATjurisdictionGood(submit, writein, role) { if ($.trim($('#'+role+'license').val()) == '') { return clearError(role+'jurisdiction'); } if ($('#'+role+'LawyerNo').attr('checked')) { return clearError(role+'jurisdiction'); } return ddGood(submit, writein, role, 'jurisdiction', "Select the jurisdiction for the bar license number.");}
function fstreetGood(submit, writein, role) { launderInput(role+'fstreet'); return stringGood2(submit, writein, role, 'fstreet', "Enter street address.");}
function fpostalGood(submit, writein, role) { launderInput(role+'fpostal'); return stringGood2(submit, writein, role, 'fpostal', "Enter Postal Code.");}
function fcityGood(submit, writein, role) { launderInput(role+'fcity'); return stringGood2(submit, writein, role, 'fcity', "Enter city.");}
function fcountryGood(submit, writein, role) { launderInput(role+'fcountry'); return stringGood2(submit, writein, role, 'fcountry', "Enter country.");}
function fcountrylistGood(submit, writein, role) { launderInput(role+'fcountrylist'); return ddGood(submit, writein, role, 'fcountrylist', "Enter country.");}
function pickCountry(role) {
  var choice = $('#'+role+'fcountrylist :selected').text();
  if (choice == 'Other') { $('#'+role+'fcountry').removeClass('hide'); }
    else { $('#'+role+'fcountry').addClass('hide'); }
  // get picked value.
  // if other show, else hide
  return fcountryGood(0, 0, role);
  // what to do about 'other value in pdf code?
  $('#'+role+'fcountry').val($('#'+role+'fcountrylist :selected').text());
  return true;
}

function addressGood(submit, writein, role) {
  phoneNumGood(0, 0, role) & faxNumGood(0, 0, role);
  // for AYR $('#lblAYR'+role+'Address').html(getAddressString(role));
  $('#lblAYR'+role+'license').html($('#'+role+'license').val());
  // alert('#lblAYR'+role+'Address' + ' | ' + getAddressString(role));
  if ($('#'+role+'foreignAddress').prop('checked')) {
   clearError(role+'street1'); clearError(role+'city');
   clearError(role+'state'); clearError(role+'zip');
   clearWriteIn(role+'street1'); clearWriteIn(role+'city');
   clearWriteIn(role+'state'); clearWriteIn(role+'zip');
   // return fcountrylistGood(submit, writein, role) & fcountryGood(submit, writein, role) & fcityGood(submit, writein, role) & fpostalGood(submit, writein, role) & fstreetGood(submit, writein, role);
   return fcountrylistGood(submit, writein, role) & fcityGood(submit, writein, role)
          & fpostalGood(submit, writein, role) & fstreetGood(submit, writein, role);
  } else {
    clearError(role+'fstreet');
    clearError(role+'fpostal');
    clearError(role+'fcity');
    clearError(role+'fcountry');
    clearError(role+'fcountrylist');
    clearWriteIn(role+'fstreet');
    clearWriteIn(role+'fpostal');
    clearWriteIn(role+'fcity');
    clearWriteIn(role+'fcountry');
    clearWriteIn(role+'fcountrylist');
    return zipGood(submit, writein, role) & stateGood(submit, writein, role) & cityGood(submit, writein, role) & street1Good(submit, writein, role);
  }
  return false;
}

function getCityState(role) { var rc = '';
 if ($('#'+role+'foreignAddress').prop('checked')) { rc = $('#'+role+'fcity').val() + ' ' + $('#'+role+'fpostal').val(); } else { var state = $('#'+role+'state').val(); if (state == 'Select') { state = ''; } rc = $('#'+role+'city').val() + ' ' + state + ' ' + $('#'+role+'zip').val(); } return rc.trim();}
function getAddressString(role) { var rc = '';
 if ($('#'+role+'foreignAddress').prop('checked')) { rc = $('#'+role+'fstreet').val(); rc += '<BR>' + getCityState(role); rc += '<BR>' + $('#'+role+'fcountry').val(); } else { rc = $('#'+role+'street1').val(); rc += '<BR>' + getCityState(role); } return rc.trim();}
-->
</script>
