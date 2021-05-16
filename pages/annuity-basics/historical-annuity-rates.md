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
redirect_from:
  - /whatsnew/Content/annuityRateIndex.html
---

<div class="usa-grid centered" markdown="1">
# Historical annuity rates
{% comment %}<p id='current-rate' class="current-rate"></p>{% endcomment %}
<form class="share-price-date-range" action="javascript:void(0);">
<fieldset>
<button class="usa-button" onClick='doDownloadAnnuityRates("CSV");'>
  Export annuity rates to CSV <i class="fal fa-file-export"></i></button>
</fieldset>
</form>
{% include side-scroll-elements.html alert=true buttons=true %}
</div>

<!-- STATIC TABLE -->
<section id="historical-rates-section">
<div id="historical-rates-table" class="table-side-scroll">
</div>
</section>

<!-- CONTENT END -->
