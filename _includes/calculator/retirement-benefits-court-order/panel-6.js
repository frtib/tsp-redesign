{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return petitionerGood(forceValue) & courtNameGood(0, 0, '')
      & jurisdictionGood(0, 0, '') & caseNumberGood(0, 0, '')
      & judgeNameGood(0, 0, '');
};

panelEnter[{{ panelID }}] = function(panel) {
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}
panelSure[{{ panelID }}] = function(forceValue) {
  return petitionerGood(forceValue) & courtNameGood(0, forceValue, '')
      & jurisdictionGood(0, forceValue, '') & caseNumberGood(0, forceValue, '')
      & judgeNameGood(0, forceValue, '');
};


// my functions
function getpetitioner() { return $('#petitioner').val(); }
function petitionerGood(submit) {
  var petitioner = getpetitioner();
  // console.log('petitionerGood |', petitioner, '|');

  if (petitioner == 'Select') {
    // console.log('error petitionerGood |', petitioner, '|');
    if (submit) { return showError('petitioner', "Select petitioner."); }
  }

  // console.log('clear petitionerGood |', petitioner, '|');
  $('#petitionerGood-panel3').html(petitioner);
  return clearError('petitioner');
}

function courtNameGood(submit, writein, role) { launderInput('courtName'); return stringGood2(submit, writein, role, 'courtName', "Enter court name.");}
function jurisdictionGood(submit, writein, role) { launderInput('jurisdiction'); return stringGood2(submit, writein, role, 'jurisdiction', "Enter jurisdiction.");}
function caseNumberGood(submit, writein, role) { launderInput('caseNumber'); return stringGood2(submit, writein, role, 'caseNumber', "Enter case number.");}
function judgeNameGood(submit, writein, role) { launderInput('judgeName'); return stringGood2(submit, writein, role, 'judgeName', "Enter judge name.");}

-->
</script>
