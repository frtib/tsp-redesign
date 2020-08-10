{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return ( employmentCategoryGood(forceValue) & loanAmtGood(forceValue) & loanTypeGood(forceValue)
     & payTypeGood(forceValue) & payScheduleGood(forceValue) & repaymentTermsGood(forceValue) );
};

panelEnter[{{ panelID }}] = function(panel) {
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
  // $('#payment-schedule').html($('#paySchedule').val());
  // copy this panel's values to next panel for display
  if ($('#repayTime').prop('checked')) { repayTimeAYR(); }
  if ($('#repayPayday').prop('checked')) { repayPaydayAYR(); }
  if ($('#repayPayments').prop('checked')) { repayPaymentsAYR(); }
  // console.log($('#paySchedule').val());
  return true;
}

function employmentCategoryGood(forceValue) {
  if ($('#Civilian').prop('checked')) {
    $('#employment-category').html('Civilian');
    $('#paySchedule-hide').show();
    $('#paySchedule').val($('#lastPaySchedule').val());
    return clearError('employmentCategory');
  }
  if ($('#Uniformed').prop('checked')) {
    $('#employment-category').html('Uniformed Services');
    $('#paySchedule-hide').hide();
    $('#paySchedule').val('Monthly');
    return clearError('employmentCategory');
  }

  if (forceValue) { return showError('employmentCategory', "Select your employment category."); }
  return clearError('employmentCategory');
}

function loanAmtGood(forceValue) {
  var def = 0;
  if (forceValue) { def = -1; }
  var loanAmt = getPosInteger('loanAmt', def);

  if (loanAmt < 0) {
    return showError('loanAmt', "Enter the loan amount you wish to borrow.");
  }
  if ((loanAmt < 1000) || (loanAmt > 50000)) {
    return showError('loanAmt', "Loan amount must be between $1,000 and $50,000.");
  }

  $('#loan-amount').html(CurrencyFormatted(loanAmt));
  return clearError('loanAmt');
}

function xloanAmtGood(forceValue) {
  var def = 0;
  if (forceValue) { def = -1; }
  var loanAmt = getPosInteger('xloanAmt', def);

  if (loanAmt < 0) {
    return showError('xloanAmt', "Enter the loan amount you wish to borrow.");
  }
  if ((loanAmt < 1000) || (loanAmt > 50000)) {
    return showError('xloanAmt', "Loan amount must be between $1,000 and $50,000.");
  }

  $('#loan-amount').html(CurrencyFormatted(loanAmt));
  return clearError('xloanAmt');
}

// Test if changing loan type clears an current error elsewhere
function loanTypeRetest(forceValue) {
  if(($('#ptYears-label').hasClass("usa-input-error-label")) || ($('#ptMonths-label').hasClass("usa-input-error-label"))) {
    // ptYearsMonthsGood(forceValue, forceValue);
    ptYearsMonthsGood(forceValue, false); // don't force months
  }
  if($('#ptAmount-label').hasClass("usa-input-error-label")) {
    ptAmountGood(forceValue);
  }
  if($('#ptNumpay-label').hasClass("usa-input-error-label")) {
    ptNumpayGood(forceValue);
  }

  return clearError('loanType');
}

function loanTypeGood(forceValue) {
  if ($('#General').prop('checked')) {
    $('#type').html('General Purpose');
    // return loanTypeRetest(forceValue);
    clearError('loanType');
    return payTypeGood(forceValue);
  }
  if ($('#Residential').prop('checked')) {
    $('#type').html('Residential');
    // return loanTypeRetest(forceValue);
    clearError('loanType');
    return payTypeGood(forceValue);
  }

  return showError('loanType', "Select your loan type.");
}

function payTypeGood(forceValue) {
  if ($('#repayTime').prop('checked')) {
    ptYearsMonthsGood(forceValue, false);
    ptAmountGood(forceValue);
    ptNumpayGood(forceValue);
    return clearError('payType');
  }
  if ($('#repayPayday').prop('checked')) {
    ptYearsMonthsGood(forceValue, false);
    ptAmountGood(forceValue);
    ptNumpayGood(forceValue);
    return clearError('payType');
  }
  if ($('#repayPayments').prop('checked')) {
    ptYearsMonthsGood(forceValue, false);
    ptAmountGood(forceValue);
    ptNumpayGood(forceValue);
    return clearError('payType');
  }

  if (forceValue) { return showError('payType', "Select your repayment type."); }
  return false;
}
function repayTimeAYR() {
    var ptYears = getPosInteger('ptYears', -1);
    var ptMonths = getPosInteger('ptMonths', -1);
    var yearS = 's';
    var monthS = 's';
    if (ptYears == 1) { yearS = ''; }
    if (ptMonths == 1) { monthS = ''; }
    $('#repayment-terms').html('Repay the loan in ' + ptYears + ' year' + yearS + ' and ' + ptMonths + ' month' + monthS + '.');
}
function repayPaydayAYR() {
    var ptAmount = getPosFloat('ptAmount', -1);
    $('#repayment-terms').html('Repay ' + CurrencyFormatted(ptAmount, 'cents') + ' each pay period.');
}
function repayPaymentsAYR() {
    var ptNumpay = getPosInteger('ptNumpay', -1);
    var paymentS = 's';
    if (ptNumpay == 1) { paymentS = ''; }
    $('#repayment-terms').html('Repay the loan by making ' + ptNumpay + ' payment' + paymentS + '.');
}
function repaymentTermsGood(forceValue) {
  if ($('#repayTime').prop('checked')) {
    // return ptYearsMonthsGood(forceValue, forceValue);
    return ptYearsMonthsGood(forceValue, false);
  }
  if ($('#repayPayday').prop('checked')) {
    return ptAmountGood(forceValue);
  }
  if ($('#repayPayments').prop('checked')) {
    return ptNumpayGood(forceValue);
  }

  return payTypeGood(forceValue);
}

