{% comment %}
Name middle panels (2) for Contribution Comparison Calculator.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

<!-- 1. How many years until you retire? -->
{% capture explanation_2_1 %}
If you plan to retire before age 59&frac12;, be aware that any Roth earnings included in a withdrawal will not be tax-free.  Also, you may be subject to a 10% early withdrawal penalty tax.  See the TSP tax notice [_Important Information About Payments From Your TSP Account_](/publications/tsp-536.pdf) for more information as well as exceptions to this rule.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.1" id="cccYearsUntilRetirement" inputClass=""  dataFormat=""
  min="1" value="" max="70" maxLength=2 step="1" anchor="profile"
  placeholder="" onBlur="cccYearsUntilRetirementGood(false);"
  prompt="How many years until you retire?"
  explanation=explanation_2_1
%}
<!-- 1b. How many years will you spend in retirement? -->
{% capture explanation_1_1b %}
Participants turning age 50 or older are eligible for catch-up contributions. We'll take that into account when calculating how much you can contribute.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-1.1b" id="age50"
  inputType="radio" radioIDs="age50Yes, age50No" radioLabels="Yes, No"
  inputClass="usa-unstyled-list"   onBlur="age50Good(false);"
  prompt='Will you turn age 50 or older this year?'
  explanation=explanation_1_1b
%}
<!-- 2. How many years will you spend in retirement? -->
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.2" id="cccYearsInRetirement" inputClass=""  dataFormat=""
  min="1" value="" max="70" maxLength=2 step="1"
  placeholder="" onBlur="cccYearsInRetirementGood(false);"
  prompt="How many years will you spend in retirement?"
  explanation="A recommended estimation is age 95 minus your retirement age to plan
  for your income needs and protect your longevity risk."
%}

<!-- 3. Current annual salary -->
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.3" id="cccSalary"
  inputClass=""  dataFormat="$"  dataFormatClass="whole-number"
  min="1" value="" max="700000" maxLength=6 step="1"
  placeholder="" onBlur="checkContributionAmount(false);"
  prompt="Current annual salary:" explanation=""
%}

<!-- 4. Expected rate of return -->
{% capture explanation2_4 %}
Enter the annual rate of return you expect to earn on your contributions. View the [Rates of return]({{ site.baseurl }}/fund-performance/){:target="\_blank"} for context, but keep in mind that past performance is not a guarantee or a predictor of future returns.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.4" id="cccInterestRate"
  inputClass=""  dataFormat="%"
  min="0" value="" max="99" maxLength=7 step="0.01"
  placeholder="" onBlur="cccInterestRateGood(false);"
  prompt="Expected annual rate of return:"
  explanation=explanation2_4
%}

<!-- 5. Contributions per year, as a percentage of your salary -->
{% capture explanation2_5 %}
The total of your regular employee contributions should not exceed the Internal Revenue Code (IRC)
elective deferral and catch-up contribution limits
<span class="nobr">(<span id='irc-contribution-limit'></span> for <span id='irc-limit-year'></span>)</span>.
<p>Your current selections are <span id='current-annual'>--</span> annually.</p>
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.5" id="cccContributions"
  inputClass=""  dataFormat="%"
  min="0" value="" max="99" maxLength=7 step="1"
  placeholder="" onBlur="checkContributionAmount(false);"
  prompt="Contributions per year, as a percentage of your salary:"
  explanation=explanation2_5
%}

<!-- 6. Current household tax rate -->
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.6" id="cccTaxRateNow"
  inputClass=""  dataFormat="%"
  min="0" value="" max="99" maxLength=7 step="0.01"
  placeholder="" onBlur="cccTaxRateNowGood(false);"
  prompt="Current household tax rate:"
  explanation=""
%}

<!-- 7. Estimated retirement household tax rate -->
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.7" id="cccTaxRateLater"
  inputClass=""  dataFormat="%"
  min="0" value="" max="99" maxLength=7 step="0.01"
  placeholder="" onBlur="cccTaxRateLaterGood(false);"
  prompt="Estimated retirement household tax rate:"
  explanation=""
%}

<!-- 8. Pay frequency -->
{% capture pay_schedule_explanation %}
This will depend on how often you are paid (biweekly or monthly, for example). If you are uncertain, check with your personnel or finance office.

<table class="pay-schedule-table">
<thead>
<tr><th scope="col">Payment Frequency</th><th scope="col">Number of Salary Payments</th></tr>
</thead>
<tbody>
<tr><td>Biweekly</td><td>26*</td></tr>
<tr><td>Monthly</td><td>12</td></tr>
<tr><td>Weekly</td><td>52</td></tr>
<tr><td>Semimonthly</td><td>24</td></tr>
</tbody></table>

\*A biweekly frequency occasionally results in 27 salary payments for a year.  Contact your personnel or payroll office if you do not know the number of salary payments you will receive for the remainder of the year.

{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.8" id="paySchedule"  inputType="selectList"
  radioIDs="Select,Biweekly,Weekly,Semi-monthly,Monthly"
  radioLabels="Select your pay schedule,Biweekly (every 2 weeks&comma; 26 times a year),Weekly (52  times a year),Semi-monthly (twice a month&comma; 24 times a year),Monthly (12  times a year)"
  inputClass="" onBlur="payScheduleGood(false);" prompt="Pay schedule:"
  explanation=pay_schedule_explanation
%}


<!-- 9. Show equal paycheck impact -->
{% include calculator/div-panel-form-field.html  
  outerDivID="equalImpactDiv" outerDivClass=""
  fieldID="panel-2.9" inputType="none"
  explanation=""  dontCloseOuterDiv=true
%}
<fieldset class="usa-fieldset-inputs show-equal">
<legend class="usa-sr-only">Show equal paycheck impact (amount deducted) for Roth and traditional contributions.</legend>
<ul class="usa-unstyled-list">
  <li class="show-equal">
    <input id="cccEqualContribution" type="checkbox" name="cccEqualContribution" value="cccEqualContribution" checked="checked"/>
    <label for="cccEqualContribution">Show equal paycheck impact (amount deducted) for Roth and traditional contributions.</label>
  </li>
</ul>
</fieldset>

{% capture explanation_2_10 %}
Checking this box reduces the contribution percentage to the Roth balance, so that after paying taxes, your paycheck will be the same as it would be after a contribution to your traditional TSP balance. **If you do not check this box**, the same contribution percentage will be used for Roth and traditional contributions.
{% endcapture %}
{% include calculator/div-panel-form-field.html fieldID="panel-2.10" inputType="none"
  explanation=explanation_2_10   dontOpenOuterDiv=true %}
</div>

{% include calculator/button-block.html panelID=panelID prev=1 showResults=3 %}

</section>
