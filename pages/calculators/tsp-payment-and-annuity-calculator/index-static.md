---
layout: calculator
title: TSP payment and annuity calculator
styles:
sidenav: calculators
scripts: /assets/js/calculator/javascriptTaxTable.js
permalink: /calculators/tsp-payment-and-annuity-calculator/index-static.html
calculator-name:
progress-steps: [Introduction,Retirement income,Length of retirement,Monthly income,Annuity options,Results]
panel-names:
redirect_from:
  - /PlanningTools/Calculators/retirementCalculator.html
---

<form>
<!-- PANEL 6 -->

<section id="panel-6" class="calculator-panel" markdown="1">
Based on the information that you provided, the following payment amounts have been calculated for you. Click on the following tabs to see all of the payment options and amounts available to you.

Estimated monthly annuity payments are based on an **annuity interest rate index of: 1.209%.**

<fieldset class="usa-fieldset-inputs usa-sans">
  <legend class="usa-sr-only">Annuity feature</legend>
  <ul class="usa-unstyled-list">
    <li>
      <input
        id="overview"
        type="radio"
        checked
        name="annuity-features"
        value="overview"
      />
      <label for="overview">Overview</label>
    </li>
    <li>
      <input
        id="monthlyPayments"
        type="radio"
        name="annuity-features"
        value="monthlyPayments"
      />
      <label for="monthlyPayments">TSP monthly payments</label>
    </li>
    <li>
      <input
        id="singleLife"
        type="radio"
        name="annuity-features"
        value="singleLife"
      />
      <label for="singleLife">Single life annuity</label>
    </li>
    <li>
      <input
        id="jointSpouse"
        type="radio"
        name="annuity-features"
        value="jointSpouse"
      />
      <label for="jointSpouse">Joint life with spouse annuity</label>
    </li>
    <li>
      <input
        id="jointOther"
        type="radio"
        name="annuity-features"
        value="jointOther"
      />
      <label for="jointOther">Joint life with other survivor annuity</label>
    </li>
  </ul>
</fieldset>

