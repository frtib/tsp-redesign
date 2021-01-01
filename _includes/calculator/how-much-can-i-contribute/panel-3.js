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
    var contributionLimit = getContributionLimit(+reviewYear);
    $('#deferral-limit').html(CurrencyFormatted(contributionLimit, 'no_cent'));
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
-->
</script>