function getMaxYears() {
  if ($('#Residential').prop('checked')) {
    return 15;
  }
  return 5; // if General
}
function getLoanType() {
  if ($('#Residential').prop('checked')) {
    return 'Residential';
  }
  return 'General';
}

function ptYearsMonthsGood(forceYears, forceMonths) {
  if (!$('#repayTime').prop('checked')) {
    return clearError('ptYears') & clearError('ptMonths');
  }

  var def = 0;
  if (forceYears) { def = -1; } else { def = 0; }
  var ptYears = getPosInteger('ptYears', -1);
  if (forceMonths) { def = -1; } else { def = 0; }
  var ptMonths = getPosInteger('ptMonths', -1);
  var maxyears = getMaxYears();
  var loantype = getLoanType();
  var rc = (clearError('ptYears') & clearError('ptMonths'));

  // if ((ptYears < 0) && (ptMonths < 0)) {
  //   if ((forceYears) || (forceMonths)) { return showError('ptYears', "Enter the repayment years and months."); }
  //   return clearError('ptYears') & clearError('ptMonths');
  // }
  if (forceYears) {
    if (ptYears < 0) {
      return showError('ptYears', "Enter the number of years required to repay the loan.");
    }
  }
  // if (forceMonths) {
  //   if (ptMonths < 0) {
  //     return showError('ptMonths', "Enter the repayment months.");
  //   }
  // }

  // ptYears = getPosInteger('ptYears', 1);     # default value to pass the test in case field is blank
  if ((ptYears < 1) || (ptYears > maxyears)) {
  // if (ptYears > maxyears) {
    // rc = showError('ptYears', "Repayment for a " + loantype + " loan must be between 1 and " + maxyears + " years.");
    rc = showError('ptYears', loantype + " loans must be repaid between 1 and " + maxyears + " years.");
  }
  // ptMonths = getPosInteger('ptMonths', 0);   # default value to pass the test in case field is blank
  // if ((ptMonths < 0) || (ptMonths > 11)) {
  if (ptMonths > 11) {
    rc &= showError('ptMonths', "Enter a number of months between 0 and 11.");
  }

  if ((ptYears >= maxyears) && (ptMonths > 0)) {
    // rc &= showError('ptYears', "Repayment time for a " + loantype + " loan must be less than " + maxyears + " years and 0 months.");
    rc &= showError('ptYears', loantype + " loan repayment terms may not exceed " + maxyears + " years.");
  }

  // $('#lblAYRptYears').html(CurrencyFormatted(ptYears));
  return rc;
}

function ptAmountGood(forceValue) {
  if (!$('#repayPayday').prop('checked')) { return clearError('ptAmount'); }
  var ptAmount = getPosInteger('ptAmount', -1);
  if (forceValue) {
    // if (ptAmount < 0) {
    //   if (forceValue) { return showError('ptAmount', "Enter a repayment amount between $1 and $5,000."); }
    //   return clearError('ptAmount');
    // }
    // if (ptAmount < 1) {
    //   return showError('ptAmount', "Payment amount must be at least $1.");
    // }
    if ((ptAmount < 1) || (ptAmount > 5000)) {
      return showError('ptAmount', "Enter a repayment amount between $1 and $5,000.");
    }
  }
  // $('#lblAYRptAmount').html(CurrencyFormatted(ptAmount));
  return clearError('ptAmount');
}

function ptNumpayGood(forceValue) {
  if (!$('#repayPayments').prop('checked')) { return clearError('ptNumpay'); }
  var ptNumpay = getPosInteger('ptNumpay', -1);
  var loantype = getLoanType();
  var maxpayments = getMaxYears() * 12;

  if (ptNumpay < 0) {
    // if (forceValue) { return showError('ptNumpay', "Enter the number of payments."); }
    if (forceValue) { return showError('ptNumpay', "Number of payments for a " + loantype + " loan must be between 1 and " + maxpayments + "."); }
    return clearError('ptNumpay');
  }
  // if (ptNumpay < 1) {
  //   return showError('ptNumpay', "Number of payments must be at least 1.");
  // }
  if ((ptNumpay < 1) || (ptNumpay > maxpayments)) {
    return showError('ptNumpay', "Number of payments for a " + loantype + " loan must be between 1 and " + maxpayments + ".");
  }

  return clearError('ptNumpay');
}

function payScheduleGood(forceValue) {
  if (!$('#Uniformed').prop('checked')) {
    $('#lastPaySchedule').val($('#paySchedule').val());
  }
  if (forceValue) {
    if ($('#paySchedule').val() == 'Select') {
      return showError('paySchedule', "Select your pay schedule.");
    }
  }
  return clearError('paySchedule');
}

// get loan rate
function getLoanRate() {
  $('#loan-rate').html('...');
  var url = getDownloadString('getCurrentLoanInterestRate.html', '');
  doAjaxRetrieveCallback('loan-rate', url, onSuccess, onFail);
}
function onSuccess(divName, data) {
    $('#loan-rate').html(data);
    $('#interest-rate').html(data);
    return true;
}
var backupIntRate = 2.00;
function onFail(divName, textStatus, errorThrown) {
    $('#loan-rate').html('is unavailable');
    $('#interest-rate').html('unavailable, '+ backupIntRate + '% used');
    return true;
}

-->
</script>
