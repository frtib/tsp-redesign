{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return payScheduleGood(forceValue)
    & cccTaxRateLaterGood(forceValue)
    & cccTaxRateNowGood(forceValue)
    & checkContributionAmount(forceValue)
    & cccInterestRateGood(forceValue)
    & cccSalaryGood(forceValue)
    & cccYearsInRetirementGood(forceValue)
    & cccYearsUntilRetirementGood(forceValue);
};

panelEnter[{{ panelID }}] = function(panel) {
  $('#irc-contribution-limit').html(CurrencyFormatted(IRC_contribution_limit, 'no_cent'));
  $('#irc-limit-year').html(IRC_limit_year);
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
  // testPrimeSettingsGrowth();
    return true;
}

// my functions
function cccYearsUntilRetirementGood(submit) {
  if ((!submit) && $('#cccYearsUntilRetirement').val() === '') return clearError('cccYearsUntilRetirementGood');
  var val = parseInt($('#cccYearsUntilRetirement').val()) || 0;
  if (val > 0) { $('#cccYearsUntilRetirement').val(val); }

  if (val < 1) {
    return showError('cccYearsUntilRetirement', "Years until you retire is required.");
  }
  if (val > 70) {
    return showError('cccYearsUntilRetirement', "Enter a number of years between 1 and 70.");
  }

  $('#cccYearsUntilRetirement-panel3').html(CurrencyFormatted(val, 'no_cent'));
  return clearError('cccYearsUntilRetirement');
}

function cccYearsInRetirementGood(submit) {
  if ((!submit) && $('#cccYearsInRetirement').val() === '') return clearError('cccYearsInRetirementGood');
  var val = parseInt($('#cccYearsInRetirement').val()) || 0;
  if (val > 0) { $('#cccYearsInRetirement').val(val); }

  if (val < 1) {
    return showError('cccYearsInRetirement', "Estimated years in retirement is required.");
  }
  if (val > 70) {
    return showError('cccYearsInRetirement', "Enter a number of years between 1 and 70.");
  }

  $('#cccYearsInRetirement-panel3').html(CurrencyFormatted(val, 'no_cent'));
  return clearError('cccYearsInRetirement');
}


function cccSalaryGood(submit) {
  if ($("#cccSalary").val() == '') {
    if (submit) {
      return showError('cccSalary', "Current annual salary is required.");
    }
    return clearError('cccSalary');
  }

  var cccSalary = getPosInteger('cccSalary', -1);
  if (cccSalary > 0) { $('#cccSalary').val(cccSalary); }

  if (cccSalary <= 0) {
    return showError('cccSalary', "Current annual salary is required.");
  }
  if ((cccSalary < 1) || (cccSalary > 700000)) {
    return showError('cccSalary', "Annual salary must be between $1 and $700,000.");
  }

  $('#cccSalary-panel3').html(CurrencyFormatted(cccSalary));
  return clearError('cccSalary');
}

function cccInterestRateGood(submit) {
  if ($("#cccInterestRate").val() == '') {
    if (submit) { return showError('cccInterestRate', "Expected rate of return is required."); }
    return clearError('cccInterestRate');
  }
  var cccInterestRate = getPosFloat('cccInterestRate', -1.0);
  if ((cccInterestRate < 0.0) || (cccInterestRate > 99.0)) {
    return showError('cccInterestRate', "Enter a rate of return between 0% and 99%.");
  }
  cccInterestRate = cccInterestRate.toFixed(2);
  $("#cccInterestRate").val(cccInterestRate);
  $('#cccInterestRate-panel3').html(cccInterestRate + '%');
  return clearError('cccInterestRate');
}

