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
  var flag = true;

  for (var i = maxAwards; i >= 1; i--) {
    if (!awardTextGood(i)) {
      showAwardPanel(i, true);
      flag = false;
    }
  }
  return flag;
};
panelEnter[{{ panelID }}] = function(panel) {
  initAwardDateFields();
  for (var i = 1; i <= maxAwards; i++) { buildString(0, '' + i); }
  buildAccountSelect(0);
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
    panelGood[{{panelID}}](0);
    for (var i = 1; i <= maxAwards; i++) {
      if ($('#'+i+'awardActive').val() != 0) { $('#'+i+'AwardtextAYR').removeClass('hide'); }
        else { $('#'+i+'AwardtextAYR').addClass('hide'); }
    }
    return true;
}

var dateFieldsInited = false;
var date1 = [];
var date2 = [];

function initAwardDateFields() {
  //if (date1[1] == null) { console.log('already init'); return; }
  if (dateFieldsInited) { return; }
  setAwardNumbering();
  dateFieldsInited = true;
  for (var i = 1; i <= maxAwards; i++) {
    date1[i] = flatpickr("#aw"+i+"paymentDate1EntitlementDate", {
      // mode: "range",
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      defaultDate: new Date(),
//      minDate: "06/02/2003",
//      maxDate: "today",
      onChange: function(dObj, dStr) { clearError('dateRange'); }
    });
    date2[i] = flatpickr("#aw"+i+"paymentDate2EntitlementDate", {
      // mode: "range",
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      defaultDate: new Date(),
//      minDate: "06/02/2003",
//      maxDate: "today",
      onChange: function(dObj, dStr) { clearError('dateRange'); }
    });
  }
}

function awardsGood(flag) {
  allowContinue(true, {{panelID}});
  if (flag) {
    for (var i = maxAwards; i >= 1; i--) {
      if (awardActive(i) == false) { continue; }
      if (awardGood(i)) { continue; }
      return false;
    }
  }
  return flag;
}

// my functions
// put all the accounts in drop down. We are only called when a number has changed and there is no error
function addToDropDown(dd, value, str) {
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
  var value = awardAccountDrop.val();
  awardAccountDrop.empty();
  addToDropDown(awardAccountDrop, 'Select', 'Select One', '');
  // var newOption = $('<option value="Select" >Select One</option>');
  // awardAccountDrop.append(newOption);
  var partName = $.trim($('#partfullname').val());
  var payName = $.trim($('#payfullname').val());
  buildAccountSelectAddAccounts(submit, 'part', partName, awardAccountDrop);
  buildAccountSelectAddAccounts(submit, 'pay', payName, awardAccountDrop);
  awardAccountDrop.val('Select');
  awardAccountDrop.trigger("chosen:updated");
  awardAccountDrop.val(value);
  awardAccountDrop.trigger("chosen:updated");
  return;
}
function buildAccountSelectAddAccounts(submit, role, name, dd) {
  var acct;
  var value;
  var str;
  var usePayee = $('#receiveBoth').prop('checked') && $('#payeePartYes').prop('checked');
  var acctType = 'Dual';
  if ((role == 'part') || (usePayee)) {
    /*
    if (isCivilian(role) || isUniformed(role)) {
      if (!isCivilian(role)) { acctType = 'US'; }
      if (!isUniformed(role)) { acctType = 'Civ'; }
      acct = 'xxx';
      acct = getAcctNumber(role, acctType, 'P', false);
      value = role + ',' + acct + ',' + acctType;
      str = name + ', ' + acctType + ', '+ acct;
      addToDropDown(dd, value, str);
    }
    */
    if (isCivilian(role)) {
      acct = 'xxx';
      acct = getAcctNumber(role, 'Civ', 'P', false);
      value = role + ',' + acct + ',Civ';
      str = name + ', Civ, ' + acct;
      addToDropDown(dd, value, str);
    }
    if (isUniformed(role)) {
      acct = 'xxx';
      acct = getAcctNumber(role, 'US', 'P', false);
      value = role + ',' + acct + ',US';
      str = name + ', US, ' + acct;
      addToDropDown(dd, value, str);
    }
    if (isBPA(role)) {
      acct = 'xxx';
      acct = getAcctNumber(role, 'BPA', 'P', false);
      value = role + ',' + acct + ',BPA';
      str = name + ', BPA, ' + acct;
      addToDropDown(dd, value, str);
    }
  }
}

// show last 2 steps
function showEF(id) {
  if ($('#'+id+'awardTypeFixed').prop('checked')) {
    $('#'+id+'hideE').removeClass('hide');
    showHidePaymentDate(2,id);
  }
  $('#'+id+'hideF').removeClass('hide');
}

