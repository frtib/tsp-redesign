---
layout: page
title: Retired funds
styles:
sidenav: fund-options
scripts:
permalink: /funds-lifecycle/funds-retired/
scripts:
    - /assets/js/jquery.min.js
    - /assets/js/calculator/calculator.js
    - /assets/js/ajaxFetch.js
    - /assets/js/side-scroll-funds.js
    - /assets/js/rates-of-returns.js
bottom-scripts:
document-ready:
  - getRetiredRatesOfReturn('retired-rates');
  # - sideScrollControls('retired-rates', true);
redirect_from:
  - /InvestmentFunds/RetiredFundsL2010/index.html
  - /InvestmentFunds/RetiredFundsL2010/sharePrice2010.html
  - /InvestmentFunds/RetiredFundsL2010/monthlyReturnsL2010.html
  - /InvestmentFunds/RetiredFundsL2010/annualReturnsL2010.html
  - /InvestmentFunds/RetiredFundsL2010/sharePriceL2020.html
  - /InvestmentFunds/RetiredFundsL2010/monthlyReturnsL2020.html
  - /InvestmentFunds/RetiredFundsL2010/annualReturnsL2020.html
---

# Retired funds

View the average annual returns history of L Funds that reached their target date and were retired. When an L Fund reaches its target date, it goes out of existence and any money in it becomes part of the [L Income Fund]({{ site.baseurl }}/funds-lifecycle/l-income/), which generally keeps the same target allocation.

{% assign chartName = 'retired-rates' %}

<section id="{{chartName}}-section" class="rates-of-return-table">
  {% comment %}{% include side-scroll-alert.html alert=true buttons=true %}{% endcomment %}
  <div id="{{chartName}}-table" class="table-side-scroll">Fetching data, please wait.</div>
</section>