function cccContributionsGood(submit) {
  if ($("#cccContributions").val() == '') {
    if (submit) { return showError('cccContributions', "This question is required."); }
    return clearError('cccContributions');
  }
  var cccContributions = getPosFloat('cccContributions', -1.0);
  if ((cccContributions < 0.0) || (cccContributions > 99.0)) {
    return showError('cccContributions', "Contribution percentage should be between 0% and 99%.");
  }
  cccContributions = cccContributions.toFixed(2);
  $("#cccContributions").val(cccContributions);
  $('#cccContributions-panel3').html(cccContributions + '%');
  return clearError('cccContributions');
}
function setLimitText() {
  var limit = CurrencyFormatted(IRC_contribution_limit, 'no_cent');
  if (getAge50() == 'age50Yes') {
    limit += " + " + CurrencyFormatted(IRC_catchup_contribution_limit, 'no_cent');
  }
  $('#irc-contribution-limit').html(limit);
  $('#irc-limit-year').html(IRC_limit_year);
  // $('#age50year').html(IRC_limit_year);
  return false;
}
// check salary, contribution %, then check combination.  i.e. bad input means dont check combination
function checkContributionAmount(submit) {
  $('#current-annual').html("--");
  var rc = cccContributionsGood(submit);
  rc &= cccSalaryGood(submit);
  if (!rc) { return rc; }
  // now check combination
  var cccSalary = getPosInteger('cccSalary', 0);
  var cccContributions = getPosFloat('cccContributions', 0.0);
  var contribution = (cccContributions/100.0) * cccSalary;
  $('#current-annual').html(CurrencyFormatted(contribution, 'cent'));
  if (contribution > IRC_contribution_limit) {
    var msg = "You are not allowed to contribute more than "
            + CurrencyFormatted(IRC_contribution_limit, 'cent') + " per year.";
    showError('cccSalary', msg);
    showError('cccContributions', msg);
  }
  return true;
}

function cccTaxRateNowGood(submit) {
  if ($("#cccTaxRateNow").val() == '') {
    if (submit) { return showError('cccTaxRateNow', "Current tax rate is required."); }
    return clearError('cccTaxRateNow');
  }
  var cccTaxRateNow = getPosFloat('cccTaxRateNow', -1.0);
  if ((cccTaxRateNow < 0.0) || (cccTaxRateNow > 99.0)) {
    return showError('cccTaxRateNow', "Current tax rate should be between 0% and 99%.");
  }
  cccTaxRateNow = cccTaxRateNow.toFixed(2);
  $("#cccTaxRateNow").val(cccTaxRateNow);
  $('#cccTaxRateNow-panel3').html(cccTaxRateNow + '%');
  return clearError('cccTaxRateNow');
}

function cccTaxRateLaterGood(submit) {
  if ($("#cccTaxRateLater").val() == '') {
    if (submit) { return showError('cccTaxRateLater', "Estimated retirement tax rate is required."); }
    return clearError('cccTaxRateLater');
  }
  var cccTaxRateLater = getPosFloat('cccTaxRateLater', -1.0);
  if ((cccTaxRateLater < 0.0) || (cccTaxRateLater > 99.0)) {
    return showError('cccTaxRateLater', "Estimated retirement tax rate should be between 0% and 99%.");
  }
  cccTaxRateLater = cccTaxRateLater.toFixed(2);
  $("#cccTaxRateLater").val(cccTaxRateLater);
  $('#cccTaxRateLater-panel3').html(cccTaxRateLater + '%');
  return clearError('cccTaxRateLater');
}

function get_pay_freq(paySchedule) {
  if (paySchedule == 'Biweekly')      return 26.0;
  if (paySchedule == 'Weekly')        return 52.0;
  if (paySchedule == 'Semi-monthly')  return 24.0;
  if (paySchedule == 'Monthly')       return 12.0;
  return 1.0;
}
function getPaySchedule() { return $('#paySchedule').val(); }
function payScheduleGood(submit) {
  var paySchedule = getPaySchedule();

  if (paySchedule == 'Select') {
    if (submit) { return showError('paySchedule', "Select your pay schedule."); }
  }

  $('#paySchedule-panel3').html(paySchedule);
  return clearError('paySchedule');
}

function cccEqualContributionChecked() {
  if ($('#cccEqualContribution').is(":checked")) { return true; }
  return false;
}
function cccEqualContributionGood(submit) {
  return true;
}

-->
</script>