// true - good string, false - missing something
function buildString(submit, id) {
    var accountGood = awardAccountGood(submit, id);
    if (!accountGood) { return returnBuildString(false, id, '', '', '', '', '', ''); }

    var idAward = id + 'Award';
    var rc = true;
    var fixedFlag = false;
    var percentFlag = false;
    var noEarningsFlag = false;

    var tmp;
    var accountArr = $('#'+id+'awardAccount' ).val().split(',');
    // if (accountArr != null) { accountArr = accountArr.split(','); } else { rc = false; accountArr = ['part', '???', '???']; }
    var partname = $('#partfullname').val();
    var payname = $('#payfullname').val();
    if (accountArr[0] == 'pay') { tmp = payname; payname = partname;  partname = tmp; }
    var showAccountNumbers = $('#showAccountNumbers').val();
    var acctStr = accountArr[0] + 'acctNum';
    if (accountArr[2] == 'BPA') { acctStr += 'BPA'; }
    if (accountArr[2] == 'BPA1') { acctStr += 'BPAciv'; }
    if (accountArr[2] == 'BPA2') { acctStr += 'BPAus'; }
    // var accountNum = ' (' + accountArr[1] + ')';
    var accountType = accountArr[2];
    var accountNum = getAcctNumber(accountArr[0], accountType, showAccountNumbers, true);
    if (showAccountNumbers == 'F') { accountNum = ''; }

    clearError(idAward);
    clearError('awards');

    var account = ' the [xxx] TSP account of ' + partname;
    if (accountGood) {
      // account = ' the [' + $( '#'+id+'awardAccount' ).val() + '] TSP account of ' + partname;
      account = ' the ' + accountTypeString(accountType) + accountNum + ' of ' + partname;
      $('#'+id+'hideA').removeClass('hide');
    } else {
      rc = false;
      $('#'+id+'hideA').addClass('hide');
    }

    var setID = 0;
    var amount = payname + ' is awarded ??? from ';
    var percentage = 'xx';  // note this value is used in the entitlement date section
    if (awardTypeGood(submit, id)) {
      if ($('#'+id+'awardTypeFixed').prop('checked')) {
        setID = 2;
        var fixedAmount = 'xx';
        if (fixedAmountGood(0,id)) { fixedAmount = $.trim($('#'+id+'fixedAmount').val()); }
        amount = payname + ' is awarded ' + CurrencyFormatted(parseFloat(fixedAmount).toFixed(2)) + ' from ';
        fixedFlag = true;
        $('#'+id+'hideB').removeClass('hide');
        showHidePaymentDate(1,id);
        $('#'+id+'hideC').removeClass('hide');
      }
      if ($('#'+id+'awardTypePercent').prop('checked')) {
        setID = 1;
        // if (percentageGood(0,id)) { percentage = $.trim($('#'+id+'percentage').val()); }
        if (percentageGood(0,id)) { percentage = getPosFloat(id+'percentage', 'xx'); }
        amount = payname + ' is awarded ' + parseFloat(percentage).toFixed(2) + '%' + ' of ';
        percentFlag = true;
        $('#'+id+'hideB').removeClass('hide');
        showHidePaymentDate(1,id);
        $('#'+id+'hideC').addClass('hide');
      }
    } else {
      $('#'+id+'hideB').addClass('hide');
      $('#'+id+'hideC').addClass('hide');
      rc = false;
    }

    var earn = '';
    var xferdate = '';
    var osLoans = '';
    if (setID == 0) { return returnBuildString(false, id, idAward, amount, xferdate, account, earn, osLoans); }

    // will test earningsGood() later because of special case where it isnt a factor
    $('#'+id+'hideE').addClass('hide');
    $('#'+id+'hideF').addClass('hide');
    if ($('#'+id+'earningsNo').prop('checked')) {
       noEarningsFlag = true;
       earn = '';
       $('#'+id+'hideF').removeClass('hide');
    } else {
      if ($('#'+id+'earningsLosses').prop('checked')) {
         earn = ". The payee's entitlement should be adjusted for earnings and losses beginning with"
                + " the business day following the entitlement date and ending two business days prior to payment";
        showEF(id);
      }
      if ($('#'+id+'earningsPercent').prop('checked')) {
         var earningsPercentRate = $.trim($('#'+id+'earningsPercentRate').val());
         if (earningsPercentRate == '') { rc = false; earningsPercentRate = 'xx'; } else {
            earningsPercentRate = parseFloat(earningsPercentRate).toFixed(2);
            showEF(id);
         }
         if (earningsPercentRateGood(0,id,1)) {
         } else { rc = false; earningsPercentRate = 'xx'; }
         earn = ". The payee's entitlement should be adjusted for earnings two business days prior to payment at an annual percentage rate of "
                 + earningsPercentRate + "%";
      }
      if ($('#'+id+'earningsPerdiem').prop('checked')) {
         var earningsPerdiemRate = $.trim($('#'+id+'earningsPerdiemRate').val());
         if (earningsPerdiemRate == '') { rc = false; earningsPerdiemRate = 'xx'; } else {
            earningsPerdiemRate = parseFloat(earningsPerdiemRate).toFixed(2);
            showEF(id);
         }
         if (earningsPerdiemRateGood(0,id,1)) {
         } else { rc = false; earningsPerdiemRate = 'xx'; }
         earn = ". The payee's entitlement should be adjusted for earnings two business days prior to payment at a per diem rate of $"
                 + earningsPerdiemRate;
      }
    }

    // fixed uses these two, other case is below
    if ($('#'+id+'paymentDate' + setID + 'Order').prop('checked')) {
      xferdate = ' as of the effective date of this order';
      $('#'+id+'hideC').removeClass('hide');
    }
    if ($('#'+id+'paymentDate' + setID + 'Entitlement').prop('checked')) {
      var paymentDateEntitlementDate = ($('#aw'+id+'paymentDate' + setID + 'EntitlementDate')).val();
      if (paymentDateEntitlementDate == '') { paymentDateEntitlementDate = 'xx/xx/xx'; }
      xferdate = ' as of ' + paymentDateEntitlementDate;
      $('#'+id+'hideC').removeClass('hide');
    }

    if (fixedFlag) {
      includeEarningsGood(submit, id, false);
      // $('#' + id + 'osLoans-div').removeClass('hide');
      if (noEarningsFlag) { xferdate = ''; } else { if (paymentDateGood(submit, id) == false) { rc = false; } }
      // exit early, this fixed is simpler
      if (earningsGood(submit, id) == false) { rc = false; }
      return returnBuildString(rc, id, idAward, amount, xferdate, account, earn, osLoans);
    }

    if ($('#'+id+'osLoanIncluded').prop('checked')) {
      osLoans = ". Any outstanding loan balance should be included when calculating the payee's award";
    }
    if ($('#'+id+'osLoanExcluded').prop('checked')) {
      osLoans = ". Any outstanding loan balance should be excluded when calculating the payee's award";
    }

    if (paymentDateGood(submit, id) == false) { rc = false; }
    if ($('#'+id+'paymentDate' + setID + 'AsOf').prop('checked')) {
      xferdate = ' as of the payment date';
      // don't include earnings in one special case
      earn = '';
      includeEarningsGood(submit, id, true);
      $('#'+id+'hideC').removeClass('hide');
      if (percentage >= 100) {
        osLoans = '';
        $('#' + id + 'osLoans-div').addClass('hide');
      } else {
        if (osLoansGood(submit, id) == false) { rc = false; }
        $('#' + id + 'osLoans-div').removeClass('hide');
      }
      return returnBuildString(rc, id, idAward, amount, xferdate, account, earn, osLoans);
    } else {
      includeEarningsGood(submit, id, false);
      $('#' + id + 'osLoans-div').removeClass('hide');
    }

    if (earningsGood(submit, id) == false) { rc = false; }
    if (osLoansGood(submit, id) == false) { rc = false; }

    return returnBuildString(rc, id, idAward, amount, xferdate, account, earn, osLoans);
}

