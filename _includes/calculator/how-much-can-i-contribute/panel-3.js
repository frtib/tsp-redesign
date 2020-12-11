{% comment %}
This is the javascript specific to panel 3.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(submit) {
  return true;
};

panelEnter[{{ panelID }}] = function(panel) {
    // contribution year
    var reviewYear = $('#review-year').val();
    var age50 = false;
    if (getAge50() == 'age50Yes') { age50 = true; }
    showCatchupRow(age50);
    var taxValues = getTaxValues(+reviewYear);
    var deferralLimit = taxValues[1];
    var catchupLimit = taxValues[2];
    var contributionLimit = deferralLimit;
    if (age50) { contributionLimit += catchupLimit; }
    $('#deferral-limit').html(CurrencyFormatted(deferralLimit, 'no_cent'));
    $('#catchup-limit').html(CurrencyFormatted(catchupLimit, 'no_cent'));
    var ytdCont = getPosInteger('ytd-cont', 0);
    var estCont = getPosInteger('est-cont', 0);
    var amountSoFar = +ytdCont + +estCont;
    $('#total-contributed').html(CurrencyFormatted(amountSoFar, 'no_cent'));
    var amountAvailable = contributionLimit - amountSoFar;
    $('#amount-available').html(CurrencyFormatted(amountAvailable, 'no_cent'));
    var remainingPayments = $('#remaining-payments').val();
    $('#payments-remaining').html(remainingPayments);
    var amountPerPayment = amountAvailable / remainingPayments;
    $('#new-contribution').html(CurrencyFormatted(mathTrunc(amountPerPayment), 'no_cent'));
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

function showCatchupRow(flag) {
  if (flag) {
    $('#catchupLimitRow').show();
    $('#extraRow').remove();
//    $('#catchupLimitRow').addClass('usa-grid');
//    $('#catchupLimitRow').addClass('results');
    return true;
  }
  $('#catchupLimitRow').hide();
  $('#catchupLimitRow').after('<div id="extraRow" class="usa-grid results"></div>');
  $('#extraRow').hide();
//  $('#catchupLimitRow').removeClass('usa-grid');
//  $('#catchupLimitRow').removeClass('results');
  return false;
}
-->
</script>
