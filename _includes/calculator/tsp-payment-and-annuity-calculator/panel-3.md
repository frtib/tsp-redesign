{% comment %}
Name middle panels (2) for CALC.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% include calculator/div-panel-form-field.html
  fieldID="panel-3.1" id="ageNow"  anchor="panel3"
  inputClass=""  min="18" value="" max="99" maxLength=2 step="1"
  placeholder="" onBlur="checkAges(false);"
  prompt="What is your current age?"
  explanation=""  
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-3.2" id="ageFrom"
  inputClass=""  min="18" value="" max="99" maxLength=2 step="1"
  placeholder="" onBlur="checkAges(false);"
  prompt="At what age do you want to start receiving monthly income from the TSP?"
  explanation=""  
%}
{% capture explanation3_3 %}
**Will you outlive your savings?** There's no way to know for sure whether your savings will last throughout your retirement, but you may spend almost as many years living in retirement as you did working.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-3.3" id="ageToLive"
  inputClass=""  min="18" value="" max="115" maxLength=3 step="1"
  placeholder="" onBlur="checkAges(false);"
  prompt="To what age do you expect to live?"
  explanation=explanation3_3  
%}

{% include calculator/button-block.html panelID=panelID prev=2 next=4 %}

</section>