<section class="joint-life-spouse">

  <h2>Joint life with spouse annuity</h2>

  <div>
    <fieldset class="usa-fieldset-inputs usa-sans">
      <legend class="usa-sr-only">View</legend>
      <ul class="usa-unstyled-list flex space-evenly view">
        <li>
        <input
          type="radio"
          id="resultSelectorChart"
          name="resultSelector"
          value="chart"
          onclick="$('#resultChart').show();
          $('#resultTable').hide();">
          <label for="resultSelectorChart">Graph</label>
        </li>

        <li>
        <input
          type="radio"
          id="resultSelectorTable"
          name="resultSelector"
          value="table"
          onclick="$('#resultChart').hide();
          $('#resultTable').show();" checked="">
          <label for="resultSelectorTable">Table</label>
        </li>

        <li>
        <input
          type="radio"
          id="resultSelectorCombined"
          name="resultSelector"
          value="combined"
          onclick="$('#resultChart').show();
          $('#resultTable').show();">
          <label for="resultSelectorCombined">Combined</label>
        </li>
      </ul>
    </fieldset>
  </div>
  <!-- Joint life with other annuity TABLE -->
  <table>
    <col class="column-width">
    <thead>
      <tr>
        <td></td>
        <th scope="col" colspan="4">Level payments</th>
        <th scope="col" colspan="4">Increasing payments</th>
      </tr>
      <tr>
        <th>Age</th>
        <th scope="col">100% survivor</th>
        <th scope="col">50% survivor</th>
        <th scope="col">100% survivor with cash</th>
        <th scope="col">50% survivor with cash</th>
        <th scope="col">100% survivor</th>
        <th scope="col">50% survivor</th>
        <th scope="col">100% survivor with cash</th>
        <th scope="col">50% survivor with cash</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">62</th>
        <td>$505,226.95 </td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
        <td>$1,962.71</td>
        <td>$505,226.95 </td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
        <td>$1,962.71</td>
      </tr>
      <tr>
        <th scope="row">63</th>
        <td>$515,418.97</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
        <td>$505,226.95 </td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
        <td>$1,962.71</td>
      </tr>
      <tr>
        <th scope="row">64</th>
        <td>$521,939.44</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
        <td>$505,226.95 </td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
        <td>$1,962.71</td>
      </tr>
      <tr>
        <th scope="row">65</th>
        <td>$2,000.00</td>
        <td>$522,865.87 </td>
        <td>$2,071.19</td>
        <td>$527,600.93</td>
        <td>$505,226.95 </td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
        <td>$1,962.71</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="joint-life-other">

  <h2>Joint life with other survivor annuity</h2>

  <div>
    <fieldset class="usa-fieldset-inputs usa-sans">
      <legend class="usa-sr-only">View</legend>
      <ul class="usa-unstyled-list flex space-evenly view">
        <li>
        <input
          type="radio"
          id="resultSelectorChart"
          name="resultSelector"
          value="chart"
          onclick="$('#resultChart').show();
          $('#resultTable').hide();">
          <label for="resultSelectorChart">Graph</label>
        </li>

        <li>
        <input
          type="radio"
          id="resultSelectorTable"
          name="resultSelector"
          value="table"
          onclick="$('#resultChart').hide();
          $('#resultTable').show();" checked="">
          <label for="resultSelectorTable">Table</label>
        </li>

        <li>
        <input
          type="radio"
          id="resultSelectorCombined"
          name="resultSelector"
          value="combined"
          onclick="$('#resultChart').show();
          $('#resultTable').show();">
          <label for="resultSelectorCombined">Combined</label>
        </li>
      </ul>
    </fieldset>
  </div>
  <!-- Joint life with other annuity TABLE -->
  <table>
    <col class="column-width">
    <thead>
      <tr>
        <td></td>
        <th scope="col" colspan="4">Level payments</th>
      </tr>
      <tr>
        <th scope="col">Age</th>
        <th scope="col">100% survivor</th>
        <th scope="col">50% survivor</th>
        <th scope="col">100% survivor</th>
        <th scope="col">50% survivor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">62</th>
        <td>$505,226.95 </td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
        <td>$1,962.71</td>
      </tr>
      <tr>
        <th scope="row">63</th>
        <td>$515,418.97</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
      </tr>
      <tr>
        <th scope="row">64</th>
        <td>$521,939.44</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
      </tr>
      <tr>
        <th scope="row">65</th>
        <td>$2,000.00</td>
        <td>$522,865.87 </td>
        <td>$2,071.19</td>
        <td>$527,600.93</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="single-life">

  <h2>Single life annuity</h2>

  <div>
    <fieldset class="usa-fieldset-inputs usa-sans">
      <legend class="usa-sr-only">View</legend>
      <ul class="usa-unstyled-list flex space-evenly view">
        <li>
        <input
          type="radio"
          id="resultSelectorChart"
          name="resultSelector"
          value="chart"
          onclick="$('#resultChart').show();
          $('#resultTable').hide();">
          <label for="resultSelectorChart">Graph</label>
        </li>

        <li>
        <input
          type="radio"
          id="resultSelectorTable"
          name="resultSelector"
          value="table"
          onclick="$('#resultChart').hide();
          $('#resultTable').show();" checked="">
          <label for="resultSelectorTable">Table</label>
        </li>

        <li>
        <input
          type="radio"
          id="resultSelectorCombined"
          name="resultSelector"
          value="combined"
          onclick="$('#resultChart').show();
          $('#resultTable').show();">
          <label for="resultSelectorCombined">Combined</label>
        </li>
      </ul>
    </fieldset>
  </div>
  <!-- Single life annuity TABLE -->
  <table>
    <col class="column-width">
    <thead>
      <tr>
        <td></td>
        <th scope="col" colspan="3">Level payments</th>
        <th scope="col" colspan="3">Increasing payments</th>
      </tr>
      <tr>
        <th scope="col" class="age">Age</th>
        <th scope="col">Basic features</th>
        <th scope="col">Witn cash refund</th>
        <th scope="col">With 10 year certain</th>
        <th scope="col">Basic features</th>
        <th scope="col">With cash refund</th>
        <th scope="col">With 10 year certain</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">62</th>
        <td>$505,226.95 </td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
        <td>$1,962.71</td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
      </tr>
      <tr>
        <th scope="row">63</th>
        <td>$515,418.97</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
      </tr>
      <tr>
        <th scope="row">64</th>
        <td>$521,939.44</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
      </tr>
      <tr>
        <th scope="row">65</th>
        <td>$2,000.00</td>
        <td>$522,865.87 </td>
        <td>$2,071.19</td>
        <td>$527,600.93</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="monthly-payments">

  <h2>TSP monthly payments</h2>

  <div>
    <fieldset class="usa-fieldset-inputs usa-sans">
      <legend class="usa-sr-only">View</legend>
      <ul class="usa-unstyled-list flex space-evenly view">
        <li>
        <input
          type="radio"
          id="resultSelectorChart"
          name="resultSelector"
          value="chart"
          onclick="$('#resultChart').show();
          $('#resultTable').hide();">
          <label for="resultSelectorChart">Graph</label>
        </li>

        <li>
        <input
          type="radio"
          id="resultSelectorTable"
          name="resultSelector"
          value="table"
          onclick="$('#resultChart').hide();
          $('#resultTable').show();" checked="">
          <label for="resultSelectorTable">Table</label>
        </li>

        <li>
        <input
          type="radio"
          id="resultSelectorCombined"
          name="resultSelector"
          value="combined"
          onclick="$('#resultChart').show();
          $('#resultTable').show();">
          <label for="resultSelectorCombined">Combined</label>
        </li>
      </ul>
    </fieldset>
  </div>
  <!-- Monthly payments TABLE -->
  <table>
    <col class="column-width">
    <thead>
      <tr>
        <td></td>
        <th scope="col" colspan="2">Fixed dollar</th>
        <th scope="col" colspan="2">Life expectancy</th>
      </tr>
      <tr>
        <th scope="col">Age</th>
        <th scope="col">Payment</th>
        <th scope="col">Year-end balance</th>
        <th scope="col">Payment</th>
        <th scope="col">Year-end balance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">62</th>
        <td>$505,226.95 </td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
        <td>$1,962.71</td>
      </tr>
      <tr>
        <th scope="row">63</th>
        <td>$515,418.97</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
      </tr>
      <tr>
        <th scope="row">64</th>
        <td>$521,939.44</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
      </tr>
      <tr>
        <th scope="row">65</th>
        <td>$2,000.00</td>
        <td>$522,865.87 </td>
        <td>$2,071.19</td>
        <td>$527,600.93</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="overview">

  <h2>Overview</h2>

  <div>
  <fieldset class="usa-fieldset-inputs usa-sans">
    <legend class="usa-sr-only">View</legend>
    <ul class="usa-unstyled-list flex space-evenly view">
      <li>
      <input
        type="radio"
        id="resultSelectorChart"
        name="resultSelector"
        value="chart"
        onclick="$('#resultChart').show();
        $('#resultTable').hide();">
        <label for="resultSelectorChart">Graph</label>
      </li>

      <li>
      <input
        type="radio"
        id="resultSelectorTable"
        name="resultSelector"
        value="table"
        onclick="$('#resultChart').hide();
        $('#resultTable').show();" checked="">
        <label for="resultSelectorTable">Table</label>
      </li>

      <li>
      <input
        type="radio"
        id="resultSelectorCombined"
        name="resultSelector"
        value="combined"
        onclick="$('#resultChart').show();
        $('#resultTable').show();">
        <label for="resultSelectorCombined">Combined</label>
      </li>
    </ul>
    </fieldset>
  </div>
  <!-- Overview TABLE -->
  <table>
  <col class="column-width">
    <thead>
      <tr>
        <td></td>
        <th scope="col" colspan="4" >Monthly payment</th>
        <th scope="col" colspan="1">Single annuity</th>
        <th scope="col" colspan="2">Joint annuity with spouse</th>
      </tr>
      <tr>
        <td></td>
        <th scope="col" colspan="2">Fixed dollar</th>
        <th scope="col" colspan="2">Life expectancy</th>
        <th scope="col">Level payments</th>
        <th scope="col" colspan="2">Level payments</th>
      </tr>
      <tr>
        <th scope="col">Age</th>
        <th scope="col">Payment</th>
        <th scope="col">Year-end balance</th>
        <th scope="col">Payment</th>
        <th scope="col">Year-end balance</th>
        <th scope="col">(Basic)</th>
        <th scope="col">(100% Survivor)</th>
        <th scope="col">(50% Survivor)</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">62</th>
        <td>$2,000.00</td>
        <td>$505,226.95 </td>
        <td>$1,773.05</td>
        <td>$508,038.04</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
      </tr>
      <tr>
        <th scope="row">63</th>
        <td>$2,000.00</td>
        <td>$510,767.51 </td>
        <td>$1,865.04</td>
        <td>$515,418.97</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
      </tr>
      <tr>
        <th scope="row">64</th>
        <td>$2,000.00</td>
        <td>$516,640.49 </td>
        <td>$1,970.26</td>
        <td>$521,939.44</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
      </tr>
      <tr>
        <th scope="row">65</th>
        <td>$2,000.00</td>
        <td>$522,865.87 </td>
        <td>$2,071.19</td>
        <td>$527,600.93</td>
        <td>$1,962.71</td>
        <td>$1,593.04</td>
        <td>$1,955.21</td>
      </tr>
    </tbody>
  </table>
