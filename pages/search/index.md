---
title: Search tsp.gov
layout: page
permalink: /search/
scripts:
  - /assets/js/flatpickr/flatpickr.js
  - /assets/js/ajaxFetch.js
  - /assets/js/ajax-usa-search-gov.js
  - /assets/js/calculator/calculator.js
  - /assets/js/search.js
document-ready:
  - initGroup();
  - setQS('search-terms');
  - gotoPage(1);
  - addFormModals();
redirect_from:
  - /ParticipantSupport/Content/search.html
---

<div class="usa-grid-full search">
  <div class="usa-width-one-whole">

    <section class="search-filters">
      <div class="filter-block">
      <!-- Filters -->
        <h2 class="sr-only">Filters and Result Count</h2>
        <ul class="usa-unstyled-list flex wrap filters">
        <li id="everything" onClick="selectSearchGroup('everything', true);" class="group-option">Everything</li>
        <li id="videos" onClick="selectSearchGroup('videos', true);" class="group-option">Videos</li>
        <li id="forms" onClick="selectSearchGroup('forms', true);" class="group-option">Forms and Resources</li>
        <li id="plan-news" onClick="selectSearchGroup('plan-news', true);" class="group-option">Plan News</li>
        <li id="results-count-block"><span><span id="results-count"></span> results</span></li>
        </ul>
      </div>

      <input id="group" type="hidden" value="everything">
      <div role="search" class="usa-search usa-search-small">
        <div class="usa-search usa-search-small">
        <label class="usa-sr-only" for="search-terms">Search small</label>
          <input id="search-terms" type="search" name="search-terms"
            onChange="gotoPage(1);" onBlur="" xonKeypress="inputKeypress();">
          <button onClick="gotoPage(1);" type="submit">
            <span class="usa-sr-only">Search</span>
          </button>
        </div>
      </div>
    </section> <!-- END section.search-filters -->

    {% include search/search-result-blocks.html %}

    {% include search/search-hit-blocks.html %}

    </div> <!-- END div.usa-width-one-whole -->
</div> <!-- END div.usa-grid-full -->

{% include form-modals.html %}
