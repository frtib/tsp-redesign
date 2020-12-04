{% comment %}
Paycheck infomation panels (2) for paycheck estimator.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

{% comment %}Start of multi-input block Salary information.  We must close <div> at end{% endcomment %}
{% capture salary_info %}none{% endcapture %}
{% include calculator/div-panel-form-field.html anchor="salary"
  outerDivID="salaryInformationDiv" outerDivClass=""
  fieldID="panel-2.1" inputType="none" H2="Salary information" anchor="salary"
  explanation=""  dontCloseOuterDiv=true
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.2" id="grossPay"
  min="1" value="" max="100000" maxLength=6 step="1"
  placeholder="" dataFormat="$"  dataFormatClass="whole-number"
  onBlur="grossPayGood(false);" prompt="Gross pay per paycheck:"
  explanation=""  dontOpenOuterDiv=true
%}
<span class="hide">Annual Pay <span ID='annualGrossPay'></span></span>
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
  fieldID="panel-2.3" id="paySchedule"
  inputType="selectList"
  radioIDs="Select,Biweekly,Weekly,Semi-monthly,Monthly"
  radioLabels="Select your pay schedule,Biweekly (every 2 weeks&comma; 26 times a year),Weekly (52  times a year),Semi-monthly (twice a month&comma; 24 times a year),Monthly (12  times a year)"
  inputClass="" outerDivID="paySchedule-hide"
  onBlur="payScheduleGood(false);" prompt="Pay schedule:"
  explanation=pay_schedule_explanation dontOpenOuterDiv=true
%}
</div>
<input type="hidden" name="lastPaySchedule" id="lastPaySchedule" value="Select">
</div>{% comment %}End of multi-input block Salary information{% endcomment %}

{% comment %}Start of multi-input block Tax withholding.  We must close <div> at end{% endcomment %}
{% capture tax_withholding_info %}none{% endcapture %}
{% include calculator/div-panel-form-field.html  
  outerDivID="taxWitholdingDiv" outerDivClass=""
  fieldID="panel-2.4" inputType="none" H2="Tax withholding" anchor="withholding"
  explanation=""  dontCloseOuterDiv=true
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.5" id="taxStatus"
  inputType="radio" radioIDs="taxStatusSingle, taxStatusMarried, taxStatusSingleRate"
  radioLabels="Single, Married, Married&comma; withhold at single rate"
  inputClass="usa-unstyled-list"
  onBlur="taxStatusGood(true);"  prompt="Tax filing status"  explanation=""
%}
{% capture federal_allowances_info %}You can use the <span class="nobr">[Tax Withholding Estimator](/exit/?idx=166){:rel="nofollow"}{:target="\_blank"}</span> on the IRS website for help in determining how many allowances to claim.{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.6" id="fedAllowances"
  min="1" value="" max="99" maxLength=2 step="1"
  placeholder="" onBlur="fedAllowancesGood(false);"
  prompt="Enter the number of your federal allowances:"
  explanation=federal_allowances_info  dontOpenOuterDiv=true
%}
{% capture federal_allowances_info %}none{% endcapture %}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.7" id="additionalWithholding"
  min="1" value="" max="10000" maxLength=5 step="1"
  dataFormat="$"  dataFormatClass="whole-number"
  placeholder="" onBlur="sumWithholdingGood(false);"
  prompt="Additional tax withholding:" explanation=""  dontOpenOuterDiv=true
%}
</div>{% comment %}End of multi-input block Tax withholding{% endcomment %}

{% comment %}Start of multi-input block Deductions.  We must close <div> at end{% endcomment %}
{% assign worksheetCall = 'showWorksheet(' | append: panelID | append: '); return false;' %}
{% include calculator/div-panel-form-field.html  
  outerDivID="deductionsDiv" outerDivClass=""
  fieldID="panel-2.8" inputType="none" H2="Deductions" anchor="deductions"
  explanation=""  dontCloseOuterDiv=true
%}
<p>Your Federal income tax amount will automatically be calculated using the current IRS withholding table, so do not include that amount in your payroll deductions.</p>
<p>Use the <a onClick="{{worksheetCall}}">Deduction Worksheet</a> to calculate your payroll deductions. Your most recent paycheck stub will give you the most accurate amounts.</p>
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.9" id="beforeDeduction"
  min="1" value="" max="10000" maxLength=5 step="1"
  dataFormat="$"  dataFormatClass="whole-number"
  placeholder="" onBlur="sumWithholdingGood(false);"
  prompt="Pre-tax deductions:"
  explanation="Examples of pre-tax deductions are health insurance and Flexible Spending Accounts. **Do not include current TSP contributions**."
  dontOpenOuterDiv=true
