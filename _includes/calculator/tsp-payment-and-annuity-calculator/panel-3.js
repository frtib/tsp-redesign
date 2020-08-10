{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return checkAges(forceValue);
};

panelEnter[{{ panelID }}] = function(panel) {
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
  // testPrimeSettingsGrowth();
    return true;
}

// my functionsr
function ageNowGood(submit) {
  if (!submit) {
    if ($("#ageNow").val() == '') { return clearError('ageNow'); }
  }
  var ageNow = getPosInteger('ageNow', -1);
  if (ageNow > 0) { $('#ageNow').val(ageNow); }
  if (ageNow > 99) { $('#ageNow').val(99); }

  if (ageNow < 0) {
    return showError('ageNow', "Your current age is required.");
  }
  if (ageNow <= 17) {
    return showError('ageNow', "Federal employees must be at least 18 years old.");
  }
  $('#ageNowAYR').html(ageNow);
  return clearError('ageNow');
}
function ageFromGood(submit) {
  if (!submit) {
    if ($("#ageFrom").val() == '') { return clearError('ageFrom'); }
  }
  var ageFrom = getPosInteger('ageFrom', -1);
  if (ageFrom > 0) { $('#ageFrom').val(ageFrom); }
  if (ageFrom > 99) { $('#ageFrom').val(99); }
  var ageNow = getPosInteger('ageNow', -1);

  if (ageFrom < 0) {
    return showError('ageFrom', "Age that you want to start receiving monthly income from the TSP is required.");
  }
  if (ageFrom <= 17) {
    return showError('ageFrom', "Federal employees must be at least 18 years old.");
  }
  if (ageNow >= 0) {
    if (ageFrom < ageNow) {
      return showError('ageFrom', "The age you start receiving income should be in the future.");
    }
  }

  $('#ageFromAYR').html(ageFrom);
  return clearError('ageFrom');
}
function ageToLiveGood(submit) {
  if (!submit) {
    if ($("#ageToLive").val() == '') { return clearError('ageToLive'); }
  }
  var ageToLive = getPosInteger('ageToLive', -1);
  if (ageToLive > 0) { $('#ageToLive').val(ageToLive); }
  if (ageToLive > 115) { $('#ageToLive').val(115); }
  var ageFrom = getPosInteger('ageFrom', -1);

  if (ageToLive < 0) {
    return showError('ageToLive', "Age that you want to start receiving monthly income from the TSP is required.");
  }
  if (ageToLive <= 17) {
    return showError('ageToLive', "Federal employees must be at least 18 years old.");
  }
  if (ageFrom >= 0) {
    if (ageToLive < ageFrom) {
      return showError('ageToLive', "The age you start receiving income should be in the future.");
    }
  }

  $('#ageToLiveAYR').html(ageToLive);
  return clearError('ageToLive');
}

function checkAges(submit) { return ageToLiveGood(submit) & ageFromGood(submit) & ageNowGood(submit); }

function getBirthMonthIdx(month) {
  var months = ["undecimber","January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  return months.indexOf(month.charAt(0).toUpperCase() + month.toLowerCase().slice(1));
}
function getBirthMonth() {
  var birthMonth = $('#birthMonth').val();
  return birthMonth;
}
function birthMonthGood(submit) {
  var birthMonth = getBirthMonth();

  if (birthMonth == 'Choose month') {
    if (submit) { return showError('birthMonth', "Birth month is required."); }
  }

  $('#birthMonthAYR').html(birthMonth);
  return clearError('birthMonth');
}
-->
</script>
