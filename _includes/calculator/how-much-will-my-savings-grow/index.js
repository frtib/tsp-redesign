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
    setValues(3);
    showPanel(1);
  }
  if (flag == 2) {
    console.log('selecting options to show maximum contribution exceeded');
    $('#CSRS').click();
    processPanel(1,0,2,0);
  }
  if (flag == '2e') {
    setValues(2);
    $('#futureOnly').click();
    $('#yearsToContribute').val(5);
    $('#annualPay').val(100000);
    $('#annualPayPercent').val(47);
    $('#annualPayPercent').blur();
    $('#contributionPercentage').click();

    $(document).scrollTop($('#annualPay-div').position().top);
  }
  if (flag == 3) {
    // set all the fields
    $('#USBRS').click();
    processPanel(1,0,2,0);
    $('#bothGrowth').click();
    $('#yearsServed').val(12);
    DIEMS.setDate('July 17, 2001');
    $('#amountToUse').val(320000);
    $('#paySchedule').val('Monthly');
    $('#annualPay').val(32000);
    $('#yearsToContribute').val(5);
    $('#annualPayPercent').val(17);
    $('#annualPayIncreasePercent').val(2);
    $('#yearsToGo').val(10);
    $('#rateOfReturn').val(2.75);
    processPanel(2,0,3,0);
    $('#resultSelectorCombined').click();
  }
}

$(document).ready(function() {
  $('#resultSelectorCombined').click();
  setMaxPanels({{ maxPanels }});
  showPanel(1);

  initValues(0);
});

-->
</script>
