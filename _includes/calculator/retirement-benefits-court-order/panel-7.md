{% comment %}
Awards panel (7) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 7 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% capture bonusButton2 %}
<button type="button" class="usa-button-secondary " onclick="buildAnotherAward();" markdown="1">Build another award</button>
{% endcapture %}
{% include calculator/button-block.html panelID=panelID prev=6 bonusButton2=bonusButton2 submit=8 %}

</section>
