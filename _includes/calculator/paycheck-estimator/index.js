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
    $('#CSRS').click();
    processPanel(1,0,2,0);
  }
  if (flag == 2) {
    setValues(1);
    $('#grossPay').val(3999);
    $('#paySchedule').val('Biweekly');
    $('#paySchedule').val('Monthly');
    $('#taxStatusMarried').click();
    $('#fedAllowances').val(2);
    $('#additionalWithholding').val(25);
    $('#beforeDeduction').val(75);
    $('#afterDeduction').val(50);
    processPanel(2,0,3,0);
  }
  if (flag == 3) {
    setValues(2);
    $('#annualReturn').val(2.45);
    processPanel(3,0,4,0);
  }
  if (flag == 4) {
    setValues(2);
    $('#annualReturn').val(2.45);
    $('#trad_option1_f').click();
    $('#trad_option2_f').click();
    $('#roth_option1_f').click();
    $('#roth_option2_f').click();
    $('#trad_option1Amount').val(1000);
    $('#trad_option2Amount').val(1800);
    $('#roth_option1Amount').val(1100)
    $('#trad_option1Percent').val(1);
    $('#roth_option1Percent').val(2);
    processPanel(3,0,4,0);
  }
  if (flag == 9) {
    setValues(1);
    $('#grossPay').val(3999);
    $('#paySchedule').val('Biweekly');
    $('#paySchedule').val('Monthly');
    $('#taxStatusMarried').click();
    $('#fedAllowances').val(2);
    $('#additionalWithholding').val(25);
    $('#beforeDeduction').val(75);
    $('#afterDeduction').val(50);
    processPanel(2,0,3,0);
    $('#trad_option1_f').click();
    $('#trad_option2_f').click();
    $('#roth_option1_f').click();
    $('#roth_option2_f').click();
    $('#trad_option1Amount').val(1000);
    $('#trad_option2Amount').val(1800);
    $('#roth_option1Amount').val(1100)
    $('#trad_option1Percent').val(1);
    $('#roth_option1Percent').val(2);
    $('#annualReturn').val(2.5);
    processPanel(3,0,3,0);
  }
}

$(document).ready(function() {
  $('#resultSelectorCombined').click();
  setMaxPanels({{ maxPanels }});
  showPanel(1);
  $('#trad_option1_p').click();
  $('#trad_option2_p').click();
  $('#roth_option1_p').click();
  $('#roth_option2_p').click();

  initValues(0);
});

-->
</script>