%}
{% include calculator/div-panel-form-field.html
  fieldID="panel-2.10" id="afterDeduction"
  min="1" value="" max="10000" maxLength=5 step="1"
  dataFormat="$"  dataFormatClass="whole-number"
  placeholder="" onBlur="sumWithholdingGood(false);"
  prompt="Other payroll deductions:"
  explanation="Examples of other payroll deductions are savings allotments and charitable contributions. **Do not include current TSP contributions**."
  dontOpenOuterDiv=true
%}
</div>{% comment %}End of multi-input block Deductions{% endcomment %}

{% capture deductionButton %}
{% include calculator/button.html text='Deduction Worksheet'
  onClick=worksheetCall buttonClass="usa-button-secondary" xtraClass2='' inList=1 %}
{% endcapture %}
{% include calculator/button-block.html panelID=panelID prev=1 next=3 %}

</section>

<section id="panel-{{ panelID }}-worksheet" class="calculator-panel hide" markdown="1">

## Deductions worksheet

Use this worksheet to calculate your payroll deductions. Your most recent paycheck stub will give you the most accurate amounts.

- Only fill in the items that apply to you.
- Do not include your current TSP contributions.

Your Federal income tax amount will automatically be calculated using the current IRS withholding table, so do not include that amount in your payroll deductions.

<ul class="usa-accordion">
{% include calculator/accordion-start.html expanded=true divID='deductions-pre-tax'
    xicon='fal fa-search-dollar' title='Pre-tax deductions' inList=true %}
<fieldset>
  <legend class="sr-only">Pre-tax deductions</legend>
  {% include calculator/paycheck-estimator/worksheet-entry.html setName='pre' entryID=1 prompt="Federal Employee Health Benefits (FEHB):" %}
  {% include calculator/paycheck-estimator/worksheet-entry.html setName='pre' entryID=2 prompt="Health Benefits (dental and vision):" %}
  {% include calculator/paycheck-estimator/worksheet-entry.html setName='pre' entryID=3 prompt="Flexible Spending Account (FSA):" %}
  {% include calculator/paycheck-estimator/worksheet-entry.html setName='pre' entryID=4 prompt="Other / Misc:" %}
</fieldset>
{% include calculator/accordion-end.html  inList=true %}
<!-- END div#deductions-pre-tax-->

{% include calculator/accordion-start.html expanded=true divID='deductions-other'
    xicon='fal fa-search-dollar' title='Other payroll deductions' inList=true %}
<fieldset>
<legend class="sr-only">Other payroll deductions</legend>
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=1 prompt="Social Security Tax (OASDI):" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=2 prompt="Medicare Tax:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=3 prompt="State Tax:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=4 prompt="County Tax:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=5 prompt="City Tax:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=6 prompt="Local Tax:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=7 prompt="Long Term Care Insurance (LTC):" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=8 prompt="Federal Employees' Group Life Insurance (FEGLI):" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=9 prompt="Garnishments / Debt Repayments:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=10 prompt="Tax Levy:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=11 prompt="TSP Loan:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=12 prompt="Allotments:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=13 prompt="Retirement (not including your TSP contributions):" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=14 prompt="Savings Bond:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=15 prompt="Charity:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=16 prompt="Union Dues:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=17 prompt="Military Service Credit Deposits:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=18 prompt="Civilian Service Credit Deposits:" %}
{% include calculator/paycheck-estimator/worksheet-entry.html setName='post' entryID=19 prompt="Other / Misc:" %}
</fieldset>
{% include calculator/accordion-end.html  inList=true %}
<!-- END div#deductions-other -->
</ul>

{% assign worksheetClear = 'clearWorksheet(' | append: panelID | append: '); return false;' %}
{% assign worksheetSave = 'saveWorkseetTotals(' | append: panelID | append: '); return false;' %}
{% capture clearButton %}
{% include calculator/button.html text='Clear worksheet'
  onClick=worksheetClear buttonClass="usa-button-secondary clear" xtraClass2='' inList=1 %}
{% endcapture %}
{% capture totalsButton %}
{% include calculator/button.html text='Save totals'
  onClick=worksheetSave buttonClass="usa-button save" xtraClass2='' inList=1 %}
{% endcapture %}
{% include calculator/button-block.html panelID=panelID bonusButton2=clearButton bonusButton3=totalsButton %}

</section>
