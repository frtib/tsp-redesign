---
title: Administrative and investment expenses
layout: page
permalink: /account-basics/administrative-and-investment-expenses/
sidenav: manage-your-plan
styles:
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/responsive-comparison-table.js
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - groupFundAnnualReturns('Index');
  - groupFundAnnualReturns('Lfunds');
redirect_from:
  - /account-basics/administrative-costs/
  - /InvestmentFunds/FundsOverview/expenses.html
  - /expenses/
  - /PlanParticipation/BeneficiaryParticipants/administrativeExpenses.html
---

# Administrative and investment expenses

All retirement investment vehicles, including the TSP, charge fees in order to meet their expenses. While this cost is only one of several factors you should consider when making investment decisions, the cumulative effect of fees and expenses can substantially reduce the growth of your investments. We encourage you to visit the [Department of Labor’s webpage about retirement plan fees](<{{ site.baseurl }}/exit/?idx=170>).

We break our expenses into administrative expenses and investment expenses.

The TSP’s **gross administrative expenses** include

-   the costs of operating and maintaining our recordkeeping system,
-   the cost of providing participant services, and
-   the printing and mailing of notices, statements, and publications.

These expenses are first paid by <span data-term="forfeitures" class="js-glossary-toggle term term-end">forfeitures</span> and [loan fees](<{{ site.baseurl }}/loan-basics/loan-types-and-terms/>). **Net administrative expenses** are what’s left over after we’ve used up those forfeitures and fees:

<div class="net-admin-expenses">
  <table>
    <tr>
      <td>gross administrative expenses</td>
    </tr>
    <tr>
      <td>&#8211; forfeitures and fees</td>
    </tr>
    <tr>
      <td>= net administrative expenses</td>
    </tr>
  </table>
</div>

In addition to our administrative expenses, we also have **investment expenses**, which are the fees we pay to our investment managers.

To meet our net administrative expenses and our investment expenses, we make small reductions to our funds’ earnings. All TSP participants in a given fund pay the same percentage of their investment in the fund to help us meet our expenses. This percentage is called an **expense ratio**. An expense ratio is the result of dividing a fund’s expenses by the average dollar amount held in the fund.

{% comment %}Initialize computed values{% endcomment %}
{% include components/get_sorted_fund_list funds='Individual' reverse=false %}
{% assign avg_net_expense = 0.0 %}
{% for fund in sorted %}
{% if fund.Fund_name == "F Fund" %}{% assign one_fund = fund %}{% endif %}
{% assign net_expense_year = fund.summary_details.as_of_year %}
{% assign avg_net_expense = avg_net_expense | plus: fund.summary_details.net_expense %}
{% endfor %}
{% assign avg_net_expense = avg_net_expense | divided_by: sorted.size | round: 3 %}
{% comment %}
in case we want to removed leading zeros
{% assign fmt_avg_net_expense = avg_net_expense | times: 10 | remove_first: '0' %}
{% assign fmt_avg_net_expense_percent = avg_net_expense | remove_first: '0' %}
{% endcomment %}
{% assign fmt_avg_net_expense = avg_net_expense | times: 10 %}
{% assign fmt_avg_net_expense_percent = avg_net_expense %}
{% assign net_expense_year = sorted.first.summary_details.as_of_year %}

{% comment %}one_fund is set in the assignments above. change that to change which fund is the example {% endcomment %}

{% assign total_expense = one_fund.summary_details.net_expense | plus: one_fund.summary_details.investment_expense %}
{% if one_fund.summary_details.investment_expense == "-" %}{% assign total_expense = "-" %}{% endif %}
{% capture total_expense_fmt %}{% include components/expense_string.html value=total_expense percentOnly=true %}{% endcapture %}
{% assign total_expense_fmt = total_expense_fmt | strip_newlines %}

**Example:** In the first table below, you’ll see that the total expense ratio for the {{one_fund.Fund_name}} in {{ net_expense_year }} was {{ total_expense_fmt }}. Another way of saying that is that TSP participants’ investments in the F Fund were reduced by 60 cents for every $1,000 invested. A participant with $1,000 invested in the F Fund paid 60 cents toward the fund’s expenses; a participant with $100,000 invested paid $60. Everyone pays the same percentage. So the larger your share of the fund, the larger your share of the expenses.

You can quickly convert the expense ratios in the tables below to cost-per-$1,000-invested by moving the decimal point one space to the right. (0.060% converts to $0.60, or 60 cents.)

This first table shows, for each of the TSP individual funds, the **{{ net_expense_year }}** gross administrative expense ratio, the net administrative expense ratio, and the investment expense ratio. It then adds the net administrative expense ratio to the investment expense ratio to show you the total expense ratio. This is how much the fund’s earnings were reduced to allow us to meet our expenses.