function buildStrings(submit) {
  for (var aw = 1; aw <= maxAwards; aw++) { buildString(submit, aw); }
}

function returnBuildString(rc, id, idAward, amount, xferdate, account, earn, osLoans) {
    // console.log('returnBuildString', {rc}, {id}, {idAward}, {amount}, {xferdate}, {account}, {earn}, {osLoans});
    var to = ' to Payee Name.';
    to = '';
    // var tmp = 'Award ' + id + ': ' + amount + account + xferdate + earn + osLoans + '.';
    var tmp = '' + amount + account + xferdate + earn + osLoans;
    if (tmp.length > 0) { tmp += '.'; }
    setAwardText(tmp, id);
    // console.log('rBS ' +idAward + ' ' + rc+' '+tmp);

    // allowContinue(rc, 7);
    if (rc) { setAwardGood(id); awardsGood(rc); return true; }
    setAwardBad(id);
    awardsGood(rc);
    return false;
}

function clearAward(id) {
  clearError(id+'award');
  $('#'+id+'awardAccount' ).val('Select');
  clearError(id+'awardAccount');

  $('#'+id+'awardTypeFixed').prop('checked', false);
  $('#'+id+'awardTypePercent').prop('checked', false);
  $('#'+id+'fixedAmount').val('');
  $('#'+id+'percentage').val('');
  clearError(id+'awardType');
  clearError(id+'fixedAmount');
  clearError(id+'percentage');


  $('#'+id+'paymentDate1AsOf').prop('checked', false);
  $('#'+id+'paymentDate1Order').prop('checked', false);
  $('#aw'+id+'paymentDate1Entitlement').prop('checked', false);
  $('#aw'+id+'paymentDate1EntitlementDate').val('');
  $('#aw'+id+'paymentDate1EntitlementDate-div').addClass('hide');
  clearError('aw'+id+'paymentDate1');
  clearError('aw'+id+'paymentDate1EntitlementDate');

  // pickEarnings('N', id);
  $('#'+id+'earningsYes').prop('checked', false);
  $('#'+id+'earningsPercent').prop('checked', false);
  $('#'+id+'earningsPercentRate').val('');
  $('#'+id+'earningsLosses').prop('checked', false);
  $('#'+id+'earningsPerdiem').prop('checked', false);
  $('#'+id+'earningsPerdiemRate').val('');
  $('#'+id+'earningsNo').prop('checked', false);
  clearError(id+'earnings');
  clearError(id+'earningsPercentRate');
  clearError(id+'earningsPerdiemRate');

  $('#'+id+'paymentDate2Order').prop('checked', false);
  $('#'+id+'paymentDate2Entitlement').prop('checked', false);
  $('#aw'+id+'paymentDate2EntitlementDate').val('');
  clearError('aw'+id+'paymentDate2');
  clearError('aw'+id+'paymentDate2EntitlementDate');

  $('#'+id+'osLoanIncluded').prop('checked', false);
  $('#'+id+'osLoanExcluded').prop('checked', false);
  clearError(id+'osLoans');

  setAwardBad(id);
  showAwardPanel(id, 1);
  // $('#'+id+'awardTypeFixed').prop('checked', 'true');
  // pickAwardType('F', id);
  // setAwardText('Award ' + id, id);
  setAwardText('', id);
  // activateAwardDiv(i);
  $('#'+id+'hideA').addClass('hide');
  $('#'+id+'hideB').addClass('hide');
  $('#'+id+'hideC').addClass('hide');
  $('#'+id+'earnings-div').addClass('hide');
  $('#'+id+'hideE').addClass('hide');
  $('#'+id+'hideF').addClass('hide');
}

