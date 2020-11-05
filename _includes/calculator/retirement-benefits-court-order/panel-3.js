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
  return accountNumbersGood(forceValue, role) & addressGood(0, forceValue, role);
};

panelEnter[{{ panelID }}] = function(panel) {
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
  return true;
}

// my functions
function acctNumGood(submit, prefix, acct) {
console.log('acct num good ', submit, prefix, acct);
  var cb = prefix + acct + 'cb';
  var id = prefix + acct + 'acctNum';
  var val = $('#'+id).val();
  // acct just has numbers
  // val = val.replace(/\D/g,'');
  $('#'+id).val(val);
  // test cb
console.log('#'+id+'-div');
  if ($('#'+cb).prop('checked')) { $('#'+id+'-div').removeClass('hide'); }
    else { $('#'+id+'-div').addClass('hide'); return clearError(id); }
  // test acct
  if (val.length != 13) {
    if (submit) { return showError(id, 'Account number must be 13 characters long.'); }
  }
  return clearError(id);
}
function accountNumbersGood(submit, prefix) {
  var civCB = $('#'+prefix+'civcb').prop('checked');
  var usvCB = $('#'+prefix+'usvcb').prop('checked');
  var BPACB = $('#'+prefix+'BPAcb').prop('checked');
  if (civCB || usvCB || BPACB) { clearError(prefix+'-account-numbers'); }  // at least one cb is on
  dualAccountChecked(submit, prefix, civCB && usvCB);

  var BPA = acctNumGood(submit, prefix, 'BPA');
  var usv = acctNumGood(submit, prefix, 'usv');
  var civ = acctNumGood(submit, prefix, 'civ');
  if (!(civ && usv && BPA)) { return false; }
  if (submit) {
    if (!(civCB || usvCB || BPACB)) { return showError(prefix+'-account-numbers', 'Select at least one account type.'); }
  }

  return clearError(prefix+'-account-numbers');
}
function lastAcctNumChange(prefix, field) {
  $('#'+prefix+'LastAcctChanged').val(prefix+field);
}
// both civ and usv checked?
function dualAccountChecked(submit, prefix, flag) {
  var civAcct = '#' + prefix + 'civacctNum';
  var usvAcct = '#' + prefix + 'usvacctNum';
  var note1 = '#' + prefix + '-dual-accounts1';
  var note2 = '#' + prefix + '-dual-accounts2';
  if (flag) {
    $(note1).removeClass('hide');
    $(note2).removeClass('hide');
    // $(usvAcct).prop("disabled", true);
    var lastAcct = '#' + $('#'+prefix+'LastAcctChanged').val();
    if (lastAcct == civAcct) {
      $(usvAcct).val($(civAcct).val());
      $(usvAcct).attr('data-store', $(civAcct).val());
      // $(usvAcct).attr('data-store', $(civAcct).attr('data-store').toString());
      setPlaceholder(usvAcct, 13);
    } else {
      $(civAcct).val($(usvAcct).val());
      $(civAcct).attr('data-store', $(usvAcct).val());
      // $(civAcct).attr('data-store', $(usvAcct).attr('data-store').toString());
      setPlaceholder(civAcct, 13);
    }
  } else {
    $(note1).addClass('hide');
    $(note2).addClass('hide');
    // $(usvAcct).prop("disabled", false);
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
function fullnameGood(submit, writein, role) { launderInput(role+'fullname'); return stringGood2(submit, writein, role, 'fullname', "Enter fullname.");}
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
console.log('fa checked ', role, $('#'+role+'foreignAddress').prop('checked'));
  if ($('#'+role+'foreignAddress').prop('checked')) {
   clearError(role+'street1'); clearError(role+'city');
   clearError(role+'state'); clearError(role+'zip');
   clearWriteIn(role+'street1'); clearWriteIn(role+'city');
   clearWriteIn(role+'state'); clearWriteIn(role+'zip');
   return fcountrylistGood(submit, writein, role) & fcountryGood(submit, writein, role) & fcityGood(submit, writein, role) & fpostalGood(submit, writein, role) & fstreetGood(submit, writein, role);
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

/*
function getCityState(role) { var rc = '';
 if ($('#'+role+'foreignAddress').prop('checked')) { rc = $('#'+role+'fcity').val() + ' ' + $('#'+role+'fpostal').val(); } else { var state = $('#'+role+'state').val(); if (state == 'Select') { state = ''; } rc = $('#'+role+'city').val() + ' ' + state + ' ' + $('#'+role+'zip').val(); } return rc.trim();}
function getAddressString(role) { var rc = '';
 if ($('#'+role+'foreignAddress').prop('checked')) { rc = $('#'+role+'fstreet').val(); rc += '<BR>' + getCityState(role); rc += '<BR>' + $('#'+role+'fcountry').val(); } else { rc = $('#'+role+'street1').val(); rc += '<BR>' + getCityState(role); } return rc.trim();}
pickAddressType('part');
*/
-->
</script>
