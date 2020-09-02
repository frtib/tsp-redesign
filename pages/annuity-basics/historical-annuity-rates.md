---
layout: page-full-width
title: Historical annuity rates
styles:
sidenav:
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/side-scroll-funds.js
permalink: /annuity-basics/historical-annuity-rates/
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - getHistoricalAnnuityRates('current-rate', 'historical-rates');
redirect_from:
  - /whatsnew/Content/annuityRateIndex.html
---

<div class="usa-grid centered" markdown="1">
# Historical annuity rates
<p id='current-rate' class="current-rate"></p>
<form class="share-price-date-range" action="javascript:void(0);">
<fieldset>
<button class="usa-button" onClick='downloadSharePrices();'>
  Export annuity rates to CSV <i class="fal fa-file-export"></i></button>
</fieldset>
</form>
<div class="table-scroll-buttons">
  <button id="slideRight" class="slide-right" type="button" class="usa-button-secondary"><i class="fal fa-arrow-to-left"></i> Scroll left</button>
  <button id="slideLeft" class="slide-left" type="button" class="usa-button-secondary">Scroll right <i class="fal fa-arrow-to-right"></i></button>
</div><!-- END div.table-view -->
</div>

<!-- STATIC TABLE -->
<!-- <div id="historical-rates" class="table-side-scroll"> -->
<div class="table">
<!-- <table id="annuity-history-table" class="usa-table-borderless annuity-history-table sticky-header"> -->
<table class="annuity-history-table sticky-header">
    <colgroup><col class="column-width"></colgroup>
    <thead>
      <tr>
        <th id="sortYear" scope="col" class="sortableColumn sort-column-desc">Year</th>
        <th scope="colgroup">January</th>
        <th scope="colgroup">February</th>
        <th scope="colgroup">March</th>
        <th scope="colgroup">April</th>
        <th scope="colgroup">May</th>
        <th scope="colgroup">June</th>
        <th scope="colgroup">July</th>
        <th scope="colgroup">August</th>
        <th scope="colgroup">September</th>
        <th scope="colgroup">October</th>
        <th scope="colgroup">November</th>
        <th scope="colgroup">December</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="sortYear">2020</th>
        <td>1.750%</td>
        <td>1.750%</td>
        <td>2.200%</td>
        <td>1.700%</td>
        <td>1.325%</td>
        <td>1.259%</td>
        <td>1.209%</td>
        <td>1.600%</td>
        <td>1.308%</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th scope="row" class="sortYear">2019</th><td>3.125%</td><td>2.875%</td><td>2.750%</td><td>2.625%</td><td>2.625%</td><td>2.500%</td><td>2.250%</td><td>2.000%</td><td>1.875%</td><td>1.625%</td><td>1.625%</td><td>1.750%</td>    </tr>
      <tr>
        <th scope="row" class="sortYear">2018</th><td>2.375%</td><td>2.500%</td><td>2.625%</td><td>2.875%</td><td>2.875%</td><td>2.875%</td><td>3.000%</td><td>3.000%</td><td>3.000%</td><td>3.000%</td><td>3.125%</td><td>3.250%</td>    </tr>
      <tr>
        <th scope="row" class="sortYear">2017</th><td>2.125%</td><td>2.375%</td><td>2.375%</td><td>2.375%</td><td>2.375%</td><td>2.250%</td><td>2.250%</td><td>2.250%</td><td>2.250%</td><td>2.125%</td><td>2.250%</td><td>2.375%</td>    </tr>
      <tr>
        <th scope="row" class="sortYear">2016</th><td>2.125%</td><td>2.125%</td><td>1.875%</td><td>1.750%</td><td>1.750%</td><td>1.800%</td><td>1.625%</td><td>1.500%</td><td>1.375%</td><td>1.500%</td><td>1.500%</td><td>1.625%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2015</th><td>2.375%</td><td>2.250%</td><td>2.000%</td><td>2.125%</td><td>2.125%</td><td>2.125%</td><td>2.250%</td><td>2.500%</td><td>2.375%</td><td>2.250%</td><td>2.125%</td><td>2.125%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2014</th><td>2.875%</td><td>3.000%</td><td>2.875%</td><td>2.875%</td><td>2.875%</td><td>2.750%</td><td>2.625%</td><td>2.625%</td><td>2.625%</td><td>2.625%</td><td>2.500%</td><td>2.500%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2013</th><td>1.750%</td><td>1.750%</td><td>2.000%</td><td>2.000%</td><td>2.000%</td><td>2.000%</td><td>2.205%</td><td>2.625%</td><td>2.875%</td><td>3.000%</td><td>2.875%</td><td>2.750%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2012</th><td>2.150%</td><td>2.125%</td><td>2.125%</td><td>2.125%</td><td>2.125%</td><td>2.125%</td><td>1.875%</td><td>1.750%</td><td>1.750%</td><td>1.750%</td><td>1.750%</td><td>1.750%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2011</th><td>3.125%</td><td>3.375%</td><td>3.500%</td><td>3.625%</td><td>3.500%</td><td>3.375%</td><td>3.250%</td><td>3.125%</td><td>2.875%</td><td>2.375%</td><td>2.500%</td><td>2.250%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2010</th><td>3.625%</td><td>3.750%</td><td>3.875%</td><td>3.750%</td><td>3.750%</td><td>3.750%</td><td>3.500%</td><td>3.125%</td><td>2.875%</td><td>2.750%</td><td>2.625%</td><td>2.625%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2009</th><td>3.500%</td><td>2.625%</td><td>2.750%</td><td>3.125%</td><td>3.125%</td><td>3.536%</td><td>3.625%</td><td>3.875%</td><td>3.750%</td><td>3.750%</td><td>3.500%</td><td>3.500%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2008</th><td>4.875%</td><td>4.625%</td><td>4.375%</td><td>4.375%</td><td>4.250%</td><td>4.375%</td><td>4.625%</td><td>4.750%</td><td>4.625%</td><td>4.500%</td><td>4.375%</td><td>4.250%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2007</th><td>5.125%</td><td>5.125%</td><td>5.250%</td><td>5.125%</td><td>5.125%</td><td>5.250%</td><td>5.500%</td><td>5.625%</td><td>5.625%</td><td>5.250%</td><td>5.250%</td><td>5.125%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2006</th><td>4.375%</td><td>4.500%</td><td>4.500%</td><td>5.125%</td><td>5.375%</td><td>5.500%</td><td>5.625%</td><td>5.750%</td><td>5.625%</td><td>5.375%</td><td>5.250%</td><td>5.250%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2005</th><td>4.125%</td><td>4.125%</td><td>4.250%</td><td>4.250%</td><td>4.250%</td><td>4.375%</td><td>4.375%</td><td>4.125%</td><td>4.125%</td><td>4.125%</td><td>4.250%</td><td>4.250%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2004</th><td>4.250%</td><td>4.250%</td><td>4.250%</td><td>4.125%</td><td>4.000%</td><td>4.125%</td><td>4.250%</td><td>4.625%</td><td>4.625%</td><td>4.500%</td><td>4.250%</td><td>4.125%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2003</th><td>4.000%</td><td>4.000%</td><td>4.000%</td><td>4.000%</td><td>3.875%</td><td>3.875%</td><td>3.750%</td><td>3.625%</td><td>3.625%</td><td>3.875%</td><td>4.250%</td><td>4.375%</td>    </tr>
      <tr>
  <th scope="row" class="sortYear">2002</th><td>4.625%</td><td>4.750%</td><td>4.875%</td><td>5.000%</td><td>5.125%</td><td>5.125%</td><td>5.250%</td><td>5.125%</td><td>4.875%</td><td>4.625%</td><td>4.250%</td><td>4.000%</td>    </tr>
    </tbody>
</table>
</div>


<!-- END STATIC TABLE -->

<!-- <section class="date-range">
<form class="share-price-date-range" action="javascript:void(0);">
<fieldset>
<button class="usa-button-secondary" onClick='downloadSharePrices();'>
  Export annuity rates to CSV <i class="fal fa-file-export"></i></button>
</fieldset>
</form>
</section>

<div class="table-view">
  <button id="slideRight" class="slide-right" type="button" class="usa-button-secondary"><i class="fal fa-arrow-to-left"></i> Scroll left</button>
  <button id="slideLeft" class="slide-left" type="button" class="usa-button-secondary">Scroll right <i class="fal fa-arrow-to-right"></i></button>
</div><!-- END div.table-view -->
<!-- <div id="historical-rates" class="table-side-scroll"></div> -->

<!-- CONTENT END -->
