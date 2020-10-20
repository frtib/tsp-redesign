---
layout: page
title: STATIC CCC
styles:
sidenav: calculators
scripts:
  - /assets/js/calculator/javascriptTaxTable.js
  - /assets/js/highcharts/highcharts.js
  - /assets/js/highcharts/exporting.js
  - /assets/js/highcharts/data.js
  - /assets/js/responsive-comparison-table.js
  #- /assets/js/ajaxFetch.js
  #- /assets/js/side-scroll-funds.js
permalink: /calculators/contribution-comparison-calculator-static/
calculator-name: contribution-comparison-calculator
progress-steps: [Introduction,Retirement profile,Results]
panel-names: [Introduction,Retirement,Results]
redirect_from:
  - /PlanningTools/Calculators/contributionComparison.html
published: false
---

## CCC table

<section id="comparison-section" class="calculator-panel comparison contribution-comparison-calculator">

<h2>TSP Contributions Per Paycheck</h2>

<ul class="table-header-buttons">
  <li class="bg-blue">
    <button type="button">Traditional</button>
  </li>
  <li class="bg-blue active">
    <button type="button">Roth</button>
  </li>
</ul>

<table>
  <thead>
    <tr>
      <th class="hide w"></th>
      <th class="bg-blue default">Traditional</th>
      <th class="bg-blue rightRow">Roth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3" class="compare-two" scope="colgroup">
        <div class="flex space-between"><span>Effect on your paycheck</span> <a href="javascript:showPanel(2);">Adjust <i class="fal fa-sliders-v"></i></a></div>
      </th>
    </tr>
  <tr>
    <th>Gross pay per paycheck</th>
    <td class="default"><span id="grossPaycheck1">$650.38</span></td>
    <td><span id="grossPaycheck2">$650.38</span></td>
  </tr>
  <tr>
    <th>Gross pay per year</th>
    <td class="default"><span id="grossYear1">$16,910.00</span></td>
    <td><span id="grossYear2">$16,910.00</span></td>
  </tr>
  <tr>
    <th>Contribution percentage</th>
    <td class="default"><span id="contribPercent1">19.0%</span></td>
    <td><span id="contribPercent2">16.9%</span></td>
  </tr>
  <tr>
    <th>Your contribution per check</th>
    <td class="default"><span id="contribCheck1">$730.77</span></td>
    <td><span id="contribCheck2">$650.38</span></td>
  </tr>
  <tr>
    <th>Your contributions per year</th>
    <td class="default"><span id="contribYear1">$19,000.00</span></td>
    <td><span id="contribYear2">$16,910.00</span></td>
  </tr>
  </tbody>
</table>
</section>

## Paycheck estimator table
<section id="comparison-section" class="calculator-panel comparison paycheck">

    <h2>TSP Contributions Per Paycheck</h2>

    <ul class="table-header-buttons">
  <li class="bg-blue active">
    <button type="button">Scenario 1</button>
  </li>
  <li class="bg-blue">
    <button type="button">Scenario 2</button>
  </li>
</ul>

    <table>
  <thead>
    <tr>
      <th class="hide w"></th>
      <th class="bg-blue default">Scenario 1</th>
      <th class="bg-blue rightRow">Scenario 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" class="compare-two">
        <div class="flex space-between"><span>Paycheck results</span> <a href="javascript:showPanel(2);">Adjust <i class="fal fa-sliders-v"></i></a></div>
      </td>
    </tr>






<tr>
  <th>Gross pay per paycheck</th>
  <td class="default"><span id="grosspay1"><strong>$5,000.00</strong></span></td>
  <td><span id="grosspay2"><strong>$5,000.00</strong></span></td>
</tr>







<tr>
  <th>Your Traditional (Pre-Tax) Contribution</th>
  <td class="default"><span id="trad1">-$250.00</span></td>
  <td><span id="trad2">-$0.00</span></td>
</tr>







<tr>
  <th>Your Roth (After-Tax) Contribution</th>
  <td class="default"><span id="roth1">-$250.00</span></td>
  <td><span id="roth2">-$0.00</span></td>
</tr>







<tr>
  <th>Your Traditional Catch-Up Contribution</th>
  <td class="default"><span id="tradCatchup1">-$100.00</span></td>
  <td><span id="tradCatchup2">-$0.00</span></td>
</tr>







<tr>
  <th>Your Roth Catch-Up Contribution</th>
  <td class="default"><span id="rothCatchup1">-$100.00</span></td>
  <td><span id="rothCatchup2">-$0.00</span></td>
</tr>







<tr>
  <th>Federal Income Taxes</th>
  <td class="default"><span id="federalTaxes1">-$853.21</span></td>
  <td><span id="federalTaxes2">-$937.21</span></td>
</tr>







<tr>
  <th>Additional Federal Tax Withholding</th>
  <td class="default"><span id="addlFedTax1">-$0.00</span></td>
  <td><span id="addlFedTax2">-$0.00</span></td>
</tr>







<tr>
  <th>Other Taxes and Payroll Deductions</th>
  <td class="default"><span id="otherTaxDeductions1">-$0.00</span></td>
  <td><span id="otherTaxDeductions2">-$0.00</span></td>
</tr>







<tr>
  <th>Total Amount Deducted From Your Pay</th>
  <td class="default"><span id="totalDeduct1"><strong>-$1,553.21</strong></span></td>
  <td><span id="totalDeduct2"><strong>-$937.21</strong></span></td>
</tr>







<tr class="emphasis">
  <th>Net Paycheck</th>
  <td class="default"><span id="netPay1"><strong>$3,446.79</strong></span></td>
  <td><span id="netPay2"><strong>$4,062.79</strong></span></td>
</tr>

    <tr>
      <td colspan="3" class="compare-two"><div class="flex space-between"><span>Contributions summary</span> <a href="javascript:showPanel(3);">Adjust <i class="fal fa-sliders-v"></i></a></div></td>
    </tr>






<tr id="partContrib">
  <th>Total Amount of Your Contribution(s)</th>
  <td class="default"><span id="totalContributions1">$700.00</span></td>
  <td><span id="totalContributions2">$0.00</span></td>
</tr>







<tr id="autoContrib">
  <th>Agency Automatic (1%) Contribution<sup>1</sup></th>
  <td class="default"><span id="agencyAutomatic1">$50.00</span></td>
  <td><span id="agencyAutomatic2">$50.00</span></td>
</tr>







<tr id="matchContrib">
  <th>Agency Matching Contribution<sup>1</sup></th>
  <td class="default"><span id="agencyMatchingContributions1">$200.00</span></td>
  <td><span id="agencyMatchingContributions2">$0.00</span></td>
</tr>







<tr class="emphasis">
  <th>Total Contributions Increase Your TSP Account By</th>
  <td class="default"><span id="TSPIncrease1"><strong>$950.00</strong></span></td>
  <td><span id="TSPIncrease2"><strong>$50.00</strong></span></td>
</tr>

  </tbody>
</table>
  </section>

<script src="/assets/js/responsive-comparison-table.js"></script>
