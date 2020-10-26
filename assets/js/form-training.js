<script src="https://touchpoints.app.cloud.gov/touchpoints/8effcc3f/js" async></script>
// Form components are namespaced under 'fba' = 'Feedback Analytics'
// 'use strict';
//
// function FBAform(d, N) {
// 	return {
// 		formId: "8effcc3f",
// 		formComponent: function() {
// 			return document.querySelector("[data-touchpoints-form-id='" + this.formId + "']")
// 		},
// 		formElement: function() {
// 			return this.formComponent().querySelector("form");
// 		},
//
// 		// enable Javascript experience
// 		javscriptIsEnabled: function() {
// 			var javascriptDisabledMessage = document.getElementsByClassName("javascript-disabled-message")[0];
// 			var touchpointForm = document.getElementsByClassName("touchpoint-form")[0];
// 			if (javascriptDisabledMessage) {
// 				javascriptDisabledMessage.classList.add("hide");
// 			}
// 			if (touchpointForm) {
// 				touchpointForm.classList.remove("hide");
// 			}
// 		},
// 		init: function(options) {
// 			this.javscriptIsEnabled();
//
// 			this.options = options;
// 			this.loadHtml();
// 			this.bindEventListeners();
// 			this.dialogOpen = false; // initially false
// 			this.successState = false; // initially false
// 			this.pagination();
// 			return this;
// 		},
// 		bindEventListeners: function() {
// 			var self = this;
// 			d.addEventListener('keyup', function (event) {
// 				var x = event.keyCode;
// 				if( x == 27 && self.dialogOpen == true) {
// 					self.closeDialog();
// 				}
// 			});
// 			d.addEventListener('click', function (event) {
// 				self.handleClick(event);
// 			});
// 		},
// 		loadHtml: function()
// 		{
// 			if(d.getElementById('request-training') != null) {
// 				d.getElementById('request-training').innerHTML = "<div id=\"fba-modal-dialog\" class=\"fba-modal-dialog\">\n  <div class=\"touchpoints-form-wrapper\" data-touchpoints-form-id=\"8effcc3f\">\n  <div class=\"wrapper\">\n\n    <p class=\"fba-instructions\">\n      Instructions under Form title, before Form body\n    <\/p>\n    <div class=\"fba-alert usa-alert usa-alert--success\" hidden=\"true\">\n  <div class=\"usa-alert__body\">\n    <h3 class=\"usa-alert__heading\">Success<\/h3>\n    <p class=\"usa-alert__text\">\n      alert message\n    <\/p>\n  <\/div>\n<\/div>\n<div class=\"fba-alert-error usa-alert usa-alert--error\" hidden=\"true\">\n  <div class=\"usa-alert__body\">\n    <h3 class=\"usa-alert__heading\">Error<\/h3>\n    <p class=\"usa-alert__text\">\n      alert message\n    <\/p>\n  <\/div>\n<\/div>\n\n    \n<form class=\"touchpoints-form\" action=\"https://touchpoints.app.cloud.gov/touchpoints/8effcc3f/submissions.json\" method=\"POST\">\n  <div class=\"touchpoints-form-body\">\n    <input type=\"hidden\" name=\"fba_location_code\" id=\"fba_location_code\" />\n\n      <div class=\"well white-bg section visible\">\n          <div class=\"pagination-buttons\">\n          <\/div>\n\n        <h4>\n          Agency/Service contact information\n        <\/h4>\n\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_01\">\n  <label class=\"usa-label\" for=\"answer_01\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.1\">1<\/span>.\n  Name of Agency/Organization\n<\/label>\n\n    <input type=\"text\" name=\"answer_01\" id=\"answer_01\" class=\"usa-input\" required=\"required\" maxlength=\"100000\" />\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_02\">\n  <label class=\"usa-label\" for=\"answer_02\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.2\">2<\/span>.\n  Primary contact name of Liaison\n<\/label>\n\n    <input type=\"text\" name=\"answer_02\" id=\"answer_02\" class=\"usa-input\" required=\"required\" maxlength=\"100000\" />\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_03\">\n  <label class=\"usa-label\" for=\"answer_03\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.3\">3<\/span>.\n  Primary phone and email of Liaison\n<\/label>\n\n    <input type=\"text\" name=\"answer_03\" id=\"answer_03\" class=\"usa-input\" maxlength=\"100000\" />\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_04\">\n  <label class=\"usa-label\" for=\"answer_04\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.4\">4<\/span>.\n  Alternate POC information\n<\/label>\n\n    <textarea name=\"answer_04\" id=\"answer_04\" class=\"usa-textarea\" maxlength=\"100000\">\n<\/textarea>\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_05\">\n  <label class=\"usa-label\" for=\"answer_05\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.5\">5<\/span>.\n  Name of financial POC (if travel is required):\n<\/label>\n\n    <input type=\"text\" name=\"answer_05\" id=\"answer_05\" class=\"usa-input\" maxlength=\"100000\" />\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_06\">\n  <label class=\"usa-label\" for=\"answer_06\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.6\">6<\/span>.\n  Financial POC phone and email:\n<\/label>\n\n    <input type=\"text\" name=\"answer_06\" id=\"answer_06\" class=\"usa-input\" maxlength=\"100000\" />\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n          <div class=\"pagination-buttons\">\n              <p>\n                <a class=\"usa-button next-section\" data-form-section-target=\"\" href=\"#next-page\">Next<\/a>\n              <\/p>\n          <\/div>\n      <\/div>\n      <div class=\"well white-bg section \">\n          <div class=\"pagination-buttons\">\n              <a class=\"usa-button previous-section\" data-form-section-target=\"\" href=\"#previous-page\">Back<\/a>\n          <\/div>\n\n        <h4>\n          Agenda\n        <\/h4>\n\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_07\">\n  <label class=\"usa-label\" for=\"answer_07\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.7\">7<\/span>.\n  Requested date for training:  \n<\/label>\n\n    <input type=\"text\" name=\"answer_07\" id=\"answer_07\" class=\"usa-input\" required=\"required\" maxlength=\"100000\" />\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_08\">\n  <label class=\"usa-label\" for=\"answer_08\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.8\">8<\/span>.\n  Requested time and time zone:\n<\/label>\n\n    <input type=\"text\" name=\"answer_08\" id=\"answer_08\" class=\"usa-input\" required=\"required\" maxlength=\"100000\" />\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_09\">\n  <label class=\"usa-label\">\n    <span class=\"translation_missing\" title=\"translation missing: en-US.9\">9<\/span>.\n    Choose type of training\n  <\/label>\n  <br>\n  <div class=\"radio-button\">\n    <select name=\"answer_09\" id=\"answer_09\" class=\"usa-select\"><option value=\"\">Select one<\/option><option value=\"a-to-z\">TSP A to Z (4 hours)<\/option>\n<option value=\"early-to-mid-career\">TSP for Early to Mid-Career Employees (2.5 hours)<\/option>\n<option value=\"pre-separation\">TSP Pre-Separation (2.5 hours)<\/option>\n<option value=\"accumulation-to-distribution\">From Accumulation to Distribution (2.5 hours)<\/option><\/select>\n  <\/div>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_10\">\n  <label class=\"usa-label\">\n    <span class=\"translation_missing\" title=\"translation missing: en-US.10\">10<\/span>.\n    Choose type of webinar (1 hour each):\n  <\/label>\n  <br>\n  <div class=\"radio-button\">\n    <select name=\"answer_10\" id=\"answer_10\" class=\"usa-select\"><option value=\"\">Select one<\/option><option value=\"webinar-intro-to-tsp\">Intro to TSP<\/option>\n<option value=\"webinar-contributions\">TSP Contributions<\/option>\n<option value=\"webinar-investment-funds\">TSP Investment Funds<\/option>\n<option value=\"webinar-loans\">TSP Loans<\/option>\n<option value=\"webinar-in-service-withdrawals\">TSP In-Service Withdrawals<\/option>\n<option value=\"webinar-post-service-withdrawals\">TSP Post-Service Withdrawals<\/option>\n<option value=\"webinar-tsp-death-benefits\">TSP Death Benefits<\/option><\/select>\n  <\/div>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_11\">\n  <label class=\"usa-label\" for=\"answer_11\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.11\">11<\/span>.\n  Estimated number of attendees:\n<\/label>\n\n    <input type=\"text\" name=\"answer_11\" id=\"answer_11\" class=\"usa-input\" required=\"required\" maxlength=\"100000\" />\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_12\">\n  <label class=\"usa-label\" for=\"answer_12\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.12\">12<\/span>.\n  Location of training:\n<\/label>\n\n    <textarea name=\"answer_12\" id=\"answer_12\" class=\"usa-textarea\" required=\"required\" maxlength=\"100000\">\n<\/textarea>\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n        <div class=\"question\">\n            <div class=\"radios\" role=\"group\" aria-labelledby=\"answer_13\">\n  <label class=\"usa-label\" for=\"answer_13\">\n  <span class=\"translation_missing\" title=\"translation missing: en-US.13\">13<\/span>.\n  Additional information:\n<\/label>\n\n    <textarea name=\"answer_13\" id=\"answer_13\" class=\"usa-textarea\" maxlength=\"100000\">\n<\/textarea>\n  <em class=\"counter-msg\" hidden=&quot;true&quot;\">Chars remaining:  <span class=\"counter\">100000<\/span><\/em>\n<\/div>\n\n        <\/div>\n\n          <div class=\"pagination-buttons\">\n          <\/div>\n          <p class=\"submit-button\">\n            <button type=\"submit\" class=\"usa-button\">Submit<\/button>\n          <\/p>\n      <\/div>\n  <\/div>\n<\/form>\n\n  <\/div>\n  \n    \n<div class=\"usa-banner\">\n  <header class=\"usa-banner__header\">\n    <div class=\"usa-banner__inner\">\n      <div class=\"grid-col-auto\">\n        <img class=\"usa-banner__header-flag\" src=\"https://touchpoints.app.cloud.gov/assets/us_flag_small-9c507b1ff21f65c4b8f0c45d0e0d0a10bb5c9864c1a76e07aa3293da574968a1.png\" alt=\"U.S. flag\">\n      <\/div>\n      <div class=\"grid-col-fill tablet:grid-col-auto\">\n        <p class=\"usa-banner__header-text\">\n          An official form of the United States government.\n          Powered by\n          <a href=\"https://touchpoints.app.cloud.gov/\" target=\"_blank\" rel=\"noopener\">Touchpoints<\/a>\n          <br>\n\n        <\/p>\n      <\/div>\n    <\/div>\n  <\/header>\n<\/div>\n\n\n<\/div>\n<\/div>\n";
// 			}
//
//
//
// 			var formElement = this.formElement();
// 			// returns 1 or more submit buttons within the Touchpoints form
// 			var submitButtons = formElement.querySelectorAll("[type='submit']");
// 			var that = this;
//
// 			var yesNoForm = d.querySelector('.touchpoints-yes-no-buttons');
// 			if (yesNoForm) { // only for yes/no questions
// 				submitButtons.forEach(function(submitButton) {
// 					submitButton.addEventListener('click', that.handleYesNoSubmitClick.bind(that), false);
// 				})
// 			} else { // for all other types of forms/questions
// 				if (submitButtons) {
// 					submitButtons.forEach(function(submitButton) {
// 						submitButton.addEventListener('click', that.handleSubmitClick.bind(that), false);
// 					})
// 				}
// 			}
// 		},
// 		resetErrors: function()
// 		{
// 			var formComponent = this.formComponent();
// 			var alertElement = formComponent.querySelector(".fba-alert");
// 			var alertElementBody = formComponent.getElementsByClassName("usa-alert__text")[0];
// 			var alertErrorElement = formComponent.querySelector(".fba-alert-error");
// 			var alertErrorElementBody = alertErrorElement.getElementsByClassName("usa-alert__text")[0];
// 			alertElement.setAttribute("hidden", true);
// 			alertElementBody.innerHTML = "";
// 			alertErrorElement.setAttribute("hidden", true);
// 			alertErrorElementBody.innerHTML = "";
// 		},
// 		handleClick: function(e) {
// 		},
// 		handleButtonClick: function(e) {
// 			e.preventDefault();
// 			this.loadDialog();
// 		},
// 		handleDialogClose: function(e) {
// 			e.preventDefault();
// 			this.closeDialog();
// 		},
// 		handleSubmitClick: function(e) {
// 			e.preventDefault();
// 			this.resetErrors();
// 			var formElement = this.formElement();
// 			var self = this;
// 			if (self.validateForm(formElement)) {
// 				var submitButton = formElement.querySelector("[type='submit']");
// 				submitButton.disabled = true;
// 				self.sendFeedback();
// 			}
// 		},
// 		handleYesNoSubmitClick: function(e) {
// 			e.preventDefault();
//
// 			var input = this.formComponent().querySelector('.fba-touchpoints-page-form');
// 			input.value = this.value;
// 			this.resetErrors();
// 			var self = this;
// 			var formElement = this.formElement();
// 			if (self.validateForm(formElement)) {
// 				var submitButtons = formElement.querySelectorAll("[type='submit']");
// 				submitButtons.forEach(function(submitButton) {
// 					submitButton.disabled = true;
// 				})
// 				self.sendFeedback();
// 			}
// 		},
// 		validateForm: function(form) {
// 			this.hideValidationError(form);
// 			var valid = this.checkRequired(form);
// 			return valid;
// 		},
// 		checkRequired: function(form) {
// 			var requiredItems = form.querySelectorAll('[required]');
// 			var questions = {};
// 			// Build a dictionary of questions which require an answer
// 			[].forEach.call(requiredItems, function(item) { questions[item.name] = item });
//
// 			[].forEach.call(requiredItems, function(item) {
// 				switch (item.type) {
// 				case 'radio':
// 					if (item.checked) delete(questions[item.name]);
// 					break;
// 				case 'checkbox':
// 				  if (item.checked) delete(questions[item.name]);
// 					break;
// 				case 'select-one':
// 					if (item.selectedIndex > 0) delete(questions[item.name]);
// 					break;
// 				default:
// 					if (item.value.length > 0) delete(questions[item.name]);
// 				}
// 			});
// 			for (var key in questions) {
// 				this.showValidationError(questions[key],'You must respond to question: ');
// 				return false;
// 			}
// 			return true;
// 		},
// 		showValidationError: function(question,error) {
// 			var questionDiv = question.closest(".question");
// 			var label = questionDiv.querySelector("label");
// 			var questionNum = label.innerText;
// 			questionDiv.setAttribute('class', 'usa-form-group usa-form-group--error');
// 			var span = document.createElement('span');
// 			span.setAttribute('id', 'input-error-message');
// 			span.setAttribute('role','alert');
// 			span.setAttribute('class','usa-error-message');
// 			span.innerText = error + questionNum;
// 			label.parentNode.insertBefore(span, label.nextSibling);
// 			var input = document.createElement('input');
// 			input.setAttribute('hidden', 'true');
// 			input.setAttribute('id','input-error');
// 			input.setAttribute('type','text');
// 			input.setAttribute('name','input-error');
// 			input.setAttribute('aria-describedby','input-error-message');
// 			questionDiv.appendChild(input);
// 			questionDiv.scrollIntoView();
// 			questionDiv.focus();
// 		},
// 		hideValidationError: function(form) {
// 			var elem = form.querySelector('.usa-form-group--error');
// 			if (elem == null) return;
// 			elem.setAttribute('class','question');
// 			var elem = form.querySelector('#input-error-message');
// 			if (elem != null) elem.parentNode.removeChild(elem);
// 			elem = form.querySelector('#input-error');
// 			if (elem != null) elem.parentNode.removeChild(elem);
// 		},
// 		textCounter: function(field,maxlimit)
// 			{
// 			 var countfield = field.parentNode.querySelector(".counter");
// 			 if ( field.value.length > maxlimit ) {
// 			  field.value = field.value.substring( 0, maxlimit );
// 			  countfield.innerText = '0';
// 			  return false;
// 			 } else {
// 			  countfield.innerText = "" + (maxlimit - field.value.length);
// 			 }
// 		},
// 		loadButton: function()
// 		{
// 			// Add the fixed, floating tab button
// 			this.buttonEl = document.createElement('a');
// 			this.buttonEl.setAttribute('id', 'fba-button');
// 			this.buttonEl.setAttribute('class', 'fixed-tab-button usa-button');
// 			this.buttonEl.setAttribute('href', '#');
// 			this.buttonEl.setAttribute('aria-haspopup', 'dialog');
// 			this.buttonEl.addEventListener('click', this.handleButtonClick.bind(this), false);
// 			this.buttonEl.innerHTML = this.options.modalButtonText;
// 			d.body.appendChild(this.buttonEl);
//
// 			this.loadFeebackSkipLink();
// 		},
// 		loadFeebackSkipLink: function() {
// 			this.skipLink = document.createElement('a');
// 			this.skipLink.setAttribute('class', 'usa-skipnav touchpoints-skipnav');
// 			this.skipLink.setAttribute('href', '#fba-button');
// 			this.skipLink.addEventListener('click', function() {
// 				document.querySelector("#fba-button").focus();
// 			});
// 			this.skipLink.innerHTML = 'Skip to feedback';
//
// 			var existingSkipLinks = document.querySelector('.usa-skipnav');
// 			if(existingSkipLinks) {
// 				existingSkipLinks.insertAdjacentElement('afterend', this.skipLink);
// 			} else {
// 				d.body.prepend(this.skipLink);
// 			}
// 		},
// 		// Used when in a modal
// 		loadDialog: function()
// 		{
// 			d.querySelector('.fba-modal').removeAttribute("hidden");
// 			this.dialogOpen = true;
// 		},
// 		closeDialog: function()
// 		{
// 			d.querySelector('.fba-modal').setAttribute("hidden", true);
// 			this.resetFormDisplay();
// 			this.dialogOpen = false;
// 		},
// 		sendFeedback: function()
// 		{
// 			var form = this.formElement();
// 			this.ajaxPost(form, this.formSuccess);
// 		},
// 		showFormSuccess: function(e)
// 		{
// 			var formComponent = this.formComponent();
// 			var formElement = this.formElement();
// 			var alertElement = formComponent.querySelector(".fba-alert");
// 			var alertElementBody = formComponent.querySelector(".usa-alert__text");
//
// 			// Display success Message
// 			alertElementBody.innerHTML += "Thank you. A Training Support Specialist will contact you within two business days.";
// 			alertElement.removeAttribute("hidden");
//
// 			// Hide Form Elements
// 			if (formElement) {
// 				// And clear the Form's Fields
// 				formElement.reset();
// 				if (formElement.querySelector('.touchpoints-form-body')) {
// 					var formBody = formElement.querySelector('.touchpoints-form-body');
// 					if(formBody) {
// 						formBody.setAttribute("hidden", true);
// 					}
// 				}
// 				if (formComponent.querySelector('.touchpoints-form-disclaimer')) {
// 					var formDisclaimer = formComponent.querySelector('.touchpoints-form-disclaimer');
// 					if(formDisclaimer) {
// 						formDisclaimer.setAttribute("hidden", true);
// 					}
// 				}
//
// 			}
// 		},
// 		resetFormDisplay: function()
// 		{
// 			if (this.successState === false) {
// 				return false;
// 			}
//
// 			// Hide and Reset Flash Message
// 			this.resetErrors();
//
// 			// Re-enable Submit Button
// 			var formElement = this.formElement();
// 			var submitButton = formElement.querySelector("[type='submit']");
// 			submitButton.disabled = false;
//
// 			// Show Form Elements
// 			if (formElement) {
// 				if (formElement.querySelector('.touchpoints-form-body')) {
// 					var formBody = formElement.querySelector('.touchpoints-form-body')
// 					if(formBody) {
// 						formBody.removeAttribute("hidden");
// 					}
// 				}
// 			}
// 		},
// 		formSuccess: function(e) {
// 			// Clear the alert box
// 			var formComponent = this.formComponent();
// 			var alertElement = formComponent.querySelector(".fba-alert");
// 			var alertElementBody = formComponent.getElementsByClassName("usa-alert__text")[0];
// 			var alertErrorElement = formComponent.querySelector(".fba-alert-error");
// 			var alertErrorElementBody = alertErrorElement.getElementsByClassName("usa-alert__text")[0];
// 			alertElementBody.innerHTML = "";
// 			alertErrorElementBody.innerHTML = "";
//
// 			var formElement = this.formElement();
// 			var submitButton = formElement.querySelector("[type='submit']");
//
// 			if (e.target.readyState === 4) {
// 	      if (e.target.status === 201) { // SUCCESS!
// 					this.successState = true;
// 					if(submitButton) {
// 						submitButton.disabled = true;
// 					}
// 					this.showFormSuccess();
// 	      } else if (e.target.status === 422) { // FORM ERRORS =\
// 						this.successState = false;
// 						if(submitButton) {
// 							submitButton.disabled = false;
// 						}
// 					  var jsonResponse = JSON.parse(e.target.response);
// 					  var errors = jsonResponse.messages;
//
// 					  for (var err in errors) {
// 							if (errors.hasOwnProperty(err)) {
// 								alertErrorElementBody.innerHTML += err;
// 								alertErrorElementBody.innerHTML += " ";
// 								alertErrorElementBody.innerHTML += errors[err];
// 								alertErrorElementBody.innerHTML += "<br />";
// 							}
// 					  }
// 						alertErrorElement.removeAttribute("hidden");
// 				} else { // SERVER ERROR
// 					console.log('failed');
// 					alertErrorElement.removeAttribute("hidden");
// 					alertErrorElementBody.innerHTML += "Server error. We're sorry, but this submission was not successful. The Product Team has been notified.";
// 				}
// 			}
// 		},
// 		ajaxPost: function (form, callback) {
// 	    var url = form.action;
// 	    var xhr = new XMLHttpRequest();
//
// 			// for each form question
// 			var params = {
// 				answer_01:
// 				form.querySelector("#answer_01").value,
// 				answer_07:
// 				form.querySelector("#answer_07").value,
// 				answer_08:
// 				form.querySelector("#answer_08").value,
// 				answer_02:
// 				form.querySelector("#answer_02").value,
// 				answer_03:
// 				form.querySelector("#answer_03").value,
// 				answer_09:
// 				form.querySelector("#answer_09").value,
// 				answer_04:
// 				form.querySelector("#answer_04").value,
// 				answer_10:
// 				form.querySelector("#answer_10").value,
// 				answer_11:
// 				form.querySelector("#answer_11").value,
// 				answer_05:
// 				form.querySelector("#answer_05").value,
// 				answer_12:
// 				form.querySelector("#answer_12").value,
// 				answer_06:
// 				form.querySelector("#answer_06").value,
// 				answer_13:
// 				form.querySelector("#answer_13").value,
// 			}
//
// 			// Combine Referrer and Pathname with Form-specific params
// 			params["referer"] = d.referrer;
// 			params["page"] = window.location.pathname;
// 			params["location_code"] = form.querySelector("#fba_location_code") ? form.querySelector("#fba_location_code").value : null;
// 			params["language"] = "en";
//
// 			// Submit Feedback with a POST
// 			xhr.open("POST", url);
// 			xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8;");
// 	    xhr.onload = callback.bind(this);
// 	    xhr.send(JSON.stringify({
// 				"submission": params
// 			}));
// 		},
// 		pagination: function() {
// 			var previousButtons = document.getElementsByClassName("previous-section");
// 			var nextButtons = document.getElementsByClassName("next-section");
//
// 			var self = this;
// 			for (var i = 0; i < previousButtons.length; i++) {
// 				previousButtons[i].addEventListener('click', function(e) {
// 					e.preventDefault();
// 					var currentPage = e.target.closest(".section");
// 					if (!this.validateForm(currentPage)) return false;
// 					currentPage.classList.remove("visible");
// 					currentPage.previousElementSibling.classList.add("visible");
// 					window.scrollTo(0, 0);
// 				}.bind(self));
// 			}
//
// 			for (var i = 0; i < nextButtons.length; i++) {
// 				nextButtons[i].addEventListener('click', function(e) {
// 					e.preventDefault();
// 					var currentPage = e.target.closest(".section");
// 					if (!this.validateForm(currentPage)) return false;
// 					currentPage.classList.remove("visible");
// 					currentPage.nextElementSibling.classList.add("visible");
// 					window.scrollTo(0, 0);
// 				}.bind(self))
// 			}
// 		}
// 	};
// };
//
// // Form Settings
// var formOptions = {
// 	'modalButtonText': "Training"
// };
//
// // Create unique Touchpoints form object
// const touchpointForm8effcc3f = new FBAform(document, window).init(formOptions);
