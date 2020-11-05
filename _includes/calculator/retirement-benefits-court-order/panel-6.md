{% comment %}
Case panel (6) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 6 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% include calculator/button-block.html panelID=panelID prev=5 next=7 nextOK=7 %}

</section>
