---
title: Rates of returns
layout: page
permalink: /fund-performance/rates-of-returns-old/
styles:
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/jquery.numeric.js
  - /assets/js/highcharts/highcharts.js
  - /assets/js/highcharts/data.js
  - /assets/js/calculator/calculator.js
  - /assets/js/ajaxFetch.js
  - /assets/js/side-scroll-funds.js
  - /assets/js/rates-of-returns.js
bottom-scripts:
document-ready:
  - getAnnualReturnsAll('annualReturnsAll');
  - chartResize('annualReturnsAll');
  - indexFundSync('annualReturnsAll', true);
---
{% assign chartName = 'annualReturnsAll' %}
# Rates of returns
{% include fund-checkboxes.html Lfunds=1 InvFunds=1 Index=1 chartName=chartName %}

<div id="{{chartName}}-div" class="usa-grid-full usa-layout-docs-main_content">
<div class="usa-width-one-whole" markdown="1">
  <section id="{{chartName}}-section" class="rates-of-return-table">
    <ul class="usa-accordion">
      <li>
        <button class="usa-accordion-button" aria-expanded="true" aria-controls="{{ chartName }}">Annual Returns</button>
        <div id="{{ chartName }}" class="usa-accordion-content hc-annual-returns-all" aria-hidden="false"></div>
      </li>
    </ul>
    <ul class="usa-accordion">
      <li>
        <button class="usa-accordion-button" aria-expanded="true" aria-controls="{{ chartName }}-monthly">Monthly Returns</button>
        <div id="{{ chartName }}-monthly" class="usa-accordion-content hc-annual-returns-all" aria-hidden="false"></div>
      </li>
    </ul>

    <div class="table-view">
      <button id="{{chartName}}-button" class="usa-button-secondary"
        onClick="toggleTableWidth('{{chartName}}');">
        Expand table <i class="fal fa-expand-wide"></i></button>
    </div>
    <div id="{{chartName}}-table" class="table-side-scroll"></div>
  </section>

</div> <!-- END div.usa-width-one-whole -->
</div> <!-- END div.usa-grid-full -->