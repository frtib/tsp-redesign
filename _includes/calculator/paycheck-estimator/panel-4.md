{% comment %}
Results panel (4) for paycheck esitomator.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign hide = 'display: block;' %}
{% assign gridClass2 = include.gridClass2 | default: 'results' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel paycheck" style="{{ hide }}" markdown="1">
<section id="comparison-section" class="calculator-panel comparison paycheck" markdown="1">

<h2>TSP Contributions Per Paycheck</h2>

<ul class="table-header-buttons">
  <li class="bg-blue active">
    <button type="button">Scenario 1</button>
  </li>
  <li class="bg-blue">
    <button type="button">Scenario 2</button>
  </li>
</ul>  

{% assign tableRow = 'calculator/paycheck-estimator/panel-4-table-row.html' %}
<table>
  <thead>
    <tr>
      <th class="hide w"></th>
      <th class="bg-blue default" scope="col">Scenario 1</th>
      <th class="bg-blue" scope="col">Scenario 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3" class="compare-two" scope="colgroup">
        <div class="flex space-between"><span>Paycheck results</span> <a href="javascript:showPanel(2);">Adjust <i class="fal fa-sliders-v"></i></a></div>
      </th>
    </tr>
{% include {{tableRow}} title="Gross pay per paycheck" rowID="grosspay" %}
{% include {{tableRow}} title="Your Traditional (Pre-Tax) Contribution" rowID="trad" %}
{% include {{tableRow}} title="Your Roth (After-Tax) Contribution" rowID="roth" %}
{% include {{tableRow}} title="Your Traditional Catch-Up Contribution" rowID="tradCatchup" %}
{% include {{tableRow}} title="Your Roth Catch-Up Contribution" rowID="rothCatchup" %}
{% include {{tableRow}} title="Federal Income Taxes" rowID="federalTaxes" %}
{% include {{tableRow}} title="Additional Federal Tax Withholding" rowID="addlFedTax" %}
{% include {{tableRow}} title="Other Taxes and Payroll Deductions" rowID="otherTaxDeductions" %}
{% include {{tableRow}} title="Total Amount Deducted From Your Pay" rowID="totalDeduct" %}
{% include {{tableRow}} trClass="emphasis" title="Net Paycheck" rowID="netPay" %}
    <tr>
      <th colspan="3" class="compare-two" scope="colgroup"><div class="flex space-between"><span>Contributions summary</span> <a href="javascript:showPanel(3);">Adjust <i class="fal fa-sliders-v"></i></a></div></th>
    </tr>
{% include {{tableRow}} trID="partContrib" title="Total Amount of Your Contribution(s)" rowID="totalContributions" %}
{% include {{tableRow}} trID="autoContrib" title="Agency Automatic (1%) Contribution<sup>1</sup>" rowID="agencyAutomatic" %}
{% include {{tableRow}} trID="matchContrib" title="Agency Matching Contribution<sup>1</sup>" rowID="agencyMatchingContributions" %}
{% include {{tableRow}} trClass="emphasis" title="Total Contributions Increase Your TSP Account By" rowID="TSPIncrease" %}
  </tbody>
</table>
</section> <!-- end of comparison-section -->

<section id="results-section" class="calculator-panel paycheck" markdown="1">
<ul class="usa-accordion icons">
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
{% assign chartName = 'paycheck-estimator' %}
<div id="show-data-graph" class="hide">
<!-- DONALD:  This is the zoom feature -->
<div class="balanceAfter" id="balanceAfter">
  <label for="option12year">Growth of a single contribution after</label>
  <select id="option12year">
{% for i in (1..40) %}
    <option value="{{i}}">{{i}}</option>
{% endfor %}
  </select>
  years
  <span id="option12zoom">
    <a id="unzoomedSpan" class="zoom-link">Zoom Graph </a><i id="zoomTextImg" class="fal fa-search" ></i>
    <span id="zoomedSpan" class="zoomed hidden">Zoomed</span>
  </span>
</div>
<!-- DONALD:  This is the end of the zoom feature -->
  <div id="chartResult"></div>
</div>
<!-- DONALD table HTML is here -->
<div id="show-data-table" class="usa-width-one-whole" markdown="1">
  <section id="{{chartName}}-section" class="{{chartName}}-table">
    <div id="{{chartName}}-table" class="table-side-scroll"></div>
  </section>
</div> <!-- END div.usa-width-one-whole -->
<div id="show-data-footnote" class="usa-width-one-whole"></div>
{% include calculator/accordion-end.html  inList=true %}
</ul>

<ol id="agencyFootnote" class="footnotes">
  <li>All agency contributions are deposited into the traditional balance of your TSP account regardless of whether you have chosen to make traditional or Roth employee contributions. There are no <span data-term="Agency Matching Contributions" class="js-glossary-toggle term term-end">Agency Matching Contributions</span> of <span data-term="Catch-Up Contributions" class="js-glossary-toggle term term-end">catch-up contributions</span>.</li>
</ol>
<ol id="serviceFootnote" class="footnotes">
  <li>All service contributions are deposited into the traditional balance of your TSP account regardless of whether you have chosen to make traditional or Roth employee contributions. There are no <span data-term="Service Matching Contributions" class="js-glossary-toggle term term-end">Service Matching Contributions</span> of <span data-term="Catch-Up Contributions" class="js-glossary-toggle term term-end">catch-up contributions</span>. Most members are not eligible for matching contributions until they have served two years. All service contributions stop after a member has served 26 years. Check with your service regarding eligibility for service contributions.</li>
</ol>

{% include calculator/button-block.html panelID=panelID prev=3 print=1 %}

</section> <!-- end of results-section -->
</section> <!-- end of panel -->


DISCLAIMER: This calculator is provided for informational purposes only. It is not intended to be used as an investment advisory tool or as a guarantee of a final account balance. Please note that the results shown at the end of this calculator assume that elected contributions are made for the entire year. Results do not take into account the following Internal Revenue Code (IRC) limits: <span data-term="Elective Deferral Limit" class="js-glossary-toggle term term-end">elective deferral</span>, <span data-term="Section 415(c) Limit" class="js-glossary-toggle term term-end">section 415(c)</span>, and <span data-term="Catch-Up Contribution Limit" class="js-glossary-toggle term term-end">catch-up contribution</span>. These limits, which may change every year, determine the maximum annual amount that you and/or your employing agency can contribute to the TSP on your behalf. You can view the current year's limits on the TSP website under [News and resources]({{ site.baseurl }}/news-and-resources/).
{:.disclaimer}
