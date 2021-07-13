{% comment %}
Party 1 panel (3) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% include calculator/retirement-benefits-court-order/address-section.html prefix='part' %}

{% include calculator/retirement-benefits-court-order/account-number-section.html prefix='part' %}

{% include calculator/button-block.html panelID=panelID prev=2 next=4 nextOK=4 %}

</section>
