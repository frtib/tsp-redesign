---
layout: page
title: STATIC CCC
styles:
sidenav: calculators
scripts:
#  - /assets/js/calculator/javascriptTaxTable.js
#  - /assets/js/highcharts/highcharts.js
#  - /assets/js/highcharts/exporting.js
#  - /assets/js/highcharts/data.js
#  - /assets/js/responsive-comparison-table.js
  #- /assets/js/ajaxFetch.js
  #- /assets/js/side-scroll-funds.js
permalink: /calculators/contribution-comparison-calculator-static/
calculator-name: contribution-comparison-calculator
progress-steps: [Introduction,Retirement profile,Results]
# panel-names: [Introduction,Retirement,Results]
redirect_from:
  - /PlanningTools/Calculators/contributionComparison.html
---
- [STATIC How much can I contribute?]({{ site.baseurl }}/calculators/how-much-can-i-contribute-static/)
- [STATIC Paycheck estimator]({{ site.baseurl }}/calculators/paycheck-estimator/index-static/)
- [STATIC CCC]({{ site.baseurl }}/calculators/contribution-comparison-calculator-static/)

# Contribution comparison calculator

<code>PANEL 2: RETIREMENT PROFILE</code>

<section id="panel-2" class="calculator-panel" style="">
<!-- 1. How many years until you retire? -->
<div><a name="cccYearsUntilRetirement-anchor"></a>
</div>
<div class="panel-form-field ">
<div id="cccYearsUntilRetirement-div" class="">
<label class="" id="cccYearsUntilRetirement-label" for="cccYearsUntilRetirement" aria-details="panel-2.1">How many years until you retire?</label>
<span class="" id="cccYearsUntilRetirement-error-message" role="alert"></span>
<input id="cccYearsUntilRetirement" name="cccYearsUntilRetirement" class="format-left" value="" placeholder="" aria-labelledby="cccYearsUntilRetirement-label" type="number" onblur="cccYearsUntilRetirementGood(false);" onchange="cccYearsUntilRetirementGood(false);" min="1" max="70" step="1">
</div>
<ul class="usa-accordion explain-this">
<li>
<button class="usa-accordion-button" aria-expanded="false" aria-controls="panel-2.1">Explain this</button>
<div id="panel-2.1" class="usa-accordion-content" aria-hidden="true">

<p>If you plan to retire before age 59½, be aware that any Roth earnings included in a withdrawal will not be tax-free.  Also, you may be subject to a 10% early withdrawal penalty tax.  See the TSP tax notice <a href="/publications/tsp-536.pdf" class="pdf"><em>Important Information About Payments From Your TSP Account</em></a> for more information as well as exceptions to this rule.</p>

</div>
</li>
</ul>
</div>

<!-- 2. How many years will you spend in retirement? -->

<div><a name="cccYearsInRetirement-anchor"></a>
</div>
<div class="panel-form-field ">
<div id="cccYearsInRetirement-div" class="">

<label class="" id="cccYearsInRetirement-label" for="cccYearsInRetirement" aria-details="panel-2.2">How many years will you spend in retirement?</label>
<span class="" id="cccYearsInRetirement-error-message" role="alert"></span>
<input id="cccYearsInRetirement" name="cccYearsInRetirement" class="format-left" value="" placeholder="" aria-labelledby="cccYearsInRetirement-label" type="number" onblur="cccYearsInRetirementGood(false);" onchange="cccYearsInRetirementGood(false);" min="1" max="70" step="1">

</div>
<ul class="usa-accordion explain-this">
<li>
<button class="usa-accordion-button" aria-expanded="false" aria-controls="panel-2.2">Explain this</button>
<div id="panel-2.2" class="usa-accordion-content" aria-hidden="true">
<p>A recommended estimation is age 95 minus your retirement age to plan
for your income needs and protect your longevity risk.</p>

</div>
</li>
</ul>
</div>
<!-- 3. Current annual salary -->
<div><a name="cccSalary-anchor"></a></div>
<div class="panel-form-field ">
  <div id="cccSalary-div" class="">  
    <label class="" id="cccSalary-label" for="cccSalary" aria-details="panel-2.3">Current annual salary:</label>
    <span class="" id="cccSalary-error-message" role="alert"></span>  
    <span data-format="$" class="input-symbol-left whole-number">    
      <input id="cccSalary" name="cccSalary" class="format-left" value="" placeholder="" aria-labelledby="cccSalary-label" type="number" onblur="checkContributionAmount(false);" onchange="checkContributionAmount(false);" min="1" max="700000" step="1">
    </span>
  </div>
</div>
<!-- 4. Expected rate of return -->
<div><a name="cccInterestRate-anchor"></a></div>

