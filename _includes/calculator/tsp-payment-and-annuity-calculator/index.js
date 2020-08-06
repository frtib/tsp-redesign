{% assign maxPanels = include.maxPanels | 1 %}
<script type="text/javascript">
<!--

function initValues(def) {
  var doSetValues = getQueryString('doSetValues');
  if (typeof doSetValues === 'undefined') { doSetValues = def; }
  if (doSetValues) {
    setValues(doSetValues);
  }
}

function setValues(flag) {
  if (flag == 1) {
    console.log('selecting options to show maximum contribution exceeded');
    processPanel(1,0,2,0);
  }
  if (flag == 2) {
    setValues(1);
    $('#amountToUse').val(300000)
    processPanel(2,0,3,0);
  }
  if (flag == 3) {
    setValues(2);
    $('#ageNow').val(40);
    $('#ageFrom').val(65);
    $('#ageToLive').val(95);
    $('#birthMonth').val('March');
    processPanel(3,0,4,0);
  }
  if (flag == 4) {
    setValues(3);
    $('#amountToReceive').val(500);
    $('#rateOfReturn').val(3.235);
    processPanel(4,0,5,0);
  }
  if (flag == 5) {
    setValues(4);
    $('#haveDependentYes').click();
    $('#dependentSpouse').click();
    $('#dependentAge').val(20);
    processPanel(5,0,6,0);
  }
}

$(document).ready(function() {
  setMaxPanels({{ maxPanels }});
  showPanel(1);
  initValues(0);

  $('#resultSetOverview').click();
  $('#resultSelectorOverviewCombined').click();
  $('#resultSelectorMonthlyCombined').click();
  $('#resultSelectorSingleCombined').click();
  $('#resultSelectorSpouseCombined').click();
  $('#resultSelectorOtherCombined').click();
});
-->
</script>