function setAwardBase(id, show, awardType, fixed, percentage, entitlement, entitlement1Date, entitlement2Date,
          earningsNo, earnings, earningsPercentRate, earningsPerdiemRate, outstanding) {

  // var setID = 0;
  // if (awardType == 'F') { setID = 2; }
  // if (awardType == 'P') { setID = 1; }

  // $('#'+id+'awardAccount').val(accountIdx);
  pickAwardType(awardType, id);
  $('#'+id+'fixedAmount').val(fixed);
  $('#'+id+'percentage').val(percentage);
  pickPaymentDate(1, entitlement, id);
  pickPaymentDate(2, entitlement, id);
  $('#aw'+id+'paymentDate1EntitlementDate').val(entitlement1Date);
  $('#aw'+id+'paymentDate2EntitlementDate').val(entitlement2Date);
  pickEarnings(earnings, id);
  $('#'+id+'earningsPercentRate').val(earningsPercentRate);
  $('#'+id+'earningsPerdiemRate').val(earningsPerdiemRate);
  pickEarnings(earningsNo, id);
  pickOSloans(outstanding, id);

  buildString(1, id);

  showAwardPanel(id, show);
  // $('#' + id + 'Award').removeClass("active");
  $('#' + id + 'Award').click();
  return true;
}

function awardAccordionIsOpen(id) {
  if ($('#'+id+'awardAccount').is(':visible')) { return true; }
  return false;
}

var awardAccordions;

function showAwardPanel(id, flag) {
  if (!awardAccordions) { return false; }
  if (flag) {
    awardAccordions.uncollapseRow(id-1);
  } else {
    awardAccordions.collapseRow(id-1);
  }
  return flag;
}

function showAwardPanelold(id, flag) {
  var e = $('#'+id+'Award_panel_1_tab' );
// $('#'+id).a11yAccordion();
  if (flag) {
//    $('#'+id+'AwardPanel' ).removeClass('hide');
// $('#'+id+'Award_panel_1_tab' ).panelReveal($('#'+id+'Award_panel_1_tab' ));
   if (e.prop('aria-expanded', false)) {
        // e.click();
        e.trigger('click');
        // e.addClass('is-active');
        // $('#'+id+'Award' ).trigger('click');
   }
  } else {
    $('#'+id+'AwardPanel' ).addClass('hide');
   if (e.prop('aria-expanded', true)) {
        // e.click();
        e.trigger('click');
        // e.removeClass('is-active');
        // $('#'+id+'Award' ).trigger('click');
   }
  }
  return flag;
}

function setAwardIdx(id, show, accountIdx, awardType, fixed, percentage, entitlement, entitlement1Date, entitlement2Date,
          earningsNo, earnings, earningsPercentRate, earningsPerdiemRate, outstanding) {

  $('#'+id+'awardAccount option:eq('+accountIdx+')').prop('selected', 'selected');
  return setAwardBase(id, show, awardType, fixed, percentage, entitlement, entitlement1Date, entitlement2Date,
          earningsNo, earnings, earningsPercentRate, earningsPerdiemRate, outstanding);
}

function setAwardVal(id, show, accountIdx, awardType, fixed, percentage, entitlement, entitlement1Date, entitlement2Date,
          earningsNo, earnings, earningsPercentRate, earningsPerdiemRate, outstanding) {

  $('#'+id+'awardAccount').val(accountIdx);
  return setAwardBase(id, show, awardType, fixed, percentage, entitlement, entitlement1Date, entitlement2Date,
          earningsNo, earnings, earningsPercentRate, earningsPerdiemRate, outstanding);
}

function copyAward(i, j) {
  if (i < 1) { return; }
  if (j < 1) { return; }
  if (i > maxAwards) { return; }
  if (j > maxAwards) { return; }
  clearError(i+'award');
  var openFlag = awardAccordionIsOpen(j);

  $('#'+i+'awardAccount' ).val($('#'+j+'awardAccount' ).val());
  clearError(i+'awardAccount');

  if($('#'+j+'awardTypeFixed').prop('checked')) { pickAwardType('F', i); }
  if($('#'+j+'awardTypePercent').prop('checked')) { pickAwardType('P', i); }
  $('#'+i+'fixedAmount').val($('#'+j+'fixedAmount').val());
  $('#'+i+'percentage').val($('#'+j+'percentage').val());
  clearError(i+'awardType');
  clearError(i+'fixedAmount');
  clearError(i+'percentage');

  if($('#'+j+'paymentDate1AsOf').prop('checked')) { pickPaymentDate(1, 'P', i); }
  if($('#'+j+'paymentDate1Order').prop('checked')) { pickPaymentDate(1, 'O', i); }
  if($('#'+j+'paymentDate1Entitlement').prop('checked')) { pickPaymentDate(1, 'E', i); }
  // $('#aw'+i+'paymentDate1EntitlementDate').flatpickr.setDate($('#aw'+j+'paymentDate1EntitlementDate').val());
  $('#aw'+i+'paymentDate1EntitlementDate').val($('#aw'+j+'paymentDate1EntitlementDate').val());
  clearError(i+'paymentDate1');
  clearError('aw'+i+'paymentDate1EntitlementDate');

  if($('#'+j+'earningsNo').prop('checked')) { pickEarnings('N', i); }
  if($('#'+j+'earningsYes').prop('checked')) { pickEarnings('Y', i); }
  if($('#'+j+'earningsPercent').prop('checked')) { pickEarnings('P', i); }
  if($('#'+j+'earningsLosses').prop('checked')) { pickEarnings('L', i); }
  if($('#'+j+'earningsPerdiem').prop('checked')) { pickEarnings('D', i); }
  $('#'+i+'earningsPercentRate').val($('#'+j+'earningsPercentRate').val());
  $('#'+i+'earningsPerdiemRate').val($('#'+j+'earningsPerdiemRate').val());
  clearError(i+'earnings');
  clearError(i+'earningsPercentRate');
  clearError(i+'earningsPerdiemRate');

  if($('#'+j+'paymentDate2Order').prop('checked')) { pickPaymentDate(2, 'O', i); }
  if($('#'+j+'paymentDate2Entitlement').prop('checked')) { pickPaymentDate(2, 'E', i); }
  $('#aw'+i+'paymentDate2EntitlementDate').flatpickr().setDate($('#aw'+j+'paymentDate2EntitlementDate').val());
  clearError(i+'paymentDate2');
  clearError('aw'+i+'paymentDate2EntitlementDate');

  if($('#'+j+'osLoanIncluded').prop('checked')) { pickOSloans('I', i); }
  if($('#'+j+'osLoanExcluded').prop('checked')) { pickOSloans('E', i); }
  clearError(i+'osLoans');

  showAwardPanel(i, openFlag);
  if (!buildString(0, i)) { setAwardText('', i); }
  // if($('#'+j+'AwardPanel').css("display") == 'none') { showAwardPanel(i, 0); } else { showAwardPanel(i, 1); }

}

