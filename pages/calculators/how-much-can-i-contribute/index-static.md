---
layout: calculator
title: How much can I contribute?
styles:
sidenav: calculators
# scripts: /assets/js/calculator/javascriptTaxTable.js
permalink: /calculators/how-much-can-i-contribute-static/
calculator-name: how-much-can-i-contribute
progress-steps: [Introduction,Elective Contributions,Elective Deferral Limits]
# panel-names: [Introduction, Contributions, Limits]
document-ready:
  - setDropdownDefault();
redirect_from:
  - /PlanningTools/Calculators/electiveContributions.html
---

<div id="panel-1" class="calculator-panel" style="display: block;">
  <p>Each year the IRS determines the maximum amount you can contribute to tax-deferred savings plans like the TSP. This is known as the <a href="/making-contributions/contribution-limits/">IRS elective deferral limit</a>. Participants should use this calculator to determine the specific dollar amount to be deducted each pay period in order to maximize your contributions and to ensure that you do not miss out on Agency or Service Matching Contributions if you are entitled to them.</p>
  <p><strong>What information do you need to use this calculator?</strong></p>

  <ul>
    <li>Your most recent Leave and Earnings statement or payslip.</li>
    <li>The number of salary payments you have left for the year.</li>
  </ul>

  <div class="dotted-line"></div>
  <fieldset>
    <div><a name="review-year-anchor"></a></div>
    <div class="panel-form-field ">

      <div id="review-year-div" class="">

      <label class="" id="review-year-label" for="review-year" aria-details="panel-1.1">Choose the year you would like to review, then press Start.</label>
      <span class="usa-input-error-message" id="review-year-error-message" role="alert"></span>

      <select class="format-left" id="review-year" name="review-year"><option value="2019">2019</option><option selected="selected" value="2020">2020</option></select>

      </div>
      <!-- DAV, Age 50 checkbox -->
      <ul class="usa-unstyled-list">
        <li>
        <input
          id="age50"
          type="checkbox"
          name="age50"
          value="age50"
          checked />
        <label for="truth">I will be age 50 or older in { year }</label>
      </li>
    </ul>

    </div><!---->

  </fieldset>

  <p>
  <button class="usa-button " href="javascript:void(0);" title="" onclick="processPanel(1, 0, 2, 0); return false;">Start</button>
  </p>

  <div class="usa-alert  usa-alert-info ">
    <div class="usa-alert-body">
      <h3 class="usa-alert-heading">Special Note for FERS and BRS Participants</h3>
      <p class="usa-alert-text">
      This calculator is especially important for FERS employees and members of the
      uniformed services covered by the Blended Retirement System (BRS). If you reach the
      <a href="javascript:openWindow('/PlanningTools/RetirementPlanningPhases/maximumAmount.html', 650, 650);">IRS elective deferral limit</a>
      before the end of the year, your contributions and Agency or Service Matching Contributions
      must stop for the remainder of the year. As a result, you will lose some of your Agency or
      Service Matching Contributions.
      For more detailed information, read the Fact Sheet <a href="/forms/tspfs07.pdf" class="pdf">Annual Limit on Elective Deferrals</a>.
      <br><br>
      The dollar amount determined by using this calculator distributes your employee/member
      contributions over the entire year (or remainder of the year), and thus allows you to
      receive the maximum Agency or Service Matching Contributions.
      </p>
    </div>
  </div>
</div><!-- END panel-1 -->

<div id="panel-3" class="calculator-panel" style="">

  <p><strong>A summary of your computations based on the data you entered is shown below.</strong></p>

  <div class="usa-alert  usa-alert-info ">
    <div class="usa-alert-body">
        <h3 class="usa-alert-heading">Maximizing Agency or Service Contributions</h3>
        <p class="usa-alert-text">To receive the maximum Agency or Service Matching Contributions, you must contribute 5% of your basic pay each pay period.</p>
    </div>
</div>

  <div class="usa-alert  usa-alert-info ">
    <div class="usa-alert-body">
        <h3 class="usa-alert-heading">Warning: Accuracy of Results</h3>
        <p class="usa-alert-text">This calculator can provide you with a reasonable estimate. However, calculations may vary from actual contribution amounts because of a variety of factors influencing your pay (including pay increases) and the accuracy of the input.</p>
    </div>
</div>

  <div class="results-grid-frame">

    <div class="usa-grid results ">

  <div class="usa-width-two-thirds ">Contribution year<br></div>
  <div class="usa-width-one-third "><span id="contribution-year"><span class="year-choosen">2020</span></span></div>
</div>

    <div class="usa-grid results ">

  <div class="usa-width-two-thirds ">IRS Elective Deferral Limit for <span class="year-choosen">2020</span><br></div>
  <div class="usa-width-one-third "><span id="deferral-limit">$19,500</span></div>
</div>
<!-- DAV, Catch-up contributions limit if age 50 = true -->
<div class="usa-grid results ">

<div class="usa-width-two-thirds ">IRS Catch-Up Limit for <span class="year-choosen">2020</span><br></div>
<div class="usa-width-one-third "><span id="deferral-limit">$6,000</span></div>
</div>

    <div class="usa-grid results ">

  <div class="usa-width-two-thirds ">How much you will have contributed before your new amount is effective<br></div>
  <div class="usa-width-one-third "><span id="total-contributed">$0</span></div>
</div>

    <div class="usa-grid results ">
<!-- DAV, IRC + Catch-up contributions limit if age 50 = true -->
  <div class="usa-width-two-thirds ">Amount you can still contribute this year<br></div>
  <div class="usa-width-one-third "><span id="amount-available">$25,500</span></div>
</div>

    <div class="usa-grid results ">

  <div class="usa-width-two-thirds ">Number of salary payments remaining in <span class="year-choosen">2020</span><br></div>
  <div class="usa-width-one-third "><span id="payments-remaining">26</span></div>
</div>

  <div class="usa-grid results ">
  <div class="usa-width-two-thirds ">
  <p><strong>Here’s the new amount you can contribute each remaining pay period if you want to maximize your contributions for <span class="year-choosen">2020</span></strong> (rounded down to the nearest dollar).</p>

  <p>To change how much you contribute, log into your payroll system and select the Thrift Savings Plan option. Common payroll systems include</p>

<p><a href="/exit/?idx=47" rel="nofollow">Direct Access</a>, <a href="/exit/?idx=7" rel="nofollow">Employee Express</a>, EBIS, <a href="/exit/?idx=8" rel="nofollow">LiteBlue</a>, <a href="/exit/?idx=6" rel="nofollow">myPay</a>, and <a href="/exit/?idx=9" rel="nofollow">NFC EPP</a>.</p>

<br></div>
<!-- DAV, (IRC + Catch-up contributions limit) / (pay periods remaining) if age 50 = true -->
  <div class="usa-width-one-third "><span id="new-contribution">$980</span></div>
</div>
  </div>
  <nav><ul class="navigation-buttons">
<li>
<button class="usa-button " href="javascript:void(0);" title="" onclick="showPanel(2); return false;">Revise</button>
</li>
</ul></nav>

</div>
