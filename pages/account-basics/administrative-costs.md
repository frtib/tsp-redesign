---
title: Administrative costs
layout: page
permalink: /account-basics/administrative-costs/
sidenav: manage-your-plan
styles:
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/responsive-comparison-table.js
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - groupFundAnnualReturns('Lfunds');
  - groupFundAnnualReturns('Index');
redirect_from:
  - /InvestmentFunds/FundsOverview/expenses.html
  - /expenses/
  - /PlanParticipation/BeneficiaryParticipants/administrativeExpenses.html
---

# Administrative costs

Our expenses are the costs of administering your TSP. The **gross** expenses include

* the costs of operating and maintaining our recordkeeping system,
* the cost of providing participant services, and
* the printing and mailing of notices, statements, and publications.

These expenses are paid by the forfeitures of Agency/Service Automatic (1%) Contributions of FERS and BRS participants who leave federal service before they are vested, other forfeitures, and loan fees. Because these amounts are not sufficient to cover all of the TSP's expenses, you share in the remainder of the costs.

**Net** expenses represent the amount that your investment returns were reduced by TSP administrative expenses.

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
__For {{ net_expense_year }}, the average net expense for participants was ${{ fmt_avg_net_expense }}* for every $1,000 invested.__

Expense ratios may also be expressed in basis points. One basis point is 1/100th of one percent, or 0.01%. Therefore, the {{ net_expense_year }} net expense ratio* of {{ fmt_avg_net_expense_percent }}% is {{ avg_net_expense | times: 100 | round: 1 }} basis points. Expressed either way, this means that expenses charged to your account in {{ net_expense_year }} were approximately {{ avg_net_expense | times: 1000 | round }} cents per $1,000 of investment.

\*_Other expenses are fees paid to the investment manager._

<!-- DIRTY Responsive pricing table HTML -->


<section class="comparison" markdown="1">

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
    <tr>
      <th class="sep-individual" scope="colgroup">Rates of return <span id="index-as-of">as of M/D/YYYY</span></th>
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
      <th class="sep-individual" scope="colgroup">{{ sorted.first.summary_details.as_of_year }} Administrative expenses<sup markdown="1">[1](#foot_1)</sup></th>
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
      <th class="sep-individual" scope="colgroup">{{ sorted.first.summary_details.as_of_year }} Other expenses<sup markdown="1">[2](#foot_2)</sup></th>
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

The returns for the TSP funds represent net earnings after the deduction of administrative expenses and, in the cases of the F, C, S, I, and L Funds, after deduction of trading costs and investment management fees as of January 31, 2019. Additional information about the TSP funds; their related indexes; and their respective monthly, annual, and 10-year returns can be found in the TSP Fund Information sheets or by visiting [Fund Performance]({{ site.baseurl }}/fund-performance/).

**Additional information about the TSP core funds:** The Government Securities Investment (G) Fund contains government securities; the Fixed Income Index
Investment (F) Fund contains government, corporate, and asset-backed bonds; the Common Stock Index Investment (C) Fund contains stocks of large and mediumsized U.S. companies; the Small Capitalization Stock Index Investment (S) Fund contains stocks of small to medium-sized U.S. companies; and the International Stock Index Investment (I) Fund contains stocks from more than 20 developed countries.

</section>

<section id="footnotes" markdown="1">

1. {: #foot_1} Net administrative expenses are the expenses charged to TSP participants per dollar invested in the respective funds after offsetting gross administrative expenses
with account forfeitures and loan fees.
2. {: #foot_2} Fees paid to investment manager
</section>