function awardAccountGood(submit, id) {
  var awardAccount = $('#'+id+'awardAccount').val();
  $('#'+id+'awardAccountAYR').html(awardAccount);
  if ((awardAccount == 'Select') || (awardAccount == null)) {
    if (submit == 0) { return false; }
    return showError(id+'awardAccount', "Select an account from the drop-down list.");
  }
  return clearError(id+'awardAccount');
}

function pickAwardType(flag, id) {
  if (flag == 'P') {
    $('#'+id+'awardTypePercent').prop('checked', true);
    $('#'+id+'fixedAmount-div').addClass('hide');
    $('#'+id+'percentage-div').removeClass('hide');
    $('#'+id+'effectiveDateFixedSpan').addClass('hide');
    $('#'+id+'paymentDate1-div').removeClass('hide');
    $('#'+id+'osLoans-div').removeClass('hide');
  } else {
    clearError(id+'percentage');
    clearError('aw'+id+'paymentDate2EntitlementDate');
  }
  if (flag == 'F') {
    $('#'+id+'awardTypeFixed').prop('checked', true);
    $('#'+id+'percentage-div').addClass('hide');
    $('#'+id+'fixedAmount-div').removeClass('hide');
    $('#'+id+'effectiveDateFixedSpan').removeClass('hide');
    $('#'+id+'paymentDate1-div').addClass('hide');
    $('#'+id+'osLoans-div').addClass('hide');
  } else {
    clearError(id+'fixedAmount');
    clearError('aw'+id+'paymentDate1EntitlementDate');
  }
  // return awardTypeGood(0, id);
  return true;
}

function awardTypeGood(submit, id) {
  if ($('#'+id+'awardTypeFixed').prop('checked')) {
    pickAwardType('F', id);
    clearError(id+'awardType');
    return fixedAmountGood(submit, id);
  }

  if ($('#'+id+'awardTypePercent').prop('checked')) {
    pickAwardType('P', id);
    clearError(id+'awardType');
    return percentageGood(submit, id);
  }

  if (submit) { return showError(id+'awardType', "Choose Award Type."); }
  clearError(id+'awardType');
  return false;
}

function fixedAmountGood(submit, id) {
  var fixedAmount= $.trim($('#'+id+'fixedAmount').val());
  $('#'+id+'lblAYRfixedAmount').html(fixedAmount);
  if (fixedAmount > 0) { includeEarningsGood(submit, id, false); return clearError(id+'fixedAmount'); }
  if (submit) { return showError(id+'fixedAmount', "Dollar amount is required."); }
  clearError(id+'fixedAmount');
  return false;
}

function percentageGood(submit, id) {
  var percentage= $.trim($('#'+id+'percentage').val());
  $('#'+id+'lblAYRpercentage').html(percentage);
  if ((percentage > 0) && (percentage <= 100)) { return clearError(id+'percentage'); }
  if (submit) { return showError(id+'percentage', "Percentage is required."); }
  clearError(id+'percentage');
  return false;
}

function showHidePaymentDate(idx, id) {
  var field = ''+id+'paymentDate' + idx + 'Entitlement';
  if ($('#'+field).prop('checked')) {
    $('#aw'+field +'Date-div').removeClass('hide');
  } else {
    $('#aw'+field +'Date-div').addClass('hide');
  }
  return true;
}
function pickPaymentDate(idx, flag, id) {
  if (flag == 'P') {
    $('#'+id+'paymentDate' + idx + 'AsOf').prop('checked', true);
    $('#'+id+'hideF').removeClass('hide');
  }
  if (flag == 'O') {
    $('#'+id+'paymentDate' + idx + 'Order').prop('checked', true);
  }
  if (flag == 'E') {
    $('#'+id+'paymentDate' + idx + 'Entitlement').prop('checked', true);
  }
  showHidePaymentDate(idx,id);
  // return paymentDateGood(0, id);
  return true;
}

