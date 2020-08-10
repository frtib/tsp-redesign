{% comment %}
This is the javascript specific to panel 3.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return true;
};

panelEnter[{{ panelID }}] = function(panel) {
    // calculate and set values here
    //var contributionLimit = getContributionLimit(+reviewYear);
    //$('#deferral-limit').html(CurrencyFormatted(contributionLimit, 'no_cent'));
    clearError('calculate');
    $('#repayment-frequency').html($('#paySchedule').val());
    calculatePayments();
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

function getPayFreq() {
    var paySchedule = $('#paySchedule').val();
    var pay_freq=26.0;
    if (paySchedule == 'Biweekly') { pay_freq=26.0; }
    if (paySchedule == 'Weekly') { pay_freq=52.0; }
    if (paySchedule == 'Semi-monthly') { pay_freq=24.0; }
    if (paySchedule == 'Monthly') { pay_freq=12.0; }

    return pay_freq;
}

function getPayType() {
  if ($('#repayTime').prop('checked')) { return 'repayTime'; }
  if ($('#repayPayday').prop('checked')) { return 'repayPayday'; }
  if ($('#repayPayments').prop('checked')) { return 'repayPayments'; }
  showError('calculate', 'Please revise your repayment terms and try again.');
  return 'unknown';
}

function payment_amount(loanAmt, intRate, pmts_year, num_pmts) {
  /* ********************************************
  # n = - (LN(1-(B/m)*(r/q)))/LN(1+(r/q))
  ## years = - 1/q * (LN(1-(B/m)*(r/q)))/LN(1+(r/q))
  #
  # Where:
  #
  #     q = amount of annual payment periods
  #     r = interest rate
  #     B = principal
  #     m = payment amount
  #     n = amount payment periods
  #     LN = natural logarithm
  ********************************************* */
  return loanAmt * ((intRate / pmts_year) / (1 - (1 / Math.pow(1 + (intRate / pmts_year), num_pmts))));
}

function calculatePayments() {
  var loanAmt = getPosInteger('loanAmt', 0);
  var pmts_year = getPayFreq();
  var intRate = parseFloat($('#loan-rate').html().replace('%', '')) / 100.0;
  var payType = getPayType();
  var years = getPosInteger('ptYears', 0);
  var months = getPosInteger('ptMonths', 0);
  var errmsg = '';
  var num_mnths, num_pmts, pmt_amt;

  // test for rate issue
  if (isNaN(intRate)) {
    intRate = backupIntRate / 100.0; // 0.02;
  }

  if (payType == 'repayTime') {
    num_mnths = years * 12 + months;
    if (num_mnths < 1) { num_mnths = 1; }
    // num_pmts = Math.round(num_mnths * (pmts_year / 12));
    num_pmts = num_mnths * (pmts_year / 12.0);
    pmt_amt = payment_amount(loanAmt, intRate, pmts_year, num_pmts)
  }
  if (payType == 'repayPayments') {
    num_pmts = getPosInteger('ptNumpay', 1);
    pmt_amt = payment_amount(loanAmt, intRate, pmts_year, num_pmts);
  }
  if (payType == 'repayPayday') {
    pmt_amt = getPosFloat('ptAmount', 1.00);
    var L1 = 1.0 - (loanAmt / pmt_amt) * (intRate / pmts_year);
    var L2 = 1.0 + (intRate / pmts_year);
    if (L1 < 0 || L2 < 0) {
        num_pmts = 1000;
    } else {
        num_pmts = -1.0 * (Math.log(L1) / Math.log(L2));
        // num_pmts = Math.round(num_pmts*100)/100;
    }

    // make sure the number of payments satisfy the min and max year requirements,
    // set the number of payments and the payType then recalculate, if there is a problem
    // clearError('repayment-terms');
    var rounded_pmts = Math.ceil(num_pmts);
    // console.log('rounded_pmts ' + rounded_pmts);
    if ((rounded_pmts - pmts_year) < 0) {
        payType = 'repayPayments';
        num_pmts = pmts_year;
        pmt_amt = payment_amount(loanAmt, intRate, pmts_year, num_pmts);
        pmt_amt = Math.round(pmt_amt*100)/100;
        var emsg = 'The minimum repayment period is one year. Therefore, the amount of each payment has been decreased.';
        $('#repayment-terms').html('Repay ' + CurrencyFormatted(pmt_amt, 'cents') + ' each pay period.');
        showError('payment-amount', emsg);
    }
    var max_yrs = getMaxYears();
    if ((rounded_pmts - (pmts_year * max_yrs)) > 0) {
        num_pmts = pmts_year * max_yrs;
        payType = 'repayPayments';
        pmt_amt = payment_amount(loanAmt, intRate, pmts_year, num_pmts);
        pmt_amt = Math.round(pmt_amt*100)/100;
        var emsg = 'You must repay your ' + getLoanType() + ' loan within '
            + max_yrs + ' years,  Therefore, the amount of each payment has been increased.';
        $('#repayment-terms').html('Repay ' + CurrencyFormatted(pmt_amt, 'cents') + ' each pay period.');
        showError('payment-amount', emsg);
    }
  }

  // calculate terms (removed)
  /*
  my ($num_mnths, $num_yrs);
  if ($RESULTS{'payType'} eq "repayTime") {
  	$num_mnths = $RESULTS{'ptMonths'};
  	$num_yrs = $num_mnths / 12;
  	$num_yrs = (split(/\./, $num_yrs))[0];
  	$num_mnths = $num_mnths - ($num_yrs * 12);
  	$num_yrs = $RESULTS{'ptYears'} + $num_yrs;
  	$RESULTS{term} = "$num_yrs Year(s)  " if $num_yrs;
  	$RESULTS{term} .= "$num_mnths Month(s)" if $num_mnths;
  } else {
          # my $pmts_year = $PAYPERIOD{$verified->{'payPeriod'}} == 0 ? 26 : $PAYPERIOD{$verified->{'payPeriod'}};
          my $pmts_year = $RESULTS{'payPeriod'} == 0 ? 26 : $RESULTS{'payPeriod'};
  	$num_mnths = ($num_pmts / $pmts_year) * 12;
  	$num_mnths = $m->comp('.roundnum', $num_mnths + .4, 0);
  	$num_yrs = $num_mnths / 12;
  	$num_yrs = $m->comp('.roundnum', $num_yrs - .5, 0);
  	$num_mnths = $num_mnths - ($num_yrs * 12);
  	$RESULTS{term} = "$num_yrs Year(s)  " if $num_yrs;
  	$RESULTS{term} .= "$num_mnths Month(s)" if $num_mnths;
  }
  */

  // if (payType == 'repayPayday') { pmt_amt = Math.round(pmt_amt*100)/100; } else { pmt_amt = Math.round(pmt_amt); }
  var totalCost = pmt_amt * num_pmts;
  var totalInterest = totalCost - loanAmt;
  pmt_amt = Math.round(pmt_amt*100)/100;
  num_pmts = Math.ceil(num_pmts);
  // console.log(loanAmt, pmts_year, intRate, payType, years, months, num_mnths, num_pmts, pmt_amt, totalCost, totalInterest);
  $('#payment-amount').html(CurrencyFormatted(pmt_amt, 'cents'));
  $('#number-payments').html(num_pmts);
  $('#total-interest').html(CurrencyFormatted(totalInterest, 'cents'));
  $('#total-cost').html(CurrencyFormatted(totalCost, 'cents'));
  if (errmsg != '') { showError('calculate', errmsg); }
}
-->
</script>
