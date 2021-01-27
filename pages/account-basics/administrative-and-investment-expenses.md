---
title: Administrative costs
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

All retirement investment vehicles, including the TSP, charge fees in order to meet their expenses. While this cost is only one of several factors you should consider when making investment decisions, the cumulative effect of fees and expenses can substantially reduce the growth of your investments. We encourage you to visit the [Department of Labor’s webpage about retirement plan fees]({{ site.baseurl }}/exit/?idx=170).

We break our expenses into administrative expenses and investment expenses.

The TSP’s **gross administrative expenses** include
- the costs of operating and maintaining our recordkeeping system,
- the cost of providing participant services, and
- the printing and mailing of notices, statements, and publications.

These expenses are first paid by <span data-term="forfeitures" class="js-glossary-toggle term term-end">forfeitures</span> and [loan fees]({{ site.baseurl }}/loan-basics/loan-types-and-terms/). **Net administrative expenses** are what’s left over after we’ve used up those forfeitures and fees:

gross administrative expenses – forfeitures and fees = net administrative expenses

In addition to our administrative expenses, we also have **investment expenses**, which are the fees we pay to our investment managers.

To meet our net administrative expenses and our investment expenses, we make small reductions to our funds’ earnings. All TSP participants in a given fund pay the same percentage of their investment in the fund to help us meet our expenses. This percentage is called an **expense ratio**. An expense ratio is the result of dividing a fund’s expenses by the average dollar amount held in the fund.

<!-- DAV, we need a variable for the F Fund total expense ratio in the Example below, right after {{ net_expense_year }} -->
**Example:** In the first table below, you’ll see that the total expense ratio for the F Fund in {{ net_expense_year }} was 0.060%. Another way of saying that is that TSP participants’ investments in the F Fund were reduced by 60 cents for every $1,000 invested. A participant with $1,000 invested in the F Fund paid 60 cents toward the fund’s expenses; a participant with $100,000 invested paid $60. Everyone pays the same percentage. So the larger your share of the fund, the larger your share of the expenses.

You can quickly convert the expense ratios in the tables below to dollar of cost per $1,000 of money invested by moving the decimal point one space to the right.

This first table shows, for each of the TSP individual funds, the {{ net_expense_year }} gross administrative expense ratio, the net administrative expense ratio, and the investment expense ratio. It then adds the net administrative expense ratio to the investment expense ratio to show you the total expense ratio. This is how much the fund’s earnings were reduced to allow us to meet our expenses.

{% include components/get_sorted_fund_list funds='Individual' reverse=false %}
{% assign avg_net_expense = 0.0 %}
{% for fund in sorted %}
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
<!-- __For {{ net_expense_year }}, the average net expense for participants was ${{ fmt_avg_net_expense }}* for every $1,000 invested.__

Expense ratios may also be expressed in basis points. One basis point is 1/100th of one percent, or 0.01%. Therefore, the {{ net_expense_year }} net expense ratio* of {{ fmt_avg_net_expense_percent }}% is {{ avg_net_expense | times: 100 | round: 1 }} basis points. Expressed either way, this means that expenses charged to your account in {{ net_expense_year }} were approximately {{ avg_net_expense | times: 1000 | round }} cents per $1,000 of investment.

\*_Other expenses are fees paid to the investment manager._ -->

<!-- DIRTY Responsive pricing table HTML -->


<section class="comparison" markdown="1">

