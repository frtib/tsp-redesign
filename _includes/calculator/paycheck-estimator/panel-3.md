{% comment %}
Name middle panels (2) for CALC.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

{% capture trad_glossary %}<span data-term="Traditional Contribution" class="js-glossary-toggle term term-end">Traditional contributions</span>{% endcapture %}
{% capture roth_glossary %}<span data-term="Roth Contribution" class="js-glossary-toggle term term-end">Roth contributions</span>{% endcapture %}

{% capture trad_explain %}Traditional contributions come out of your pay **before** taxes are calculated; you pay taxes on these contributions and their earnings when you withdraw them.<br /><br />If you're turning 50 or older this year, you can add any contributions (including tax-exempt) toward the catch-up limit here too. However, any tax-exempt contributions toward catch-up limit must be Roth.{% endcapture %}
{% capture roth_explain %}Roth contributions come out of your pay **after** taxes are calculated;  you pay no taxes on these contributions when you withdraw them. Roth earnings are also tax-free when withdrawn, as long as you meet the IRS requirements to qualify.<br /><br />If you're turning 50 or older this year, you can add any contributions (including tax-exempt) toward the catch-up limit here too. However, any tax-exempt contributions toward catch-up limit must be Roth.{% endcapture %}

<section id="panel-{{ panelID }}" class="calculator-panel contribution-election" style="{{ hide }}"  markdown="1">
## TSP Contributions Per Paycheck

<p>Enter either a whole percentage of your basic pay or a whole dollar amount that you plan to contribute per paycheck for each type of
contribution you elect. You may leave a section blank if you do not wish to make that type of contribution.</p>
<p id="FERS-intro" class="hide">
Keep in mind that FERS employees must contribute at least 5% of basic pay in order to get the full amount of Agency Matching Contributions. (If you make both traditional and Roth employee contributions, the total percentage of pay you contribute will be used to calculate your Agency Matching Contributions.)</p>
<p id="USBRS-intro" class="hide">
Keep in mind that uniformed services members under Blended Retirement must contribute at least 5% of basic pay in order to get the full amount of Service Matching Contributions. (If you make both traditional and Roth employee contributions, the total percentage of pay you contribute will be used to calculate your Service Matching Contributions.)</p>
<p id="USV-intro" class="hide">
If you have both civilian and uniformed services accounts, the elective deferral limit applies to the total amount you contribute to both accounts this year. However, it does not apply to any tax-exempt contributions made from combat zone pay as long as you contribute them to your traditional TSP (not Roth).</p>
<p>You can enter different values into Scenario 2 if you want to see how other contribution amounts will affect your paycheck.</p>
<p id="USV-note" class="hide" markdown="1">
**Special note regarding tax-exempt pay:** If you make traditional contributions from tax-exempt pay, you will only pay taxes on the earnings when you make a withdrawal. If you make Roth contributions from tax-exempt pay, the earnings will be tax-free when withdrawn as long as you qualify. You cannot make traditional catch-up contributions from tax-exempt pay. However, you can make Roth catch-up contributions from tax-exempt pay.
</p>

<div class="usa-grid">

{% assign tradroth = 'calculator/paycheck-estimator/panel-3-percent-fixed-block.html' %}
{% assign catchup = 'calculator/paycheck-estimator/panel-3-catch-up-block.html' %}

<a name="contributions"></a>
<!-- Scenario 1 -->
<a name="contributions"></a>
<div class="usa-width-one-half scenario">
  <h3>Scenario 1 (required)</h3><!-- Scenario 1, Traditional contributions -->
{% include {{tradroth}} side="L" type='trad' option=1 idx=1 divExplain=trad_explain prompt=trad_glossary %}
{% include {{tradroth}} side="L" type='roth' option=1 idx=5 divExplain=roth_explain prompt=roth_glossary %}
</div><!-- end Scenario 1 -->

<!-- Scenario 2 -->
<div class="usa-width-one-half scenario">
  <h3>Scenario 2 (optional)</h3>
  <!-- Scenario 2, Traditional contributions -->
{% include {{tradroth}} side="R" type='trad' option=2 idx=1 divExplain=trad_explain prompt=trad_glossary %}
{% include {{tradroth}} side="R" type='roth' option=2 idx=5 divExplain=roth_explain prompt=roth_glossary %}
</div><!-- end Scenario 2 -->

</div><!-- end grid -->

{% capture explanation3_13 %}
Enter the annual rate of return you expect to earn on your contributions. View the [Rates of return]({{ site.baseurl }}/fund-performance/){:target="\_blank"} for context, but keep in mind that past performance is not a guarantee or a predictor of future returns.
{% endcapture %}
{% include calculator/div-panel-form-field.html innerDivClass="expected-annual-return"
  fieldID="panel-3.13" id="annualReturn" inputClass=""  dataFormat="%"
  min="0" value="" max="99" maxLength=7 step="0.01"
  placeholder="" onBlur="annualReturnGood(false);"
  prompt="Expected annual return:"
  explanation=explanation3_13  %}

{% include calculator/button-block.html panelID=panelID prev=2 showResults=4 %}

</section>
