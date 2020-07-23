{% comment %}
Name middle panels (2) for CALC.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% include calculator/div-panel-form-field.html
  fieldID="panel-2.1" id="accountAmount"
  inputClass=""  dataFormat="$" dataFormatClass="whole-number"
  min="200" value="" max="" maxLength=8 step="1"
  placeholder="" onBlur="accountAmountGood(true);"
  prompt="Enter the amount from your TSP account that will be used for installment payments:"
  explanation="

  You need a vested account balance of at least $200 to receive TSP installment payments.
  "
%}

{% include calculator/div-panel-form-field.html
  fieldID="panel-2.2" id="frequency"
  inputType="radio" radioIDs="Monthly, Quarterly, Annually" radioLabels="Monthly, Quarterly, Annually"
  inputClass="usa-unstyled-list"
  onBlur="frequencyGood(true);"
  prompt="How often do you want to receive payments?"
  explanation=""
%}

{% include calculator/div-panel-form-field.html
  fieldID="panel-2.3" id="amountToReceive"
  inputClass=""  dataFormat="$"  dataFormatClass="whole-number"
  min="25" value="" max="" maxLength=8 step="1"
  placeholder="" onBlur="amountToReceiveGood(true);"
  prompt="What dollar amount would you like to receive in each payment?"
  explanation="

  You must receive at least $25 per payment.
  "
%}

{% capture explanation_1_4 %}

  Indicate a rate of return (i.e., 5.25%) if you would like your calculation based on
  an assumed annual earnings rate (e.g., the rate you expect your TSP account to grow).
  Otherwise, your calculation will not include projected earnings. You can view the
  [Rates of return]({{ site.baseurl }}/fund-performance/){:target="\_blank"}
  page for more information, but remember that past performance is not a guarantee or
  a predictor of future returns.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.4" id="rateOfReturn"
  inputClass=""  dataFormat="%"
  min="0" value="" max="99" maxLength=8 step="1"
  placeholder="" onBlur="rateOfReturnGood(true);"
  prompt="Expected annual return rate:"
  explanation=explanation_1_4
%}

{% include calculator/button-block.html panelID=panelID prev=1 showResults=3 %}

</section>
