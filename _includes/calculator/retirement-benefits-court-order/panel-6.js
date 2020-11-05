{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return true;
};

panelEnter[{{ panelID }}] = function(panel) {
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

// my functions
function amountToReceiveGood(submit) {
  if (!submit) {
    if ($("#amountToReceive").val() == '') { return clearError('amountToReceive'); }
  }
  var amountToReceive = getPosInteger('amountToReceive', -1);
  var amountToUse = getPosInteger('amountToUse', 0);
  if (amountToReceive > 0) { $('#amountToReceive').val(amountToReceive); }
  if (amountToReceive > 999999) { $('#amountToReceive').val(999999); }

  if (amountToReceive < 25.0) {
    return showError('amountToReceive', "You must request to receive at least $25 a month.");
  }
  if (amountToReceive > amountToUse) {
    return showError('amountToReceive', "You cannot request to receive more than the account balance.");
  }

  $('#amountToReceiveAYR').html(CurrencyFormatted(amountToReceive));
  return clearError('amountToReceive');
}

function rateOfReturnGood(submit) {
  if (!submit) {
    if ($("#rateOfReturn").val() == '') { return clearError('rateOfReturn'); }
  }
  var rateOfReturn = getPosFloat('rateOfReturn', -1.0);
  if (rateOfReturn >= 0.0) { $('#rateOfReturn').val(rateOfReturn.toFixed(2)); }

  if (rateOfReturn < 0.0) {
    return showError('rateOfReturn', "Rate of return is required. Enter “0” for no rate of return.");
  }
  if ((rateOfReturn < 0.0) || (rateOfReturn > 99.0)) {
    return showError('rateOfReturn', "Rate of return should be between 0% and 99%.");
  }
  $('#rateOfReturnAYR').html(rateOfReturn);
  return clearError('rateOfReturn');
}

-->
</script>
