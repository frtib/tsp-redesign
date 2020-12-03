{% comment %}
Results panel (3) for Contribution Comparison Calculator.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign hide = 'display: block;' %}
{% assign gridClass2 = include.gridClass2 | default: 'results' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel contribution-comparison-calculator" style="{{ hide }}" markdown="1">
<section id="comparison-section" class="calculator-panel comparison contribution-comparison-calculator" markdown="1">

<h2>TSP Contributions Per Paycheck</h2>

<ul class="table-header-buttons">
  <li class="bg-blue active">
    <button type="button">Traditional</button>
  </li>
  <li class="bg-blue">
    <button type="button">Roth</button>
  </li>
</ul>  

{% assign tableRow = 'calculator/paycheck-estimator/panel-4-table-row.html' %}
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
{% include {{tableRow}} title="Contribution percentage" rowID="contribPercent" %}
{% include {{tableRow}} title="Your contribution per check" rowID="contribCheck" %}
{% include {{tableRow}} title="Your contributions per year" rowID="contribYear" %}
{% include {{tableRow}} title="Your net pay decrease per paycheck" rowID="grossPaycheck" %}
{% include {{tableRow}} title="Your net pay decrease per year" rowID="grossYear" %}
  </tbody>
</table>

<p id="checked-effect">
You have chosen to keep the impact on your paycheck equal; therefore, your Roth TSP contribution percentage and contribution amount will be lower than a traditional TSP contribution. The downward adjustment to the Roth contribution is necessary to account for the income taxes that you pay up front instead of in the future.
</p>
<p id="not-checked-effect">
You have not checked the option to minimize the impact Roth contributions have on your paycheck. Therefore, the impact (deduction) on your paycheck will be greater when making Roth TSP contributions because your take-home pay will be reduced by both the contribution and the taxes on your contribution.
</p>

Additionally, Roth TSP contributions will not reduce your adjusted gross income (AGI) the way that traditional contributions will. A higher AGI means you may lose out on certain tax advantages.
</section>

<section id="balance-section" class="calculator-panel contribution-comparison-calculator" markdown="1">

<div id="account-balance-chart"></div>

{% capture explanation_balance %}
<div id="checked-balance">
<p>You have chosen to keep the impact on your paycheck equal; therefore, your gross (pre-tax) traditional balance will be higher because the higher contribution percentage allows you to put aside a higher dollar amount and potentially receive a greater return through earnings.</p>

<p>The higher traditional balance may be offset, however, by any income tax you pay on it when you make a withdrawal. The Roth TSP balance, on the other hand, will be tax-free in retirement (provided you meet <span data-term="Qualified Earnings" class="js-glossary-toggle term term-end">IRS requirements</span>) because you paid the taxes on those contributions when you made them during your career.</p>
</div>
<div id="not-checked-balance">
<p>You have chosen the same contribution percentage for Roth and traditional contributions; therefore, the Roth and traditional retirement balances will be the same. Keep in mind that your traditional TSP balance will be subject to income tax when you withdraw it, but withdrawals from your Roth balance will be tax-free provided you meet the <span data-term="Qualified Earnings" class="js-glossary-toggle term term-end">IRS requirements</span>.</p>

<p>The benefit of having a tax-free Roth TSP balance in retirement, however, must be weighed against the rate at which those contributions were taxed during your working years and any tax benefits you may have lost out on due to your higher AGI.</p>
</div>

<p>Predicting your tax bracket in retirement is the key to determining if Roth TSP or traditional TSP contributions are the right choice for you now.</p>
{% endcapture %}
{% include calculator/div-panel-form-field.html fieldID="panel-balance"
  inputType="none" explanation=explanation_balance  dontOpenOuterDiv=true
%}
<!-- END div#deductions-pre-tax-->

</section>
<section id="balance-section" class="calculator-panel contribution-comparison-calculator" markdown="1">

<div id="annual-income-chart"></div>
{% capture explanation_income %}
<p>This net (after-tax) annual income comparison provides a more accurate reflection of whether you might benefit from paying taxes up front (Roth TSP) or when you withdraw your money (traditional TSP).</p>

<p id="not-checked-income">
Keep in mind that while a Roth TSP annual income stream may be higher when you withdraw your money, the benefit must be weighed against the rate at which those contributions were taxed during your working years and any tax benefits you may have lost out on due to your higher AGI.
</p>

<p>It all comes down to what tax bracket you are in now and which one you think you may fall in while in retirement. Therefore, you may wish to consult a tax advisor to assist you with your retirement planning and contribution decisions.</p>
{% endcapture %}
{% include calculator/div-panel-form-field.html fieldID="panel-income"
  inputType="none" explanation=explanation_income  dontOpenOuterDiv=true
%}


{% include calculator/button-block.html panelID=panelID prev=2 print=1 %}

</section> <!-- results -->
</section> <!-- panel -->

{% comment %}
Put disclaimer at bottom of last panel outside the section and it will never be hidden.
{% endcomment %}
DISCLAIMER: This calculator is provided for informational purposes only. It is not intended
to be used as an investment advisory tool or as a guarantee of the duration of the elected
installment payment amount.
{:.disclaimer}
