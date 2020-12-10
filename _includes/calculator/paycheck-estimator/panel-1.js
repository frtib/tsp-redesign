prop{% comment %}
This is the javascript specific to panel 1.
{% endcomment %}
{% assign panelID = include.panelID | default: 1 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return rsGood(forceValue) & age50Good(forceValue);
};

panelEnter[{{ panelID }}] = function(panel) {
  // $('#age50year').html(IRC_limit_year);
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
  rsExit();
  return true;
}

// my functions
function getRetirementSystem() {
  if ($('#FERS').prop('checked')) { return 'FERS'; }
  if ($('#CSRS').prop('checked')) { return 'CSRS'; }
  if ($('#US').prop('checked')) { return 'US'; }
  if ($('#USBRS').prop('checked')) { return 'USBRS'; }
  if ($('#BP').prop('checked')) { return 'BP'; }
  return '';
}
function rsShowHide(rs) {

  if ((rs == 'FERS') || (rs == 'CSRS')) {
    hidePaySchedule(false);
    $('#agencyFootnote').removeClass('hide');
    $('#serviceFootnote').addClass('hide');
  } else {
    hidePaySchedule(true);
    $('#agencyFootnote').addClass('hide');
    $('#serviceFootnote').removeClass('hide');
  }
  if ((rs == 'FERS') || (rs == 'URBRS')) {
    $('#partContrib').removeClass('hide');
    $('#autoContrib').removeClass('hide');
    $('#matchContrib').removeClass('hide');
  } else {
    $('#partContrib').addClass('hide');
    $('#autoContrib').addClass('hide');
    $('#matchContrib').addClass('hide');
  }
  return;
}

function setPanel3text(rs) {
  if (rs == 'FERS') {
    $('#FERS-intro').removeClass('hide');
    $('#USBRS-intro').addClass('hide');
    $('#USV-intro').addClass('hide');
    $('#USV-note').addClass('hide');
    return;
  }
  // if (rs == 'CSRS') { return; }
  if (rs == 'USBRS') {
    $('#FERS-intro').addClass('hide');
    $('#USBRS-intro').removeClass('hide');
    $('#USV-intro').removeClass('hide');
    $('#USV-note').removeClass('hide');
    return;
  }
  if (rs == 'US') {
    $('#FERS-intro').addClass('hide');
    $('#USBRS-intro').addClass('hide');
    $('#USV-intro').removeClass('hide');
    $('#USV-note').removeClass('hide');
    return;
  }
  $('#FERS-intro').addClass('hide');
  $('#USBRS-intro').addClass('hide');
  $('#USV-intro').addClass('hide');
  $('#USV-note').addClass('hide');
  return;
}

function rsExit() {
  var rs = getRetirementSystem();
  setPanel3text(rs);

  if (rs == 'FERS') {
    rsShowHide('FERS');
    $('#retirementSystem').html('FERS');
    $('#lblAYRretirementSystem').html($('#retirementSystem').html());
    return clearError('rs');
  }

  if (rs == 'CSRS') {
    rsShowHide('CSRS');
    $('#retirementSystem').html('CSRS');
    $('#lblAYRretirementSystem').html($('#retirementSystem').html());
    return clearError('rs');
  }

  if (rs == 'US') {
    rsShowHide('US');
    $('#retirementSystem').html('Uniformed Services: All Other Systems');
    $('#lblAYRretirementSystem').html($('#retirementSystem').html());
    return clearError('rs');
  }

  if (rs == 'USBRS') {
    rsShowHide('USBRS');
    $('#retirementSystem').html('Uniformed Services: Blended Retirement System');
    $('#lblAYRretirementSystem').html($('#retirementSystem').html());
    return clearError('rs');
  }

  return showError('rs', "Select your retirement system.");
}

function rsGood(submit) {
  var rs = getRetirementSystem();
  if (rs == '') {
    if (submit) { return showError('rs', "Select your retirement system."); }
  }
  return clearError('rs');
}

function getAge50() {
  if ($('#age50Yes').prop('checked')) { return 'age50Yes'; }
  if ($('#age50No').prop('checked')) { return 'age50No'; }
  return '';
}
function age50Good(submit) {
  var age50 = getAge50();
  if (age50 == '') {
    if (submit) { return showError('age50', "Your response is required."); }
  }
  return clearError('age50');
}

-->
</script>
