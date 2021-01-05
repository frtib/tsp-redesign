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
function getpartciv(role) { if ($('#'+role+'civilian').prop('checked')) {console.log('getciv', 'Y', role); return 'Y'; } console.log('getciv', 'N', role); return '';}
function getpartus(role) { if ($('#'+role+'uniformed').prop('checked')) {console.log('getus', 'Y', role); return 'Y'; } console.log('getus', 'N', role); return '';}
function getpartBPA(role) { if ($('#'+role+'BPA').prop('checked')) {console.log('getbpa', 'Y', role); return 'Y'; } console.log('getbpa', 'N', role); return '';}
function addToDropDown(dd, value, str) {
  console.log('addToDropDown', {dd}, {value}, {str});
  var newOption = $('<option value="' + value + '" >' + str + '</option>');
  dd.append(newOption);
}
function getAcctNum(field, syntax) {
  if (syntax == 'F') { return ''; }
  var acct = $.trim($('#'+field+'civacctNum').prop('placeholder'));  // syntax == 'P'
  if (syntax == 'A') { acct = $.trim($('#'+field+'civacctNum').prop('data-store')); }
  return " (" + acct + ")";
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

// true - good string, false - missing something
function buildString(submit, id) {
    var idAward = id + 'Award';
    var rc = true;
    var fixedFlag = false;
    var percentFlag = false;
    var noEarningsFlag = false;

    var tmp;
    var accountArr = $('#'+id+'awardAccount' ).val().split(',');
    var partname = $('#partfullname').val();
    var payname = $('#payfullname').val();
    if (accountArr[0] == 'pay') { tmp = payname; payname = partname;  partname = tmp; }
    var showAccountNumbers = $('#showAccountNumbers').val();
    var acctStr = accountArr[0] + 'acctNum';
    if (accountArr[2] == 'BPA') { acctStr += 'BPA'; }
    if (accountArr[2] == 'BPA1') { acctStr += 'BPAciv'; }
    if (accountArr[2] == 'BPA2') { acctStr += 'BPAus'; }
    // var accountNum = ' (' + accountArr[1] + ')';
    var accountNum = getAcctNum(acctStr, showAccountNumbers);
    if (showAccountNumbers == 'F') { accountNum = ''; }
    var accountType = accountArr[2];

    clearError(idAward);
    clearError('awards');

    var account = ' the [xxx] TSP account of ' + partname;
    var accountGood = awardAccountGood(submit, id);
    if (accountGood) {
      // account = ' the [' + $( '#'+id+'awardAccount' ).val() + '] TSP account of ' + partname;
      account = ' the ' + accountTypeString(accountType) + accountNum + ' of ' + partname;
      $('#'+id+'hideA').show();
    } else {
      rc = false;
      $('#'+id+'hideA').hide();
    }

    var setID = 0;
    var amount = payname + ' is awarded ??? from ';
    var percentage = 'xx';  // note this value is used in the entitlement date section
    if (awardTypeGood(submit, id)) {
      if ($('#'+id+'awardTypeFixed').attr('checked')) {
        setID = 2;
        var fixedAmount = 'xx';
        if (fixedAmountGood(0,id)) { fixedAmount = $.trim($('#'+id+'fixedAmount').val()); }
        amount = payname + ' is awarded ' + CurrencyFormatted(parseFloat(fixedAmount).toFixed(2)) + ' from ';
        fixedFlag = true;
        $('#'+id+'hideB').show();
        $('#'+id+'hideC').show();
      }
      if ($('#'+id+'awardTypePercent').attr('checked')) {
        setID = 1;
        // if (percentageGood(0,id)) { percentage = $.trim($('#'+id+'percentage').val()); }
        if (percentageGood(0,id)) { percentage = getPosFloat(id+'percentage', 'xx'); }
        amount = payname + ' is awarded ' + parseFloat(percentage).toFixed(2) + '%' + ' of ';
        percentFlag = true;
        $('#'+id+'hideB').show();
        $('#'+id+'hideC').hide();
      }
    } else {
      $('#'+id+'hideB').hide();
      $('#'+id+'hideC').hide();
      rc = false;
    }

    var earn = '';
    var xferdate = '';
    var osLoans = '';
    if (setID == 0) { return returnBuildString(false, id, idAward, amount, xferdate, account, earn, osLoans); }

    // will test earningsGood() later because of special case where it isnt a factor
    $('#'+id+'hideE').hide();
    $('#'+id+'hideF').hide();
    if ($('#'+id+'earningsNo').attr('checked')) {
       noEarningsFlag = true;
       earn = '';
       $('#'+id+'hideF').show();
    } else {
      if ($('#'+id+'earningsLosses').attr('checked')) {
         earn = ". The payee's entitlement should be adjusted for earnings and losses beginning with"
                + " the business day following the entitlement date and ending two business days prior to payment";
         $('#'+id+'hideE').show();
         $('#'+id+'hideF').show();
      }
      if ($('#'+id+'earningsPercent').attr('checked')) {
         var earningsPercentRate = $.trim($('#'+id+'earningsPercentRate').val());
         if (earningsPercentRate == '') { rc = false; earningsPercentRate = 'xx'; } else {
            earningsPercentRate = parseFloat(earningsPercentRate).toFixed(2);
           $('#'+id+'hideE').show();
           $('#'+id+'hideF').show();
         }
         if (earningsPercentRateGood(0,id,1)) {
         } else { rc = false; earningsPercentRate = 'xx'; }
         earn = ". The payee's entitlement should be adjusted for earnings two business days prior to payment at an annual percentage rate of "
                 + earningsPercentRate + "%";
      }
      if ($('#'+id+'earningsPerdiem').attr('checked')) {
         var earningsPerdiemRate = $.trim($('#'+id+'earningsPerdiemRate').val());
         if (earningsPerdiemRate == '') { rc = false; earningsPerdiemRate = 'xx'; } else {
            earningsPerdiemRate = parseFloat(earningsPerdiemRate).toFixed(2);
           $('#'+id+'hideE').show();
           $('#'+id+'hideF').show();
         }
         if (earningsPerdiemRateGood(0,id,1)) {
         } else { rc = false; earningsPerdiemRate = 'xx'; }
         earn = ". The payee's entitlement should be adjusted for earnings two business days prior to payment at a per diem rate of $"
                 + earningsPerdiemRate;
      }
    }

    // fixed uses these two, other case is below
    if ($('#'+id+'paymentDate' + setID + 'Order').attr('checked')) {
      xferdate = ' as of the effective date of this order';
      $('#'+id+'hideC').show();
    }
    if ($('#'+id+'paymentDate' + setID + 'Entitlement').attr('checked')) {
      var paymentDateEntitlementDate = ($('#'+id+'paymentDate' + setID + 'EntitlementDate')).val();
      if (paymentDateEntitlementDate == '') { paymentDateEntitlementDate = 'xx/xx/xx'; }
      xferdate = ' as of ' + paymentDateEntitlementDate;
      $('#'+id+'hideC').show();
    }

    if (fixedFlag) {
      $('#' + id + 'includeEarningsSpan').show();
      // $('#' + id + 'outstandingLoanSpan').show();
      if (noEarningsFlag) { xferdate = ''; } else { if (paymentDateGood(submit, id) == false) { rc = false; } }
      // exit early, this fixed is simpler
      if (earningsGood(submit, id) == false) { rc = false; }
      return returnBuildString(rc, id, idAward, amount, xferdate, account, earn, osLoans);
    }

    if ($('#'+id+'osLoansIncluded').attr('checked')) {
      osLoans = ". Any outstanding loan balance should be included when calculating the payee's award";
    }
    if ($('#'+id+'osLoansExcluded').attr('checked')) {
      osLoans = ". Any outstanding loan balance should be excluded when calculating the payee's award";
    }

    if (paymentDateGood(submit, id) == false) { rc = false; }
    if ($('#'+id+'paymentDate' + setID + 'AsOf').attr('checked')) {
      xferdate = ' as of the payment date';
      // don't include earnings in one special case
      earn = '';
      $('#' + id + 'includeEarningsSpan').hide();
      $('#'+id+'hideC').show();
      if (percentage >= 100) {
        osLoans = '';
        $('#' + id + 'outstandingLoanSpan').hide();
      } else {
        if (osLoansGood(submit, id) == false) { rc = false; }
        $('#' + id + 'outstandingLoanSpan').show();
      }
      return returnBuildString(rc, id, idAward, amount, xferdate, account, earn, osLoans);
    } else {
      $('#' + id + 'includeEarningsSpan').show();
      $('#' + id + 'outstandingLoanSpan').show();
    }

    if (earningsGood(submit, id) == false) { rc = false; }
    if (osLoansGood(submit, id) == false) { rc = false; }

    return returnBuildString(rc, id, idAward, amount, xferdate, account, earn, osLoans);
}

function buildStrings(submit) {
  for (var aw = 1; aw <= maxAwards; aw++) { buildString(submit, aw); }
}

function returnBuildString(rc, id, idAward, amount, xferdate, account, earn, osLoans) {
    var to = ' to Payee Name.';
    to = '';
    // var tmp = 'Award ' + id + ': ' + amount + account + xferdate + earn + osLoans + '.';
    var tmp = '' + amount + account + xferdate + earn + osLoans + '.';
    setAwardText(tmp, id);
    //console.log('rBS ' +idAward + ' ' + rc+' '+tmp);

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

  $('#'+id+'awardTypeFixed').attr('checked', false);
  $('#'+id+'awardTypePercent').attr('checked', false);
  $('#'+id+'fixedAmount').val('');
  $('#'+id+'percentage').val('');
  clearError(id+'awardType');
  clearError(id+'fixedAmount');
  clearError(id+'percentage');


  $('#'+id+'paymentDate1AsOf').attr('checked', false);
  $('#'+id+'paymentDate1Order').attr('checked', false);
  $('#'+id+'paymentDate1Entitlement').attr('checked', false);
  $('#'+id+'paymentDate1EntitlementDate').val('');
  clearError(id+'paymentDate1');
  clearError(id+'paymentDate1EntitlementDate');

  pickEarnings('N', id);
  $('#'+id+'earningsYes').attr('checked', false);
  $('#'+id+'earningsPercent').attr('checked', false);
  $('#'+id+'earningsPercentRate').val('');
  $('#'+id+'earningsLosses').attr('checked', false);
  $('#'+id+'earningsPerdiem').attr('checked', false);
  $('#'+id+'earningsPerdiemRate').val('');
  $('#'+id+'earningsNo').attr('checked', false);
  clearError(id+'earnings');
  clearError(id+'earningsPercentRate');
  clearError(id+'earningsPerdiemRate');

  $('#'+id+'paymentDate2Order').attr('checked', false);
  $('#'+id+'paymentDate2Entitlement').attr('checked', false);
  $('#'+id+'paymentDate2EntitlementDate').val('');
  clearError(id+'paymentDate2');
  clearError(id+'paymentDate2EntitlementDate');

  $('#'+id+'osLoansIncluded').attr('checked', false);
  $('#'+id+'osLoansExcluded').attr('checked', false);
  clearError(id+'osLoans');

  setAwardBad(id);
  showAwardPanel(id, 1);
  $('#'+id+'awardTypeFixed').attr('checked', 'true');
  pickAwardType('F', id);
  // setAwardText('Award ' + id, id);
  setAwardText('', id);
  // activateAwardDiv(i);
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
  $('#'+id+'paymentDate1EntitlementDate').val(entitlement1Date);
  $('#'+id+'paymentDate2EntitlementDate').val(entitlement2Date);
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
//    $('#'+id+'AwardPanel' ).show();
// $('#'+id+'Award_panel_1_tab' ).panelReveal($('#'+id+'Award_panel_1_tab' ));
   if (e.attr('aria-expanded', false)) {
        // e.click();
        e.trigger('click');
        // e.addClass('is-active');
        // $('#'+id+'Award' ).trigger('click');
   }
  } else {
    $('#'+id+'AwardPanel' ).hide();
   if (e.attr('aria-expanded', true)) {
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

  $('#'+id+'awardAccount option:eq('+accountIdx+')').attr('selected', 'selected');
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
  if (i > 6) { return; }
  if (j > 6) { return; }
  clearError(i+'award');
  var openFlag = awardAccordionIsOpen(j);

  $('#'+i+'awardAccount' ).val($('#'+j+'awardAccount' ).val());
  clearError(i+'awardAccount');

  if($('#'+j+'awardTypeFixed').attr('checked')) { pickAwardType('F', i); }
  if($('#'+j+'awardTypePercent').attr('checked')) { pickAwardType('P', i); }
  $('#'+i+'fixedAmount').val($('#'+j+'fixedAmount').val());
  $('#'+i+'percentage').val($('#'+j+'percentage').val());
  clearError(i+'awardType');
  clearError(i+'fixedAmount');
  clearError(i+'percentage');

  if($('#'+j+'paymentDate1AsOf').attr('checked')) { pickPaymentDate(1, 'P', i); }
  if($('#'+j+'paymentDate1Order').attr('checked')) { pickPaymentDate(1, 'O', i); }
  if($('#'+j+'paymentDate1Entitlement').attr('checked')) { pickPaymentDate(1, 'E', i); }
  $('#'+i+'paymentDate1EntitlementDate').val($('#'+j+'paymentDate1EntitlementDate').val());
  clearError(i+'paymentDate1');
  clearError(i+'paymentDate1EntitlementDate');

  if($('#'+j+'earningsNo').attr('checked')) { pickEarnings('N', i); }
  if($('#'+j+'earningsYes').attr('checked')) { pickEarnings('Y', i); }
  if($('#'+j+'earningsPercent').attr('checked')) { pickEarnings('P', i); }
  if($('#'+j+'earningsLosses').attr('checked')) { pickEarnings('L', i); }
  if($('#'+j+'earningsPerdiem').attr('checked')) { pickEarnings('D', i); }
  $('#'+i+'earningsPercentRate').val($('#'+j+'earningsPercentRate').val());
  $('#'+i+'earningsPerdiemRate').val($('#'+j+'earningsPerdiemRate').val());
  clearError(i+'earnings');
  clearError(i+'earningsPercentRate');
  clearError(i+'earningsPerdiemRate');

  if($('#'+j+'paymentDate2Order').attr('checked')) { pickPaymentDate(2, 'O', i); }
  if($('#'+j+'paymentDate2Entitlement').attr('checked')) { pickPaymentDate(2, 'E', i); }
  $('#'+i+'paymentDate2EntitlementDate').val($('#'+j+'paymentDate2EntitlementDate').val());
  clearError(i+'paymentDate2');
  clearError(i+'paymentDate2EntitlementDate');

  if($('#'+j+'osLoansIncluded').attr('checked')) { pickOSloans('I', i); }
  if($('#'+j+'osLoansExcluded').attr('checked')) { pickOSloans('E', i); }
  clearError(i+'osLoans');

  showAwardPanel(i, openFlag);
  if (!buildString(0, i)) { setAwardText('', i); }
  // if($('#'+j+'AwardPanel').css("display") == 'none') { showAwardPanel(i, 0); } else { showAwardPanel(i, 1); }

}

function awardAccountGood(submit, id) {
  var awardAccount = $('#'+id+'awardAccount').val();
  $('#lblAYRawardAccount').html(awardAccount);
  if (awardAccount == 'Select') {
    if (submit == 0) { return false; }
    return showError(id+'awardAccount', "Select an account from the drop-down list.");
  }
  return clearError(id+'awardAccount');
}

function pickAwardType(flag, id) {
  if (flag == 'P') {
    $('#'+id+'awardTypePercent').attr('checked', true);
    $('#'+id+'fixedAmountSpan').hide()
    $('#'+id+'percentageSpan').show()
    $('#'+id+'effectiveDateFixedSpan').hide()
    $('#'+id+'effectiveDatePercentSpan').show()
    $('#'+id+'outstandingLoanSpan').show()
  } else {
    clearError(id+'percentage');
    clearError(id+'paymentDate2EntitlementDate');
  }
  if (flag == 'F') {
    $('#'+id+'awardTypeFixed').attr('checked', true);
    $('#'+id+'percentageSpan').hide()
    $('#'+id+'fixedAmountSpan').show()
    $('#'+id+'effectiveDateFixedSpan').show()
    $('#'+id+'effectiveDatePercentSpan').hide()
    $('#'+id+'outstandingLoanSpan').hide()
  } else {
    clearError(id+'fixedAmount');
    clearError(id+'paymentDate1EntitlementDate');
  }
  // return awardTypeGood(0, id);
  return true;
}

function awardTypeGood(submit, id) {
  if ($('#'+id+'awardTypeFixed').attr('checked')) {
    pickAwardType('F', id);
    clearError(id+'awardType');
    return fixedAmountGood(submit, id);
  }

  if ($('#'+id+'awardTypePercent').attr('checked')) {
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
  if (fixedAmount > 0) { return clearError(id+'fixedAmount'); }
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

function pickPaymentDate(idx, flag, id) {
  if (flag == 'P') {
    $('#'+id+'paymentDate' + idx + 'AsOf').attr('checked', true);
    $('#'+id+'paymentDate' + idx + 'EntitlementDateSpan').hide();
    $('#'+id+'hideF').show();
  }
  if (flag == 'O') {
    $('#'+id+'paymentDate' + idx + 'Order').attr('checked', true);
    $('#'+id+'paymentDate' + idx + 'EntitlementDateSpan').hide();
  }
  if (flag == 'E') {
    $('#'+id+'paymentDate' + idx + 'Entitlement').attr('checked', true);
    $('#'+id+'paymentDate' + idx + 'EntitlementDateSpan').show();
  }
  // return paymentDateGood(0, id);
  return true;
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
    $('#'+id+'earningsYes').attr('checked', false);
    $('#'+id+'earningsNo').attr('checked', true);
    $('#'+id+'earningsPercentRateSpan').hide()
    $('#'+id+'earningsPerdiemRateSpan').hide()
    $('#'+id+'earningsYesDiv').hide()
    $('#'+id+'earningsFixedYesSpan').hide()
  } else {
    $('#'+id+'earningsNo').attr('checked', false);
    $('#'+id+'earningsYes').attr('checked', true);
    $('#'+id+'earningsYesDiv').show()
    $('#'+id+'earningsFixedYesSpan').show()
  }
  if (flag == 'P') {
    $('#'+id+'earningsPercent').attr('checked', true);
    $('#'+id+'earningsPerdiemRateSpan').hide()
    $('#'+id+'earningsPercentRateSpan').show()
    earningsPercentRateGood(0, id);
    clearError(id+'earningsPerdiemRate');
  }
  if (flag == 'D') {
    $('#'+id+'earningsPerdiem').attr('checked', true);
    $('#'+id+'earningsPercentRateSpan').hide()
    $('#'+id+'earningsPerdiemRateSpan').show()
    earningsPerdiemRateGood(0, id);
    clearError(id+'earningsPercentRate');
  }
  if (flag == 'L') {
    $('#'+id+'earningsLosses').attr('checked', true);
    $('#'+id+'earningsPercentRateSpan').hide()
    $('#'+id+'earningsPerdiemRateSpan').hide()
    clearError(id+'earningsPerdiemRate');
    clearError(id+'earningsPercentRate');
  }
  // return earningsGood(0, id);
  return true;
}

function earningsGood(submit, id) {
  if (!($('#earningsPercent').attr('checked'))) { clearError('earningsPercentRate'); }
  if (!($('#earningsPerdiem').attr('checked'))) { clearError('earningsPerdiemRate'); }
  if ($('#'+id+'earningsNo').attr('checked')) {
    pickEarnings('N', id);
    return earningsNoGood(submit, id);
  }

  // clearError(id+'earnings');
  if ($('#'+id+'earningsPercent').attr('checked')) {
    clearError(id+'earnings');
    pickEarnings('P', id);
    return earningsPercentGood(submit, id);
  }
  if ($('#'+id+'earningsPerdiem').attr('checked')) {
    clearError(id+'earnings');
    pickEarnings('D', id);
    return earningsPerdiemGood(submit, id);
  }
  if ($('#'+id+'earningsLosses').attr('checked')) {
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
    $('#'+id+'osLoansExcluded').attr('checked', false);
    $('#'+id+'osLoansIncluded').attr('checked', true);
    return clearError(id+'osLoans');
  }
  if (flag == 'E') {
    $('#'+id+'osLoansIncluded').attr('checked', false);
    $('#'+id+'osLoansExcluded').attr('checked', true);
    return clearError(id+'osLoans');
  }
  return true;
}

function osLoansGood(submit, id) {
  if ($('#'+id+'osLoansIncluded').attr('checked')) {
    pickOSloans('I', id);
    return clearError(id+'osLoans');
  }
  if ($('#'+id+'osLoansExcluded').attr('checked')) {
    pickOSloans('E', id);
    return clearError(id+'osLoans');
  }

  if (submit) { return showError(id+'osLoans', "Indicate how to handle outstanding loan balances."); }
  clearError(id+'osLoans');
  return false;
}

function paymentDateGood(submit, id) {
  if (!($('#'+id+'paymentDate1Entitlement').attr('checked'))) { clearError(id+'paymentDate1EntitlementDate'); }
  if (!($('#'+id+'paymentDate2Entitlement').attr('checked'))) { clearError(id+'paymentDate2EntitlementDate'); }

  var setID = 0;
  if ($('#'+id+'awardTypeFixed').attr('checked')) { setID = 2; clearError(id+'paymentDate2'); }
  if ($('#'+id+'awardTypePercent').attr('checked')) { setID = 1; clearError(id+'paymentDate1'); }
  if (setID == 0) { return awardTypeGood(submit, id); }

  if ($('#'+id+'paymentDate' + setID + 'AsOf').attr('checked')) {
    pickPaymentDate(setID, 'P', id);
    return paymentDateAsOfGood(setID, submit, id);
  }
  if ($('#'+id+'paymentDate' + setID + 'Order').attr('checked')) {
    pickPaymentDate(setID, 'O', id);
    return paymentDateOrderGood(setID, submit, id);
  }
  if ($('#'+id+'paymentDate' + setID + 'Entitlement').attr('checked')) {
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
  var paymentDateEntitlementDate = $.trim($('#'+id+'paymentDate' + setID + 'EntitlementDate').val());
  $('#'+id+'lblAYRpaymentDateEntitlementDate').html(paymentDateEntitlementDate);
  if (paymentDateEntitlementDate.length > 0) { return clearError(id+'paymentDate' + setID + 'EntitlementDate'); }
  if (submit) { return showError(id+'paymentDate' + setID + 'EntitlementDate', 'Entitlement date is required.'); }
  clearError(id+'paymentDate' + setID + 'EntitlementDate');
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
function activateAward() {
  var i;
  for (i = 1; i <= 6; i++) {
    if ( $('#' + i + 'awardActive').val() != 1) {
        activateAwardDiv(i);
        return true;
    }
  }
  // showError('awards', 'at max awards');
  do_alert('maximumAwards');
  return false;
}
function deactivateAward() {
  var i;
  for (i = 6; i >= 1; i--) {
    if ( $('#' + i + 'awardActive').val() == 1) {
        deactivateAwardDiv(i, i);
        return true;
    }
  }
  showError('awards', 'at 0 awards');
  return false;
}
function activateAwardDiv(id) {
if (id == 6) {
   $('#activateAwardImg').hide();
   $('#maxAwardImg').show();
} else {
   $('#activateAwardImg').show();
   $('#maxAwardImg').hide();
}
if (id == 1) {
   $('#1deactivateAwardImg').hide();
   $('#minAwardImg').hide();
} else {
   $('#1deactivateAwardImg').show();
   $('#minAwardImg').hide();
}
clearError('awards');
   $('#' + id + 'awardActive').val(1);
   $('#' + id + 'awardActiveDiv').show();
$('#' + id + 'awardActiveDiv').removeClass("a11yAccordionHideArea");
//awardsGood(true);  // Dav
setAwardNumbering();
return true;
}
function deactivateAwardDiv(id, start) {
if (id == 2) {
   $('#1deactivateAwardImg').hide();
   $('#minAwardImg').show();
} else {
   $('#1deactivateAwardImg').show();
   $('#minAwardImg').hide();
}
if (start != 6) {
   $('#activateAwardImg').show();
   $('#maxAwardImg').hide();
} else {
   $('#activateAwardImg').hide();
   $('#maxAwardImg').show();
}
clearError('awards');
   $('#' + id + 'awardActive').val(0);
   $('#' + id + 'awardActiveDiv').hide();
$('#' + id + 'awardActiveDiv').addClass("a11yAccordionHideArea");
clearAward(id);
//copyAward(id, id+1);
//awardsGood(true);  // Dav
setAwardNumbering();
return true;
}
function setAwardText(txt, id) {
    // $('#'+idAward).val(tmp);
    // $('#'+idAward).attr('value', tmp);
    $('#'+id+'Award'+'text').html(txt);
    // if (txt.includes('???') || (txt.length <= 0)) {
    if ((txt.indexOf('???') >= 0) || (txt.length <= 0)) {
      $('#lblAYR'+id+'Award'+'text').html('');
      $('#hide'+id+'Award'+'text').val('');
    } else {
      $('#lblAYR'+id+'Award'+'text').html(id + '. ' + txt);
      $('#hide'+id+'Award'+'text').val(id + '. ' + txt);
    }
}
// function setAwardNumbering(id, maxid) {
function setAwardNumbering() {
  var i;
  var j = 6;
  for (i = j; i >= 1; i--) {
    if ($('#' + i + 'awardActive').val() == 0) {
      j--;
    } else {
      $('#'+i+'Award'+'Numbering').html('Award ('+i+' of '+j+')');
// $('#'+i+'Award'+'Numbering').html('Award ('+i+' of '+j+')');
// $('#'+i+'Award'+'Numbering').attr('data-tab-label', 'Award ('+i+' of '+j+')');
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
     $('#'+id+'award'+'ActiveDiv').addClass("complete-border");
     $('#'+id+'award'+'ULheader').addClass("complete-bg");
     $('#'+id+'award'+'EndDiv').addClass("complete-bg");
}
function setAwardBad(id) {
      $('#'+id+'Award'+'Numbering').removeClass("award-good");
      $('#'+id+'Award'+'Numbering').addClass("award-bad");
      $('#'+id+'Award'+'Status').html(" in progress");
      $('#'+id+'Award'+'Status').removeClass("award-good");
      $('#'+id+'Award'+'Status').addClass("award-bad");
     $('#'+id+'award'+'ActiveDiv').removeClass("complete-border");
     $('#'+id+'award'+'ULheader').removeClass("complete-bg");
     $('#'+id+'award'+'EndDiv').removeClass("complete-bg");
}

function removeConfirm(id) {
   return confirm('Are you sure you want to delete Award ' + id + '?');
}

function removeAward(id, force, start) {
   if($('#' + id + 'awardActive').val() == 0) { return false; }  // dont remove if inactive

   if (id == 6) {
     // removing end of list
     if (force || removeConfirm(id)) { return deactivateAwardDiv(id, start); }
     return false;
   }

   if($('#' + (id+1) + 'awardActive').val() == 0) {
     if (id == 1) {
        // showError('awards', 'You must have at least one award.');
        do_alert('minimumAwards');
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
