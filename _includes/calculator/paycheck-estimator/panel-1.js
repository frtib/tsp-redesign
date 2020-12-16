prop{% comment %}
This is the javascript specific to panel 1.
{% endcomment %}
{% assign panelID = include.panelID | default: 1 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return rsGood(true);
};

panelEnter[{{ panelID }}] = function(panel) {
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

function rsExit() {
  var rs = getRetirementSystem();

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

-->
</script>
