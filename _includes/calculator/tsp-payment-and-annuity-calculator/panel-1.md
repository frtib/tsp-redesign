{% comment %}
Inputs panel (1) for Estimate Load Payments.
{% endcomment %}
{% assign panelID = include.panelID | default: 1 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}" markdown="1">

## About TSP installment payments and life annuities

If you're a separated or beneficiary participant, you have some options if you want to use your TSP account as a source of income to be received at regular intervals. You can elect to have TSP installment payments sent to you either monthly, quarterly, or annually; or you can use all or part of your TSP account to purchase a life <span data-term="Annuity" class="js-glossary-toggle term term-end">annuity</span>. Purchasing an annuity means that you pay now to receive monthly payments that last for the rest of your life or, if you purchase a joint annuity, your joint annuitant's life. (View Feature Comparison Chart).

This calculator estimates how a given amount of money might translate into monthly income, whether through TSP installment payments or through the various life annuity options. To make the comparison easier, the calculator only shows monthly TSP installment payments, since annuity payments are always monthly. Remember that quarterly and annual payments are also available.

Please note that annuity purchases are irrevocable. Be sure to read the &#8220;Life Annuities&#8221; section of the TSP booklet [_Withdrawing From Your TSP Account for Separated and Beneficiary Participants_](/publications/tspbk02.pdf) file for more detailed information.


{% include calculator/button-block.html panelID=panelID getStarted=2 %}

</section> <!-- end div#panel -->
