{% comment %}
This is the javascript specific to panel 1.
{% endcomment %}
{% assign panelID = include.panelID | default: 1 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return age50Good(forceValue);
};

panelEnter[{{ panelID }}] = function(panel) {
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    var yearChoosen = $('#review-year').val();
    $('.year-choosen').html(yearChoosen);
    return true;
}

function buildDropdown(selectedValue) {
  var dd = $('#review-year');
  var selected = '';
  dd.empty();
  for (var i = taxMaxYear-1; i <= taxMaxYear; i++) {  // limits from js tax file
    if (i == selectedValue) { selected = ' selected=selected'; } else { selected = ''; }
    dd.append('<option'+selected+' value="'+i+'">'+i+'</option>');
  }
  // dd.val(selectedValue);
  return true;
}
function reviewYearChange() {
  $('#age50year').html($('#review-year').val());
  $('#age50').prop('checked', false);
}
function setDropdownDefault() {
  var defaultYear = constrainYear(determineActingYear());
  buildDropdown(defaultYear);
  reviewYearChange();
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

// getContributionLimit moved to javascriptTaxTable.js

$(document ).ready(function() {
if (panelEnter[1]) { panelEnter[1](1); }
if (panelExit[1]) { panelExit[1](1); }
});
-->
</script>
