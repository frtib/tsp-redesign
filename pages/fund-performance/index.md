---
title: Rates of return
layout: page-full-width
permalink: /fund-performance/
styles:
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/highcharts/highcharts.js
  - /assets/js/highcharts/exporting.js
  - /assets/js/highcharts/data.js
  - /assets/js/calculator/calculator.js
  - /assets/js/ajaxFetch.js
  - /assets/js/side-scroll-funds.js
  - /assets/js/rates-of-returns.js
expand-site-alert: false
bottom-scripts:
document-ready:
  - getRatesOfReturn('rates-of-return');
  # - chartResize('rates-of-return-annual');
  # - chartResize('rates-of-return-monthly');
  - indexFundSync('rates-of-return-annual', true);
  - indexFundSync('rates-of-return-monthly', true);
  - sideScrollControls('rates-of-return', true);
redirect_from:
  - /InvestmentFunds/FundPerformance/returnSummary.html
  - /InvestmentFunds/FundPerformance/monthlyReturns.html
  - /InvestmentFunds/FundPerformance/annualReturns.html
  - /returns/
---
{% assign chartName = 'rates-of-return' %}

<div class="usa-grid centered">
<div class="usa-width-one-whole" markdown="1">
{% capture asOfDate %}<span id="asOfDate" class="as-of-class">(as of December 2020)</span>{% endcapture %}
# Rates of return {{asOfDate}}
{% include fund-checkboxes.html Lfunds=1 InvFunds=1 Index=1 chartName=chartName %}


</div>
</div>

<!-- RoR TABLE -->
<section id="{{chartName}}-section" class="rates-of-return-table">

    <div class="table-side-scroll">
      {% include side-scroll-elements.html alert=true buttons=true checkboxMessage=true %}
      <div id="{{chartName}}-table">Fetching data, please wait.</div>
    </div>
</section>


<!-- CHARTS -->
<section class="rates-of-return-charts">
  <div class="usa-grid-full usa-layout-docs-main_content" id="{{chartName}}-div">
    <div class="usa-width-one-whole">

      <ul class="usa-accordion">
        <li>
          <button class="usa-accordion-button" aria-expanded="true" aria-controls="{{ chartName }}-annual">Annual Returns</button>
          <div id="{{ chartName }}-annual" class="usa-accordion-content hc-annual-returns-all" aria-hidden="false">Fetching data, please wait.</div>
        </li>
      </ul>
      <ul class="usa-accordion">
        <li>
          <button class="usa-accordion-button" aria-expanded="true" aria-controls="{{ chartName }}-monthly">Monthly Returns</button>
          <div id="{{ chartName }}-monthly" class="usa-accordion-content hc-annual-returns-all" aria-hidden="false">Fetching data, please wait.</div>
        </li>
      </ul>

    </div>
  </div> <!-- end div#{{chartName}}-div -->
</section>
