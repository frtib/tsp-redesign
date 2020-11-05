{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return true;
};

panelEnter[{{ panelID }}] = function(panel) {
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

// my functions
function getHaveDependent() {
  if ($('#haveDependentYes').prop('checked')) { return 'Yes'; }
  if ($('#haveDependentNo').prop('checked')) { return 'No'; }
  return '';
}
function haveDependentGood(submit) {
  var haveDependent = getHaveDependent();
  $('#haveDependentAYR').html(haveDependent);

  if (haveDependent == 'Yes') {
    $('#has-a-dependent').removeClass('hide');
    $('#dependentAYR-row').removeClass('hide');
    $('#dependentAgeAYR-row').removeClass('hide');
    return clearError('haveDependent');
  }

  $('#has-a-dependent').addClass('hide');
  $('#dependentAYR-row').addClass('hide');
  $('#dependentAgeAYR-row').addClass('hide');

  if (haveDependent == 'No') { return clearError('haveDependent'); }

  if (submit) { return showError('haveDependent', "Dependent information is required."); }
  return clearError('haveDependent');
}

function getDependent() {
  if ($('#dependentSpouse').prop('checked')) { return 'Spouse'; }
  if ($('#dependentOther').prop('checked')) { return 'Other'; }
  return '';
}
function dependentGood(submit) {
  var dependent = getDependent();
  $('#dependentAYR').html(dependent);
  if (getHaveDependent() != 'Yes') { return clearError('dependent'); }

  if (dependent == '') { if (submit) { return showError('dependent', "Dependent information is required."); } }

  return clearError('dependent');
}

function dependentAgeGood(submit) {
  if (getHaveDependent() != 'Yes') { return clearError('dependent'); }
  if (!submit) {
    if ($("#dependentAge").val() == '') { return clearError('dependentAge'); }
  }
  var dependentAge = getPosInteger('dependentAge', -1);
  if (dependentAge > 99) { dependentAge = 99; }
  if (dependentAge > 0) {
    $('#dependentAge').val(dependentAge);
    $('#dependentAgeAYR').html(dependentAge);
  }

  if (dependentAge < 0) {
    return showError('dependentAge', "Your joint annuitant's current age is required.");
  }
  //$('#lblAYRgrossPay').html(CurrencyFormatted(grossPay));
  return clearError('dependentAge');
}


-->
</script>
