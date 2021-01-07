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
    processPanel(1,0,2,0);
  }
  if (flag == 3) {
    setValues(2);
    $('#cccYearsUntilRetirement').val(23);
    $('#age50Yes').click();
    $('#cccYearsInRetirement').val(34);
    $('#cccSalary').val(100000);
    $('#cccInterestRate').val(2.74698);
    $('#cccContributions').val(20.0);
    $('#cccTaxRateNow').val(32.56987);
    $('#cccTaxRateLater').val(12.34568);
    $('#paySchedule').val('Monthly');
    $('#cccEqualContribution').click();
    processPanel(2,0,3,0);
  }
}

$(document).ready(function() {
  setMaxPanels({{ maxPanels }});
  showPanel(1);

  initValues(0);
});
-->
</script>