function includeEarningsGood(submit, id, hide) {
  clearError(id+'earnings');
  if (hide) {
    $('#' + id + 'includeEarnings-div').addClass('hide');
    $('#' + id + 'earnings-div').addClass('hide');
    return clearError(id+'includeEarnings');
  }
  $('#' + id + 'includeEarnings-div').removeClass('hide');
  if ($('#'+id+'earningsNo').prop('checked')) {
    $('#'+id+'earnings-div').addClass('hide');
    return clearError(id+'includeEarnings');
  }
  if ($('#'+id+'earningsYes').prop('checked')) {
    $('#'+id+'earnings-div').removeClass('hide');
    return clearError(id+'includeEarnings');
  }
  $('#'+id+'earnings-div').addClass('hide');
  if (submit) { return showError(id+'includeEarnings', 'Select include earnings'); }
  return clearError(id+'includeEarnings');
}

function earningsNoGood(submit, id) {
  var earningsNo = $('#'+id+'earningsNo').val();
  $('#'+id+'lblAYRearnings').html(earningsNo);
  return clearError(id+'earnings');
}

function earningsLossesGood(submit, id) {
  var earningsLosses = $('#'+id+'earningsLosses').val();
  $('#'+id+'lblAYRearnings').html(earningsLosses);
  return clearError(id+'earnings');
}

function earningsPerdiemGood(submit, id) {
  var earningsPerdiem = $('#'+id+'earningsPerdiem').val();
  $('#'+id+'lblAYRearnings').html(earningsPerdiem);
  return earningsPerdiemRateGood(submit, id, 0);
}

function earningsPerdiemRateGood(submit, id) {
  var min = 0.01;
  var max = 1000.0;
  var earningsPerdiemRate = getPosFloat(id+'earningsPerdiemRate', -1);
  $('#'+id+'lblAYRearningsPerdiemRate').html(earningsPerdiemRate);
  // if ((earningsPerdiemRate >= min) && (earningsPerdiemRate <= max)) { return clearError(id+'earningsPerdiemRate'); }
  if (earningsPerdiemRate >= min) { return clearError(id+'earningsPerdiemRate'); }
  if ((submit == 0) && (earningsPerdiemRate < 0)) { return clearError(id+'earningsPerdiemRate'); }
  // return showError(id+'earningsPerdiemRate', "Enter a dollar amount between " + min + " and " + max + ".");
  return showError(id+'earningsPerdiemRate', "Enter a dollar amount greater than " + CurrencyFormatted(min) + ".");
}

function earningsPercentGood(submit, id) {
  var earningsPercent = $('#'+id+'earningsPercent').val();
  $('#'+id+'lblAYRearnings').html(earningsPercent);
  return earningsPercentRateGood(submit, id, 0);
}

function earningsPercentRateGood(submit, id) {
  var earningsPercentRate = getPosFloat(id+'earningsPercentRate', 0.0);
  $('#'+id+'lblAYRearningsPercentRate').html(earningsPercentRate);
  if ((earningsPercentRate > 0) && (earningsPercentRate <= 100)) { return clearError(id+'earningsPercentRate'); }
  if ((submit == 0) && (earningsPercentRate <= 0)) { return clearError(id+'earningsPercentRate'); }
  return showError(id+'earningsPercentRate', "Enter a percentage rate between 1 and 100.");
}

function pickEarnings(flag, id) {
  if (flag == 'N') {
    // $('#'+id+'earningsYes').prop('checked', false);
    $('#'+id+'earningsNo').prop('checked', true);
    $('#'+id+'earningsPercentRate-div').addClass('hide');
    $('#'+id+'earningsPerdiemRate-div').addClass('hide');
    $('#'+id+'earnings-div').addClass('hide');
    $('#'+id+'paymentDate2-div').addClass('hide');
  }
  if (flag == 'Y') {
    // $('#'+id+'earningsNo').prop('checked', false);
    $('#'+id+'earningsYes').prop('checked', true);
    $('#'+id+'earnings-div').removeClass('hide');
    $('#'+id+'paymentDate2-div').removeClass('hide');
  }
  if (flag == 'P') {
    $('#'+id+'earningsPercent').prop('checked', true);
    $('#'+id+'earningsPerdiemRate-div').addClass('hide');
    $('#'+id+'earningsPercentRate-div').removeClass('hide');
    earningsPercentRateGood(0, id);
    clearError(id+'earningsPerdiemRate');
  }
  if (flag == 'D') {
    $('#'+id+'earningsPerdiem').prop('checked', true);
    $('#'+id+'earningsPercentRate-div').addClass('hide');
    $('#'+id+'earningsPerdiemRate-div').removeClass('hide');
    earningsPerdiemRateGood(0, id);
    clearError(id+'earningsPercentRate');
  }
  if (flag == 'L') {
    $('#'+id+'earningsLosses').prop('checked', true);
    $('#'+id+'earningsPercentRate-div').addClass('hide');
    $('#'+id+'earningsPerdiemRate-div').addClass('hide');
    clearError(id+'earningsPerdiemRate');
    clearError(id+'earningsPercentRate');
  }
  // return earningsGood(0, id);
  return true;
}

function earningsGood(submit, id) {
  if (!($('#earningsPercent').prop('checked'))) { clearError('earningsPercentRate'); }
  if (!($('#earningsPerdiem').prop('checked'))) { clearError('earningsPerdiemRate'); }
  if ($('#'+id+'earningsNo').prop('checked')) {
    pickEarnings('N', id);
    return earningsNoGood(submit, id);
  }

  // clearError(id+'earnings');
  if ($('#'+id+'earningsPercent').prop('checked')) {
    clearError(id+'earnings');
    pickEarnings('P', id);
    return earningsPercentGood(submit, id);
  }
  if ($('#'+id+'earningsPerdiem').prop('checked')) {
    clearError(id+'earnings');
    pickEarnings('D', id);
    return earningsPerdiemGood(submit, id);
  }
  if ($('#'+id+'earningsLosses').prop('checked')) {
    clearError(id+'earnings');
    pickEarnings('L', id);
    return earningsLossesGood(submit, id);
  }

  if (submit) { return showError(id+'earnings', "Indicate how the earnings are to be calculated."); }
  clearError(id+'earnings');
  return false;
}

