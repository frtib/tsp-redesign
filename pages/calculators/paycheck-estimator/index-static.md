---
layout: calculator
title: Paycheck estimator
styles:
sidenav: calculators
scripts:
permalink: /calculators/paycheck-estimator/index-static/
# calculator-name: paycheck-estimator
progress-steps: [Retirement system,Paycheck information,Contribution election,Results]
# panel-names: [System,Information,Election,Results]
---

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
        Your regular employee contributions exceed the Internal Revenue Code (IRC) elective deferral and catch-up contribution limits (${ irc } + ${ catch-up } in { year }).
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

  <div class="panel-form-field ">
  <div id="annualReturn-div" class="expected-annual-return">

    <label class="" id="annualReturn-label" for="annualReturn" aria-details="panel-3.13">Expected annual return:</label>
    <span class="" id="annualReturn-error-message" role="alert"></span>

    <span data-format="%" class="input-symbol-right ">

      <input id="annualReturn" name="annualReturn" class="format-left" value="" placeholder="" aria-labelledby="annualReturn-label" type="number" onblur="annualReturnGood(false);" onchange="annualReturnGood(false);" min="0" max="99" step="0.01">
    </span>
  </div>
  <ul class="usa-accordion explain-this">
  <li>
    <button class="usa-accordion-button" aria-expanded="false" aria-controls="panel-3.13">Explain this</button>
    <div id="panel-3.13" class="usa-accordion-content" aria-hidden="true">
<p>Enter the annual rate of return you expect to earn on your contributions. View the <a href="/fund-performance/" target="\_blank">Rates of return</a> for context, but keep in mind that past performance is not a guarantee or a predictor of future returns.</p>
    </div>
  </li>
  </ul>
</div>
  <!---->
  <nav><ul class="navigation-buttons">
<li>
<button class="usa-button-secondary " href="javascript:void(0);" title="" onclick="showPanel(2); return false;">Previous</button>
</li>
<span id="showResults3">
<li>
<button class="usa-button " href="javascript:void(0);" title="" onclick="processPanel(3, 0, 4, 0); return false;">Show results</button>
</li>
</span>
</ul></nav>
</section>
