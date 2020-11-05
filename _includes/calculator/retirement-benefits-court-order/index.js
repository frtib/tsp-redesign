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
    $('#payeePartYes').click();
    $('#relationshipSpouse').click();
    $('#receiveBoth').click();
    $('#partfullname').val('Sherlock Holmes');
    $('#payfullname').val('Jane Watson');

    processPanel(2,0,3,0);
  }
  if (flag == 3) {
    setValues(2);
    $('#partcivcb').click();
    $('#partcivacctNum').attr('data-store', '1111111111111');
    $('#partcivacctNum').val('1111111111111');
    setPlaceholder('#partcivacctNum', 13);
    processPanel(3,0,4,0);
  }
  if (flag == 4) {
    setValues(3);
    $('#payusvcb').click();
    $('#payusvacctNum').attr('data-store', '2222222222222');
    $('#payusvacctNum').val('2222222222222');
    setPlaceholder('#payusvacctNum', 13);
    processPanel(4,0,5,0);
  }
}

function setAccountPanelPlaceholders(prefix) {
  accountNumberTSP(prefix+"civacctNum");
  setPlaceholder('#'+prefix+"civacctNum", 13);
  accountNumberTSP(prefix+"usvacctNum");
  setPlaceholder('#'+prefix+"usvacctNum", 13);
  accountNumberTSP(prefix+"BPAacctNum");
  setPlaceholder('#'+prefix+"BPAacctNum", 13);
}

$(document).ready(function() {
  setMaxPanels({{ maxPanels }});
  showPanel(1);
  initValues(0);

  setAccountPanelPlaceholders('part');
  setAccountPanelPlaceholders('pay');
  accountNumberTSP("paySSN");
  setPlaceholder("#paySSN", 9);
});
-->
</script>
