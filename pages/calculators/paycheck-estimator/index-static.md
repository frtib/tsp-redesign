---
layout: calculator
title: STATIC Paycheck estimator
styles:
sidenav: calculators
scripts:
permalink: /calculators/paycheck-estimator/index-static/
# calculator-name: paycheck-estimator
progress-steps: [Retirement system,Paycheck information,Contribution election,Results]
# panel-names: [System,Information,Election,Results]
---
- [STATIC How much can I contribute?]({{ site.baseurl }}/calculators/how-much-can-i-contribute-static/)
- [STATIC Paycheck estimator]({{ site.baseurl }}/calculators/paycheck-estimator/index-static/)
- [STATIC CCC]({{ site.baseurl }}/calculators/contribution-comparison-calculator-static/)

<code>PANEL 1: RETIREMENT SYSTEM</code>

<section id="panel-1" class="calculator-panel" style="display: block;">

<div class="panel-form-field ">
  <div id="rs-div" class="">
      <fieldset class="usa-fieldset-inputs usa-sans">
      <legend class="" id="rs-label" for="rs" aria-details="panel-1.1">Retirement system</legend>
      <span class="usa-input-error-message" id="rs-error-message" role="alert"></span>
        <ul class="usa-unstyled-list">

          <li>
          <input id="FERS" aria-labelledby="FERS-label" type="radio" name="rs" value="FERS" onblur="rsGood(true);" onchange="rsGood(true);">
          <label id="FERS-label" for="FERS"><span data-term="federal employees' retirement system (fers)" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">FERS</span></label>
          </li>

          <li>
          <input id="CSRS" aria-labelledby="CSRS-label" type="radio" name="rs" value="CSRS" onblur="rsGood(true);" onchange="rsGood(true);">
          <label id="CSRS-label" for="CSRS"><span data-term="civil service retirement system (csrs)" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">CSRS</span></label>
          </li>

          <li>
          <input id="USBRS" aria-labelledby="USBRS-label" type="radio" name="rs" value="USBRS" onblur="rsGood(true);" onchange="rsGood(true);">
          <label id="USBRS-label" for="USBRS"><span data-term="uniformed services" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Uniformed Services: BRS</span></label>
          </li>

          <li>
          <input id="US" aria-labelledby="US-label" type="radio" name="rs" value="US" onblur="rsGood(true);" onchange="rsGood(true);">
          <label id="US-label" for="US"><span data-term="non-brs uniformed services" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Uniformed Services: non-BRS</span></label>
          </li>
        </ul>
      </fieldset>
      <!-- DAV, Age 50 checkbox -->
      <ul class="usa-unstyled-list">
        <li>
        <input
          id="age50"
          type="checkbox"
          name="age50"
          value="age50"
          checked />
        <label for="truth">Yes, I am age 50 or older.</label>
      </li>
      </ul>
      <div>
        <ul class="usa-accordion explain-this">
          <li>
            <button class="usa-accordion-button" aria-expanded="false" aria-controls="panel1.1">Explain this</button>
            <div id="panel1.1" class="usa-accordion-content" aria-hidden="false">
            <p>Participants age 50 or older are eligible for catch-up contributions. We'll take that into account when calculating how much you can contribute.</p>
            </div>
          </li>
        </ul>
      </div>
  </div>
</div>
  <nav>
    <ul class="navigation-buttons">
      <span id="continue1OK">
      <li><button class="usa-button " href="javascript:void(0);" title="" onclick="processPanel(1, 0, 2, 0); return false;">Continue</button></li>
      </span>
    </ul>
  </nav>
</section>

