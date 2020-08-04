---
layout: page
title: Training request form
styles:
sidenav: agency-service-reps
scripts:
  - /assets/js/flatpickr/flatpickr.js
  - /assets/js/flatpickr/date-range.js
permalink: /agency-service-reps/training-form/
redirect_from:
---

# Training request form

<form>

  <div class="usa-input-error">
    <label class="usa-input-error-label" for="agency-organization-name">Name of Agency/Organization</label>
    <span class="usa-input-error-message" id="agency-organization-name-error-message" role="alert">Agency or Organization name is required</span>
    <input
      id="agency-organization-name"
      name="agency-organization-name"
      type="text"
      aria-describedby="agency-organization-name-error-message"
      />
  </div>

  <label for="primary-contact-name">Primary contact name of Liaison</label>
  <input id="primary-contact-name" name="input-type-text" type="text" />

  <label for="primary-phone-email">Primary phone & email</label>
  <input id="primary-phone-email" name="input-type-text" type="text" />

  <label for="primary-phone-email">Alternate POC Information</label>
  <input id="primary-phone-email" name="input-type-text" type="text" />

  <label for="primary-phone-email">Name of Financial POC if travel is required</label>
  <input id="primary-phone-email" name="input-type-text" type="text" />
  <!--  Explain this -->

  <label for="primary-phone-email">Financial POC phone and email</label>
  <input id="primary-phone-email" name="input-type-text" type="text" />

  <label>
    <div>Requested training date</div>
    <!-- <input id="fundDates" placeholder="Start and end dates..." class="date-range" /> -->
    <input class="flatpickr flatpickr-input active" type="text" placeholder="Select Date.." readonly="readonly">
  </label>

  <label for="primary-phone-email">Requested Time & Time zone for Training:</label>
  <input id="primary-phone-email" name="input-type-text" type="text" />

  <label for="primary-phone-email">Agenda for day</label>
  <input id="primary-phone-email" name="input-type-text" type="text" />

  <label for="training-type">Choose type of training</label>
  <select name="training-type" id="training-type">
    <option value>- Select -</option>
    <option value="tsp-a-to-z">TSP A to Z (4 hours)</option>
    <option value="tsp-early-to-mid-career">TSP Early to Mid Career (2.5 hours)</option>
    <option value="tsp-pre-separation">TSP Pre Seperation (2.5 hours)</option>
    <option value="accumulation-to-distribution">From Accumulation to Distribution (2.5 hours)</option>
  </select>

  <label for="webinar-type">Choose type of webinar</label>
  <select name="webinar-type" id="webinar-type">
    <option value>- Select -</option>
    <option value="intro-to-tsp>Intro to TSP (1 hour)</option>
    <option value="tsp-contributions">TSP contributions (1 hour)</option>
    <option value="tsp-investment-funds">TSP investment funds (1 hour)</option>
    <option value="tsp-loans">TSP loans (1 hour)</option>
    <option value="tsp-in-service-withdrawals">TSP in-service withdrawals (1 hour)</option>
    <option value="tsp-post-service-withdrawals">TSP post-service withdrawals (1 hour)</option>
    <option value="tsp-death-benefits">TSP death benefits (1 hour)</option>
  </select>

  <label for="primary-phone-email">Estimated number of attendees</label>
  <input id="primary-phone-email" name="input-type-text" type="text" />

  <label for="input-training-location">Training location</label>
  <textarea id="input-training-location" name="input-training-location"></textarea>

  <label for="additional-information">Additional information</label>
  <textarea id="additional-information" name="additional-information"></textarea>

</form>

Please contact the Training Support Specialist at Candice.franze@frtib.gov or 202-942-1450 for any questions.

<!-- CONTENT END -->
