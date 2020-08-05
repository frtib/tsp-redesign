{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return rateOfReturnGood(forceValue) & amountToReceiveGood(forceValue)
     & frequencyGood(forceValue) & accountAmountGood(forceValue);
};

panelEnter[{{ panelID }}] = function(panel) {
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
  // testPrimeSettingsGrowth();
    return true;
}

// my functions
function accountAmountGood(submit) {
  if (!submit) {
    if ($("#accountAmount").val() == '') { return clearError('accountAmount'); }
  }
  var accountAmount = getPosInteger('accountAmount', -1);
  if (accountAmount > 0) { $('#accountAmount').val(accountAmount); }

  if (accountAmount <= 0) {
    return showError('accountAmount',
                     "Enter the amount from your account that will be used for TSP installment payments.");
  }
  if (accountAmount < 200) {
    return showError('accountAmount', "Enter a dollar amount that is at least $200.");
  }
  if (accountAmount > 10000000) {
    return showError('accountAmount', "Enter a dollar amount that is at most $10,000,000.");
  }

  $('#account-amount').html(CurrencyFormatted(accountAmount, 'no_cent'));
  return clearError('accountAmount');
}

function getFrequency() {
  if ($('#Monthly').prop('checked')) { return ['Monthly','month',12]; }
  if ($('#Quarterly').prop('checked')) { return ['Quarterly','quarter',4]; }
  if ($('#Annually').prop('checked')) { return ['Annually','year',1]; }
  // return 'Monthly';
  return ['none', 'period'];
}

function frequencyGood(submit) {
  clearError('amountToReceive');
  amountToReceiveGood(submit);
  var choice = getFrequency()[0];
  $('#monthly-payment-choice').html(choice.toLowerCase());
  if (choice == 'Monthly') {
    $('#frequency').html('Monthly');
    // $('#lblAYRfrequency').html($('#frequency').html());
    return clearError('frequency');
  }

  if (choice == 'Quarterly') {
    $('#frequency').html('Quarterly');
    return clearError('frequency');
  }

  if (choice == 'Annually') {
    $('#frequency').html('Annually');
    return clearError('frequency');
  }

  if ((!submit)) {
    return clearError('frequency');
  }

  return showError('frequency', "Choose installment period.");
}

function rateOfReturnGood(submit) {
  if ((!submit) && $('#rateOfReturn').val() === '') return true;
  if ($("#rateOfReturn").val() == '') {
    return showError('rateOfReturn', "Please enter your expected rate of return.");
  }
  $('#rateOfReturn').val(parseFloat($('#rateOfReturn').val()).toFixed(2));
  var rateOfReturn = parseFloat($('#rateOfReturn').val());
  if (isNaN(rateOfReturn)) { $("input#rateOfReturn").val(0.0); rateOfReturn = 0.0; }

  if ((rateOfReturn < 0.0) || (rateOfReturn > 99.0)) {
    return showError('rateOfReturn', "Rate of Return should be between 0% and 99%.");
  }

  $('#rate-of-return').html(rateOfReturn.toFixed(2) + '%');
  return clearError('rateOfReturn');
}
function amountToReceiveErrorString() {
  var choice = getFrequency();
  return "Enter the amount that you would like to receive each " + choice[1] + '.';
}
function amountToReceiveGood(submit) {
  lastBlankOK = submit;
  //if ((!submit) && $('#amountToReceive').val() === '') return true;
  if (!submit) {
    if ($("#amountToReceive").val() == '') { return clearError('amountToReceive'); }
  }
  var amountToReceive = getPosInteger('amountToReceive', -1);
  if (amountToReceive > 0) { $('#amountToReceive').val(amountToReceive); }
  //if (amountToReceive > 0.0) {
  //  amountToReceive = parseFloat(amountToReceive.toFixed(2));
  //  $('#amountToReceive').val(amountToReceive);
  //}

  if (amountToReceive <= 0) {
    return showError('amountToReceive', amountToReceiveErrorString());
  }
  if (amountToReceive < 25) {
    return showError('amountToReceive', "Enter a dollar amount that is at least $25.");
  }
  if (amountToReceive > accountAmount) {
    return showError('amountToReceive',
        "The amount that you want to receive each month is greater than the amount from your account that you want to use for TSP installment payments."
        + "   Either increase the amount you want to use for TSP installment payments, or decrease your payment amount.");
  }

  $('#monthly-payment').html(CurrencyFormatted(amountToReceive, 'no_cent'));
  return clearError('amountToReceive');
}
-->
</script>