<code id="panel3">PANEL 3: CONTRIBUTION ELECTION</code>
<section id="panel-3" class="calculator-panel contribution-election" style="" markdown="1">
  <h2>TSP Contributions Per Paycheck</h2>

  Enter either a whole percentage of your basic pay or a whole dollar amount that you plan to contribute per paycheck for each type of
  contribution you elect. You may leave a section blank if you do not wish to make that type of contribution.

  You can enter different values into Scenario 2 if you want to see how other contribution amounts will affect your paycheck.

  <div class="usa-grid">
    <!-- Scenario 1 -->
    <div class="usa-width-one-half scenario">
      <h3>Scenario 1 (required)</h3>

      <div><a name="trad_option1-anchor"></a></div>
      <!-- Scenario 1, Traditional contributions -->
      <div id="scenario1trad" class="panel-form-field ">
        <div id="trad_option1-div" class="">
            <fieldset class="usa-fieldset-inputs usa-sans">
              <legend class="" id="trad_option1-label" for="trad_option1" aria-details="panel3.1L"><span data-term="traditional contribution" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Traditional contributions</span></legend>
              <span class="" id="trad_option1-error-message" role="alert"></span>
              <ul id="trad_option1-ul" class="usa-unstyled-list">
                <li>
                <input id="trad_option1_p" aria-labelledby="trad_option1_p-label" type="radio" name="trad_option1" value="trad_option1_p" onblur="percentFixedGood('trad', '1', false); check_amounts(false);" onchange="percentFixedGood('trad', '1', false); check_amounts(false);">
                <label id="trad_option1_p-label" for="trad_option1_p">Percentage of paycheck</label>
                </li>
                <li>
                <input id="trad_option1_f" aria-labelledby="trad_option1_f-label" type="radio" name="trad_option1" value="trad_option1_f" onblur="percentFixedGood('trad', '1', false); check_amounts(false);" onchange="percentFixedGood('trad', '1', false); check_amounts(false);">
                <label id="trad_option1_f-label" for="trad_option1_f">Fixed amount</label>
                </li>
              </ul>
            </fieldset>
        </div>

        <div><a name="trad_option1Percent-anchor"></a></div>

        <div id="trad_option1Percent-div" class="usa-input-warning">
          <label class="usa-input-warning-label" id="trad_option1Percent-label" for="trad_option1Percent" aria-details="panel3.2L.p"></label>
          <span class="usa-input-warning-message" id="trad_option1Percent-error-message" role="alert">
          Your regular employee contributions exceed the Internal Revenue Code (IRC) elective deferral and catch-up contribution limits (<span class="nobr">${ irc }</span> + <span class="nobr">${ catch-up }</span> in { year }).
          </span>

          <span data-format="%" class="input-symbol-right ">
            <input id="trad_option1Percent" name="trad_option1Percent" class="format-left" value="" placeholder="" aria-labelledby="trad_option1Percent-label" type="number" onblur="check_amounts(false);" onchange="check_amounts(false);" min="0" max="99" step="1">
          </span>
        </div>

        <div><a name="trad_option1Amount-anchor"></a></div>

        <div id="trad_option1Amount-div" class="hide">
          <label class="" id="trad_option1Amount-label" for="trad_option1Amount" aria-details="panel3.3L.f"></label>
          <span class="usa-input-error-message" id="trad_option1Amount-error-message" role="alert"></span>
          <span data-format="$" class="input-symbol-left ">
            <input id="trad_option1Amount" name="trad_option1Amount" class="format-left" value="" placeholder="" aria-labelledby="trad_option1Amount-label" type="number" onblur="check_amounts(false);" onchange="check_amounts(false);" min="0" max="1000000" step="1">
          </span>
        </div>

        <div>
          <ul class="usa-accordion explain-this">
            <li>
              <button class="usa-accordion-button" aria-expanded="false" aria-controls="panel3.4L">Explain this</button>
              <div id="panel3.4L" class="usa-accordion-content" aria-hidden="false">
              <p>Traditional contributions come out of your pay <strong>before</strong> taxes are calculated; you pay taxes on these contributions and their earnings when you withdraw them.</p><p>If you're turning 50 or older this year, you can add any contributions (including tax-exempt) toward the catch-up limit here too. However, any tax-exempt contributions toward catch-up limit must be Roth.</p>
              </div>
            </li>
          </ul>
        </div>
      </div><!-- END Traditional contributions -->

      <!-- Scenario 1, Roth contributions -->
      <div id="scenario1roth" class="panel-form-field ">

        <div id="roth_option1-div" class="">
          <fieldset class="usa-fieldset-inputs usa-sans">
            <legend class="" id="roth_option1-label" for="roth_option1" aria-details="panel3.5L"><span data-term="roth contribution" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Roth contributions</span></legend>
            <span class="" id="roth_option1-error-message" role="alert"></span>
            <ul id="roth_option1-ul" class="usa-unstyled-list">
              <li>
              <input id="roth_option1_p" aria-labelledby="roth_option1_p-label" type="radio" name="roth_option1" value="roth_option1_p" onblur="percentFixedGood('roth', '1', false); check_amounts(false);" onchange="percentFixedGood('roth', '1', false); check_amounts(false);">
              <label id="roth_option1_p-label" for="roth_option1_p">Percentage of paycheck</label>
              </li>
              <li>
              <input id="roth_option1_f" aria-labelledby="roth_option1_f-label" type="radio" name="roth_option1" value="roth_option1_f" onblur="percentFixedGood('roth', '1', false); check_amounts(false);" onchange="percentFixedGood('roth', '1', false); check_amounts(false);">
              <label id="roth_option1_f-label" for="roth_option1_f">Fixed amount</label>
              </li>
            </ul>
          </fieldset>
        </div>

        <div><a name="roth_option1Percent-anchor"></a></div>

        <div id="roth_option1Percent-div" class="">
          <label class="" id="roth_option1Percent-label" for="roth_option1Percent" aria-details="panel3.6L.p"> </label>
          <span class="" id="roth_option1Percent-error-message" role="alert"></span>
          <span data-format="%" class="input-symbol-right ">
            <input id="roth_option1Percent" name="roth_option1Percent" class="format-left" value="" placeholder="" aria-labelledby="roth_option1Percent-label" type="number" onblur="check_amounts(false);" onchange="check_amounts(false);" min="0" max="99" step="1">
          </span>
        </div>

        <div><a name="roth_option1Amount-anchor"></a></div>

        <div id="roth_option1Amount-div" class="hide">
          <label class="" id="roth_option1Amount-label" for="roth_option1Amount" aria-details="panel3.7L.f"> </label>
          <span class="" id="roth_option1Amount-error-message" role="alert"></span>
          <span data-format="$" class="input-symbol-left ">
            <input id="roth_option1Amount" name="roth_option1Amount" class="format-left" value="" placeholder="" aria-labelledby="roth_option1Amount-label" type="number" onblur="check_amounts(false);" onchange="check_amounts(false);" min="0" max="1000000" step="1">
          </span>
        </div>

        <div>
          <ul class="usa-accordion explain-this">
            <li>
              <button class="usa-accordion-button" aria-expanded="false" aria-controls="panel3.8L">Explain this</button>
              <div id="panel3.8L" class="usa-accordion-content" aria-hidden="false">
              <p>Roth contributions come out of your pay <strong>after</strong> taxes are calculated;  you pay no taxes on these contributions when you withdraw them. Roth earnings are also tax-free when withdrawn, as long as you meet the IRS requirements to qualify.</p><p>If you're turning 50 or older this year, you can add any contributions (including tax-exempt) toward the catch-up limit here too. However, any tax-exempt contributions toward catch-up limit must be Roth.</p>
              </div>
            </li>
          </ul>
        </div>
      </div><!-- END Roth contributions -->
    </div><!-- end usa-width-one-half scenario / Scenario 1 -->

    <!-- Scenario 2 -->
    <div class="usa-width-one-half scenario">
      <h3>Scenario 2 (optional)</h3>

      <div><a name="trad_option2-anchor"></a></div>
      <!-- Scenario 2, Traditional contributions -->
      <div id="scenario2trad" class="panel-form-field ">
        <div id="trad_option2-div" class="">
            <fieldset class="usa-fieldset-inputs usa-sans">
            <legend class="" id="trad_option2-label" for="trad_option2" aria-details="panel3.1R"><span data-term="traditional contribution" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Traditional contributions</span></legend>
            <span class="" id="trad_option2-error-message" role="alert"></span>
            <ul id="trad_option2-ul" class="usa-unstyled-list">
              <li>
              <input id="trad_option2_p" aria-labelledby="trad_option2_p-label" type="radio" name="trad_option2" value="trad_option2_p" onblur="percentFixedGood('trad', '2', false); check_amounts(false);" onchange="percentFixedGood('trad', '2', false); check_amounts(false);">
              <label id="trad_option2_p-label" for="trad_option2_p">Percentage of paycheck</label>
              </li>
              <li>
              <input id="trad_option2_f" aria-labelledby="trad_option2_f-label" type="radio" name="trad_option2" value="trad_option2_f" onblur="percentFixedGood('trad', '2', false); check_amounts(false);" onchange="percentFixedGood('trad', '2', false); check_amounts(false);">
              <label id="trad_option2_f-label" for="trad_option2_f">Fixed amount</label>
              </li>
            </ul>
            </fieldset>
        </div>

        <div><a name="trad_option2Percent-anchor"></a></div>

        <div id="trad_option2Percent-div" class="">

          <label class="" id="trad_option2Percent-label" for="trad_option2Percent" aria-details="panel3.2R.p"> </label>
          <span class="" id="trad_option2Percent-error-message" role="alert"></span>

          <span data-format="%" class="input-symbol-right ">
            <input id="trad_option2Percent" name="trad_option2Percent" class="format-left" value="" placeholder="" aria-labelledby="trad_option2Percent-label" type="number" onblur="check_amounts(false);" onchange="check_amounts(false);" min="0" max="99" step="1">
          </span>
        </div>

        <div><a name="trad_option2Amount-anchor"></a></div>

        <div id="trad_option2Amount-div" class="hide">
          <label class="" id="trad_option2Amount-label" for="trad_option2Amount" aria-details="panel3.3R.f"> </label>
          <span class="" id="trad_option2Amount-error-message" role="alert"></span>

          <span data-format="$" class="input-symbol-left ">
            <input id="trad_option2Amount" name="trad_option2Amount" class="format-left" value="" placeholder="" aria-labelledby="trad_option2Amount-label" type="number" onblur="check_amounts(false);" onchange="check_amounts(false);" min="0" max="1000000" step="1">
          </span>
        </div>

        <div>
          <ul class="usa-accordion explain-this">
            <li>
              <button class="usa-accordion-button" aria-expanded="false" aria-controls="panel3.4R">Explain this</button>
              <div id="panel3.4R" class="usa-accordion-content" aria-hidden="true">
              <p>Traditional contributions come out of your pay <strong>before</strong> taxes are calculated; you pay taxes on these contributions and their earnings when you withdraw them.</p><p>If you're turning 50 or older this year, you can add any contributions (including tax-exempt) toward the catch-up limit here too. However, any tax-exempt contributions toward catch-up limit must be Roth.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <!-- Scenario 2, Roth contributions -->
      <div id="scenario2roth" class="panel-form-field ">

        <div id="roth_option2-div" class="">
            <fieldset class="usa-fieldset-inputs usa-sans">
            <legend class="" id="roth_option2-label" for="roth_option2" aria-details="panel3.5R"><span data-term="roth contribution" class="js-glossary-toggle term term-end" title="Click to define" tabindex="0">Roth contributions</span></legend>
            <span class="" id="roth_option2-error-message" role="alert"></span>
            <ul id="roth_option2-ul" class="usa-unstyled-list">
              <li>
              <input id="roth_option2_p" aria-labelledby="roth_option2_p-label" type="radio" name="roth_option2" value="roth_option2_p" onblur="percentFixedGood('roth', '2', false); check_amounts(false);" onchange="percentFixedGood('roth', '2', false); check_amounts(false);">
              <label id="roth_option2_p-label" for="roth_option2_p">Percentage of paycheck</label>
              </li>
              <li>
              <input id="roth_option2_f" aria-labelledby="roth_option2_f-label" type="radio" name="roth_option2" value="roth_option2_f" onblur="percentFixedGood('roth', '2', false); check_amounts(false);" onchange="percentFixedGood('roth', '2', false); check_amounts(false);">
              <label id="roth_option2_f-label" for="roth_option2_f">Fixed amount</label>
              </li>
            </ul>
            </fieldset>
        </div>

        <div><a name="roth_option2Percent-anchor"></a></div>

        <div id="roth_option2Percent-div" class="">
          <label class="" id="roth_option2Percent-label" for="roth_option2Percent" aria-details="panel3.6R.p"> </label>
          <span class="" id="roth_option2Percent-error-message" role="alert"></span>
          <span data-format="%" class="input-symbol-right ">
            <input id="roth_option2Percent" name="roth_option2Percent" class="format-left" value="" placeholder="" aria-labelledby="roth_option2Percent-label" type="number" onblur="check_amounts(false);" onchange="check_amounts(false);" min="0" max="99" step="1">
          </span>
        </div>

        <div><a name="roth_option2Amount-anchor"></a>
        </div>

        <div id="roth_option2Amount-div" class="hide">

          <label class="" id="roth_option2Amount-label" for="roth_option2Amount" aria-details="panel3.7R.f"> </label>
          <span class="" id="roth_option2Amount-error-message" role="alert"></span>

          <span data-format="$" class="input-symbol-left ">

            <input id="roth_option2Amount" name="roth_option2Amount" class="format-left" value="" placeholder="" aria-labelledby="roth_option2Amount-label" type="number" onblur="check_amounts(false);" onchange="check_amounts(false);" min="0" max="1000000" step="1">
          </span>
        </div>

        <div>
          <ul class="usa-accordion explain-this">
            <li>
              <button class="usa-accordion-button" aria-expanded="false" aria-controls="panel3.8R">Explain this</button>
              <div id="panel3.8R" class="usa-accordion-content" aria-hidden="true">
              <p>Roth contributions come out of your pay <strong>after</strong> taxes are calculated;  you pay no taxes on these contributions when you withdraw them. Roth earnings are also tax-free when withdrawn, as long as you meet the IRS requirements to qualify.</p><p>If you're turning 50 or older this year, you can add any contributions (including tax-exempt) toward the catch-up limit here too. However, any tax-exempt contributions toward catch-up limit must be Roth.</p>
              </div>
            </li>
          </ul>
        </div>
      </div><!-- END Scenario 2, Roth contributions -->
    </div><!-- end usa-width-one-half scenario / Scenario 2 -->
  </div><!-- end usa.grid -->
  <div><a name="annualReturn-anchor"></a></div>
