{% comment %}
Introduction panel (1) for How Much Can I Contribute?.
{% endcomment %}
{% assign panelID = include.panelID | default: 1 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<div id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}" markdown="1">

Each year the IRS determines the maximum amount you can contribute to tax-deferred savings plans like the TSP. This is known as the [IRS elective deferral limit]({{ site.baseurl }}/making-contributions/contribution-limits/). Participants should use this calculator to determine the specific dollar amount to be deducted each pay period in order to maximize your contributions and to ensure that you do not miss out on Agency or Service Matching Contributions if you are entitled to them.

**What information do you need to use this calculator?**

-   Your most recent Leave and Earnings statement or payslip.
-   The number of salary payments you have left for the year.

<div class="dotted-line"></div>

<fieldset>
{% include calculator/div-panel-form-field.html
  fieldID="panel-1.1" id="review-year" inputClass="" inputType="no-select"
  value="2019" min="2018" max="2020"  onBlur="reviewYearChange();"
  prompt="Choose the year you would like to review, then press Start."
  explanation=""  dontCloseOuterDiv=true
%}
<ul class="usa-unstyled-list">
  <li>
    <input id="age50" type="checkbox" name="age50" value="age50" />
    <label for="age50">I will be age 50 or older in <span id="age50year">year</span></label>
  </li>
</ul>
{% capture explanation_1_2 %}
Participants age 50 or older are eligible for catch-up contributions. We'll take that into account when calculating how much you can contribute.
{% endcapture %}
{% include calculator/div-panel-form-field.html fieldID="panel-1.2" inputType="none" explanation=explanation_1_2 dontOpenOuterDiv=true %}
</div><!-- END div.panel-form-field -->
</fieldset>

{% capture click %}processPanel({{ panelID }}, 0, {{ panelID | plus: 1}}, 0); return false;{% endcapture %}
{% include calculator/button.html text='Start' onClick=click xtraClass2='primary' %}

{% capture myNote %}
This calculator is especially important for FERS employees and members of the
uniformed services covered by the Blended Retirement System (BRS). Read the fact sheet [_Annual Limit on Elective Deferrals_]({{ site.baseurl }}/forms/tspfs07.pdf) to find out what happens if you exceed the elective deferral limit.<br /><br />
The dollar amount determined by using this calculator distributes your employee/member contributions over the entire year (or remainder of the year), and thus allows you to receive the maximum Agency or Service Matching Contributions.

{% endcapture %}
{% include calculator/infoBox.html icon='info' title="Special Note for FERS and BRS Participants" textBlock=myNote %}
</div> <!-- end div#panel -->
