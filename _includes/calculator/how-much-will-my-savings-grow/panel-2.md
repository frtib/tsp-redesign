{% comment %}
Name middle panels (2) for CALC.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

<div class="hide">
## Retirement system: <span id="retirementSystem"></span>
</div>
<input type="hidden" id="lastGrowthSelector" name="lastGrowthSelector" value="">
{% include calculator/div-panel-form-field.html
  outerDivID="growthSelectorDiv"
  fieldID="panel-2.1" id="growthSelector"
  inputType="radio" radioIDs="balanceOnly, futureOnly, bothGrowth"
  radioLabels="Existing account balance, Future contributions, Both"
  inputClass="usa-unstyled-list"
  onBlur="growthSelectorGood(true);"
  prompt="Growth model"
  explanation="
  This calculator will show you the growth of your current account balance, growth of future contributions from your paycheck, or both. You must select a growth model.
  "
%}

{% comment %}Start of multi-input block Service So Far.  We must close <div> at end{% endcomment %}
{% capture explanation2_2 %}none{% endcapture %}
{% include calculator/div-panel-form-field.html outerDivID="serviceSoFar"
  fieldID="panel-2.2" inputType="none" H2="Your service so far" anchor="service"
  explanation=''  dontCloseOuterDiv=true
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.3" id="yearsServed"
  inputClass=""  min="0" value="" max="99" maxLength=2 step="1"
  placeholder="" onBlur="yearsServedGood(false);"
  prompt="Enter the number of years you have already served (whole numbers only):"
  explanation=""  dontOpenOuterDiv=true
%}
{% capture explanation2_4 %}
Your DIEMS (Date of Initial Entry into Military Service) is the date on which you committed to enlist or enter an academy, not necessarily the date you began serving. Ask your service personnel office if you are unsure of your DIEMS.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.4" id="DIEMSdate"
  inputClass="hasDatepicker"  maxLength=11
  placeholder="Month Day, Year" onBlur="DIEMSdateGood(true);"
  prompt="Enter your DIEMS:"
  explanation=explanation2_4   dontOpenOuterDiv=true
%}
</div>{% comment %}End of multi-input block Account contribs{% endcomment %}

{% capture explanation2_5 %}
Log in to [My Account]({{ site.myaccount }}){:target="\_blank"} to see your current account balance.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  outerDivID="accountBalanceDiv" outerDivClass="hide"
  fieldID="panel-2.5" id="amountToUse"  anchor="balance"
  inputClass=""  dataFormat="$" H2="Existing account balance"
  min="0" value="" max="5000000" maxLength=7 step="1"
  placeholder="" onBlur="amountToUseGood(false);"
  prompt="Enter the amount you already have in your TSP account:"
  explanation=explanation2_5
%}

