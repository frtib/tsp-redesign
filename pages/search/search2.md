---
title: Search
layout: page
permalink: /search2/
#sidenav: fund-options
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/calculator/calculator.js
  - /assets/js/ajaxFetch.js
  - /assets/js/ajax-usa-search-gov.js
document-ready:
  - buildAffiliateSelect('s2');
#  - doSearch();
published: false
---

{% comment %}
Dav's file for search development.
{% endcomment %}

<section class="plan-news" markdown="1">

{% include search/search-bar.html  onChange="doSearch2('s2');" searchName="s2" affiliatePlaceholder=1 %}

</section>

<hr>
<div id='search-results'></div>
<hr>
<div>