<div class="panel-form-field">
  <div id="annualReturn-div" class="expected-annual-return">
    <label class="" id="annualReturn-label" for="annualReturn" aria-details="panel-3.13">Expected annual return:</label>
    <span class="" id="annualReturn-error-message" role="alert"></span>
    <span data-format="%" class="input-symbol-right ">
    <input id="annualReturn" name="annualReturn" class="format-left" value="" placeholder="" aria-labelledby="annualReturn-label" type="number" onblur="annualReturnGood(false);" onchange="annualReturnGood(false);" min="0" max="99" step="0.01"></span>
  </div>

  <ul class="usa-accordion explain-this">
  <li><button class="usa-accordion-button" aria-expanded="false" aria-controls="panel-3.13">Explain this</button>
    <div id="panel-3.13" class="usa-accordion-content" aria-hidden="true">
    <p>Enter the annual rate of return you expect to earn on your contributions. View the <a href="/fund-performance/" target="\_blank">Rates of return</a> for context, but keep in mind that past performance is not a guarantee or a predictor of future returns.</p></div>
  </li>
  </ul>
</div>

<nav>
<ul class="navigation-buttons">
<li><button class="usa-button-secondary " href="javascript:void(0);" title="" onclick="showPanel(2); return false;">Previous</button></li>
<span id="showResults3">
<li><button class="usa-button " href="javascript:void(0);" title="" onclick="processPanel(3, 0, 4, 0); return false;">Show results</button></li>
</span>
</ul>
</nav>

