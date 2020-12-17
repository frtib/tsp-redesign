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
    setValues(8);
    showPanel(1);
  }
  if (flag == 2) {
    console.log('selecting options to show maximum contribution exceeded');
    processPanel(1,0,2,0);
  }
  if (flag == 3) {
    setValues(2);
    $('#payeePartYes').click();
    $('#relationshipSpouse').click();
    $('#receiveBoth').click();
    $('#partfullname').val('Sherlock Holmes');
    $('#payfullname').val('Joan Watson');

    processPanel(2,0,3,0);
  }
  if (flag == 4) {
    setValues(3);
    $('#partstreet1').val('42 Stanford Avenue');
    $('#partcity').val('Brooklyn');
    $('#partstate').val('NY');
    $('#partzip').val('11209');
    $('#partforeignAddress').click();
    $('#partfstreet').val('221B Baker Street');
    $('#partfcity').val('London');
    $('#partfpostal').val('NW1 6XE');
    $('#partfcountrylist').val('GB');
    $('#partphoneNum').val('+44 20 7224 3688');
    $('#partcivcb').click();
    $('#partcivacctNum').attr('data-store', '1111111111111');
    $('#partcivacctNum').val('1111111111111');
    $('#partBPAacctNum').attr('data-store', '3333333333333');
    $('#partBPAacctNum').val('3333333333333');
    setPlaceholder('#partcivacctNum', 13);
    processPanel(3,0,4,0);
  }
  if (flag == 5) {
    setValues(4);
    $('#paystreet1').val('42 Stanford Avenue');
    $('#paycity').val('Brooklyn');
    $('#paystate').val('NY');
    $('#payzip').val('11209');
    $('#payforeignAddress').click();
    $('#payfstreet').val('221B Baker Street');
    $('#payfcity').val('London');
    $('#payfpostal').val('NW1 6XE');
    $('#payfcountrylist').val('GB');
    $('#payphoneNum').val('+44 20 7224 3688');
    $('#paySSN').val('123456789');
    $('#payBPAacctNum').attr('data-store', '4444444444444');
    $('#payBPAacctNum').val('4444444444444');
    $('#payusvcb').click();
    $('#payusvacctNum').attr('data-store', '2222222222222');
    $('#payusvacctNum').val('2222222222222');
    setPlaceholder('#payusvacctNum', 13);
    processPanel(4,0,5,0);
  }
  if (flag == 6) {
    setValues(5);
    $('#partATLawyerYes').click();
    $('#payATLawyerYes').click();
    $('#QDROLawyerYes').click();
    $('#QDROisLawyerYes').click();
    $('#QDROretainer').val('Both');
    $('#partATfullname').val('Leslie Klinger');
    $('#partATlawfirm').val('Annotate LLC');
    $('#partATjurisdiction').val('District 36');
    $('#partATlicense').val('Chicago-0001');
    $('#partATstreet1').val('1 Solicitor Way');
    $('#partATcity').val('Malaibu');
    $('#partATstate').val('CA');
    $('#partATzip').val('90265');
    $('#partATphoneNum').val('310-123-4567');
    $('#partATfaxNum').val('310-456-7890');
    $('#payATfullname').val('Ty Morstan');
    $('#payATlawfirm').val('Brownstone Group');
    $('#payATjurisdiction').val('District 1');
    $('#payATlicense').val('DA-001');
    $('#payATstreet1').val('1 Hogan Place');
    $('#payATcity').val('New York');
    $('#payATstate').val('NY');
    $('#payATzip').val('10013');
    $('#payATphoneNum').val('212-335-9000');
    $('#payATfaxNum').val('212-335-3320');
    $('#QDROfullname').val('Gary Stewart');
    $('#QDROlawfirm').val('Brownstone Group');
    $('#QDROstreet1').val('2014 Agency St.');
    $('#QDROcity').val('New York');
    $('#QDROstate').val('NY');
    $('#QDROzip').val('10001');
    $('#QDROphoneNum').val('718-135-3000');
    $('#QDROfaxNum').val('718-135-9320');
    $('#QDROisjurisdiction').val('District 5');
    $('#QDROislicense').val('NY-0001');
    processPanel(5,0,6,0);
  }
  if (flag == 7) {
    setValues(6);
    $('#petitioner').val('pay');
    $('#courtName').val('court name');
    $('#jurisdiction').val('jurisdiciton');
    $('#caseNumber').val('case-number');
    $('#judgeName').val('Judge John Smith, court room 1');
    processPanel(6,0,7,0);
  }
  if (flag == 8) {
    setValues(7);
    processPanel(7,0,8,0);
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
