{% comment %}
Inputs panel (1) for Contribution Comparison Calculator.
{% endcomment %}
{% assign panelID = include.panelID | default: 1 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}" markdown="1">

The Contribution comparison calculator helps you assess how the tax treatment choice you make for your employee contributions affects your paycheck. With Roth TSP contributions, you make contributions with after-tax income by paying taxes up front. During retirement, you receive <span data-term="Qualified Earnings" class="js-glossary-toggle term term-end">qualified Roth distributions</span> tax-free. The traditional TSP lets you make contributions before taxes are taken out of your income and then pay taxes on withdrawals.

This calculator provides a side-by-side comparison of traditional and Roth contributions to help you assess whether Roth TSP might be right for you. Keep in mind you may choose to contribute all, some, or none of your contributions to the Roth TSP. If contributing to both Roth and traditional balances within your TSP account, your combined contributions cannot exceed the <span data-term="elective deferral limit" class="js-glossary-toggle term term-end">elective deferral limit</span> (or catch-up limit if you are turning age 50 or older in the calendar year). This calculator does not account for tax-free contributions.

Note that the calculator results are based on the limited information captured. You should consult a qualified tax or financial advisor to further assess your individual situation.

{% include calculator/button-block.html panelID=panelID getStarted=2 %}

</section> <!-- end div#panel -->
