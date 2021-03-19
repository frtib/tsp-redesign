{% comment %}
Intro panel (1) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 1 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}" markdown="1">

<h2>How to Divide a TSP Account in Divorce</h2>

The Thrift Savings Plan (TSP) is a defined contribution retirement savings and investment plan for federal civilian employees and members of the uniformed services. A TSP account can be divided by means of a court order in an action for divorce, annulment, or legal separation. This type of court order is called a &#8220;retirement benefits court order&#8221; (RBCO) by the TSP. This wizard was developed as a practical aid to help you or your attorney draft an RBCO for the TSP.

The online wizard cannot be used to draft an RBCO awarding funds to a child or dependent.

Certain TSP account information is available to spouses (and their attorneys) to assist in developing an RBCO. To request this information, please use the [_Request for Participant Account Information_]({{ site.baseurl }}/forms/tsp-92d.pdf).

Do not use this online court order wizard if you are drafting a court order related to Federal Employees' Retirement System (FERS) or Civilian Service Retirement System (CSRS) annuity benefits. Court orders related to the FERS and CSRS annuity programs, which are administered by the Office of Personnel Management (OPM), should be submitted to the Court Ordered Benefits branch of OPM at the following address: U.S. Office of Personnel Management, Court Ordered Benefits Branch, P.O. Box 17, Washington, DC 20044.

To be honored by the TSP as a qualifying retirement benefits court order (RBCO), a court order must meet the requirements found in 5 United States Code (U.S.C.) § 8435(c) and 5 Code of Federal Regulations (C.F.R.) part 1653, subpart A. The rules for qualified domestic relations orders (QDROs) that apply to private sector plans do not apply to the TSP. The provisions of the Federal Employees' Retirement System Act (FERSA), not the Employee Retirement Income Security Act (ERISA), govern court orders that divide a TSP account. The TSP cannot represent or warrant that this order will meet the requirements of your local jurisdiction. The parties' attorneys should review local court rules to ensure this court order is sufficient.

Before getting started, you should gather the following necessary information:

- Participant's name, current mailing address, and TSP account number
- Payee's name, current mailing address, and Social Security Number (SSN)
- Account details (e.g., balance, outstanding loan amounts, etc.) needed to calculate the award amount
- Necessary court information (e.g., case number, judge's name, etc.)

For more information, please read the TSP publication [_Court Orders and Powers of Attorney_]({{ site.baseurl }}/publications/tspbk11.pdf).

<!-- THE 'capture bonusButton3' block doesn't seem to do anything. Can we delete? -->
{% capture bonusButton3 %}
<button type="button" class="usa-button-secondary usa-button-big" onclick="window.location.href='{{ site.baseurl }}/forms/tsp-92.pdf';" markdown="1">No thanks, just download Form TSP-92, _TSP Retirement Benefits Court Order Division Package_.</button>
{% endcapture %}
{% include calculator/button-block.html panelID=panelID getStarted=2 %}

<nav role="navigation">
<div class="button-stack">
<!-- DAV, the 'Get started' button is nested in div.button-stack, not ul.navigation-buttons -->
<button type="button" class="usa-button-big" href="javascript:void(0);" onclick="processPanel(1,0,2,0); return false;">Get started</button>
<button type="button" class="usa-button-secondary usa-button-big" onclick="window.location.href='{{ site.baseurl }}/forms/tsp-92.pdf';" markdown="1">No thanks, just download Form TSP-92, _TSP Retirement Benefits Court Order Division Package_.</button>
</div>
</nav>

</section> <!-- end div#panel -->
