{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(submit) {
  return totalContributionGood(true, true);
};

panelEnter[{{ panelID }}] = function(panel) {
  // getPrimeSettingsGrowth();
  updateMaxContributionMsg();
  totalContributionGood(false, false);
  setYearValues();
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
  // testPrimeSettingsGrowth();
    return true;
}

function setYearValues() {
  var yearChoosen = $('#review-year').val();
  $('.year-choosen').html(yearChoosen);
}

function ytdContGood(contributionLimit, limitErrorMsg, forceValue) {
  var def = 0;
  if (forceValue) { def = -1; }
  var ytdCont = getPosInteger('ytd-cont', def);
  if (ytdCont > 0) { $('#ytd-cont').val(ytdCont); }

  if (ytdCont < 0) {
    return showError('ytd-cont', "Please enter the amount that you have contributed so far this year.");
  }
  if (ytdCont > contributionLimit) { return showError('ytd-cont', limitErrorMsg); }

  return clearError('ytd-cont');
}

function estContGood(contributionLimit, limitErrorMsg, forceValue) {
  var def = 0;
  if (forceValue) { def = -1; }
  var estCont = getPosInteger('est-cont', def);
  if (estCont > 0) { $('#est-cont').val(estCont); }

  if (estCont < 0) {
    return showError('est-cont', "Please enter the additional amount you expect to contribute before your new election takes effect.");
  }
  if (estCont > contributionLimit) { return showError('est-cont', limitErrorMsg); }

  return clearError('est-cont');
}

function updateMaxContributionMsg() {
  var ytdCont = getPosInteger('ytd-cont', 0);
  var estCont = getPosInteger('est-cont', 0);
  var reviewYear = getPosInteger('review-year', 2019);
  var age50 = false;
  if (getAge50() == 'age50Yes') { age50 = true; }
  var taxValues = getTaxValues(reviewYear);
  var deferralLimit = taxValues[1];
  var catchupLimit = taxValues[2];
  var contributionLimit = deferralLimit;
  if (age50) { contributionLimit += catchupLimit; }
  var msg = "You can contribute up to " + CurrencyFormatted(deferralLimit, 'no_cent');
  if (age50) { msg += " + " + CurrencyFormatted(catchupLimit, 'no_cent'); }
  msg += " in "+ reviewYear + ".";
  msg += "  (" + CurrencyFormatted(contributionLimit - ytdCont - estCont, 'no_cent') + " more.)";
  $('#maxContributionMsg').html(msg);
}

function totalContributionGood(forceTotal, forceAdditional) {
  var ytdCont = getPosInteger('ytd-cont', 0);
  var estCont = getPosInteger('est-cont', 0);
  var reviewYear = getPosInteger('review-year', 2019);
  var age50 = false;
  if (getAge50() == 'age50Yes') { age50 = true; }
  var taxValues = getTaxValues(reviewYear);
  var deferralLimit = taxValues[1];
  var catchupLimit = taxValues[2];
  var contributionLimit = deferralLimit;
  if (age50) { contributionLimit += catchupLimit; }
  updateMaxContributionMsg();

  var limitText = "limit";
  var errorMsg = "The amount you entered exceeds " + CurrencyFormatted(deferralLimit, 'no_cent');
  if (age50) {
    errorMsg += " + " + CurrencyFormatted(catchupLimit, 'no_cent');
    limitText = " and catch-up contribution limits ";
  }
  errorMsg += ", the IRS elective deferral " + limitText + " for " + reviewYear + ".";

  var rc = ytdContGood(contributionLimit, errorMsg, forceTotal) & estContGood(contributionLimit, errorMsg, forceAdditional);

  if (rc) {
    if ((ytdCont + estCont) > contributionLimit) {
      var msg = "Your regular employee contributions exceed the Internal Revenue Code (IRC) elective deferral "
          + limitText + " (" + CurrencyFormatted(deferralLimit, 'no_cent');
      if (age50) { msg += " + " + CurrencyFormatted(catchupLimit, 'no_cent'); }
      msg += " in "+ reviewYear + ").";
      // showError('ytd-cont', msg);
      return showError('est-cont', msg);
    }
  }

  $('#ytd-cont').attr("max", contributionLimit);
  $('#est-cont').attr("max", contributionLimit);
  return rc;
}

-->
</script>
