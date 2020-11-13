{% comment %}
Case panel (6) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 6 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% include calculator/div-panel-form-field.html  
  outerDivID="caseDetailsDiv" outerDivClass=""
  fieldID="panel-6.0" inputType="none" H2="Case information" anchor="caseInformation"
  explanation=""  dontCloseOuterDiv=true
%}

{% include calculator/div-panel-form-field.html
  fieldID="panel-petitioner" id="petitioner"  inputType="selectList"
  radioIDs="Select,part,pay"
  radioLabels="Select one,Party 1 is the petitioner,Party 2 is the petitioner"
  inputClass="" onBlur="petitionerGood(0);" prompt="Select a petitioner from the drop-down list."
  explanation=""  dontOpenOuterDiv=true
%}

{% assign altFormFields = "calculator/retirement-benefits-court-order/address-form-field.html" %}
{% include {{altFormFields}} prefix="" field='courtName' prompt="Court name:" maxLength=50 %}
{% include {{altFormFields}} prefix="" field='jurisdiction' prompt="State/jurisdiction:" maxLength=20 %}
{% include {{altFormFields}} prefix="" field='caseNumber' prompt="Case number:" maxLength=50 %}
{% include {{altFormFields}} prefix="" field='judgeName' prompt="Judge's name and court room:" maxLength=50 %}

</div>{% comment %}End of multi-input block case information{% endcomment %}


{% include calculator/button-block.html panelID=panelID prev=5 next=7 nextOK=7 %}

</section>
