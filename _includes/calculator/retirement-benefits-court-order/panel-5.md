{% comment %}
Attorney panel (5) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 5 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

<a name="partATLawyer-anchor"></a>
{% include calculator/retirement-benefits-court-order/address-section.html prefix='partAT'
    legendStr='Attorney information for Participant or Party 1'
    isAttorney=true attyPrompt="Is party 1 represented by an attorney?" %}

<a name="payATLawyer-anchor"></a>
{% include calculator/retirement-benefits-court-order/address-section.html prefix='payAT'
    legendStr='Attorney information for Payee or Party 2'
    isAttorney=true attyPrompt="Is party 2 represented by an attorney?" %}

<a name="QDROLawyer-anchor"></a>
{% capture QDROexplain %}A Retirement Benefits Specialist (sometimes called a "QDRO Specialist" or "pension specialist") is an individual who has been retained to assist you in preparing your court order for submission to the TSP.{% endcapture %}
{% include calculator/retirement-benefits-court-order/address-section.html prefix='QDRO'
    legendStr='Retirement Benefits Specialist retained?'  QDROexplain=QDROexplain
    isQDRO=true attyPrompt="Has a Retirement Benefits Specialist been retained?" %}

{% include calculator/button-block.html panelID=panelID prev=4 next=6 nextOK=6 %}

</section>