</section>

<code id="panel4">PANEL 4: RESULTS</code>
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
        <th class="bg-blue default" scope="col">Scenario 1</th>
        <th class="bg-blue" scope="col">Scenario 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colspan="3" class="compare-two" scope="colgroup">
          <div class="flex space-between"><span>Paycheck results</span> <a href="#salary" onClick="showPanel(2);">Adjust <i class="fal fa-sliders-v"></i></a></div>
        </th>
      </tr>

    <tr>
      <th scope="row">Gross pay per paycheck</th>
      <td class="default"><span id="grosspay1"><strong>$5,000.00</strong></span></td>
      <td><span id="grosspay2"><strong>$5,000.00</strong></span></td>
    </tr>

    <tr>
      <th scope="row">Your Traditional (Pre-Tax) Contribution</th>
      <td class="default"><span id="trad1">-$1,010.00</span></td>
      <td><span id="trad2">-$0.00</span></td>
    </tr>

    <tr>
      <th scope="row">Your Roth (After-Tax) Contribution</th>
      <td class="default"><span id="roth1">-$0.00</span></td>
      <td><span id="roth2">-$0.00</span></td>
    </tr>

    <tr>
      <th scope="row"><span style="text-decoration: line-through">Your Traditional Catch-Up Contribution</span></th>
      <td class="default"><span style="text-decoration: line-through"><span id="tradCatchup1">-$10.00</span></span></td>
      <td><span style="text-decoration: line-through"><span id="tradCatchup2">-$0.00</span></span></td>
    </tr>

    <tr>
      <th scope="row"><span style="text-decoration: line-through">Your Roth Catch-Up Contribution</span></th>
      <td class="default"><span style="text-decoration: line-through"><span id="rothCatchup1">-$0.00</span></span></td>
      <td><span style="text-decoration: line-through"><span id="rothCatchup2">-$0.00</span></span></td>
    </tr>

    <tr>
      <th scope="row">Federal Income Taxes</th>
      <td class="default"><span id="federalTaxes1">-$694.81</span></td>
      <td><span id="federalTaxes2">-$937.21</span></td>
    </tr>

    <tr>
      <th scope="row">Additional Federal Tax Withholding</th>
      <td class="default"><span id="addlFedTax1">-$0.00</span></td>
      <td><span id="addlFedTax2">-$0.00</span></td>
    </tr>

    <tr>
      <th scope="row">Other Taxes and Payroll Deductions</th>
      <td class="default"><span id="otherTaxDeductions1">-$0.00</span></td>
      <td><span id="otherTaxDeductions2">-$0.00</span></td>
    </tr>

    <tr>
      <th scope="row">Total Amount Deducted From Your Pay</th>
      <td class="default"><span id="totalDeduct1"><strong>-$1,704.81</strong></span></td>
      <td><span id="totalDeduct2"><strong>-$937.21</strong></span></td>
    </tr>

    <tr class="emphasis">
      <th scope="row">Net Paycheck</th>
      <td class="default"><span id="netPay1"><strong>$3,295.19</strong></span></td>
      <td><span id="netPay2"><strong>$4,062.79</strong></span></td>
    </tr>

    <tr>
      <th colspan="3" class="compare-two" scope="colgroup"><div class="flex space-between"><span>Contributions summary</span> <a href="#contributions" onClick="showPanel(3);">Adjust <i class="fal fa-sliders-v"></i></a></div></th>
    </tr>

    <tr id="partContrib">
      <th scope="row">Total Amount of Your Contribution(s)</th>
      <td class="default"><span id="totalContributions1">$1,010.00</span></td>
      <td><span id="totalContributions2">$0.00</span></td>
    </tr>

    <tr id="autoContrib">
      <th scope="row">Agency Automatic (1%) Contribution<sup>1</sup></th>
      <td class="default"><span id="agencyAutomatic1">$50.00</span></td>
      <td><span id="agencyAutomatic2">$50.00</span></td>
    </tr>

    <tr id="matchContrib">
      <th scope="row">Agency Matching Contribution<sup>1</sup></th>
      <td class="default"><span id="agencyMatchingContributions1">$200.00</span></td>
      <td><span id="agencyMatchingContributions2">$0.00</span></td>
    </tr>

    <tr class="emphasis">
      <th scope="row">Total Contributions Increase Your TSP Account By</th>
      <td class="default"><span id="TSPIncrease1"><strong>$1,260.00</strong></span></td>
      <td><span id="TSPIncrease2"><strong>$50.00</strong></span></td>
    </tr>
    </tbody>
  </table>
</section>