</section>

</section>

<!-- PANEL 1 -->

<code> panel 1: Introduction </code>

<section id="panel-1" class="calculator-panel" markdown="1">

## About TSP installment payments and life annuities

<span style="color: #cd2026">Change in Required Minimum Distribution Age:</span> The SECURE Act, which passed on December 20, 2019, changes the age at which you have to start taking required minimum distributions from 70½ to 72. The law excludes people who turned 70½ on or before December 31, 2019. We are awaiting guidance from the IRS on how this new law should be implemented. **Please be aware that this calculator has not been updated for the new law**.

If you're a separated or beneficiary participant, you have some options if you want to use your TSP account as a source of income to be received at regular intervals. You can elect to have TSP installment payments sent to you either monthly, quarterly, or annually; or you can use all or part of your TSP account to purchase a life <span data-term="Annuity" class="js-glossary-toggle term term-end">annuity</span>. Purchasing an annuity means that you pay now to receive monthly payments that last for the rest of your life or, if you purchase a joint annuity, your joint annuitant's life. (View Feature Comparison Chart).

This calculator estimates how a given amount of money might translate into monthly income, whether through TSP installment payments or through the various life annuity options. To make the comparison easier, the calculator only shows monthly TSP installment payments, since annuity payments are always monthly. Remember that quarterly and annual payments are also available.

