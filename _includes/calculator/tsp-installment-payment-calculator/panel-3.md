{% comment %}
Results NAME panel (3) for CALC.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign hide = 'display: block;' %}
{% assign gridClass2 = include.gridClass2 | default: 'results' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<a name="result-top"></a>
<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}" markdown="1">

__A summary of your results is show below.__

Keep in mind that installment payments for a specific dollar amount are paid until
you stop or change your payments or your account balance reaches zero.

<div class="results-grid-frame" markdown="1">
{% include calculator/resultsRow.html rightID="account-amount" right=""
  left="Amount from your account used for monthly payments:" %}
{% include calculator/resultsRow.html rightID="monthly-payment" right=""
  left="Paid in <span id='monthly-payment-choice'>periodic</span> installments of " %}
{% include calculator/resultsRow.html rightID="rate-of-return" right=""
  left="At an assumed annual rate of return of" %}
{% include calculator/resultsRow.html rightID="account-depleted" right=""
  left="<span id='deplete-text'>Which will deplete your account in</span>" %}

</div>

**Note**: Payments may be made for a longer or shorter period of time than expected, depending on the gains and
losses in the value of your account while you are receiving installment payments.  If you are subject to the IRS [Required Minimum Distribution (RMD)]({{ site.baseurl }}/living-in-retirement/making-a-withdrawal/#required-minimum-distributions-rmds){:target="\_blank"} rules and your installment payments do not satisfy your RMD, a supplemental payment will be made to you.

{% capture ParticipantNote %}
See the tax notice &#8220;[Important Tax Information About Your TSP Withdrawal and Required Minimum Distributions.]({{ site.baseurl }}/publications/tsp-775.pdf){:target="\_blank"}&#8221;
{% endcapture %}

{% include calculator/infoBox.html icon='info'
    title="Civilian or uniformed services participants"
    textBlock=ParticipantNote
%}

{% capture BPANote %}
See the tax notice &#8220;[Tax Information About TSP Withdrawals and Required Minimum Distributions for Beneficiary Participants.]({{ site.baseurl }}/publications/tsp-776.pdf){:target="\_blank"}&#8221;
{% endcapture %}

{% include calculator/infoBox.html icon='info'
    title="Beneficiary participants"
    textBlock=BPANote
%}

{% include calculator/button-block.html panelID=panelID revise=2 %}

## Projected year-end balances

These results are based on requested installment payment amounts.

{% include selectResult.html rsID='installment-payment' %}
<span id='installment-payment-footnote'></span>
</section>

{% comment %}
Put disclaimer at bottom of last panel outside the section and it will never be hidden.
{% endcomment %}
DISCLAIMER: This calculator is provided for informational purposes only. It is not intended
to be used as an investment advisory tool or as a guarantee of the duration of the elected
installment payment amount.
{:.disclaimer}
