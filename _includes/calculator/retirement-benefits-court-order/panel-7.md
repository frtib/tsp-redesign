{% comment %}
Awards panel (7) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 7 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}
{% assign maxAwards = 6 %}
<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% capture redact_explanation %}
Most court files may be viewed by the public. Some jurisdictions require that certain personal information be protected from public disclosure. This can be done by redacting, either fully or partially, the personal information in the court order and providing the information in Form TSP-92C, <i>TSP Personal Information Form</i>.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.3" id="showAccountNumbers"  H2="Award builder" anchor="awards"
  inputType="selectList" inputClass="" radioIDs="F,P,A"
  radioLabels="Fully redact all personal information,Partially redact all personal information,Allow all personal information"
  onBlur="buildStrings(0);" prompt="Please select one of the following based on the rules of your jurisdiction:"
  explanation=redact_explanation
%}

{% for awardNum in (1..maxAwards) %}
<ul id="{{awardNum}}awardActiveDiv" class="usa-accordion-bordered award {% if awardNum >= 2 %}hide{% endif %}">
<input id="{{awardNum}}awardActive" type="hidden" value="{% if awardNum >= 2 %}0{% else %}1{% endif %}">
{% include calculator/retirement-benefits-court-order/award-section.html awardNum=awardNum maxAwards=maxAwards %}
</ul>
{% endfor %}
{% capture bonusButton2 %}

{% comment %}
DAV, I added missing <li> tags around the 'Build another award' button to correct layout irregularity.
{% endcomment %}
<li>
<button id="buildAnotherButton" type="button" class="usa-button-secondary build" onclick="activateAward();" markdown="1">Build another award</button>
</li>
{% endcapture %}
{% include calculator/button-block.html panelID=panelID prev=6 bonusButton2=bonusButton2 showResults=8 %}

</section>
