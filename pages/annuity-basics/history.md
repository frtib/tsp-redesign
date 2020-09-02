---
layout: page
title: Annuity history
styles:
sidenav: use-your-savings
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/side-scroll-funds.js
permalink: /annuity-basics/history/
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - getHistoricalAnnuityRates('current-rate', 'historical-rates');
redirect_from:
  - /whatsnew/Content/annuityRateIndex.html
published: false
---

# Historical annuity rates

<span id='current-rate'></span>

<section class="date-range">
<form class="share-price-date-range" action="javascript:void(0);">
<fieldset>
<button class="usa-button-secondary" onClick='doDownloadAnnuityRates("CSV");'>
  Download share prices <i class="fal fa-arrow-alt-to-bottom"></i></button>
</fieldset>
</form>
</section>

<div class="table-view">
  <button id="slideRight" class="slide-right" type="button" class="usa-button-secondary"><i class="fal fa-arrow-to-left"></i> Scroll left</button>
  <button id="slideLeft" class="slide-left" type="button" class="usa-button-secondary">Scroll right <i class="fal fa-arrow-to-right"></i></button>
</div><!-- END div.table-view -->
<div id="historical-rates" class="table-side-scroll"></div>



<!-- CONTENT END -->