function pickOSloans(flag, id) {
  if (flag == 'I') {
    $('#'+id+'osLoanExcluded').prop('checked', false);
    $('#'+id+'osLoanIncluded').prop('checked', true);
    return clearError(id+'osLoans');
  }
  if (flag == 'E') {
    $('#'+id+'osLoanIncluded').prop('checked', false);
    $('#'+id+'osLoanExcluded').prop('checked', true);
    return clearError(id+'osLoans');
  }
  return true;
}

function osLoansGood(submit, id) {
  if ($('#'+id+'osLoanIncluded').prop('checked')) {
    pickOSloans('I', id);
    return clearError(id+'osLoans');
  }
  if ($('#'+id+'osLoanExcluded').prop('checked')) {
    pickOSloans('E', id);
    return clearError(id+'osLoans');
  }

  if (submit) { return showError(id+'osLoans', "Indicate how to handle outstanding loan balances."); }
  clearError(id+'osLoans');
  return false;
}

function paymentDateGood(submit, id) {
  if (!($('#aw'+id+'paymentDate1Entitlement').prop('checked'))) { clearError('aw'+id+'paymentDate1EntitlementDate'); }
  if (!($('#aw'+id+'paymentDate2Entitlement').prop('checked'))) { clearError('aw'+id+'paymentDate2EntitlementDate'); }

  var setID = 0;
  if ($('#'+id+'awardTypeFixed').prop('checked')) { setID = 2; clearError(id+'paymentDate2'); }
  if ($('#'+id+'awardTypePercent').prop('checked')) { setID = 1; clearError(id+'paymentDate1'); }
  if (setID == 0) { return awardTypeGood(submit, id); }

  if ($('#'+id+'paymentDate' + setID + 'AsOf').prop('checked')) {
    pickPaymentDate(setID, 'P', id);
    return paymentDateAsOfGood(setID, submit, id);
  }
  if ($('#'+id+'paymentDate' + setID + 'Order').prop('checked')) {
    pickPaymentDate(setID, 'O', id);
    return paymentDateOrderGood(setID, submit, id);
  }
  if ($('#'+id+'paymentDate' + setID + 'Entitlement').prop('checked')) {
    pickPaymentDate(setID, 'E', id);
    return paymentDateEntitlementGood(setID, submit, id);
  }

  if (submit) { return showError(id+'paymentDate'+setID, "Entitlement date is required."); }
  clearError(id + 'paymentDate' + setID);
  return false;
}

function paymentDateAsOfGood(setID, submit, id) {
  var paymentDateAsOf = $('#'+id+'paymentDate' + setID + 'AsOf').val();
  $('#'+id+'lblAYRpaymentDate').html(paymentDateAsOf);
  return clearError(id+'paymentDate'+setID);
}

function paymentDateOrderGood(setID, submit, id) {
  var paymentDateOrder = $('#'+id+'paymentDate' + setID + 'Order').val();
  $('#'+id+'lblAYRpaymentDate').html(paymentDateOrder);
  return clearError(id+'paymentDate'+setID);
}

function paymentDateEntitlementGood(setID, submit, id) {
  var paymentDateEntitlement = $('#'+id+'paymentDate' + setID + 'Entitlement').val();
  $('#'+id+'lblAYRearnings').html(paymentDateEntitlement);
  return paymentDateEntitlementDateGood(setID, submit, id);
}

function paymentDateEntitlementDateGood(setID, submit, id) {
  var paymentDateEntitlementDate = $.trim($('#aw'+id+'paymentDate' + setID + 'EntitlementDate').val());
  $('#'+id+'lblAYRpaymentDateEntitlementDate').html(paymentDateEntitlementDate);
  if (paymentDateEntitlementDate.length > 0) { return clearError('aw'+id+'paymentDate' + setID + 'EntitlementDate'); }
  if (submit) { return showError('aw'+id+'paymentDate' + setID + 'EntitlementDate', 'Entitlement date is required.'); }
  clearError('aw'+id+'paymentDate' + setID + 'EntitlementDate');
  return false;
}

function accountTypeString(accType) {
  if (accType == 'Civ') { accType = 'Civilian'; }
  if (accType == 'US') { accType = 'Uniformed Services'; }
  if (accType == 'BPA') { accType = 'Beneficiary Participant'; }
  if (accType == 'BPA1') { accType = 'Beneficiary Participant'; }
  if (accType == 'BPA2') { accType = 'Beneficiary Participant'; }
  return '' + accType + ' TSP account';
}

