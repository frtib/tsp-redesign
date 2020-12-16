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

function ytdContGood(contributionLimit, reviewYear, forceValue) {
  var def = 0;
  if (forceValue) { def = -1; }
  var ytdCont = getPosInteger('ytd-cont', def);
  if (ytdCont > 0) { $('#ytd-cont').val(ytdCont); }

  if (ytdCont < 0) {
    return showError('ytd-cont', "Please enter the amount that you have contributed so far this year.");
  }
  if (ytdCont > contributionLimit) {
    return showError('ytd-cont', "The amount you entered exceeds " + CurrencyFormatted(contributionLimit, 'no_cent')
        + ", the IRS elective deferral limit for " + reviewYear + ".");
  }

  return clearError('ytd-cont');
}

function estContGood(contributionLimit, reviewYear, forceValue) {
  var def = 0;
  if (forceValue) { def = -1; }
  var estCont = getPosInteger('est-cont', def);
  if (estCont > 0) { $('#est-cont').val(estCont); }

  if (estCont < 0) {
    return showError('est-cont', "Please enter the additional amount you expect to contribute before your new election takes effect.");
  }
  if (estCont > contributionLimit) {
    return showError('est-cont', "The amount you entered exceeds " + CurrencyFormatted(contributionLimit, 'no_cent')
        + ", the IRS elective deferral limit for " + reviewYear + ".");
  }

  return clearError('est-cont');
}

function totalContributionGood(forceTotal, forceAdditional) {
  var ytdCont = getPosInteger('ytd-cont', 0);
  var estCont = getPosInteger('est-cont', 0);
  var reviewYear = getPosInteger('review-year', 2019);
  var contributionLimit = getContributionLimit(reviewYear);

  var rc = ytdContGood(contributionLimit, reviewYear, forceTotal) & estContGood(contributionLimit, reviewYear, forceAdditional);

  if (rc) {
    if ((ytdCont + estCont) > contributionLimit) {
      var msg = "The combined total of Items A and B cannot exceed " + CurrencyFormatted(contributionLimit, 'no_cent')
        + ", the IRS elective deferral limit for " + reviewYear + ".";
      showError('ytd-cont', msg);
      return showError('est-cont', msg);
    }
  }

  $('#ytd-cont').attr("max", contributionLimit);
  $('#est-cont').attr("max", contributionLimit);
  return rc;
}

-->
</script>