{% comment %}Start of multi-input block Future Contrib.  We must close <div> at end{% endcomment %}
{% comment %}This block also has glossary filled dynamic text creating a complex text block where one of five choices is displayed based on the rs choosen on the previous page.{% endcomment %}
{% capture FC_more_info %}For more information on agency contributions, see [Contribution types]({{ site.baseurl }}/making-contributions/contribution-types/).{{ seeMoreInfo }}
{% endcapture %}
{% capture explanation2_6FERS %}
<span id="FC_FERS" class="FC_Info hide">FERS You may begin contributing to the TSP (through payroll contributions) as soon as you are hired. You also receive <span data-term="Agency Automatic (1%) Contributions" class="js-glossary-toggle term term-end">Agency Automatic (1%) Contributions</span> and are eligible to receive <span data-term="Agency Matching Contributions" class="js-glossary-toggle term term-end">Agency Matching Contributions</span>. Note: Newly hired or rehired FERS employees are automatically enrolled to contribute 3% of basic pay unless they elect otherwise. {{ FC_more_info }}</span>
{% endcapture %}
{% capture explanation2_6CSRS %}
<span id="FC_CSRS" class="FC_Info hide">CSRS You may begin contributing to the TSP (through payroll contributions) as soon as you are hired. Note: Newly rehired CSRS employees are automatically enrolled to contribute 3% of basic pay unless they elect otherwise. CSRS employees do not receive agency contributions.</span>
{% endcapture %}
{% capture explanation2_6USBRS %}
<span id="FC_USBRS" class="FC_Info hide">USBRS You can contribute from incentive pay, special pay, or bonus pay, as long you contribute from your basic pay. You can elect to contribute from incentive pay, special pay, or bonus pay, even if you are not currently receiving them. These contributions will be deducted when you do receive any of these types of pay. BRS members also receive <span data-term="Service Automatic (1%) Contributions" class="js-glossary-toggle term term-end">Service Automatic (1%) Contributions</span> and are eligible to receive <span data-term="Service Matching Contributions" class="js-glossary-toggle term term-end">Service Matching Contributions</span>. Note: Newly hired or rehired uniformed services members are automatically covered by BRS and enrolled to contribute 3% of basic pay unless they elect otherwise. {{ FC_more_info }}</span>
{% endcapture %}
{% capture explanation2_6US %}
<span id="FC_US" class="FC_Info hide">US You may begin contributing to the TSP (through payroll contributions) as soon as you are hired. You can contribute from incentive pay, special pay, or bonus pay, as long you contribute from your basic pay. You can elect to contribute from incentive pay, special pay, or bonus pay, even if you are not currently receiving them. These contributions will be deducted when you do receive any of these types of pay. Note: Non-BRS members of the uniformed services do not receive <span data-term="Service Automatic (1%) Contributions" class="js-glossary-toggle term term-end">Service Automatic (1%) Contributions</span> or <span data-term="Service Matching Contributions" class="js-glossary-toggle term term-end">Service Matching Contributions</span>.</span>
{% endcapture %}
{% capture explanation2_6BP %}
<span id="FC_BP" class="FC_Info hide">BP You cannot contribute additional funds to the TSP account that was established for you.</span>
{% endcapture %}
{% capture explanation2_6 %}
{{ explanation2_6FERS }}
{{ explanation2_6CSRS }}
{{ explanation2_6USBRS }}
{{ explanation2_6US }}
{{ explanation2_6BP }}
{% endcapture %}
{% include calculator/div-panel-form-field.html  
  outerDivID="futureContributionsDiv" outerDivClass="hide"
  fieldID="panel-2.6" inputType="none" H2="Future contributions" anchor="future"
  explanation=explanation2_6  dontCloseOuterDiv=true
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.7" id="yearsToContribute"
  min="0" value="" max="99" maxLength=2 step="1"
  placeholder="" onBlur="yearsToContributeGood(false);"
  prompt="Enter the number of years you plan to contribute:"
  explanation=''  dontOpenOuterDiv=true
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.8" id="annualPay"
  inputClass=""  dataFormat="$"  dataFormatClass="whole-number"
  min="1" value="" max="1000000" maxLength=7 step="1"
  placeholder="" onBlur="annualPayGood(false);"
  prompt="Annual pay:"
  explanation="
  Enter the gross amount of basic pay you receive each year. **Note:** Uniformed services members can contribute from incentive, special, and bonus pay &#8212; civilians cannot.
  "
  dontOpenOuterDiv=true
%}
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
<div id='paySchedule-hide'>
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.9" id="paySchedule"
  inputType="selectList"
  radioIDs="Select,Biweekly,Weekly,Semi-monthly,Monthly"
  radioLabels="Select your pay schedule,Biweekly (every 2 weeks&comma; 26 times a year),Weekly (52  times a year),Semi-monthly (twice a month&comma; 24 times a year),Monthly (12  times a year)"
  inputClass="" outerDivID="paySchedule-hide"
  onBlur="payScheduleGood(false);" prompt="Pay schedule:"
  explanation=pay_schedule_explanation dontOpenOuterDiv=true
