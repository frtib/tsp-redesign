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
  - sideScrollControls('rates-of-return');
redirect_from:
  - /whatsnew/Content/annuityRateIndex.html
---

<div class="usa-grid centered" markdown="1">
# Historical annuity rates

<form class="share-price-date-range" action="javascript:void(0);">
<fieldset>
<button class="usa-button" onClick='doDownloadAnnuityRates("CSV");'>
  Export annuity rates to CSV <i class="fal fa-file-export"></i></button>
</fieldset>
</form>
</div>

<!-- <div class="table-scroll-buttons">
  <button id="slideRight" class="slide-right" type="button" class="usa-button-secondary"><i class="fal fa-arrow-to-left"></i> Scroll left</button>
  <button id="slideLeft" class="slide-left" type="button" class="usa-button-secondary">Scroll right <i class="fal fa-arrow-to-right"></i></button>
</div>
</div> -->

<div class="table-scroll-buttons">
  <button id="slideRight" class="slide-right" type="button" class="usa-button-secondary"><i class="fal fa-arrow-to-left"></i> Scroll left</button>
  <button id="slideLeft" class="slide-left" type="button" class="usa-button-secondary">Scroll right <i class="fal fa-arrow-to-right"></i></button>
</div>
<!-- END div.table-view -->
<div id="historical-rates" class="table-side-scroll"></div>

<!-- CONTENT END -->
