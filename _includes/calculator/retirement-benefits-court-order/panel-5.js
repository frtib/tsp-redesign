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
    return true;
}

// my functions
panelSure[5] = function(submit) {
  return panelTest(submit, 1);
};
function panelTest(submit, warn) {
  var partAT = true;
  var payAT = true;
  var QDRO = true;
  if ($('#partATLawyerYes').prop('checked')) {
    $("#AYRpartATnoblock").hide();
    $("#AYRpartATblock").show();
    partAT = checkAT(submit, warn, 'partAT');
  } else {
    $("#AYRpartATblock").hide();
    $("#AYRpartATnoblock").show();
  }
  if ($('#payATLawyerYes').prop('checked')) {
    $("#AYRpayATnoblock").hide();
    $("#AYRpayATblock").show();
    payAT = checkAT(submit, warn, 'payAT');
  } else {
    $("#AYRpayATblock").hide();
    $("#AYRpayATnoblock").show();
  }
  if ($('#QDROLawyerYes').prop('checked')) {
    $("#AYRQDROATnoblock").hide();
    $("#AYRQDROATblock").show();
    QDRO = QDROretainerGood(submit) & checkAT(submit, warn, 'QDRO');
  } else {
    $("#AYRQDROATblock").hide();
    $("#AYRQDROATnoblock").show();
  }
  return (partAT & payAT & QDRO);
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
    var prefix2 = 'QDROis';
    QDROflag = licenseGood(0, warn, prefix2) & jurisdictionGood(0, warn, prefix2) & isLawyerGood(submit, prefix2);
  } else {
    QDROflag = lawfirmGood(0, warn, prefix) & licenseGood(0, warn, prefix) & jurisdictionGood(0, warn, prefix);
  }
  // console.log ('f' + fullnameGood(0, warn, prefix) + ' l ' + lawfirmGood(submit, warn, prefix) + ' a ' + addressGood(0, warn, prefix)) + ' g ' + QDROflag;
  return (fullnameGood(0, warn, prefix) & addressGood(0, warn, prefix)) & QDROflag;
}
function getQDROretainer() { return $('#QDROretainer').val(); }
function QDROretainerGood(submit) {
  var QDROretainer = getQDROretainer();
console.log('QDROretainerGood |', QDROretainer, '|');

  if (QDROretainer == 'Select') {
    console.log('error QDROretainerGood |', QDROretainer, '|');
    if (submit) { return showError('QDROretainer', "Select one."); }
  }

  console.log('clear QDROretainerGood |', QDROretainer, '|');
  $('#QDROretainerGood-panel3').html(QDROretainer);
  return clearError('QDROretainer');
}
-->
</script>
