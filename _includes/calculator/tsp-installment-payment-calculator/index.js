{% assign maxPanels = include.maxPanels | 1 %}
<script type="text/javascript">
<!--

$(document).ready(function() {
  setMaxPanels({{ maxPanels }});
  showPanel(1);
  initValues(0);
  $('#resultSelector0Table').click();  // default to table view
  $('#resultSelector0Combined').click();  // default to table view
});

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
    $('#accountAmount').val(40000);
    $('#Annually').click();
    $('#rateOfReturn').val(2.5);
    $('#amountToReceive').val(2500);
    processPanel(2,0,3,0);
  }
  if (flag == 3) {
    setValues(2);
  }
}

-->
</script>