<div class="panel-form-field ">
  <div id="cccInterestRate-div" class="">

    <label class="" id="cccInterestRate-label" for="cccInterestRate" aria-details="panel-2.4">Expected annual rate of return:</label>
    <span class="" id="cccInterestRate-error-message" role="alert"></span>

    <span data-format="%" class="input-symbol-right ">
      <input id="cccInterestRate" name="cccInterestRate" class="format-left" value="" placeholder="" aria-labelledby="cccInterestRate-label" type="number" onblur="cccInterestRateGood(false);" onchange="cccInterestRateGood(false);" min="0" max="99" step="0.01">
    </span>

    <ul class="usa-accordion explain-this">
      <li><button class="usa-accordion-button" aria-expanded="false" aria-controls="panel-2.4">Explain this</button>
      <div id="panel-2.4" class="usa-accordion-content" aria-hidden="true">
      <p>Enter the annual rate of return you expect to earn on your contributions. View the <a href="/fund-performance/" target="\_blank">Rates of return</a> for context, but keep in mind that past performance is not a guarantee or a predictor of future returns.</p>
      </div>
      </li>
    </ul>
  </div>
</div>
<!-- 5. Contributions per year, as a percentage of your salary -->

<div id="panel2"><a name="cccContributions-anchor"></a></div>

<div class="panel-form-field ">
  <div id="cccContributions-div" class="usa-input-error">
    <label class="usa-input-error-label" id="cccContributions-label" for="cccContributions" aria-details="panel-2.5">Contributions per year, as a percentage of your salary:</label>
    <span class="usa-input-error-message" id="cccContributions-error-message" role="alert">You are not allowed to contribute more than $'{ irc } + { catch-up }' per year.</span>
    <span data-format="%" class="input-symbol-right ">
      <input id="cccContributions" name="cccContributions" class="format-left usa-input-error-element" value="" placeholder="" aria-labelledby="cccContributions-label" type="number" onblur="checkContributionAmount(false);" onchange="checkContributionAmount(false);" min="0" max="99" step="0.01">
    </span>
  </div>

  <ul class="usa-accordion explain-this">
    <li>
      <button class="usa-accordion-button" aria-expanded="false" aria-controls="panel-2.5">Explain this</button>
      <div id="panel-2.5" class="usa-accordion-content" aria-hidden="true">
      <p>Your regular employee contributions exceed the Internal Revenue Code (IRC) elective deferral and catch-up contribution limits (${ irc } + ${ catch-up } in <span id="irc-limit-year">YEAR</span>).</p>
      <!-- <p>The total of your regular employee contributions may not exceed the Internal Revenue Code (IRC)
      elective deferral limit (<span id="irc-contribution-limit">$19,500</span> for <span id="irc-limit-year">2020</span>).</p>
      <p>Your current selections are <span id="current-annual">$20,000.00</span> annually.</p> -->
      </div>
    </li>
  </ul>
</div>
<!-- 6. Current household tax rate -->

<div><a name="cccTaxRateNow-anchor"></a>
</div>
<div class="panel-form-field ">

<div id="cccTaxRateNow-div" class="">

<label class="" id="cccTaxRateNow-label" for="cccTaxRateNow" aria-details="panel-2.6">Current household tax rate:</label>
<span class="usa-input-error-message" id="cccTaxRateNow-error-message" role="alert"></span>

<span data-format="%" class="input-symbol-right ">

<input id="cccTaxRateNow" name="cccTaxRateNow" class="format-left" value="" placeholder="" aria-labelledby="cccTaxRateNow-label" type="number" onblur="cccTaxRateNowGood(false);" onchange="cccTaxRateNowGood(false);" min="0" max="99" step="0.01">

</span>
</div>

</div>
<!-- 7. Estimated retirement household tax rate -->
<div><a name="cccTaxRateLater-anchor"></a>
</div>
<div class="panel-form-field ">
<div id="cccTaxRateLater-div" class="">

<label class="" id="cccTaxRateLater-label" for="cccTaxRateLater" aria-details="panel-2.7">Estimated retirement household tax rate:</label>
<span class="usa-input-error-message" id="cccTaxRateLater-error-message" role="alert"></span>

<span data-format="%" class="input-symbol-right ">

<input id="cccTaxRateLater" name="cccTaxRateLater" class="format-left" value="" placeholder="" aria-labelledby="cccTaxRateLater-label" type="number" onblur="cccTaxRateLaterGood(false);" onchange="cccTaxRateLaterGood(false);" min="0" max="99" step="0.01">
</span>
</div>
</div>
<!-- 8. Pay frequency -->

<div><a name="paySchedule-anchor"></a>
</div>
<div class="panel-form-field ">
<div id="paySchedule-div" class="">

<label class="" id="paySchedule-label" for="paySchedule" aria-details="panel-2.8">Pay schedule:</label>
<span class="usa-input-error-message" id="paySchedule-error-message" role="alert"></span>
<select class="format-left" id="paySchedule" name="paySchedule" onblur="payScheduleGood(false);" onchange="payScheduleGood(false);">