Please note that annuity purchases are irrevocable. Be sure to read the “Life Annuities” section of the TSP booklet [_Withdrawing From Your TSP Account for Separated and Beneficiary Participants_](/publications/tspbk02.pdf) file for more detailed information.

<ul class="navigation-buttons">
<button class="usa-button " href="javascript:void(0);" onclick="processPanel(2, 0, 3, 0); return false;">Get started</button>
</ul>
</section>

<!-- PANEL 2 -->

<code> panel 2: Retirement income </code>

<section id="panel-2" class="calculator-panel" markdown="1">

Answer all of the questions in this calculator to help you decide which monthly income options and features meet your needs. At the end, you will be able to view and compare all your monthly income options.

<div class="panel-form-field">

<div class="usa-input-error">
<label class="usa-input-error-label" for="amountToUse" aria-details="panel-2.1">What amount from your TSP account do you want to use for monthly income?</label>
<span class="usa-input-error-message" id="amountToUse-message" role="alert">Amount from your TSP account to use for monthly income is required.</span>

<span data-format="$" class="input-symbol-left whole-number">
<input
  class=""
  maxlength="8"
  type="text"
  id="amountToUse"
  name="amountToUse"
  onblur="amountToUseGood();">
</span>
</div><!-- END div.usa-input-error -->