{% comment %} DIRTY Responsive pricing table HTML {% endcomment %}

<section class="comparison expenses" markdown="1">
{% include components/get_sorted_fund_list funds='Individual' reverse=false %}

<!-- Individual funds -->

<ul class="funds-individual">
{% for fund in sorted %}
  <li{% if forloop.index == 3 %} class="active"{% endif %}>
    <button type="button">{{ fund.Fund_name }}</button>
  </li>
{% endfor %}
</ul>

<table class="i">
<col class="column-width">
  <thead>
    <tr>
      {% for fund in sorted %}
        <th class="bg-blue{% if forloop.index == 3 %} default{% endif %}">{{ fund.Fund_name }}</th>
      {% endfor %}
    </tr>
  </thead>

  <tbody>
    <!-- Gross administrative expense ratio -->
    <tr>
      <th class="sep-individual" scope="colgroup">Gross administrative expense ratio</th>
    </tr>
    <tr>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.gross_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <!-- Net administrative expense ratio -->
    <tr>
      <th class="sep-individual" scope="colgroup">Net administrative expense ratio</th>
    </tr>
    <tr>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.net_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <!-- Investmemt expense ratio -->
    <tr>
      <th class="sep-individual" scope="colgroup">Investmemt expense ratio</th>
    </tr>
    <tr>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.investment_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <!-- Total expense ratio (Net admin + Investment) -->
    <tr>
      <th class="sep-individual" scope="colgroup">Total expense ratio (Net admin + Investment)</th>
    </tr>
    <tr>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
        {% assign total_expense = fund.summary_details.net_expense | plus: fund.summary_details.investment_expense %}
        {% if fund.summary_details.investment_expense == "-" %}{% assign total_expense = "-" %}{% endif %}
        {% include components/expense_string.html value=total_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
  </tbody>
</table>

The next table shows the same information for each of the TSP’s Lifecycle (L) Funds. Because each of the L Funds is made up entirely of varying amounts of the G, F, C, S, and I Funds, the expense ratios shown here reflect the expenses of the underlying funds in each L Fund. The L Funds don’t have separate expenses.

<!-- Lifecycle funds -->

{% include components/get_sorted_fund_list funds='lifecycle' reverse=false %}

{% capture foot_1 %}<sup markdown="1">[1](#foot_1)</sup>{% endcapture %}
{% capture foot_2 %}<sup markdown="1">[2](#foot_2)</sup>{% endcapture %}

<ul class="funds-lifecycle">
{% for fund in sorted %}
  {% assign cur_fund = fund.Fund_name %}
  {% if fund.summary_details.gross_expense == "-" %}
  {% assign cur_fund = cur_fund | append: foot_1 | markdown %}{% endif %}

  &lt;li{% if forloop.index == 3 %} class="active"{% endif %}>
    <button type="button">{{ cur_fund }}</button>

  </li>
{% endfor %}
</ul>

<table class="l">
<col class="column-width">
  <thead>
    <tr>
      {% for fund in sorted %}
        {% assign cur_fund = fund.Fund_name %}
        {% if fund.summary_details.gross_expense == "-" %}
        {% assign cur_fund = cur_fund | append: foot_1 | markdown %}{% endif %}

        <th class="{% if forloop.index == 3 %} default
        {% endif %}">
        {{ cur_fund }}</th>
      {% endfor %}
    </tr>

  </thead>
  <tbody>
  <!-- Gross administrative expense ratio -->
    <tr>
      <th class="sep" scope="colgroup">Gross administrative expense ratio</th>
    </tr>
    <tr>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.gross_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <!-- Net administrative expense ratio -->
    <tr>
      <th class="sep" scope="colgroup">Net administrative expense ratio</th>
    </tr>
    <tr>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.net_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <!-- Investmemt expense ratio -->
    <tr>
      <th class="sep" scope="colgroup">Investmemt expense ratio</th>
    </tr>
    <tr>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.investment_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <!-- Total expense ratio (Net admin + Investment) -->
    <tr>
      <th class="sep" scope="colgroup">Total expense ratio (Net admin + Investment)</th>
    </tr>
    <tr>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
        {% assign total_expense = fund.summary_details.net_expense | plus: fund.summary_details.investment_expense %}
        {% if fund.summary_details.investment_expense == "-" %}{% assign total_expense = "-" %}{% endif %}
        {% include components/expense_string.html value=total_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
  </tbody>
</table>

</section>

1.  {: #foot_1} These L Funds became available in {{ net_expense_year }}, so a full year of expense data is not yet available.
    {:.footnotes}