<option value="Select">Select your pay schedule</option>  
<option value="Biweekly">Biweekly (every 2 weeks, 26 times a year)</option>
<option value="Weekly">Weekly (52  times a year)</option>
<option value="Semi-monthly">Semi-monthly (twice a month, 24 times a year)</option>
<option value="Monthly">Monthly (12  times a year)</option>
</select>
</div>
<ul class="usa-accordion explain-this">
<li>
<button class="usa-accordion-button" aria-expanded="false" aria-controls="panel-2.8">Explain this</button>
<div id="panel-2.8" class="usa-accordion-content" aria-hidden="true">
<p>This will depend on how often you are paid (biweekly or monthly, for example). If you are uncertain, check with your personnel or finance office.</p>
<table class="pay-schedule-table">
<thead>
<tr><th scope="col">Payment Frequency</th><th scope="col">Number of Salary Payments</th></tr>
</thead>
<tbody>
<tr><td>Biweekly</td><td>26*</td></tr>
<tr><td>Monthly</td><td>12</td></tr>
<tr><td>Weekly</td><td>52</td></tr>
<tr><td>Semimonthly</td><td>24</td></tr>
</tbody></table>
<p>*A biweekly frequency occasionally results in 27 salary payments for a year.  Contact your personnel or payroll office if you do not know the number of salary payments you will receive for the remainder of the year.</p>
</div>
</li>
</ul>
</div>
<!-- 9. Show equal paycheck impact -->
<div>
</div>
<div id="equalImpactDiv" class="panel-form-field ">
<fieldset class="usa-fieldset-inputs show-equal">
<legend class="usa-sr-only">Show equal paycheck impact (amount deducted) for Roth and traditional contributions.</legend>
<ul class="usa-unstyled-list">
<li class="show-equal">
<input id="cccEqualContribution" type="checkbox" name="cccEqualContribution" value="cccEqualContribution" checked="checked">
<label for="cccEqualContribution">Show equal paycheck impact (amount deducted) for Roth and traditional contributions.</label>
</li>
</ul>
</fieldset>
<div>
</div>
<ul class="usa-accordion explain-this">
<li>
<button class="usa-accordion-button" aria-expanded="false" aria-controls="panel-2.10">Explain this</button>
<div id="panel-2.10" class="usa-accordion-content" aria-hidden="true">

<p>Checking this box reduces the contribution percentage to the Roth balance, so that after paying taxes, your paycheck will be the same as it would be after a contribution to your traditional TSP balance. <strong>If you do not check this box</strong>, the same contribution percentage will be used for Roth and traditional contributions.</p>

</div>
</li>
</ul>
</div>

<nav><ul class="navigation-buttons">
<li>
<button class="usa-button-secondary " href="javascript:void(0);" title="" onclick="showPanel(1); return false;">Previous</button>
</li>
<span id="showResults2">
<li>
<button class="usa-button " href="javascript:void(0);" title="" onclick="processPanel(2, 0, 3, 0); return false;">Show results</button>
</li>
</span>
</ul></nav>
</section>

<code>STEP 3: RESULTS</code>

<section id="panel-3" class="calculator-panel contribution-comparison-calculator" style="">
  <section id="comparison-section" class="calculator-panel comparison contribution-comparison-calculator">

    <h2>TSP Contributions Per Paycheck</h2>

    <ul class="table-header-buttons">
      <li class="bg-blue active">
      <button type="button">Traditional</button>
      </li>
      <li class="bg-blue">
      <button type="button">Roth</button>
      </li>
    </ul>

    <table>
    <thead>
    <tr>
    <th class="hide w"></th>
    <th class="bg-blue default" scope="col">Traditional</th>
    <th class="bg-blue" scope="col">Roth</th>
    </tr>
    </thead>

    <tbody>
    <tr>
    <th colspan="3" class="compare-two" scope="colgroup">
    <div class="flex space-between"><span>Effect on your paycheck</span> <a href="javascript:showPanel(2);">Adjust <i class="fal fa-sliders-v"></i></a></div>
    </th>
    </tr>

    <tr>
    <th scope="row">Contribution percentage</th>
    <td class="default"><span id="contribPercent1">19.0%</span></td>
    <td><span id="contribPercent2">19.0%</span></td>
    </tr>

    <tr>
    <th scope="row">Your contribution per check</th>
    <td class="default"><span id="contribCheck1">$730.77</span></td>
    <td><span id="contribCheck2">$730.77</span></td>
    </tr>

    <tr>
    <th scope="row">Your contributions per year</th>
    <td class="default"><span id="contribYear1">$19,000.00</span></td>
    <td><span id="contribYear2">$19,000.00</span></td>
    </tr>

    <tr>
    <th scope="row">Your net pay decrease per paycheck</th>
    <td class="default"><span id="grossPaycheck1">$657.69</span></td>
    <td><span id="grossPaycheck2">$730.77</span></td>
    </tr>

    <tr>
    <th scope="row">Your net pay decrease per year</th>
    <td class="default"><span id="grossYear1">$17,100.00</span></td>
    <td><span id="grossYear2">$19,000.00</span></td>
    </tr>

    </tbody>
    </table>
  </section>
</section>
