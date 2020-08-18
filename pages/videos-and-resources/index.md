---
layout: page
title: Videos and Resources
sidenav: news-and-resources
styles:
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/flatpickr/flatpickr.js
  - /assets/js/ajaxFetch.js
  - /assets/js/ajax-usa-search-gov.js
  - /assets/js/calculator/calculator.js
  - /assets/js/search.js
  - /assets/js/videos-and-resources.js
  - /assets/js/videos-YouTube-data.js
permalink: /videos-and-resources/
document-ready:
  - setYouTubeVideoData();
  - initVideoList();
---

# Videos and resources

<section class="videos-and-resources">
<div class="wrapper">
<ul class="usa-accordion usa-tabs social-media">
<!-- VIDEOS -->
<li>
<button class="usa-accordion-button"
aria-expanded="true"
aria-controls="videos">
Videos
</button>
<div id="videos" class="usa-accordion-content videos">
<div class="video-wrapper">
<span id="video-span">
  <iframe id="video-iframe"
    src=""
    frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</span>
</div>
<div class="usa-grid">
<!-- Search videos -->
<div class="usa-width-one-third search-videos" markdown="1">
<!-- Animated search bar -->
<div class="usa-search usa-search-small">
<label for="browse-titles" class="usa-sr-only">Search videos</label>

<span class="clear-contents-icon">
<input
  type="text"
  name="query"
  id="browse-titles"
  autocomplete="off"
  placeholder="&#xf002; Search"
  onKeyUp="videoOnKeyUp();">
  <span onClick="doVideoSearch('');"></span>
</span>
</div>

{% include video-list.html %}</div>

{% include video-details-list.html %}
</div>
</div>
<!-- end div.video-wrapper -->
</li>
<!-- SOCIAL -->
<li>
<button class="usa-accordion-button"
aria-expanded="false"
aria-controls="social">
Social
</button>
<div id="social" class="usa-accordion-content social">
<div class="usa-grid feeds">

<div class="usa-width-one-half">
<section class="twitter-feed" markdown="1">

<a class="twitter-timeline" href="https://twitter.com/tsp4gov/timelines/1172161252178612224?ref_src=twsrc%5Etfw">website-collection - Curated tweets by tsp4gov</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

</section>
</div>

<div class="usa-width-one-half">
<section class="facebook-feed">
<!-- Step 2: Place this code wherever you want the plugin to appear on your page. -->
<div class="fb-page"
  data-href="https://www.facebook.com/tsp4gov"
  data-tabs="timeline"
  data-width="500"
  data-height="1000"
  data-small-header="false"
  data-adapt-container-width="true"
  data-hide-cover="false"
  data-show-facepile="true">
  <blockquote cite="https://www.facebook.com/tsp4gov" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/tsp4gov">Thrift Savings Plan</a></blockquote>
</div></section>
<!-- Step 1: Include the JavaScript SDK on your page once, ideally right after the opening body tag. -->
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0"></script>
</div>
</div>
</div>
</li>
</ul>
</div> <!-- end div.wrapper -->
</section>
