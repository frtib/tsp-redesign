{% comment %}
Name middle panels (2) for CALC.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% include calculator/div-panel-form-field.html
  fieldID="panel-2.2" id="amountToReceive" anchor="panel4"
  min="1" value="" max="999999" maxLength=6 step="1"
  placeholder="" dataFormat="$"  dataFormatClass="whole-number"
  onBlur="amountToReceiveGood(false);" prompt="What amount do you want to receive each month?"
  explanation=""
%}

{% capture explanation4_2 %}
Enter a rate of return if you would like your calculation based on an assumed annual earnings rate. If you enter 0% here, your monthly payment calculation will not include projected earnings.

**About rate of return**

The rate of return you assume for your account while you are receiving TSP monthly payments will depend on how you plan to have your account balance invested in retirement. If you guard all your retirement savings completely against volatility, the 5% rate of return that we show as an example may be unrealistically high.

On the other hand, as you are drawing down your account balance, you should be careful not to leave yourself exposed to a great deal of volatility. View the [Rates of returns]({{ site.baseurl }}/fund-performance/{:target="\_blank"} for all the TSP funds and get an idea of how the funds have performed over time. Keep in mind that past performance is not a guarantee or a predictor of future returns. You might want to take a look at the L Income Fund, which is especially designed for participants withdrawing their TSP accounts in monthly payments. Its goal is to provide you a low level of growth with emphasis on preserving your assets.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-4.2" id="rateOfReturn"
  inputClass=""  dataFormat="%"
  min="0" value="" max="99" maxLength=7 step="0.01"
  placeholder="" onBlur="rateOfReturnGood(false);"
  prompt="Expected or estimated rate of return (e.g., 5%):"
  explanation=explanation4_2
%}

{% include calculator/button-block.html panelID=panelID prev=3 next=5 %}

</section>
