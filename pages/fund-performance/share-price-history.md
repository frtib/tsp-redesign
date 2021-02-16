---
title: Share price history
layout: page-full-width
permalink: /fund-performance/share-price-history/
#sidenav: fund-options
scripts:
  - /assets/js/flatpickr/flatpickr.js
  - /assets/js/flatpickr/date-range.js
  - /assets/js/jquery.min.js
  - /assets/js/highcharts/highcharts.js
  - /assets/js/highcharts/exporting.js
  - /assets/js/highcharts/data.js
  - /assets/js/calculator/calculator.js
  - /assets/js/ajaxFetch.js
  - /assets/js/side-scroll-funds.js
  - /assets/js/share-price-history.js
expand-site-alert: false
document-ready:
  - getSharePricesRaw('dynamic-share-price');  
  - sideScrollControls('dynamic-share-price');
  - getSecureAlerts('secure-alerts', 'today');
redirect_from:
  - /InvestmentFunds/FundPerformance/
  - /prices/
---
{% assign chartName = 'dynamic-share-price' %}
<div class="usa-grid centered" markdown="1">
<div class="usa-width-one-whole" markdown="1">
# Share price history

<span id="secure-alerts"></span>

To understand how the TSP calculates rates of return for any given period of time and determines compound annual returns, read the Fact Sheet [_Calculating Periodic Returns and Compound Annual Returns_]({{ site.baseurl }}/publications/oc05-16w.pdf).

{% include fund-checkboxes.html Lfunds=1 InvFunds=1 Index=0 chartName=chartName %}

<section class="date-range">
<form class="share-price-date-range duo" action="javascript:void(0);">
<fieldset>
<legend>Share price history date range:</legend>
<div id="dateRange-div" class="container">
  <span class="" id="dateRange-error-message" role="alert"></span>
  <label>
    <div>Start date</div>
    <input id="fundDateStart" placeholder="Start date.." class="date-range">
  </label>
  <label>
    <div>End date</div>
    <input id="fundDateEnd" placeholder="End date.." class="date-range">
  </label>
</div>
</fieldset>
<button class="usa-button" onClick="getSharePricesRaw('{{chartName}}');">Retrieve share prices</button>
<button class="usa-button-secondary" onClick='downloadSharePrices();'>
  Download share prices <i class="fal fa-arrow-alt-to-bottom"></i></button>
</form>
</section>
</div> <!-- end div.usa-grid centered -->
</div>

<div id="{{chartName}}-div" class="usa-grid-full usa-layout-docs-main_content">
<div class="usa-width-one-whole" markdown="1">
  <section id="{{chartName}}-section" class="share-price-table">
    <ul class="usa-accordion">
      <li>
        <button class="usa-accordion-button" aria-expanded="true" aria-controls="{{ chartName }}">Share Prices</button>
        <div id="{{ chartName }}" class="usa-accordion-content hc-share-price-chart" aria-hidden="false"></div>
      </li>
    </ul>

    <div class="table-scroll-buttons">
      <button id="slideRight" class="slide-right" type="button" class="usa-button-secondary"><i class="fal fa-arrow-to-left"></i> Scroll left</button>
      <button id="slideLeft" class="slide-left" type="button" class="usa-button-secondary">Scroll right <i class="fal fa-arrow-to-right"></i></button>
    </div><!-- END div.table-scroll-buttons -->

      <!-- <button id="{{chartName}}-button" class="usa-button-secondary"
        onClick="toggleTableWidth('{{chartName}}');">
        Expand table <i class="fal fa-expand-wide"></i></button> -->
    <div id="{{chartName}}-table" class="table-side-scroll">
    </div>
  </section>

</div> <!-- END div.usa-width-one-whole -->
</div> <!-- END div.usa-grid-full -->
