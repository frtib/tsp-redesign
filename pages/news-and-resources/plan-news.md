---
layout: page
title: Plan news
sidenav: news-and-resources
styles:
scripts:
  - /assets/js/ajaxFetch.js
  - /assets/js/forms.js
  - /assets/js/plan-news.js
  - /assets/js/ajax-usa-search-gov.js
permalink: /news-and-resources/plan-news/
# Jekyll redirects https://github.com/jekyll/jekyll-redirect-from
document-ready:
  - getSecureAlerts('secure-alerts', 'today');
redirect_from:
  - /ParticipantSupport/Content/notifications.html
  - /plan-news/
  - /whatsnew/Content/
---

# Plan news
{:#plan-news}

{% include next-outage.html %}

<span id="secure-alerts"></span>

<section class="subscribe-or-search" markdown="1">
{% include /search/search-bar.html  onChange="searchInline('plan-news', planNewsCallback);" searchName="plan-news" %}
{% include explain-subscribe.html %}
</section>


{% include plan-news-list.html %}
