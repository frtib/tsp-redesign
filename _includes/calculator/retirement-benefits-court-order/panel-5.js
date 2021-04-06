{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  var choicesMade = isLawyerGood(forceValue, 'QDRO') & isLawyerGood(forceValue, 'payAT') & isLawyerGood(forceValue, 'partAT');
  if (!choicesMade) { return false; }
  return panelTest(forceValue, 0);
};

panelEnter[{{ panelID }}] = function(panel) {
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    panelGood[{{panelID}}](0);
    return true;
}

// my functions
panelSure[{{ panelID }}] = function(submit) {
  return panelTest(submit, 1);
};
function panelTest(submit, warn) {
  var partAT = true;
  var payAT = true;
  var QDRO = true;
  var txt = '';
  var partyFlag = getReceive();
  if ($('#partATLawyerYes').prop('checked')) {
    txt = AYRaddressString('partAT');
    partAT = checkAT(submit, warn, 'partAT');
  } else {
    if (partyFlag == 'Both') {
      txt = 'No party 1 attorney indicated.';
    } else {
      txt = 'No participant attorney indicated.';
    }
  }
  $("#partATAYR").html(txt);
  if ($('#payATLawyerYes').prop('checked')) {
    txt = AYRaddressString('payAT');
    payAT = checkAT(submit, warn, 'payAT');
  } else {
    if (partyFlag == 'Both') {
      txt = 'No party 2 attorney indicated.';
    } else {
      txt = 'No payee attorney indicated.';
    }
  }
  $("#payATAYR").html(txt);
  if ($('#QDROLawyerYes').prop('checked')) {
    txt = AYRaddressString('QDRO');
    QDRO = QDROretainerGood(submit) & checkAT(submit, warn, 'QDRO');
    $('#RBCOretainedAYR').html('Yes');
    $('#RBCOretainedAYR-row').removeClass('hide');
  } else {
    $('#RBCOretainedAYR').html('No');
    $('#RBCOretainedAYR-row').addClass('hide');
    txt = 'No RBS indicated.';
  }
  $("#QDROAYR").html(txt);
  return (partAT & payAT & QDRO);
}
function AYRaddressString(prefix) {
  var rc = '';
  var name = $('#'+prefix+'fullname').val();
  if (name != '') { rc += name + "<BR>\n"; }
  if (prefix != 'QDRO') {
    var lawfirm = $('#'+prefix+'lawfirm').val();
    if (lawfirm != '') { rc += "<strong>Lawfirm</strong>:<BR>\n" + lawfirm + '<BR>\n'; }
  }
  if ((prefix != 'QDRO') || ($('#'+prefix+'LawyerYes').prop('checked'))) {
    var jurisdiction = $('#'+prefix+'jurisdiction').val();
    if (jurisdiction != '') { rc += "<strong>Jurisdiction</strong>:<BR>\n" + jurisdiction + '<BR>\n'; }
    var license = $('#'+prefix+'license').val();
    if (license != '') { rc += "<strong>License</strong>:<BR>\n" + license + '<BR>\n'; }
  }
  var addr = getAddressString(prefix);
  if (addr != '') { rc += "<strong>Address</strong>:<BR>\n" + addr + '<BR>\n'; }
  var phoneNum = $('#'+prefix+'phoneNum').val();
  if (phoneNum != '') { rc += phoneNum + " (T)<BR>\n"; }
  var faxNum = $('#'+prefix+'faxNum').val();
  if (faxNum != '') { rc += faxNum + " (F)\n"; }
/*
<td>
<!-- DAV, you can either wrap each line in a <div> or add <br> after each line, whichever is easier -->
  Jack Doe, Esq.<br>
  <strong>Law Firm</strong>:<br>
  Doe and Associates LLC<br>
  <strong>Bar License Number</strong>:<br>
  DC 123456789<br>
  <strong>Address:</strong><br>
  77 K Street NE<br>
  WASHINGTON DC 20002<br>
  202-942-1464 (T)
</td>
*/
  return rc;
}
function isLawyerGood(submit, prefix) {
  if ($('#'+prefix+'LawyerNo').prop('checked')) {
    return clearError(prefix+'Lawyer');
  }
  if ($('#'+prefix+'LawyerYes').prop('checked')) {
    return clearError(prefix+'Lawyer');
  }
  if (submit) { return showError(prefix+'Lawyer', "This question is required."); }
  return clearError(prefix+'Lawyer');
}
function pickLawyer(submit, flag, role) {
  if (flag == 'Y') {
    $('#' + role + 'LawyerPanel').show();
    processWarnLastPanel();
    return clearError(role + 'Lawyer');
  }
  if (flag == 'N') {
    $('#' + role + 'LawyerPanel').hide();
    processWarnLastPanel();
    return clearError(role + 'Lawyer');
  }
  if (submit) { return showError(role + 'Lawyer', "This question is required"); }
  return clearError(role + 'Lawyer');
}
function checkAT(submit, warn, prefix) {
  var QDROflag = false;
  if (prefix == 'QDRO') {
    QDROflag = licenseGood(0, warn, prefix) & jurisdictionGood(0, warn, prefix) & isLawyerGood(submit, prefix+'is');
  } else {
    QDROflag = lawfirmGood(0, warn, prefix) & licenseGood(0, warn, prefix) & jurisdictionGood(0, warn, prefix);
  }
  // console.log ('f' + fullnameGood(0, warn, prefix) + ' l ' + lawfirmGood(submit, warn, prefix) + ' a ' + addressGood(0, warn, prefix)) + ' g ' + QDROflag;
  return (fullnameGood(0, warn, prefix) & addressGood(0, warn, prefix)) & QDROflag;
}
function getQDROretainer() { return $('#QDROretainer').val(); }
function QDROretainerGood(submit) {
  var QDROretainer = getQDROretainer();
  // console.log('QDROretainerGood |', QDROretainer, '|');

  if (QDROretainer == 'Select') {
    // console.log('error QDROretainerGood |', QDROretainer, '|');
    if (submit) { return showError('QDROretainer', "Select one."); }
  }

  // console.log('clear QDROretainerGood |', QDROretainer, '|');
  $('#QDROretainerGood-panel3').html(QDROretainer);
  return clearError('QDROretainer');
}
-->
</script>
