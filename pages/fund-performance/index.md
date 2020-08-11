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
alert:
  show-alert: true
  icon:
  title: Scheduled Outage
  subtitle:
  body:
  - Due to scheduled system maintenance, <strong>tsp.gov, the ThriftLine, and frtib.gov</strong> will be unavailable from 1:30 a.m. (ET) on Saturday, August 22, to 1:30 a.m. (ET) on Monday, August 24. Thank you for your patience.
bottom-scripts:
document-ready:
  - getRatesOfReturn('rates-of-return');
  # - chartResize('rates-of-return-annual');
  # - chartResize('rates-of-return-monthly');
  - indexFundSync('rates-of-return-annual', true);
  - indexFundSync('rates-of-return-monthly', true);
  - sideScrollControls('rates-of-return');
redirect_from:
  - /InvestmentFunds/FundPerformance/returnSummary.html
  - /InvestmentFunds/FundPerformance/monthlyReturns.html
  - /InvestmentFunds/FundPerformance/annualReturns.html
  - /returns/
---
{% assign chartName = 'rates-of-return' %}
<div class="usa-grid centered" markdown="1">
# Rates of return
{% include fund-checkboxes.html Lfunds=1 InvFunds=1 Index=1 chartName=chartName %}
</div> <!-- end div.usa-grid centered -->
<div id="{{chartName}}-div" class="usa-grid-full usa-layout-docs-main_content">
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

    <!-- <div class="table-view">
      <button id="{{chartName}}-button" class="usa-button-secondary"
        onClick="toggleTableWidth('{{chartName}}');">
        Expand table <i class="fal fa-expand-wide"></i></button>
    </div> -->
    <section id="{{chartName}}-section" class="rates-of-return-table">
    <div class="table-view">
      <button id="slideRight" class="slide-right" type="button" class="usa-button-secondary"><i class="fal fa-arrow-to-left"></i> Scroll left</button>
      <button id="slideLeft" class="slide-left" type="button" class="usa-button-secondary">Scroll right <i class="fal fa-arrow-to-right"></i></button>
    </div><!-- END div.table-view -->
    <div id="{{chartName}}-table" class="table-side-scroll">Fetching data, please wait.</div>
  </section>

</div> <!-- END div.usa-width-one-whole -->
</div> <!-- END div.usa-grid-full -->
