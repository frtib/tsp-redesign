---
layout: page
title: Plan news
sidenav: news-and-resources
styles:
scripts:
  - /assets/js/ajaxFetch.js
  - /assets/js/forms.js
# calculator.js required for doc-ready getSecureAlerts
  - /assets/js/calculator/calculator.js
  - /assets/js/plan-news.js
  - /assets/js/ajax-usa-search-gov.js
permalink: /news-and-resources/plan-news/
# Jekyll redirects https://github.com/jekyll/jekyll-redirect-from
document-ready:
# To test outage messages, change 'today' to a specific date.
# getSecureAlerts('ID of container div', 'YYYYMMDD')
  - getSecureAlerts('secure-alerts', 'today');
redirect_from:
  - /ParticipantSupport/Content/notifications.html
  - /plan-news/
  - /whatsnew/Content/
---

# Plan news

<div id="secure-alerts"></div>

<section class="subscribe-or-search" markdown="1">
{% include /search/search-bar.html  onChange="searchInline('plan-news', planNewsCallback);" searchName="plan-news" %}
{% include explain-subscribe.html %}
</section>


{% include plan-news-list.html %}