<!-- Explain this -->

<ul class="usa-accordion explain-this">
<li>
<button class="usa-accordion-button"
aria-expanded="false"
aria-controls="panel-2.1">
Explain this
</button>
<div id="panel-2.1" class="usa-accordion-content">
For example: If your TSP account balance at retirement is $500,000, and you take a <span data-term="Partial Withdrawal" class="js-glossary-toggle term term-end">partial withdrawal</span> of $100,000 to buy a home, you will have $400,000 available for monthly income.
</div>
</li>
</ul>

</div><!-- END div.panel-form-field -->

<ul class="navigation-buttons">
  <li>
  <button class="usa-button previous" href="javascript:void(0);" onclick="showPanel(1); return false;">Previous</button>
  </li>
  <li>
  <button id="showResults2" class="usa-button continue" href="javascript:void(0);" onclick="processPanel2(); return false;">Continue</button>
  </li>
</ul>

<div class="usa-alert usa-alert-info">
<div class="usa-alert-body">
<h3 class="usa-alert-heading">Don’t know what your balance will be at retirement?</h3>

<p class="usa-alert-text" markdown="1">Use the [How much will my savings grow?](/calculators/how-much-will-my-savings-grow/) calculator to estimate what your account balance will be when you are ready to retire.</p>
</div>
</div>

<div class="usa-alert usa-alert-info">
<div class="usa-alert-body">
<h3 class="usa-alert-heading">Ready to retire now?</h3>

<p class="usa-alert-text" markdown="1">Log into [My Account]({{ site.myaccount }}) to find your current account balance, or call the ThriftLine at <span class="nobr">1-877-968-3778</span>.</p>
</div>
</div>
</section>

<!-- PANEL 3 -->

<code>panel 3: Length of retirement</code>

<section id="panel-1" class="calculator-panel" markdown="1">

<div class="panel-form-field">
<div class="usa-input-error">
<label class="usa-input-error-label" for="ageNow">What is your current age?</label>
<span class="usa-input-error-message" id="ageNow-message" role="alert">Your current age is required.</span>
<input
  type="number"
  id="ageNow"
  name="ageNow"
  maxlength="2"
  onblur="ageNowGood();">
</div><!-- END div.usa-input-error -->
</div>

<div class="panel-form-field">
<div class="usa-input-error">
<label class="usa-input-error-label" for="ageFrom">At what age do you want to start receiving monthly income from the TSP?</label>
<span class="usa-input-error-message" id="ageFrom-message" role="alert">Age that you want to start receiving monthly income from the TSP is required.</span>
<input
  type="number"
  id="ageFrom"
  name="ageFrom"
  maxlength="2"
  onblur="ageFromGood();">
</div><!-- END div.usa-input-error -->
</div>

<div class="panel-form-field">
<div class="usa-input-error">
<label class="usa-input-error-label" for="ageToLive" aria-details="panel-3.1">To what age do you expect to live?</label>
<span class="usa-input-error-message" id="ageToLive-message" role="alert">Age to which you expect to live is required.</span>
<input
  type="number"
  id="ageToLive"
  name="ageToLive"
  maxlength="2"
  onblur="ageToLiveGood();">
</div><!-- END div.usa-input-error -->

<!-- Explain this -->

<ul class="usa-accordion explain-this">
<li>
<button class="usa-accordion-button"
aria-expanded="false"
aria-controls="panel-3.1">
Explain this
</button>
<div id="panel-3.1" class="usa-accordion-content" markdown="1">
**Will you outlive your savings?** There's no way to know for sure whether your savings will last throughout your retirement, but you may spend almost as many years living in retirement as you did working.
</div>
</li>
</ul>
</div>

<div class="panel-form-field">
<div class="usa-input-error">
<label class="usa-input-error-label" for="birthMonth">Month in which you were born:</label>
<span class="usa-input-error-message" id="birthMonth-message" role="alert">Birth month is required.</span>
<select id="birthMonth" name="birthMonth" onblur="birthMonthGood();">
  <option value="Choose Month">Choose Month</option>
  <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