%}
</div>
{% comment %} -----  %/$ Contribution code below here ------ {% endcomment %}
{% capture explanation_2_10 %}
Enter the amount of annual pay that you would like to save.  (If you're age 50 or older,
include any contributions toward the catch-up limit.)
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.10.r" id="contributionSelector"
  inputType="radio" radioIDs="contributionFixed, contributionPercentage"
  radioLabels="Fixed dollar amount, Percentage"
  inputClass="usa-unstyled-list"
  onBlur="contributionSelectorGood(true);"
  prompt=explanation_2_10
  explanation=""
  dontOpenOuterDiv=true
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.10.f" id="annualPayFixed"
  inputClass=""  dataFormat="$" innerDivClass="hide"
  min="0" value="" max="1000000" maxLength=7 step="1"
  placeholder="" onBlur="annualPayFixedGood(false);"
  prompt=" " xprompt="Enter the fixed amount of annual pay that you would like to save:"
  explanation=""   dontOpenOuterDiv=true
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.10.p" id="annualPayPercent"
  inputClass=""  dataFormat="%" innerDivClass="hide"
  min="0" value="" max="99" maxLength=5 step="1"
  placeholder="" onBlur="annualPayPercentGood(false);"
  prompt="Enter the whole percentage of annual pay that you would like to save:"
  explanation=""   dontOpenOuterDiv=true
%}
{% comment %} -----  %/$ Contribution code above here ------ {% endcomment %}
<!-- DONALD - this is the contribution exceeds max note -->
{% capture contribution_exceeds_maximum_title %}
Internal Revenue Code (IRC) <span data-term="Elective Deferral Limit" class="js-glossary-toggle term term-end">Elective Deferral Limit</span>
{% endcapture %}
{% capture contribution_exceeds_maximum %}
<br>Your yearly contribution: <span id="total-contribution">0</span><br><br>
Maximum whole percentage below limit: <span id="maximum-percent-contribution">0</span>%<br><br>
The combined total of your regular employee contributions exceeds the Internal Revenue Code (IRC) elective deferral limit (<span id="IRC-limit">$x19,500.00</span> in <span id="IRC-limit-year">x2020</span>).<br><br>
If you reach the IRC elective deferral limit before the end of the year, your own contributions will be suspended, and you will miss out on the associated earnings.<br><br>
<strong>Note:</strong> If you are age 50 or over, you can make catch-up contributions in excess of the elective deferral limit.<br><br>
For more accurate results, decrease the amount of regular employee contributions you would like to make. You can also enter a dollar amount for catch-up contributions if you are eligible.
{% endcapture %}
{% include calculator/infoBox.html icon='warning'
    divID="contribution-exceeds-maximum" class="hide"
    title=contribution_exceeds_maximum_title
    textBlock=contribution_exceeds_maximum
%}
<!-- end of contribution exceeds note -->
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.11" id="annualPayIncreasePercent"
  inputClass=""  dataFormat="%"
  min="0" value="" max="15" maxLength=5 step="0.01"
  placeholder="" onBlur="annualPayIncreasePercentGood(false);"
  prompt="Enter the percentage of your expected annual pay increase:"
  explanation=""   dontOpenOuterDiv=true
%}
</div>{% comment %}End of multi-input block Future contrib{% endcomment %}


{% comment %}Start of multi-input block Account contribs.  We must close <div> at end{% endcomment %}
{% capture explanation2_13 %}none{% endcapture %}
{% include calculator/div-panel-form-field.html
  outerDivID="accountContributionsDiv" outerDivClass="hide"
  fieldID="panel-2.13" inputType="none" H2="Account contributions" anchor="time"
  explanation=''  dontCloseOuterDiv=true
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.14" id="yearsToGo"
  inputClass=""  inputType="integer"
  min="1" value="" max="99" maxLength=2 step="1"
  placeholder="" onBlur="yearsToGoGood(false);"
  prompt="Enter the number of years left until you begin withdrawing from your TSP account:"
  explanation="
  Subtract the current year from the year you expect to start drawing down from your account.
  "
  dontOpenOuterDiv=true
%}
{% capture explanation2_15 %}
Enter the annual rate of return you expect to earn on your contributions. View the [Rates of return]({{ site.baseurl }}/fund-performance/){:target="\_blank"} for context, but keep in mind that past performance is not a guarantee or a predictor of future returns.
{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.15" id="rateOfReturn"
  inputClass=""  dataFormat="%"
  min="0" value="" max="99" maxLength=7 step="0.01"
  placeholder="" onBlur="rateOfReturnGood(false);"
  prompt="Expected annual rate of return:"
  explanation=explanation2_15   dontOpenOuterDiv=true
%}
</div>{% comment %}End of multi-input block Account contribs{% endcomment %}

{% include calculator/button-block.html panelID=panelID prev=1 showResults=3 %}

</section>
