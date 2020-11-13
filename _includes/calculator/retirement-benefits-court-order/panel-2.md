{% comment %}
Scenario panel (2) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

<h2>Case details</h2>

{% include calculator/div-panel-form-field.html outerDivID="bothParticipants"
  fieldID="panel-2.1" id="payeePart"  anchor="panel2"
  inputType="radio" radioIDs="payeePartYes, payeePartNo" radioLabels="Yes, No"
  inputClass="usa-unstyled-list"   onBlur="panel2Good(false);"
  prompt="Are both parties TSP participants?"
  explanation=""
%}

{% include calculator/div-panel-form-field.html  outerDivID="partyRelationship"
  fieldID="panel-2.2" id="relationship"
  inputType="radio" radioIDs="relationshipSpouse, relationshipDependent, relationshipOther"
  radioLabels="Current or former spouse, Child or dependent, Other"
  inputClass="usa-unstyled-list"   onBlur="panel2Good(false);"
  prompt="Select the parties' relationship to one another"
  explanation=""
%}

{% include calculator/div-panel-form-field.html  outerDivID="howDivided"
  fieldID="panel-2.3" id="receive"
  inputType="radio" radioIDs="receiveBoth, receiveOne" radioLabels="Yes, No"
  inputClass="usa-unstyled-list"   onBlur="panel2Good(false);"
  prompt="Are both parties' accounts being divided as a result of this court order?"
  explanation=""
%}

{% comment %}Start of multi-input block for parties' names.  We must close <div> at end{% endcomment %}
{% include calculator/div-panel-form-field.html outerDivID="partyNames"
  fieldID="panel-2.4" inputType="none" explanation=''  dontCloseOuterDiv=true
%}
<p id="namesInstruction">You have indicated ...</p>
{% capture partNameGlossary %}
<label id="partfullname-glabel" class="usa-input-error-label" for="partfullname"><span data-term="participant" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Participant’s name</span>:</label>
{% endcapture %}
{% include calculator/div-panel-form-field.html  inputType="text" maxLength=30
  fieldID="panel-2.5" id="partfullname" bonusLabel=partNameGlossary
  placeholder="" onBlur="partfullnameGood(false);"
  prompt="Party 1 name:" explanation=""  dontOpenOuterDiv=true
%}

{% capture payNameGlossary %}
<label id="payfullname-glabel" class="usa-input-error-label" for="payfullname"><span data-term="payee" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Payee’s name</span>:</label>
{% endcapture %}
{% include calculator/div-panel-form-field.html inputType="text" maxLength=30
  fieldID="panel-2.6" id="payfullname" bonusLabel=payNameGlossary
  placeholder="" onBlur="payfullnameGood(false);"
  prompt="Party 2 name:" explanation=""  dontOpenOuterDiv=true
%}
</div>{% comment %}End of multi-input block for parties' names.{% endcomment %}


{% include calculator/button-block.html panelID=panelID prev=1 next=3 %}

</section>
