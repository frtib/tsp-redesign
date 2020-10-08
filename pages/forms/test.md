---
layout: page
title: Forms
styles:
sidenav:
scripts:
  - /assets/js/flatpickr/flatpickr.js
  - /assets/js/ajaxFetch.js
  - /assets/js/ajax-usa-search-gov.js
  - /assets/js/calculator/calculator.js
  - /assets/js/search.js
  - /assets/js/forms.js
permalink: /forms/test.html
document-ready:
  - addFormModals();
  - setTopic('select-forms-topic');
  - doSearch('search-terms');
redirect_from:
  - /forms/test/
---

# Help me find forms and resources about {#forms}

<!-- SEARCH FORMS -->

<div class="usa-grid-full">
  <div class="usa-width-one-whole">
    <section class="inline-search">
      {% comment %}{% include search/search-container.html topics=site.data.forms_topics type='form' onChange='selectFormsTopic();' %}{% endcomment %}
      {% include search/search-container.html topics=site.data.forms_topics type='form' onChange='submit();' %}
    </section><!-- // end section.inline-search -->
  </div><!-- END div.usa-width-one-whole -->
</div><!-- END div.usa-grid-full -->
{% include search/search-results-section.html type='form' %}

{% assign showTotal = 4 %}
{% assign startAccordion = showTotal %}

{% assign startAccordion = showTotal %}

<section id="popular-resources" markdown="1">
  {% assign cnt = 0 %}
  <div id="select-resources-0" class="select-resources-div" markdown="1">
  <h2 class="most-popular" id="most-popular-resources">Most popular resources</h2>
  <!-- # All Resources -->
  <div class="usa-grid-full">
  {% for resource in site.data.publications %}
    {% assign cnt = cnt | plus: 1 %}
    {% include forms/resource.html nameDiv=1 %}
    {% assign mod = cnt | modulo: 2 %}
  {% if mod == 0 %}
  </div>
  {% if cnt == startAccordion %}
  <br>
  <div id="more-resources-content-0" class="hide">
  {% endif %}
  <div class="usa-grid-full">  
  {% endif %}
  {% endfor %}
  </div>
  {% if cnt >= startAccordion %}
  </div>
  {% endif %}
  <div id="more-resources-0" class="see-more" onClick="showMoreForms('resources', '0');">
    <span>see more resources</span>
  </div>
  </div>

  {% for topic in site.data.forms_topics %}
  {% assign dropValue = topic | downcase | replace: " ", "-" %}
  {% assign topicID = dropValue %}
  {% comment %}count number of resources for accordion{% endcomment %}
  {% assign resCnt = 0 %}
  {% for resource in site.data.publications %}
  {% for form_topic in resource.publication_topics %}
  {% if form_topic == topic %}
    {% assign resCnt = resCnt | plus: 1 %}
  {% endif %}
  {% endfor %}
  {% endfor %}
  {% assign startAccordion = resCnt | plus: 1 %}
  {% if resCnt > showTotal %}{% assign startAccordion = showTotal %}{% endif %}
  {% assign cnt = 0 %}

  <div id="select-resources-{{ topicID }}"  class="select-resources-div hide" markdown="1">
  {% if resCnt > 0 %}
  <h2 class="most-popular" id="{{topic}}-resources">{{topic}} resources</h2>
  <!-- # {{ topic }} Resources  -->
  {% endif %}
  <div class="usa-grid-full">
  {% for resource in site.data.publications %}
  {% for form_topic in resource.publication_topics %}
  {% if form_topic == topic %}
    {% assign cnt = cnt | plus: 1 %}
    {% include forms/resource.html %}
    {% assign mod = cnt | modulo: 2 %}
  {% if mod == 0 %}
  </div>
  {% if cnt == startAccordion %}
  <br>
  <div id="more-resources-content-{{ topicID }}" class="select-resources-div hide">
  {% endif %}
  <div class="usa-grid-full">  
  {% endif %}
  {% endif %}
  {% endfor %}
  {% endfor %}
  </div>
  {% if cnt >= startAccordion %}
  </div>
  {% endif %}
  {% if resCnt > showTotal %}
  <div id="more-resources-{{ topicID }}" class="see-more" onClick="showMoreForms('resources', '{{ topicID }}');">
    <span>see more resources</span>
  </div>
  {% endif %}
  </div>
  {% endfor %}
</section>

{% include form-modals.html %}
