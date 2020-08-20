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
permalink: /forms/
document-ready:
  - addFormModals();
  - setTopic('select-forms-topic');
  - doSearch('search-terms');
redirect_from:
  - /forms/addressNameChange.html
  - /forms/allPublications.html
  - /forms/beneficiaryParticipants.html
  - /forms/civilianForms.html
  - /forms/contributions.html
  - /forms/deathBenefits.html
  - /forms/generalInformation.html
  - /forms/investments.html
  - /forms/legalDocuments.html
  - /forms/loans.html
  - /forms/transfersAndRollovers.html
  - /forms/uniformedServicesForms.html
  - /forms/withdrawals.html
  - /publications/
---

# Help me find forms and resources about {#forms}

<!-- SEARCH FORMS -->

<div class="usa-grid-full">
  <div class="usa-width-one-whole">
    <section class="inline-search">
      {% include search/search-container.html topics=site.data.forms_topics
          type='form' onChange='selectFormsTopic();' %}
    </section><!-- // end section.inline-search -->
  </div><!-- END div.usa-width-one-whole -->
</div><!-- END div.usa-grid-full -->
{% include search/search-results-section.html type='form' %}

{% assign showTotal = 4 %}
{% assign startAccordion = showTotal %}

<section id="popular-forms" markdown="1">
  {% assign cnt = 0 %}
  <div id="select-forms-0" class="select-forms-div" markdown="1">
  <h2 class="most-popular" id="most-popular-forms">Most popular forms</h2>
  <!-- # All Forms  -->
  <div class="usa-grid-full">
  {% for form in site.data.forms %}
    {% assign cnt = cnt | plus: 1 %}
    {% include forms/form.html nameDiv=1 %}
    {% assign mod = cnt | modulo: 2 %}
  {% if mod == 0 %}
  </div>
  {% if cnt == startAccordion %}
  <div id="more-forms-content-0" class="hide">
  {% endif %}
  <div class="usa-grid-full">  
  {% endif %}
  {% endfor %}
  </div>
  {% if cnt >= startAccordion %}
  </div>
  {% endif %}
  <div id="more-forms-0" class="see-more" onClick="showMoreForms('forms', '0');">
    <span>see more forms</span>
  </div>
  </div>

  {% for topic in site.data.forms_topics %}
  {% assign dropValue = topic | downcase | replace: " ", "-" %}
  {% assign topicID = dropValue %}
  {% comment %}count number of forms for accordion{% endcomment %}
  {% assign formCnt = 0 %}
  {% for form in site.data.forms %}
  {% for form_topic in form.form_topics %}
  {% if form_topic == topic %}
    {% assign formCnt = formCnt | plus: 1 %}
  {% endif %}
  {% endfor %}
  {% endfor %}
  {% assign resCnt = 0 %}
  {% for resource in site.data.publications %}
  {% for form_topic in resource.publication_topics %}
  {% if form_topic == topic %}
    {% assign resCnt = resCnt | plus: 1 %}
  {% endif %}
  {% endfor %}
  {% endfor %}
  {% assign startAccordion = formCnt | plus: 1 %}
  {% if formCnt > showTotal %}{% assign startAccordion = showTotal %}{% endif %}

  <div id="select-forms-{{ topicID }}"  class="select-forms-div hide" markdown="1">
  <h2 class="results">
    We found <strong>{{formCnt}}</strong> forms
    and <strong>{{resCnt}}</strong> resources about <strong>{{ topic }}</strong>
  </h2>
  {% if formCnt > 0 %}
  <!-- # {{ topic }} Forms  -->
  {% endif %}
  {% assign cnt = 0 %}
  <div class="usa-grid-full">
  {% for form in site.data.forms %}
  {% for form_topic in form.form_topics %}
  {% if form_topic == topic %}
    {% assign cnt = cnt | plus: 1 %}
    {% include forms/form.html %}
    {% assign mod = cnt | modulo: 2 %}
  {% if mod == 0 %}
  </div>
  {% if cnt == startAccordion %}
  <div id="more-forms-content-{{ topicID }}" class="hide">
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
  {% if formCnt > showTotal %}
  <div id="more-forms-{{ topicID }}" class="see-more" onClick="showMoreForms('forms', '{{ topicID }}');">
    <span>see more forms</span>
  </div>
  {% endif %}
  </div>
  {% endfor %}
</section>

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