function awardTextGood(id) {
   if ($('#' + id + 'awardActive').val() == 0)  return true;

   return buildString(1, id);
}
function disableBuildAnotherButton() { $('#buildAnotherButton').prop('disabled',true); }
function enableBuildAnotherButton() { $('#buildAnotherButton').prop('disabled',false); }
function disableDeleteButton1() {
  $('#1deleteButtonDiv').addClass('hide');
  $('#1deleteButton').addClass('hide');
  $('#1deleteButtonDiv').addClass('disabled');
  $('#1deleteButton').prop('disabled',true);
}
function enableDeleteButton1() {
  $('#1deleteButtonDiv').removeClass('hide');
  $('#1deleteButton').removeClass('hide');
  $('#1deleteButtonDiv').removeClass('disabled');
  $('#1deleteButton').prop('disabled',false);
}
function activateAward() {
  var i;
  for (i = 1; i <= maxAwards; i++) {
    if ( $('#' + i + 'awardActive').val() != 1) {
        activateAwardDiv(i);
        return true;
    }
  }
  // showError('awards', 'at max awards');
  // do_alert('maximumAwards');
  confirm('maximumAwards');
  return false;
}
function deactivateAwardXX() {
  var i;
  for (i = maxAwards; i >= 1; i--) {
    if ( $('#' + i + 'awardActive').val() == 1) {
        deactivateAwardDiv(i, i);
        return true;
    }
  }
  showError('awards', 'at 0 awards');
  return false;
}
function activateAwardDiv(id) {
  if (id > maxAwards) { disableBuildAnotherButton(); return false; }
  $('#'+id+'awardActiveDiv').removeClass('hide');
  $('#'+id+'awardActive').val(1);
  if (id > 1) { enableDeleteButton1(); }
  if (id >= maxAwards) {
    // at max awards
    disableBuildAnotherButton();
  }
  clearError('awards');
  setAwardNumbering();
  return true;
}
function deactivateAwardDiv(id, start) {
  if (id <= 2) { disableDeleteButton1(); }
  enableBuildAnotherButton();
  clearError('awards');
  $('#' + id + 'awardActive').val(0);
  $('#' + id + 'awardActiveDiv').addClass('hide');
  clearAward(id);
  setAwardNumbering();
  return true;
}
function setAwardText(txt, id) {
    // $('#'+idAward).val(tmp);
    // $('#'+idAward).prop('value', tmp);
    $('#'+id+'Award'+'text').html(txt);
    // if (txt.includes('???') || (txt.length <= 0)) {
    if ((txt.indexOf('???') >= 0) || (txt.length <= 0)) {
      $('#'+id+'Award'+'textAYR').html('');
      $('#hide'+id+'Award'+'text').val('');
    } else {
      // $('#'+id+'Award'+'textAYR').html(id + '. ' + txt);
      $('#'+id+'Award'+'textAYR').html(txt);
      $('#hide'+id+'Award'+'text').val(id + '. ' + txt);
    }
}
// function setAwardNumbering(id, maxid) {
function setAwardNumbering() {
  var i;
  var j = maxAwards;
  for (i = j; i >= 1; i--) {
    if ($('#' + i + 'awardActive').val() == 0) {
      j--;
    } else {
      $('#'+i+'Award'+'Numbering').html('Award ('+i+' of '+j+')');
// $('#'+i+'Award'+'Numbering').html('Award ('+i+' of '+j+')');
// $('#'+i+'Award'+'Numbering').prop('data-tab-label', 'Award ('+i+' of '+j+')');
// $('#'+i+'Award'+'_panel_1_tab').text('Award ('+i+' of '+j+')');
// alert('#'+i+'Award'+'Numbering'+'   '+'data-tab-label' +'    '+'Award ('+i+' of '+j+')');
    }
  }
}
//    <span id="< % $aw % >AwardToggle">+</span>

function awardActive(id) {
   if ($('#' + id + 'awardActive').val() == 0)  return false;
   return true;
}
function awardGood(id) {
   if ($('#' + id + 'awardActiveDiv').hasClass('complete'))  return true;
   return false;
}

function setAwardGood(id) {
     $('#'+id+'Award'+'Numbering').removeClass("award-bad");
     $('#'+id+'Award'+'Numbering').addClass("award-good");
     $('#'+id+'Award'+'Status').html(" complete");
     $('#'+id+'Award'+'Status').removeClass("award-bad");
     $('#'+id+'Award'+'Status').addClass("award-good");
     $('#'+id+'award'+'ActiveDiv').addClass("complete");
     $('#'+id+'award'+'ULheader').addClass("complete-bg");
     $('#'+id+'award'+'EndDiv').addClass("complete-bg");
}
function setAwardBad(id) {
      $('#'+id+'Award'+'Numbering').removeClass("award-good");
      $('#'+id+'Award'+'Numbering').addClass("award-bad");
      $('#'+id+'Award'+'Status').html(" in progress");
      $('#'+id+'Award'+'Status').removeClass("award-good");
      $('#'+id+'Award'+'Status').addClass("award-bad");
     $('#'+id+'award'+'ActiveDiv').removeClass("complete");
     $('#'+id+'award'+'ULheader').removeClass("complete-bg");
     $('#'+id+'award'+'EndDiv').removeClass("complete-bg");
}

function removeConfirm(id) {
   return confirm('Are you sure you want to delete Award ' + id + '?' + '  This cannot be undone.');
}

function removeAward(id, force, start) {
   if($('#' + id + 'awardActive').val() == 0) { return false; }  // dont remove if inactive

   if (id == maxAwards) {
     // removing end of list
     if (force || removeConfirm(id)) { return deactivateAwardDiv(id, start); }
     return false;
   }

   if($('#' + (id+1) + 'awardActive').val() == 0) {
     if (id == 1) {
        // showError('awards', 'You must have at least one award.');
        // do_alert('minimumAwards');
        confirm('minimumAwards');
        return false;
     }
     // removing last active one
     if (force || removeConfirm(id)) { return deactivateAwardDiv(id, start); }
     return false;
   }

   if (force || removeConfirm(id)) {
     // copy next onto me.
     copyAward(id, id+1);
     // recurse: remove next
     return removeAward(id+1, true, start);
   }

   return false;
}

-->
</script>
