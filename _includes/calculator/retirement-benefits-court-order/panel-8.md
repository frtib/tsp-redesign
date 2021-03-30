{% comment %}
Summary panel (8) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 8 %}
{% assign hide = 'display: block;' %}
{% assign gridClass2 = include.gridClass2 | default: 'results' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel " style="{{ hide }}" markdown="1">

Review the input below. Click “Change” to alter your selections. Click the “Generate PDF” button to create the court order.

<ul class="usa-accordion icons adjust">
<!-- ADJUST YOUR RESULTS -->
{% include calculator/accordion-start.html expanded=true divID='adjust-results'
    icon='fal fa-sliders-v' title='Adjust your results' inList=true %}

{% include calculator/AYR-table.html caption="Court order details" showPanel=2 gotoAnchor='panel2' %}
{% include calculator/AYR-table-row.html prompt="Are both parties TSP participants?:" rowID='payeePartAYR' %}
{% include calculator/AYR-table-row.html prompt="Relationship:" rowID='relationshipAYR' %}
{% include calculator/AYR-table-row.html closeTable=true prompt="Are both parties' accounts being divided?:" rowID='receiveBothAYR' %}

{% include calculator/AYR-table.html caption="<span id='partAYR'>Participant</span> information" showPanel=3 gotoAnchor='panel3' %}
{% include calculator/AYR-table-row.html prompt="Name:" rowID='partfullnameAYR' %}
{% include calculator/AYR-table-row.html prompt="Account number:" rowID='partacctNumAYR' named=true %}
{% include calculator/AYR-table-row.html closeTable=true prompt="BPA account number:" rowID='partBPAacctNumAYR' named=true %}

{% include calculator/AYR-table.html caption="<span id='payAYR'>Payee</span> information" showPanel=4 gotoAnchor='panel4' %}
{% include calculator/AYR-table-row.html prompt="Name:" rowID='payfullnameAYR' %}
{% include calculator/AYR-table-row.html prompt="Social Security number:" rowID='paySSNAYR' named=true %}
{% include calculator/AYR-table-row.html prompt="Account number:" rowID='payacctNumAYR' named=true %}
{% include calculator/AYR-table-row.html closeTable=true prompt="BPA account number:" rowID='payBPAacctNumAYR' named=true %}

{% include calculator/AYR-table.html caption="Attorney information" showPanel=5 gotoAnchor='panel5' %}
{% include calculator/AYR-table-row.html prompt="Participant attorney" rowID='partATAYR' named=true %}
{% include calculator/AYR-table-row.html closeTable=true prompt="Payee attorney" rowID='payATAYR' named=true %}

{% include calculator/AYR-table.html caption="Retirement Benefits Specialist (RBS)" showPanel=5 gotoAnchor='panel5' %}
{% include calculator/AYR-table-row.html closeTable=true prompt="RBS retained:" rowID='RBCOretainedAYR' named=true %}

{% include calculator/AYR-table.html caption="Case/Account information" showPanel=6 gotoAnchor='panel6' %}
{% include calculator/AYR-table-row.html closeTable=true prompt="Judge name" rowID='judgeAYR' named=true %}

{% include calculator/AYR-table.html caption="Awards" showPanel=7 gotoAnchor='panel7' %}
{% for awardNum in (1..maxAwards) %}
{% assign awardNumDot = awardNum | append: "." %}
{% assign awardRowID = awardNum | append: 'AwardtextAYR' %}
{% include calculator/AYR-table-row.html prompt=awardNumDot rowID=awardRowID named=true %}
{% endfor %}
{% include calculator/AYR-table-row.html closeTable=true prompt=" " rowID='xAwardtextAYR' %}


{% include calculator/accordion-end.html  inList=true %}
</ul>


{% capture bonusButton2 %}
<li><button id="generatePDF" class="usa-button primary" onclick="generatePDF();" markdown="1">Generate PDF</button></li>
{% endcapture %}
{% include calculator/button-block.html panelID=panelID prev=7 print=1  bonusButton2=bonusButton2 %}

</section>

{% comment %}
Put disclaimer at bottom of last panel outside the section and it will never be hidden.
DISCLAIMER: This calculator is provided for informational purposes only. It is not intended to provide retirement income advice or be used as an investment advisory tool or as a guarantee of monthly payment amounts or a final account balance.
{:.disclaimer}
{% endcomment %}
