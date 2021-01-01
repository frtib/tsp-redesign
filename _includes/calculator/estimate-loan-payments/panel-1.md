{% comment %}
Name middle panels (2) for CALC.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<!-- PANEL 1 -->
<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

The Loan Calculator estimates loan payments based on the amount you want to borrow from your TSP account, the [current loan interest rate]({{ site.baseurl }}/news-and-resources/), and other factors. To borrow from your TSP account, you must be a Federal employee in pay status. If you qualify for a TSP loan, the maximum amount you may be eligible to borrow is $50,000; the minimum amount is $1,000. To find out the amount you have available to borrow, visit [TSP Loans]({{ site.loans }}) in the My Account section.

{% include calculator/div-panel-form-field.html
  fieldID="panel-1.1" id="employmentCategory"
  inputType="radio" radioIDs="Civilian, Uniformed" radioLabels="Civilian, Uniformed Services"
  inputClass="usa-unstyled-list"
  onBlur="employmentCategoryGood(true);"
  prompt="Select your employment category:"
  explanation=""
%}

{% include calculator/div-panel-form-field.html
  fieldID="panel-1.2" id="loanAmt"
  inputClass=""  dataFormat="$"
  min="1000" value="1000" max="50000" maxLength=5 step="1"
  placeholder="" onBlur="loanAmtGood(false);"
  prompt="Loan amount you wish to borrow:"
  explanation="

  Enter a whole dollar amount between $1,000 and $50,000.
  "
  additionalContent="
**Interest Rate**: The current rate for new loans is **<span id=\"loan-rate\">not available</span>,** which is the current <span class='nobr'>G Fund</span> interest rate.
"
%}

{% include calculator/div-panel-form-field.html
  fieldID="panel-1.3" id="loanType"
  inputType="radio" radioIDs="General, Residential" radioLabels="General purpose, Residential"
  inputClass="usa-unstyled-list"
  onBlur="loanTypeGood(false);"
  prompt="Select the type of loan you wish to apply for:"
  explanation="

There are two types of loans.

- **General purpose loan** with a repayment period of 1 to 5 years. No documentation is required.
- **Residential loan** with a repayment period of 1 to 15 years. Documentation is required.

A residential loan can be used only for the purchase or construction of a primary residence. The residence can be a house, condominium, shares in a cooperative housing corporation, a townhouse, boat, mobile home, or recreational vehicle, but it must be used as your **primary residence.** The residence must be purchased (in whole or in part) by you or your spouse. You can obtain a residential loan for constructing a new residence or purchasing an existing residence. You **cannot** use a residential loan for refinancing or prepaying an existing mortgage, for renovations or repairs, for buying out another person’s share in your current residence, or for the purchase of land only.

You may have **only one general purpose loan and one residential loan** outstanding at any one time. This is a per-account limit. If you have both a civilian account and a uniformed services account, you may have one of each type of loan for each account.
  "
%}


<!--
<div id="paySchedule-div" class="panel-form-field" >
<label for="paySchedule" id="paySchedule-label" aria-details="panel-1.5" >Your pay schedule:</label>
<span class="usa-input-error-message" id="paySchedule-error-message" role="alert"></span>
-->

<div class="panel-form-field" >
<div id="payType-div">
<fieldset class="usa-fieldset-inputs usa-sans">
<legend id="payType-label" aria-details="panel-1.4">Repayment terms: (select <strong>ONE</strong>)</legend>
<span class="usa-input-error-message" id="payType-error-message" role="alert"></span>
<ul class="usa-unstyled-list inline-input">
<!-- Radio 1 -->
<span class="usa-input-error-message" id="ptYears-error-message" role="alert"></span>
<span class="usa-input-error-message" id="ptMonths-error-message" role="alert"></span>
<li>
<input type="radio" id="repayTime" name="repayment-terms" value="repayTime" onclick="payTypeGood(false);">
<label id="repayTime-label" for="repayTime">Repay the loan over</label>
  <input id="ptYears" class="" type="number" name="repayTime" value="" size="2" maxlength="2"
  min="1" max="15" step="1" placeholder="" onchange="ptYearsMonthsGood(false, false);">
  <label for="ptYears" class="sr-only">Number of years</label>
  year(s) and
  <input id="ptMonths" class="" type="number" name="repayTime" value="0" size="2" maxlength="2"
  min="0" max="11" step="1" placeholder="" onchange="ptYearsMonthsGood(false, false);" title="Months">
  <label for="ptMonths" class="sr-only">Number of months</label> month(s)
</li>
<!-- Radio 2 -->
<span class="usa-input-error-message" id="ptAmount-error-message" role="alert"></span>
<li>
<input type="radio" id="repayPayday" name="repayment-terms" value="repayPayday" onclick="payTypeGood(false);">
<label id="repayPayday-label" for="repayPayday">Repay the loan by paying</label>
  <span data-format="$" class="input-symbol-left">
  <input id="ptAmount" name="repayPayday" class="positivefloat" value="0" size="8" type="number" onblur="ptAmountGood(false);" onchange="ptAmountGood(false);" /></span><label for="ptAmount" class="sr-only">Payment amount</label> each pay period
</li>
{% comment %}
<!-- Radio 3 -->
<span class="usa-input-error-message" id="ptNumpay-error-message" role="alert"></span>
<li>
<input type="radio" id="repayPayments" name="repayment-terms" value="repayPayments" onclick="payTypeGood(false);">
<label id="repayPayments-label" for="repayPayments">Repay by making</label>
  <input id="ptNumpay" class="" type="number" name="repayPayments" value="" size="3"
   maxlength="3" min="1" max="180" step="1" placeholder="" onchange="ptNumpayGood(false);">
   <label for="ptNumpay" class="sr-only">Number of payments</label> payments
</li>
{% endcomment %}
</ul>
</fieldset>
</div>
</div>
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
  fieldID="panel-1.5" id="paySchedule"
  inputType="selectList"
  radioIDs="Select,Biweekly,Weekly,Semi-monthly,Monthly"
  radioLabels="Select your pay schedule,Biweekly (every 2 weeks&comma; 26 times a year),Weekly (52  times a year),Semi-monthly (twice a month&comma; 24 times a year),Monthly (12  times a year)"
  inputClass="" outerDivID="paySchedule-hide"
  onBlur="payScheduleGood(false);"
  prompt="Your pay schedule:"
  explanation=pay_schedule_explanation
%}
<input type="hidden" name="lastPaySchedule" id="lastPaySchedule" value="Select">

{% include calculator/button-block.html panelID=panelID showResults=2 %}

</section> <!-- end section#panel-1 -->