</select>
</div><!-- end div.usa-input-error -->
</div><!-- END div.panel-form-field -->

<ul class="navigation-buttons">
  <li>
  <button class="usa-button previous" href="javascript:void(0);" onclick="showPanel(2); return false;">Previous</button>
  </li>
  <li>
  <button id="showResults2" class="usa-button continue" href="javascript:void(0);" onclick="processPanel4(); return false;">Continue</button>
  </li>
</ul>
</section>

<!-- PANEL 4 -->

<code> panel 4: Monthly income </code>

<section id="panel-4" class="calculator-panel" markdown="1">

<div class="panel-form-field">
<div class="usa-input-error">
<label class="usa-input-error-label" for="amountToReceive">What amount do you want to receive each month?</label>
<span class="usa-input-error-message" id="amountToReceive-message" role="alert">You must request to receive at least $25 a month.</span>
<span data-format="$" class="input-symbol-left whole-number">
<input
  maxlength="6"  
  type="number"
  id="amountToReceive"
  name="amountToReceive"
  onblur="amountToReceiveGood();">
</span>
</div>
</div>

<div class="panel-form-field">
<div class="usa-input-error">
<label class="usa-input-error-label" for="rateOfReturn" aria-details="panel-4.1">Expected or estimated rate of return (e.g., 5%):</label>
<span class="usa-input-error-message" id="rateOfReturn-message" role="alert">Rate of return is required. Enter &#8220;0&#8221; for no rate of return.</span>
<span data-format="%" class="input-symbol-right">
<input
  maxlength="6"
  type="number"
  id="rateOfReturn"
  name="rateOfReturn"
  value=""
  onblur="rateOfReturnGood();">
</span>
</div><!-- END div.usa-input-error -->

<!-- Explain this -->

<ul class="usa-accordion explain-this">
<li>
<button class="usa-accordion-button"
aria-expanded="false"
aria-controls="panel-4.1">
Explain this
</button>
<div id="panel-4.1" class="usa-accordion-content" markdown="1">
Enter a rate of return if you would like your calculation based on an assumed annual earnings rate. If you enter 0% here, your monthly payment calculation will not include projected earnings.

**About rate of return**

The rate of return you assume for your account while you are receiving TSP monthly payments will depend on how you plan to have your account balance invested in retirement. If you guard all your retirement savings completely against volatility, the 5% rate of return that we show as an example may be unrealistically high.

On the other hand, as you are drawing down your account balance, you should be careful not to leave yourself exposed to a great deal of volatility. View the [Rates of returns](<{{ site.baseurl }}/fund-performance/>) for all the TSP funds and get an idea of how the funds have performed over time. Keep in mind that past performance is not a guarantee or a predictor of future returns. You might want to take a look at the L Income Fund, which is especially designed for participants withdrawing their TSP accounts in monthly payments. Its goal is to provide you a low level of growth with emphasis on preserving your assets.

</div>
</li>
</ul>
</div><!-- END div.panel-form-field -->

<ul class="navigation-buttons">
  <li>
  <button class="usa-button previous" href="javascript:void(0);" onclick="showPanel(3); return false;">Previous</button>
  </li>
  <li>
  <button id="showResults2" class="usa-button continue" href="javascript:void(0);" onclick="processPanel5(); return false;">Continue</button>
  </li>
</ul>

</section>

<!-- PANEL 5 -->

<code> panel 5: Annuity options</code>

<section id="panel-5" class="calculator-panel" markdown="1">

<div class="panel-form-field">
<fieldset>
<div class="usa-input-error">
<legend class="sr-only">Do you have a dependent?</legend>
<label class="usa-input-error-label" for="haveDependent">In the event of your death, is there someone who will be dependent on your TSP monthly income?</label>
<span class="usa-input-error-message" id="haveDependent-error-message" role="alert">Dependent information is required.</span>
<ul class="usa-unstyled-list">
  <li>  
    <input
      type="radio"
      id="haveDependentYes"
      name="haveDependent"
      value="Yes"
      onclick="changeHaveDependentButtonImage('continue');">
      <label for="haveDependentYes">Yes</label>
  </li>  
  <li>
    <input
      type="radio"
      id="haveDependentNo"
      name="haveDependent"
      value="No"
      onclick="changeHaveDependentButtonImage('submit');">
      <label for="haveDependentNo">No</label>
  </li>
