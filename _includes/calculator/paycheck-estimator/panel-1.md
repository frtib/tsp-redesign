{% comment %}
Retirement System panel (1) for Paycheck Estimator.
{% endcomment %}
{% assign panelID = include.panelID | default: 1 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}" markdown="1">

{% capture FERS %}<span data-term="Federal Employees' Retirement System (FERS)" class="js-glossary-toggle term term-end">FERS</span>,{% endcapture %}
{% capture CSRS %}<span data-term="Civil Service Retirement System (CSRS)" class="js-glossary-toggle term term-end">CSRS</span>,{% endcapture %}
{% capture USBRS %}<span data-term="Uniformed Services" class="js-glossary-toggle term term-end">Uniformed Services: BRS</span>,{% endcapture %}
{% capture US %}<span data-term="Non-BRS Uniformed Services" class="js-glossary-toggle term term-end">Uniformed Services: non-BRS</span>,{% endcapture %}
{% capture BP %}<span data-term="Beneficiary Participant" class="js-glossary-toggle term term-end">Beneficiary Participant</span>{% endcapture %}
{% assign radioLabelList = FERS | append: CSRS | append: USBRS | append: US %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-1.1" id="rs"
  inputType="radio" radioIDs="FERS, CSRS, USBRS, US"  radioLabels=radioLabelList
  inputClass="usa-unstyled-list"  onBlur="rsGood(true);"  prompt="Retirement system"
  explanation=""
%}
{% capture explanation_1_2 %}
Participants turning age 50 or older are eligible for catch-up contributions. We'll take that into account when calculating how much you can contribute.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-1.2" id="age50"
  inputType="radio" radioIDs="age50Yes, age50No" radioLabels="Yes, No"
  inputClass="usa-unstyled-list"   onBlur="age50Good(false);"
  prompt='Will you turn age 50 or older in <span id="age50year">this year</span>?'
  explanation=explanation_1_2
%}


{% include calculator/button-block.html panelID=panelID next=2 %}

</section> <!-- end div#panel -->
