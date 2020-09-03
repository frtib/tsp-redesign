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
  - getHistoricalAnnuityRates('current-rate', 'historical-rates-table');
  - sideScrollControls('rates-of-return');
redirect_from:
  - /whatsnew/Content/annuityRateIndex.html
---

<div class="usa-grid centered">
<div class="usa-width-one-whole" markdown="1">
# Historical annuity rates
{% comment %}<span id='current-rate'></span>{% endcomment %}
<form class="share-price-date-range" action="javascript:void(0);">
<fieldset>
<button class="usa-button" onClick='doDownloadAnnuityRates("CSV");'>
  Export annuity rates to CSV <i class="fal fa-file-export"></i></button>
</fieldset>
</form>
</div>
</div>
<!-- END div.usa-grid centered -->
<div class="table-scroll-buttons">
  <button id="slideRight" class="slide-right" type="button" class="usa-button-secondary"><i class="fal fa-arrow-to-left"></i> Scroll left</button>
  <button id="slideLeft" class="slide-left" type="button" class="usa-button-secondary">Scroll right <i class="fal fa-arrow-to-right"></i></button>
</div>
<!-- END div.table-scroll-buttons -->
<div id="historical-rates-table" class="table-side-scroll"></div>
<!-- END div.table-side-scroll -->
<!-- CONTENT END -->