</ul>
</div><!-- end div.usa-input-error -->
</fieldset>
</div>

<!-- If Dependent = Yes -->

<!-- DAV: this fieldset should be hidden until user clicks "yes" in question above. -->

<div class="panel-form-field">
<fieldset>
<div class="usa-input-error">
<legend class="sr-only">What is your relationship to your dependent?</legend>
<label class="usa-input-error-label" for="dependent" aria-details="panel-5.1">Who is the person dependent on your TSP monthly income?</label>
<span class="usa-input-error-message" id="dependent-error-message" role="alert">Dependent information is required.</span>
<ul class="usa-unstyled-list">
  <li>  
    <input
      type="radio"
      id="dependentSpouse"
      name="dependent"
      value="Spouse"
      onclick="hideDependantQualDiv();">
      <label for="dependentSpouse">Spouse</label>
  </li>  
  <li>
    <input
      type="radio"
      id="dependentOther"
      name="dependent"
      value="Other"
      onclick="showDependantQualDiv();">
      <label for="dependentOther">Other</label>
  </li>
</ul>
</div><!-- end div.usa-input-error -->
</fieldset>

<!-- Explain "Other" -->

<ul class="usa-accordion explain-this">
<li>
<button class="usa-accordion-button"
aria-expanded="false"
aria-controls="panel-5.1">
Explain &#8220;Other&#8221;
</button>
<div id="panel-5.1" class="usa-accordion-content" markdown="1">
**Dependent Qualifications**

A joint annuitant other than your spouse must be either a former spouse or someone with an “insurable interest” in you; that is, someone who is financially dependent on you and would derive financial benefit if you lived. (Generally, this is a blood relative or an adopted relative closer than a first cousin.) If this joint annuitant is more than 10 years younger than you, you will only be eligible for joint life annuity options with a 50% (not 100%) survivor benefit.

</div>
</li>
</ul>
</div>

<div class="panel-form-field">
<div class="usa-input-error">
<label class="usa-input-error-label" for="dependentAge">What is your joint annuitant's (spouse or other survivor) current age?</label>
<span class="usa-input-error-message" id="dependentAge-message" role="alert">Your joint annuitant's current age is required.</span>
<input
  type="number"
  id="dependentAge"
  name="dependentAge"
  maxlength="2"
  onblur="dependentAgeGood();">
</div><!-- END div.usa-input-error -->

</div><!-- END div.panel-form-field -->

<ul class="navigation-buttons">
  <li>
  <button class="usa-button previous" href="javascript:void(0);" onclick="showPanel(4); return false;">Previous</button>
  </li>
  <li>
  <button id="showResults2" class="usa-button continue" href="javascript:void(0);" onclick="processPanel5(); return false;">Continue</button>&nbsp;or&nbsp;&nbsp;&nbsp;
  </li>
  <li>
  <button id="showResults2" class="usa-button submit" href="javascript:void(0);" onclick="processPanel6(); return false;">Submit</button>
  </li>
</ul>

<div class="usa-alert usa-alert-info">
<div class="usa-alert-body">
<h3 class="usa-alert-heading">Joint life annuities</h3>

<p class="usa-alert-text" markdown="1">If you choose any of the joint life annuities, your monthly annuity payments will be less than if you had chosen a single life annuity. Also, keep in mind that if you choose a joint life annuity with a 50% survivor benefit, the monthly annuity payment will be cut in half when either you or your joint annuitant dies.</p>
</div>
</div>
</section>

</form>

DISCLAIMER: This calculator is provided for informational purposes only. It is not intended to provide retirement income advice or be used as an investment advisory tool or as a guarantee of monthly payment amounts or a final account balance.
{:.disclaimer}
