{% comment %}
Results NAME panel (3) for CALC.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign hide = 'display: block;' %}
{% assign gridClass2 = include.gridClass2 | default: 'results' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel " style="{{ hide }}" markdown="1">

Based on the information that you provided, the following payment amounts have been calculated for you.

Estimated monthly annuity payments are based on an <strong>annuity interest rate index of: <span id="annuity-interest-rate">-<</span>%.</strong>

{% include calculator/div-panel-form-field.html
  fieldID="panel-5.2" id="resultSet"
  inputType="radio"
  radioIDs="resultSetOverview,resultSetMonthly,resultSetSingle,resultSetSpouse,resultSetOther"
  radioLabels="Overview,TSP monthly payments, Single life annuity, Joint life with spouse annuity, Joint life with other survivor annuity"
  inputClass="usa-unstyled-list"   onBlur="resultSetSelect();"  dontOpenOuterDiv=true
  prompt="Choose result set:"
  explanation=""
%}

<section id="section-resultSetOverview" class="projection overview hide">
  <h2>Overview</h2>
  {% include selectResult.html selectorID='Overview' %}
  <div id="RMDnote1" class="footnotes hide">
  <ol>
  <li>Your year-end balance was further reduced due to a <span data-term="Required minimum distribution (RMD)" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Required Minimum distribution (RMD)</span>.</li>
  </ol>
  </div>
</section>

<section id="section-resultSetMonthly" class="projection monthly-payments hide">
  <h2>TSP monthly payments</h2>
  {% include selectResult.html selectorID='Monthly' %}
  <!-- <div id="RMDnote2x" class="hide"><sup>1</sup> Your year-end balance was further reduced due to a
  <span data-term="Required minimum distribution (RMD)" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Required Minimum distribution (RMD)</span>.
  </div> -->
  <div id="RMDnote2" class="footnotes hide">
  <ol>
  <li>Your year-end balance was further reduced due to a <span data-term="Required minimum distribution (RMD)" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Required Minimum distribution (RMD)</span>.</li>
  </ol>
  </div>
</section>

<section id="section-resultSetSingle" class="projection single-life hide">
  <h2>Single life annuity</h2>
  {% include selectResult.html selectorID='Single' %}
</section>

<section id="section-resultSetSpouse" class="projection joint-life-spouse hide">
  <h2>Joint life with spouse annuity</h2>
  {% include selectResult.html selectorID='Spouse' %}
  <span id="noSpouse"></span>
</section>

<section id="section-resultSetOther" class="projection joint-life-other hide">
  <h2>Joint life with other survivor annuity</h2>
  {% include selectResult.html selectorID='Other' %}
  <span id="noOther"></span>
</section>

<ul class="usa-accordion icons adjust">
<!-- ADJUST YOUR RESULTS -->
{% include calculator/accordion-start.html expanded=false divID='adjust-results'
    icon='fal fa-sliders-v' title='Adjust your results' inList=true %}

{% include calculator/AYR-table.html caption="Retirement income" showPanel=2 gotoAnchor='panel2' %}
{% include calculator/AYR-table-row.html closeTable=true prompt="Amount to use for monthly income:" rowID='amountToUseAYR' %}

{% include calculator/AYR-table.html caption="Length of retirement planned" showPanel=3 gotoAnchor='panel3' %}
{% include calculator/AYR-table-row.html prompt="Your current age:" rowID='ageNowAYR' %}
{% include calculator/AYR-table-row.html prompt="Age you expect to begin receiving income:" rowID='ageFromAYR' %}
{% include calculator/AYR-table-row.html prompt="Age to which to expect to live:" rowID='ageToLiveAYR' %}
{% include calculator/AYR-table-row.html closeTable=true prompt="Month of your birth:" rowID='birthMonthAYR' %}

{% include calculator/AYR-table.html caption="Monthly income amount" showPanel=4 gotoAnchor='panel4' %}
{% include calculator/AYR-table-row.html prompt="Income amount you would like to receive each month:" rowID='amountToReceiveAYR' %}
{% include calculator/AYR-table-row.html closeTable=true prompt="Assumed annual earnings rate (the rate you expect your savings to grow):" rowID='rateOfReturnAYR' %}

{% include calculator/AYR-table.html caption="Joint life dependent options" showPanel=5 gotoAnchor='panel5' %}
{% include calculator/AYR-table-row.html prompt="In the event of your death, is there someone dependent on your TSP monthly income?" rowID='haveDependentAYR' %}
{% include calculator/AYR-table-row.html prompt="Who is the person dependent on your TSP monthly income" rowID='dependentAYR' named=1 %}
{% include calculator/AYR-table-row.html closeTable=true prompt="What is this person's current age?" rowID='dependentAgeAYR' named=1 %}


{% include calculator/accordion-end.html  inList=true %}
</ul>

{% include calculator/button-block.html panelID=panelID prev=5 print=1 %}

</section>

{% comment %}
Put disclaimer at bottom of last panel outside the section and it will never be hidden.
{% endcomment %}
DISCLAIMER: This calculator is provided for informational purposes only. It is not intended to provide retirement income advice or be used as an investment advisory tool or as a guarantee of monthly payment amounts or a final account balance.
{:.disclaimer}
