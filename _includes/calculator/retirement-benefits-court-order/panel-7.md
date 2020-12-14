{% comment %}
Awards panel (7) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 7 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}
{% assign maxAwards = 6 %}
<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% include calculator/div-panel-form-field.html
  fieldID="panel-2.3" id="showAccountNumbers"  H2="Award builder" anchor="awards"
  inputType="selectList" inputClass="" radioIDs="F,P,A"
  radioLabels="Fully redact all personal information,Partially redact all personal information,Allow all personal information"
  onBlur="buildStrings(0);" prompt="Please select one of the following based on the rules of your jurisdiction:"
  explanation=pay_schedule_explanation
%}

{% for awardNum in (1..maxAwards) %}
<ul class="usa-accordion icons">
{% include calculator/retirement-benefits-court-order/award-section.html awardNum=awardNum maxAwards=maxAwards %}
</ul>
{% endfor %}
{% capture bonusButton2 %}
<button type="button" class="usa-button-secondary build" onclick="activateAward();" markdown="1">Build another award</button>
{% endcapture %}
{% include calculator/button-block.html panelID=panelID prev=6 bonusButton2=bonusButton2 submit=8 %}

</section>
