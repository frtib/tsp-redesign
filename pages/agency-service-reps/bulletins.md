---
layout: page
title: Bulletins
styles:
sidenav: agency-service-reps
scripts:
  - /assets/js/flatpickr/flatpickr.js
  - /assets/js/ajax-usa-search-gov.js
  - /assets/js/calculator/calculator.js
  - /assets/js/search.js
  - /assets/js/bulletins.js
permalink: /agency-service-reps/bulletins/
redirect_from:
  - /representative/Content/
  - /representative/Content/bulletinsService.html
document-ready:
  - setTopic('select-bulletins-topic');
  - doSearch('search-terms');
---

# Bulletins

TSP bulletins provide guidance to TSP Agency and Service representatives for implementing the provisions of law, regulations, and procedures relating to the TSP.

<div><button class="usa-button-big" onclick="window.location.href = '{{ site.baseurl }}/exit/?idx=2';">Subscribe</button></div>
<ul class="usa-accordion explain-this subscribe">
  <li>
    <button class="usa-accordion-button" aria-expanded="false" aria-controls="subscribe">Explain this</button>
    <div id="subscribe" class="usa-accordion-content">
    <p>The Thrift Savings Plan is happy to offer a free email subscription service. This service allows TSP representatives to receive automatic notifications by email when new or updated information is available in the "Agency and Service Representative resources" section of the TSP Web site.</p>
    </div>
  </li>
</ul>

<!-- SEARCH FORMS -->
<section class="search-bulletins inline-search">
  <div class="usa-grid-full">
    <div class="usa-width-one-whole">
        {% include search/search-container.html topics=site.data.bulletins_topics
          type='bulletin' onChange='selectBulletinsTopic();' %}
        <!-- checkbox to see USV bulletins only -->
        <input id="usv-only" type="checkbox" name="usv-only" value="usv-only" onChange="usvOnlyGood();" onBlur="usvOnlyGood();"/>
        <label for="usv-only">Show only Uniformed Services bulletins</label>
    </div><!-- END div.usa-width-one-whole -->
  </div><!-- END div.usa-grid-full -->
</section>
{% include search/search-results-section.html type='bulletin' %}

{% assign showTotal = 4 %}<!-- # Help me find bulletins about {#forms} -->
{% assign startAccordion = showTotal %}
{% assign bulletin_list = site.bulletins | sort: 'path' | reverse %}

<div id="bulletins-container" markdown="1">
<div id="select-bulletins-0" class="select-bulletins-div" markdown="1">
{% include bulletins/bulletin-list.html topic="" idx='a' %}<!-- # All Bulletins  -->
</div>

{% for topic in site.data.bulletins_topics %}
  {% assign dropValue = topic | downcase  %}
  {% assign topicID = dropValue | replace: " ", "-" %}
  <div id="select-bulletins-{{ topicID }}"  class="select-bulletins-div hide" markdown="1">
  {% include bulletins/bulletin-list.html topic=dropValue idx=forloop.index noAccordions=true %}<!-- # All {{topicID}} Bulletins  -->
  </div>
{% endfor %}
</div>

<!-- CONTENT END -->