## Individual funds
{% include components/get_sorted_fund_list funds='Individual' reverse=false %}

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
      <th class="hide"></th>
      {% for fund in sorted %}
        <th class="bg-blue{% if forloop.index == 3 %} default{% endif %}">{{ fund.Fund_name }}</th>
      {% endfor %}
    </tr>
  </thead>

  <tbody>
    <!-- Gross Administrative Expense Ratio -->
    <tr>
      <th class="sep-individual" scope="colgroup">{{ sorted.first.summary_details.as_of_year }} Gross Administrative Expense Ratio</th>
    </tr>
    <tr>
      <th scope="row">Gross Administrative Expense Ratio</th>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.gross_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <!-- Net Administrative Expense Ratio -->
    <tr>
      <th class="sep-individual" scope="colgroup">{{ sorted.first.summary_details.as_of_year }} Net Administrative Expense Ratio</th>
    </tr>
    <tr>
      <th scope="row">Net Administrative Expense Ratio</th>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.net_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <!-- Investment Expense Ratio -->
    <tr>
      <th class="sep-individual" scope="colgroup">{{ sorted.first.summary_details.as_of_year }} Investment Expense Ratio</th>
    </tr>
    <tr>
      <th scope="row">Investment Expense Ratio</th>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.other_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <!-- Total Expense Ratio (Net Admin + Investment) -->
    <tr>
      <th class="sep-individual" scope="colgroup">{{ sorted.first.summary_details.as_of_year }} Total Expense Ratio (Net Admin + Investment)</th>
    </tr>
    <tr>
      <th scope="row">Total Expense Ratio (Net Admin + Investment)</th>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
        <!-- DAV, this is my attempt at Liquid math. It didn't work. -->
         {% include components/expense_string.html value="Sum of Net + Investment ratios" percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
  </tbody>
</table>

The next table shows the same information for each of the TSP’s Lifecycle (L) Funds. Because each of the L Funds is made up entirely of varying amounts of the G, F, C, S, and I Funds, the expense ratios shown here reflect the expenses of the underlying funds in each L Fund. The L Funds don’t have separate expenses.

## Lifecycle funds
{% include components/get_sorted_fund_list funds='lifecycle' reverse=false %}
{% assign rowString = "YTD|YTD, 1YR|1-year, 3YR|3-year, 5YR|5-year, 10YR|10-year, Life|Life" %}
{% assign rows = rowString | split: ', ' %}

<ul class="funds-lifecycle">
{% for fund in sorted %}
  <li{% if forloop.index == 3 %} class="active"{% endif %}>
    <button type="button">{{ fund.Fund_name }}</button>
  </li>
{% endfor %}
</ul>

<table class="l">
<col class="column-width">
  <thead>
    <tr>
      <th class="hide"></th>
      {% for fund in sorted %}
        <th class="{% if forloop.index == 3 %} default{% endif %}">{{ fund.Fund_name }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>

    <tr>
      <th class="sep" scope="colgroup">Rates of return <span id="l-fund-as-of">as of M/D/YYYY</span></th>
    </tr>
{% for r in rows %}
{% assign c = r | split: '|' %}
    <tr>
      <th scope="row">{{ c[1] }}</th>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %} id='ret-{{c[0]}}-{{ fund.Fund_name | downcase | replace: " ", "-" }}'>-</td>
      {% endfor %}
    </tr>
{% endfor %}
    <tr>
      <th class="sep" scope="colgroup">{{ sorted.first.summary_details.as_of_year }} Administrative expenses<sup markdown="1">[1](#foot_1)</sup></th>
    </tr>
    <tr>
      <th scope="row">Gross</th>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.gross_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <tr>
      <th scope="row">Net<sup>1</sup></th>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.net_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>
    <tr>
      <th class="sep" scope="colgroup">{{ sorted.first.summary_details.as_of_year }} Other expenses<sup markdown="1">[2](#foot_2)</sup></th>
    </tr>
    <tr>
      <th scope="row"></th>
      {% for fund in sorted %}
        <td{% if forloop.index == 3 %} class="default"{% endif %}>
         {% include components/expense_string.html value=fund.summary_details.other_expense percentOnly=true %}
        </td>
      {% endfor %}
    </tr>

  </tbody>
</table>

</section>

1. {: #foot_1} These L Funds became available in {{ net_expense_year }}, so a full year of expense data is not yet available.
{:.footnotes}
