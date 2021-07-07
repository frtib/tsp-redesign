---
layout: page
# layout: page-full-width
title: Course catalog
styles:
# sidenav: agency-service-reps
sidenav: agency-service-reps
scripts:
permalink: /agency-service-reps/course-catalog/
#navlink allows more than one page to apply .usa-current to a sidenav link
navlink: /agency-service-reps/training/
redirect_from:
published: true
---

# Course catalog

**If you’re an agency or service representative and want to schedule a training event**, please find instructions on our [TSP educational resources]({{ site.baseurl }}/agency-service-reps/tsp-educational-resources/) page.

**If you’re a TSP participant and want to register for a TSP webinar**, please find the current calendar and registration information on our [webinar listings]({{ site.baseurl }}/online-learning/) page.


<section class="course-catalog">
{% for course in site.data.webinars %}
{% include webinars/item.html item=course %}
{% endfor %}
</section>

<!-- CONTENT END -->
