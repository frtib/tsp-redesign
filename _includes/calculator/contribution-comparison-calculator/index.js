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
    processPanel(1,0,2,0);
    $('#cccYearsUntilRetirement').val(23);
    $('#cccYearsInRetirement').val(34);
    $('#cccSalary').val(57693);
    $('#cccInterestRate').val(2.74698);
    $('#cccContributions').val(15.0);
    $('#cccTaxRateNow').val(32.56987);
    $('#cccTaxRateLater').val(12.34568);
    $('#paySchedule').val('Monthly');
    processPanel(2,0,3,0);
  }
  if (flag == 2) {
    processPanel(1,0,2,0);
    $('#cccYearsUntilRetirement').val(23);
    $('#cccYearsInRetirement').val(34);
    $('#cccSalary').val(100000);
    $('#cccInterestRate').val(2.74698);
    $('#cccContributions').val(40.0);
    $('#cccTaxRateNow').val(32.56987);
    $('#cccTaxRateLater').val(12.34568);
    $('#paySchedule').val('Monthly');
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
