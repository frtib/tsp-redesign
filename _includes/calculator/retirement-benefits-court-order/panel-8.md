{% comment %}
Summary panel (8) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 8 %}
{% assign hide = 'display: block;' %}
{% assign gridClass2 = include.gridClass2 | default: 'results' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel " style="{{ hide }}" markdown="1">


{% include calculator/button-block.html panelID=panelID prev=7 print=1 %}

</section>

{% comment %}
Put disclaimer at bottom of last panel outside the section and it will never be hidden.
DISCLAIMER: This calculator is provided for informational purposes only. It is not intended to provide retirement income advice or be used as an investment advisory tool or as a guarantee of monthly payment amounts or a final account balance.
{:.disclaimer}
{% endcomment %}
