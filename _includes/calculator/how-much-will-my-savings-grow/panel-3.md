{% comment %}
Results NAME panel (3) for CALC.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign hide = 'display: block;' %}
{% assign gridClass2 = include.gridClass2 | default: 'results' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}" markdown="1">

{% include calculator/infoBox.html icon='info'
    title="Maximizing Agency or Service Contributions"
    textBlock="To receive the maximum Agency or Service Matching Contributions, you must contribute 5% of your basic pay each pay period."
%}

<ul class="usa-accordion icons">
  <!-- PROJECTED BALANCE -->
{% include calculator/accordion-start.html expanded=true divID='projected-balance1'
    icon='fal fa-search-dollar' title='Projected Account Balance' inList=true %}
<div class="results-grid-frame" markdown="1">
{% include calculator/resultsRow.html left="Your existing account balance"
  rightID="existing-balance" right="" outerDivID="existing-balance-row" %}
{% include calculator/resultsRow.html left="Growth of your existing account balance"
  rightID="balance-growth" right="" outerDivID="account-growth-row" %}
{% include calculator/resultsRow.html left="Your future contributions"
  rightID="future-contributions" right="" outerDivID="future-contributions-row" %}
{% include calculator/resultsRow.html left="Growth of your future contributions"
  rightID="future-growth" right="" outerDivID="future-growth-row" %}
{% include calculator/resultsRow.html left="<strong>Total estimated TSP account balance</strong>"
  rightID="final-total" right="" %}
</div>
{% include calculator/accordion-end.html  inList=true %}

<!-- PROJECTED GROWTH -->
{% include calculator/accordion-start.html expanded=true divID='projected-growth'
    icon='far fa-chart-line' title='Projected Growth of Your Account' inList=true %}
  <div id="resultSelectorDiv"><p>The results below show how much your account will grow over time based on an expected annual rate of return of <span id="annual-rate">--</span>.</p>
<fieldset class="usa-fieldset-inputs projected-growth">
<legend class="">Show growth as:</legend>
<ul class="usa-unstyled-list">
  <li>
  <input type="radio" id="resultSelectorGraph" name="resultSelector" value="graph" onclick="showData('graph');">
  <label for="resultSelectorGraph"><strong>Graph</strong></label>
  </li>

  <li>
  <input type="radio" id="resultSelectorTable" name="resultSelector" value="table" onclick="showData('table');">
  <label for="resultSelectorTable"><strong>Table</strong></label>
  </li>

  <li>
  <input type="radio" id="resultSelectorCombined" name="resultSelector" value="combined" onclick="showData('combined');">
  <label for="resultSelectorCombined"><strong>Combined</strong></label>
  </li>
</ul>
</fieldset></div>
{% assign chartName = 'savings-grow' %}
<div id="show-data-graph" class="hide">
  <div id="chartResult">GRAPH</div>
</div>
<div id="show-data-table" class="usa-width-one-whole" markdown="1">
  <section id="{{chartName}}-section" class="{{chartName}}-table">
    <div id="{{chartName}}-table" class="table-side-scroll"></div>
  </section>
</div> <!-- END div.usa-width-one-whole -->
<div id="show-data-footnote" class="usa-width-one-whole"></div>
{% include calculator/accordion-end.html  inList=true %}

<!-- ADJUST YOUR RESULTS -->
{% include calculator/accordion-start.html expanded=true divID='adjust-results'
    icon='fal fa-sliders-v' title='Adjust your results' inList=true %}

{% comment %}
    {% include calculator/AYR/div.html caption="Court order details" showPanel=2 gotoAnchor='panel2' %}
    {% include calculator/AYR/div-row.html prompt="Are both parties TSP participants?" rowID='payeePartAYR' %}
    {% include calculator/AYR/div-row.html prompt="Relationship:" rowID='relationshipAYR' %}
    {% include calculator/AYR/div-row.html prompt="Are both parties' accounts being divided?" rowID='receiveBothAYR' named=true %}
{% endcomment %}

{% include calculator/AYR/div.html caption="Retirement System" showPanel=1 gotoAnchor='rs-anchor' %}
{% include calculator/AYR/div-row.html prompt="Retirement system:" rowID='lblAYRretirementSystem' %}

{% include calculator/AYR/div.html caption="Type(s) of growth" showPanel=2 gotoAnchor='growthSelector-anchor' rowID="growthAYR" %}
{% include calculator/AYR/div-row.html prompt="Growth model:" rowID='lblAYRgrowthSelector' %}

{% include calculator/AYR/div.html caption="Your service so far" showPanel=2 gotoAnchor='service' named=true rowID="serviceSoFarAYR" %}
{% include calculator/AYR/div-row.html prompt="Number of years already served:" rowID='lblAYRyearsServed' %}
{% include calculator/AYR/div-row.html prompt="DIEMS (Date of Initial Entry into Military Service)" rowID='lblAYRDIEMSdate' %}

{% include calculator/AYR/div.html caption="Existing account balance" showPanel=2 gotoAnchor='amountToUse-anchor' named=true rowID="balanceAYR" %}
{% include calculator/AYR/div-row.html prompt="Current account balance" rowID='lblAYRamountToUse' %}

{% include calculator/AYR/div.html caption="Future contributions" showPanel=2 gotoAnchor='future' named=true rowID="futureAYR" %}
{% include calculator/AYR/div-row.html prompt="Years to make contributions:" rowID='lblAYRyearsToContribute' %}
{% include calculator/AYR/div-row.html prompt="Annual pay:" rowID='lblAYRannualPay' %}
{% include calculator/AYR/div-row.html prompt="Pay schedule:" rowID='lblAYRpaySchedule' named=true %}
{% include calculator/AYR/div-row.html
  prompt="Percent salary to save:" rowID='lblAYRannualPayPercent' %}
{% include calculator/AYR/div-row.html prompt="Expected Percent Salary Increase:" rowID='lblAYRannualPayIncreasePercent' %}

{% include calculator/AYR/div.html caption="Account growth" showPanel=2 gotoAnchor='time' named=true rowID="accountGrowthAYR" %}
{% include calculator/AYR/div-row.html prompt="Number of years until you start withdrawing:" rowID='lblAYRyearsToGo' %}
{% include calculator/AYR/div-row.html prompt="Expected annual return:" rowID='lblAYRrateOfReturn' %}

{% include calculator/accordion-end.html  inList=true %}
</ul>

{% include calculator/button-block.html panelID=panelID prev=2 print=1 %}

</section>


DISCLAIMER: This calculator is provided for informational purposes only. It is not intended to be used as an investment advisory tool or as a guarantee of a final account balance. Please note that the results shown at the end of this calculator assume that elected contributions are made for the entire year. Results do not take into account the following Internal Revenue Code (IRC) limits: <span data-term="Elective Deferral Limit" class="js-glossary-toggle term term-end">elective deferral</span>, <span data-term="Section 415(c) Limit" class="js-glossary-toggle term term-end">section 415(c)</span>, and <span data-term="Catch-Up Contribution Limit" class="js-glossary-toggle term term-end">catch-up contribution</span>. These limits, which may change every year, determine the maximum annual amount that you and/or your employing agency can contribute to the TSP on your behalf. You can view the current year's limits on the TSP website under [News and resources]({{ site.baseurl }}/news-and-resources/).
{:.disclaimer}
