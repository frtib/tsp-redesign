---
layout: calculator
title: Retirement benefits court order
sidenav: manage-life-changes
styles:
scripts:
  - /assets/js/calculator/javascriptTaxTable.js
  - /assets/js/rbco-address-toggle.js
  - /assets/js/dual-accounts-demo.js
# DAV, rbco-address-toggle.js ^^ can be deleted
permalink: /planning-for-life-events/retirement-benefits-court-order-dev/
progress-steps: [Introduction,Scenario,Party 1,Party 2,Attorney,Case,Awards,Summary]
redirect_from:
  - /LifeEvents/personal/spouse/courtOrder.html
published: true
---

<ul class="usa-accordion rbco">
<!-- PANEL 1: INTRODUCTION -->
<li>
  <button
    class="usa-accordion-button"
    aria-expanded="false"
    aria-controls="panel-1">
    Panel 1 – Introduction
  </button>
  <div id="panel-1" class="usa-accordion-content">


  <section class="calculator-panel">
  <div class="panel-field" markdown="1">
  <h2>How to Divide a TSP Account in Divorce</h2>

  The Thrift Savings Plan (TSP) is a defined contribution retirement savings and investment plan for federal civilian employees and members of the uniformed services. A TSP account can be divided by means of a court order in an action for divorce, annulment, or legal separation. This type of court order is called a &#8220;retirement benefits court order&#8221; (RBCO) by the TSP. This wizard was developed as a practical aid to help you or your attorney draft an RBCO for the TSP.

  The online wizard cannot be used to draft an RBCO awarding funds to a child or dependent.

  Certain TSP account information is available to spouses (and their attorneys) to assist in developing an RBCO. To request this information, please use the [_Request for Participant Account Information_]({{ site.baseurl }}/forms/tsp-92d.pdf).

  Do not use this online court order wizard if you are drafting a court order related to Federal Employees' Retirement System (FERS) or Civilian Service Retirement System (CSRS) annuity benefits. Court orders related to the FERS and CSRS annuity programs, which are administered by the Office of Personnel Management (OPM), should be submitted to the Court Ordered Benefits branch of OPM at the following address: U.S. Office of Personnel Management, Court Ordered Benefits Branch, P.O. Box 17, Washington, DC 20044.

  To be honored by the TSP as a qualifying retirement benefits court order (RBCO), a court order must meet the requirements found in 5 United States Code (U.S.C.) § 8435(c) and 5 Code of Federal Regulations (C.F.R.) part 1653, subpart A. The rules for qualified domestic relations orders (QDROs) that apply to private sector plans do not apply to the TSP. The provisions of the Federal Employees' Retirement System Act (FERSA), not the Employee Retirement Income Security Act (ERISA), govern court orders that divide a TSP account. The TSP cannot represent or warrant that this order will meet the requirements of your local jurisdiction. The parties' attorneys should review local court rules to ensure this court order is sufficient.

  Before getting started, you should gather the following necessary information:

  - Participant's name, current mailing address, and TSP account number
  - Payee's name, current mailing address, and Social Security Number (SSN)
  - Account details (e.g., balance, outstanding loan amounts, etc.) needed to calculate the award amount
  - Necessary court information (e.g., case number, judge's name, etc.)

  For more information, please read the TSP publication [_Court Orders and Powers of Attorney_]({{ site.baseurl }}/publications/tspbk11.pdf).
  </div>
  </section><!-- END section.calculator-panel -->

  <div class="button-stack">
  <button type="button" class="usa-button-big" href="javascript:void(0);" onclick="processPanel(1,0,2,0); return false;">Get started</button>
  <button type="button" class="usa-button-secondary usa-button-big" onclick="window.location.href='{{ site.baseurl }}/forms/tsp-92.pdf';" markdown="1">No thanks, just download Form TSP-92, _TSP Retirement Benefits Court Order Division Package_.</button>
  </div>

  </div><!-- END div.usa-accordion-content -->
</li>
<!-- PANEL 2: SCENARIO -->
<li>
  <button
    class="usa-accordion-button"
    aria-expanded="true"
    aria-controls="panel-2">
    Panel 2 – Scenario
  </button>
  <div id="panel-2" class="usa-accordion-content">

  <section class="calculator-panel">
  <h2>Case details</h2>
  <div class="panel-form-field" >
  <div class="usa-input-error">
  <legend class="sr-only">Select scenario</legend>
  <label class="usa-input-error-label" for="payeePart">Are both parties TSP participants?</label>
  <span class="usa-input-error-message" id="payeePart-error-message" role="alert">This question is required.</span>

  <ul class="usa-unstyled-list">
    <li>
      <input
        type="radio"
        id="payeePartYes"
        name="payeePart"
        value="Y"
        onblur="pickPath(0, 'Y');"
        onchange="pickPath(0, 'Y');">
      <label for="payeePartYes">Yes</label>
    </li>
    <li>          
      <input
        type="radio"
        id="payeePartNo"
        name="payeePart"
        value="N"
        onblur="pickPath(0, 'N');"
        onchange="pickPath(0, 'N');">
      <label for="payeePartNo">No</label>        
    </li>
  </ul>
  </div> <!-- end div.usa-input-error -->
  </div> <!-- end div.panel-form-field -->

  <code>Are both parties TSP participants? > No</code>
  <div class="panel-form-field" >
    <fieldset>
      <div class="usa-input-error">
        <legend class="sr-only">Select scenario</legend>
        <label class="usa-input-error-label" id="labelrelationship" for="relationship">What is the payee's relationship to the TSP participant?</label>
        <span class="usa-input-error-message" id="relationship-error-message" role="alert">Indicate the payee&#8211;participant relationship.</span>

      <ul class="usa-unstyled-list">
        <li>
        <input
        type="radio"
        id="relationshipSpouse"
        name="relationship"
        value="S"
        onblur="pickPath(0, 'S');"
        onchange="pickPath(0, 'S');">
        <label for="relationshipSpouse">Current or former spouse</label>
        </li>

        <li><input
        type="radio"
        id="relationshipDependent"
        name="relationship"
        value="D"
        onblur="pickPath(0, 'D');"
        onchange="pickPath(0, 'D');">
        <label for="relationshipDependent">Child or dependent</label></li>

        <li><input
        type="radio"
        id="relationshipOther"
        name="relationship"
        value="O"
        onblur="pickPath(0, 'O');"
        onchange="pickPath(0, 'O');">
        <label for="relationshipOther">Other</label></li>
      </ul>
      </div>
    </fieldset>

    <!-- ALERT: Child or dependent -->
    <div class="usa-alert usa-alert-error" role="alert">
      <div class="usa-alert-body">
        <h3 class="usa-alert-heading">Award restriction</h3>
        <p class="usa-alert-text" markdown="1">
          The online wizard cannot be used to draft a court order awarding funds to a child or dependent. For more information on RBCOs, please review the TSP publication, [_Court Orders and Powers of Attorney_]({{ site.baseurl }}/publications/tspbk11.pdf).
        </p>
      </div>
    </div>
    <!-- ALERT: Other -->
    <div class="usa-alert usa-alert-error" role="alert">
      <div class="usa-alert-body">
        <h3 class="usa-alert-heading">Award restriction</h3>
        <p class="usa-alert-text" markdown="1">
          A court order can require a payment only to the participant's current or former spouse or to the participant's dependents. For more information on RBCOs, please review the TSP publication, [_Court Orders and Powers of Attorney_]({{ site.baseurl }}/publications/tspbk11.pdf).
        </p>
      </div>
    </div>
  </div>

  <code>Are both parties TSP participants? > No > Current or former spouse</code>
  <div class="panel-form-field" >
    <div class="usa-input-error">
    <label class="usa-input-error-label" for="partfullname"><span data-term="Participant" class="js-glossary-toggle term term-end">Participant&#8217;s name</span>:</label>
    <span class="usa-input-error-message" id="partfullname-message" role="alert">Enter the name of the person whose account will be divided pursuant to this court order.</span>
    <input
      type="text"
      id="partfullname"
      name="partfullname"
      value=""
      onpaste="partfullnameGood(0);"
      onchange="partfullnameGood(0);"
      onblur="partfullnameGood(0);"
      maxlength="30"
      size="30">
    </div><!-- END div.usa-input-error -->

    <div class="usa-input-error">
    <label class="usa-input-error-label" for="payfullname"><span data-term="Payee" class="js-glossary-toggle term term-end">Payee&#8217;s name</span>:</label>
    <span class="usa-input-error-message" id="payfullname-message" role="alert">Enter the name of the person who is the intended recipient of the court order award.</span>
    <input
      type="text"
      id="payfullname"
      name="payfullname"
      value=""
      onchange="payfullnameGood(0);"
      onblur="payfullnameGood(0);"
      maxlength="30"
      size="30">
    </div><!-- END div.usa-input-error -->
  </div><!-- END div.panel-form-field -->

  <code>Are both parties TSP participants? > Yes</code>
  <div class="panel-form-field">
    <fieldset>
      <div class="usa-input-error">
        <legend class="sr-only">Select scenario</legend>
        <label class="usa-input-error-label" id="labelrelationship" for="relationship">Select the parties&#8217; relationship to one another</label>
        <span class="usa-input-error-message" id="relationship-error-message" role="alert">Indicate the payee&#8211;participant relationship.</span>
      <ul class="usa-unstyled-list">
      <li>
      <input
        type="radio"
        id="relationshipSpouse"
        name="relationship"
        value="S"
        onblur="pickPath(0, 'S');"
        onchange="pickPath(0, 'S');">
      <label for="relationshipSpouse">Current or former spouse</label>
      </li>
      <li>
      <input
        type="radio"
        id="relationshipDependent"
        name="relationship"
        value="D"
        onblur="pickPath(0, 'D');"
        onchange="pickPath(0, 'D');">
      <label for="relationshipDependent">Child or dependent</label>
      </li>
      <li>
      <input
        type="radio"
        id="relationshipOther"
        name="relationship"
        value="O"
        onblur="pickPath(0, 'O');"
        onchange="pickPath(0, 'O');">
      <label for="relationshipOther">Other</label>
      </li>
      </ul>
      </div>
    </fieldset>
  </div><!-- END div.panel-form-field -->

  <code>Are both parties TSP participants? > Yes > Current or former spouse</code>
  <div class="panel-form-field" markdown="1">
  <fieldset>
  <div class="usa-input-error">
  <legend class="sr-only">Select scenario</legend>
  <label class="usa-input-error-label" id="labelpayeePart" for="receive">Are both parties&#8217; accounts being divided as a result of this court order?</label>
  <span class="usa-input-error-message" id="receive-error-message" role="alert">This question is required.</span>
  <ul class="usa-unstyled-list">
  <li>
  <input
  type="radio"
  id="receiveBoth"
  name="receive"
  value="2"
  onblur="pickPath(0, 2);"
  onchange="pickPath(0, 2);">
  <label for="receiveBoth">Yes</label>
  </li>
  <li>          
  <input
  type="radio"
  id="receiveOne"
  name="receive"
  value="1"
  onblur="pickPath(0, 1);"
  onchange="pickPath(0, 1);">
  <label for="receiveOne">No</label>        
  </li>
  </ul>
  </div> <!-- end div.usa-input-error -->
  </fieldset>
  </div><!-- END div.panel-form-field -->

  <code>Are both parties TSP participants? > Yes > Current or former spouse > Are both parties' accounts being divided...? > Yes</code>
  <div class="panel-form-field" markdown="1">

  You have indicated that both parties are TSP participants and that **both will receive awards** pursuant to this court order. Please provide the following information:

  <div class="usa-input-error">
    <label class="usa-input-error-label" for="partfullname">Party 1 name:</label>
    <span class="usa-input-error-message" id="partfullname-message" role="alert">Enter the name of the person whose account will be divided pursuant to this court order.</span>
    <input
      type="text"
      id="partfullname"
      name="partfullname"
      value=""
      onpaste="partfullnameGood(0);"
      onchange="partfullnameGood(0);"
      onblur="partfullnameGood(0);"
      maxlength="30"
      size="30">
    </div><!-- END div.usa-input-error -->

  <div class="usa-input-error">
    <label class="usa-input-error-label" for="payfullname">Party 2 name:</label>
    <span class="usa-input-error-message" id="payfullname-message" role="alert">Enter the name of the person who is the intended recipient of the court order award.</span>
    <input
      type="text"
      id="payfullname"
      name="payfullname"
      value=""
      onchange="payfullnameGood(0);"
      onblur="payfullnameGood(0);"
      maxlength="30"
      size="30">
  </div><!-- END div.usa-input-error -->
  </div><!-- END div.panel-form-field -->

  <code>Are both parties TSP participants? > Yes > Current or former spouse > Are both parties' accounts being divided...? > No</code>
  <div class="panel-form-field" markdown="1">

  You have indicated that both parties are TSP participants but that **only one will receive an award** pursuant to this court order. Please provide the following information:

  <div class="usa-input-error">
    <label class="usa-input-error-label" for="partfullname"><span data-term="Participant" class="js-glossary-toggle term term-end">Participant&#8217;s name</span>:</label>
    <span class="usa-input-error-message" id="partfullname-message" role="alert">Enter the name of the person whose account will be divided pursuant to this court order.</span>
    <input
      type="text"
      id="partfullname"
      name="partfullname"
      value=""
      onpaste="partfullnameGood(0);"
      onchange="partfullnameGood(0);"
      onblur="partfullnameGood(0);"
      maxlength="30"
      size="30">
  </div><!-- END div.usa-input-error -->

  <div class="usa-input-error">
    <label class="usa-input-error-label" for="payfullname"><span data-term="Payee" class="js-glossary-toggle term term-end">Payee&#8217;s name</span>:</label>
    <span class="usa-input-error-message" id="payfullname-message" role="alert">Enter the name of the person who is the intended recipient of the court order award.</span>
    <input
      type="text"
      id="payfullname"
      name="payfullname"
      value=""
      onchange="payfullnameGood(0);"
      onblur="payfullnameGood(0);"
      maxlength="30"
      size="30">
  </div><!-- END div.usa-input-error -->
  </div><!-- END div.panel-form-field -->

    <nav><ul class="navigation-buttons">
      <li>
      <button
        class="usa-button-secondary"
        href="javascript:void(0);"
        onclick="showPanel(1); return false;">Previous</button>
      </li>
      <li>
      <button
        class="usa-button"
        href="javascript:void(0);"
        onclick="processPanel(2,0,0,0); return false;">Continue</button>
      </li>
    </ul></nav>
  </section> <!-- end section.calculator-panel -->
  </div><!-- END div.usa-accordion-content -->
</li>
<!-- PANEL 3: PARTICIPANT or PARTY 1 -->
<li>
  <button
    class="usa-accordion-button"
    aria-expanded="false"
    aria-controls="panel-3">
    Panel 3 – Participant or Party 1
  </button>
  <div id="panel-3" class="usa-accordion-content">

  <section class="calculator-panel">
    <!-- ADDRESS FIELDS -->
    <div class="panel-form-field" >
      <h2 aria-details="contact-information-party1">Contact information for {Participant or Party 1}</h2>
      <!-- DAV, NEW header text -->

      <ul class="usa-accordion explain-this">
      <li>
      <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="contact-information-party1">
      Explain this
      </button>
      <div id="contact-information-party1" class="usa-accordion-content">
      <p>Before submitting the court order to the TSP, you must provide a current mailing address.</p>

      <p>If this information does not appear in the body of the court order, it must be submitted to the TSP by the individual or either party's attorney. Failure to provide this information with your submission may delay processing of the order.</p>

      <p><strong>Please note</strong>, the mailing address provided will be used to mail you a copy of any notices related to this court order but will not update your address of record (AOR) with the TSP.</p>
      </div>
      </li>
      </ul>
      <input
        type="checkbox"
        id="partforeignAddress"
        name="partforeignAddress"
        value="partforeignAddress"
        onclick="toggleAddress()">
        <!-- DAV, delete toggleAddress(), TEMPORARY-address-toggle.js' on line 9, and restore your onClick event -->
        <!-- onclick="pickAddressType('part')" -->
      <label for="partforeignAddress">This is a foreign address:</label>

        <div id="address-domestic" style="display: block;">
          <label for="partstreet1">Street address:</label>
          <input
            class="attention"
            id="partstreet1"
            name="partstreet1"
            type="text"
            value=""
            onchange="street1Good(0,0,'part'); processWarnLastPanel();"
            onblur="street1Good(0,0,'part'); processWarnLastPanel();"
            maxlength="38">

          <label for="partcity">City:</label>
          <input
            type="text"
            maxlength="38"
            id="partcity"
            name="partcity"
            value=""
            onchange="cityGood(0,0,'part'); processWarnLastPanel();"
            onblur="cityGood(0,0,'part'); processWarnLastPanel();">

          <label for="partstate">State:</label>
          <select
            id="partstate"
            name="partstate"
            onchange="clearError('partstate'); clearWarning('partstate'); processWarnLastPanel();">
              <option value="Select">-Select-</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="AA">Armed Forces America</option>
              <option value="AE">Armed Forces Europe</option>
              <option value="AF">Armed Forces Pacific</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MH">Marshall Islands</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="FM">Micronesia</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PW">Palau</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UM">U.S. Minor Outlying Islands</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
          </select>

          <label for="partphoneNum">Phone number:</label>
          <input
            id="partphoneNum"
            maxlength="16"
            name="partphoneNum"
            onchange="phoneNumGood(0, 0, 'part');"
            onblur="phoneNumGood(0, 0, 'part');"
            type="tel"
            autocomplete="tel"
            value="">
            <!-- DAV, browsers that do not support type:tel will fallback to type:text -->
            <!-- This lets browsers autofill the information on a user’s behalf if they’ve entered it previously. -->

          <label for="partzip">Zip code:</label>
          <input
            type="text"
            maxlength="10"
            id="partzip"
            name="partzip"
            value=""
            onchange="zipGood(0,0,'part'); processWarnLastPanel();"
            onblur="zipGood(0,0,'part'); processWarnLastPanel();">
        </div><!-- END div.address-domestic -->

        <div id="address-foreign" style="display: none;">
          <!-- Street address -->
          <label for="partfstreet">Street address:</label>
          <input
            type="text"
            maxlength="38"
            id="partfstreet"
            name="partfstreet"
            value=""
            onchange="fstreetGood(0,0,'part'); processWarnLastPanel();"
            onblur="fstreetGood(0,0,'part'); processWarnLastPanel();">

          <!-- City -->
          <label for="partfcity">City:</label>
          <input
            type="text"
            maxlength="38"
            id="partfcity"
            name="partfcity"
            value=""
            onchange="fcityGood(0,0,'part'); processWarnLastPanel();"
            onblur="fcityGood(0,0,'part'); processWarnLastPanel();">

          <!-- Postal code -->
          <label for="partfpostal">Postal code:</label>
          <input
            type="text"
            maxlength="13"
            id="partfpostal"
            name="partfpostal"
            value=""
            onchange="fpostalGood(0,0,'part'); processWarnLastPanel();"
            onblur="fpostalGood(0,0,'part'); processWarnLastPanel();">

          <!-- Country -->
          <label for="partfcountry">Country:</label>
          <input
            id="partfcountry"
            maxlength="30"
            name="partfcountry"
            onchange="fcountryGood(0,0,'part'); processWarnLastPanel();"
            onblur="fcountryGood(0,0,'part'); processWarnLastPanel();"
            type="text"
            value="">

          <p>Or select one from the list below</p>

          <label for="partfcountrylist" class="usa-sr-only">Country drop-down list:</label>
          <select  
            id="partfcountrylist"
            name="partfcountrylist"
            onclick="pickCountry('part');">
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, Democratic Republic of</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard and McDonald Islands</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="CI">Ivory Coast</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Dem Peoples Republic</option>
              <option value="KR">Korea, Republic of</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Dem. Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libyan Arab Jamahiriya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">Macedonia, form Yugoslav Rep</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="RE">Réunion</option>
              <option value="BL">Saint Barthélemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin (French part)</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="GS">So Georgia and Sandwich Isles</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan, Province of China</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UM">U.S. Minor Outlying Islands</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VA">Vatican City State</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.S.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
          </select>

          <!-- Phone number -->
          <label for="partphoneNum">Phone number:</label>
          <input
            id="partphoneNum"
            maxlength="16"
            name="partphoneNum"
            onchange="phoneNumGood(0, 0, 'part');"
            onblur="phoneNumGood(0, 0, 'part');"
            type="tel"
            autocomplete="tel"
            value="">
            <!-- ^^ DAV, browsers that do not support type:tel will fallback to type:text -->
            <!-- autocomplete="tel" lets browsers autofill the information on a user’s behalf if they’ve entered it previously. -->
        </div><!-- END div.address-foreign -->
    </div><!-- END div.panel-form-field -->

    <!-- TSP account type -->
    <div class="panel-form-field account-types" >
      <h2 aria-details="account-type" id="tsp-account-type">TSP account type</h2>

      <!-- Explain this -->
      <ul class="usa-accordion explain-this">
        <li>
        <button class="usa-accordion-button"
        aria-expanded="false"
        aria-controls="account-type">
        Explain this
        </button>
        <div id="account-type" class="usa-accordion-content">
        If you are not sure what type of Thrift Savings Plan account the participant has, please contact the ThriftLine at 1-TSP-YOU-FRST (1-877-968-3778).  Release of any information  by the ThriftLine is subject to the Privacy Act.  An incorrect selection may lead to a delay, incorrect payment or the rejection of your court order.
        </div>
        </li>
      </ul>

      <!-- New DESIGN -->
    <fieldset class="usa-fieldset-inputs">
      <legend class="usa-sr-only">Account types to be divided</legend>
      <!-- Civilian CHECKBOX-->
      <ul class="usa-unstyled-list account-type">
        <li>
          <input
          type="checkbox"
          id="partcivilian"
          name="accountType"
          value="partcivilian"
          onclick="toggleInputLabels();"
          onblur="accountTypeGood(0, 'part');">
          <label for="partcivilian">Civilian <span class="nobr">(CSRS or FERS)</span></label>
        </li>
        <!-- USV CHECKBOX-->
        <li>
          <input
          type="checkbox"
          id="partuniformed"
          name="accountType"
          value="partuniformed"
          onclick="accountTypeGood(0, 'part');"
          onclick="toggleInputLabels();"
          onblur="accountTypeGood(0, 'part');">
          <label for="partuniformed"><span data-term="Uniformed Services" class="js-glossary-toggle term term-end">Uniformed Services</span> <span class="nobr regular">(Ready Reserve or Active Duty)</span></label>
        </li>
        <!-- Beneficiary Participant CHECKBOX -->
        <li>
          <input
          type="checkbox"
          id="partBPA"
          name="accountType"
          value="partBPA"
          onclick="accountTypeGood(0, 'part');"
          onclick="toggleInputLabels();"
          onblur="accountTypeGood(0, 'part');">
          <label for="partBPA"><span data-term="Beneficiary Participant" class="js-glossary-toggle term term-end">Beneficiary Participant</span></label>
        </li>
        <!-- CIV input -->
        <li id="civInput" style="display: none;">
          <label class="" for="bpaAcctNum">Civilian account number</label>
          <input
            id="bpaAcctNum"
            maxlength="13"
            value="bpaAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder="">
        </li>
        <!-- USV input -->
        <li id="usvInput" style="display: none;">
          <label class="" for="bpaAcctNum">Uniformed Services account number</label>
          <input
            id="bpaAcctNum"
            maxlength="13"
            value="bpaAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder="">
        </li>
        <!-- CIV + USV input -->
        <li id="dualInput" style="display: none;">
          <label class="" for="bpaAcctNum">Civilian and Uniformed Services account number</label>
          <input
            id="bpaAcctNum"
            maxlength="13"
            value="bpaAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder="">
          <div id="dual" class="usa-alert  usa-alert-info usa-alert-paragraph">
            <div class="usa-alert-body">
              <h3 class="usa-alert-heading">
                Dual account holders
              </h3>
              <p class="usa-alert-text">
                If you have both a civilian and uniformed services account, the account numbers are the same.
              </p>
            </div>
          </div>
        </li>
        <!-- BPA input -->
        <li id="bpaInput" style="display: none;">
          <label for="partacctNum">Beneficiary Participant account number</label>
          <input
            id="civAcctNum"
            maxlength="13"
            value="civAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder="">
          </li>
      </ul>
    </fieldset>

    <!-- OG design -->
    <div class="usa-input-error hide">
    <fieldset>
        <legend class="usa-sr-only">Account types to be divided</legend>
        <!-- Civilian -->
        <ul class="usa-unstyled-list account-type">
          <li>
          <input
            type="checkbox"
            id="partcivilian"
            name="accountType"
            value="partcivilian"
            onclick="accountTypeGood(0, 'part');"
            onblur="accountTypeGood(0, 'part');"
            checked>
          <label for="partcivilian">Civilian <span class="nobr">(CSRS or FERS)</span></label>
          </li>

          <li><label for="partacctNum">Account number [only appears if checkbox is checked, obvi]</label>
          <input
            id="civAcctNum"
            maxlength="13"
            value="civAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder="">
            </li>
        </ul>

        <!-- USV -->
        <ul class="usa-unstyled-list account-type">
          <li><input
            type="checkbox"
            id="partuniformed"
            name="accountType"
            value="partuniformed"
            onclick="accountTypeGood(0, 'part');"
            onblur="accountTypeGood(0, 'part');"
            checked>
          <label for="partuniformed"><span data-term="Uniformed Services" class="js-glossary-toggle term term-end">Uniformed Services</span> <span class="nobr regular">(Ready Reserve or Active Duty)</span></label></li>

          <li class="none">
          <label for="usvAcctNum">Account number</label>
          <input
            id="usvAcctNum"
            maxlength="13"
            value="usvAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder=""
            disabled>

          <div class="dual-accounts flex"><i class="fas fa-info-circle"></i> If you have both a civilian and uniformed services account, the account numbers are the same.
          </div>
          <!-- DAV, this should only appear below the CIV or USV account number inputs. Example: I enter in my CIV account number and then check USV. When the USV account number input appears it should be 1) disabled 2) pre-populated with the account number entered into the CIV account number field, and 3) div.dual-accounts should appear beneath the disabled field only. Remind me that I wrote SetDefaultValue() in rbco-address-toggle.js. -->
            </li>
        </ul>

        <!-- Beneficiary Participant -->
        <ul class="usa-unstyled-list account-type">
          <li>
          <input
          type="checkbox"
          id="partBPA"
          name="accountType"
          value="partBPA"
          onclick="accountTypeGood(0, 'part');"
          onblur="accountTypeGood(0, 'part');"
          checked>
          <label for="partBPA"><span data-term="Beneficiary Participant" class="js-glossary-toggle term term-end">Beneficiary Participant</span></label></li>

          <li>
          <div class="usa-input-error">
          <label class="usa-input-error-label" for="bpaAcctNum">Account number</label>
          <input
            id="bpaAcctNum"
            maxlength="13"
            value="bpaAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder="">
          <span class="usa-input-error-message" id="bpaAcctNum-message" role="alert">Account numbers are exactly 13 digits.</span>
          <span class="usa-input-error-message" id="bpaAcctNum-message" role="alert">Account number is required.</span>
          </div>
          <!-- END div.usa-input-error -->
          </li>
        </ul>
      </fieldset>
      <span class="usa-input-error-message" id="bpaAcctNum-message" role="alert">Select at least one account type.</span>
    </div>

    </div>

    <nav><ul class="navigation-buttons">
      <li>
      <button
        class="usa-button-secondary"
        href="javascript:void(0);"
        onclick="showPanel(1); return false;">Previous</button>
      </li>
      <li>
      <button
        class="usa-button"
        href="javascript:void(0);"
        onclick="processPanel(2,0,0,0); return false;">Continue</button>
      </li>
      <li>
      <button
        class="usa-button attention write-in"
        href="javascript:void(0);"
        onclick="processPanel(2,0,0,0); return false;">Continue and write-in later</button>
      </li>
    </ul></nav>

  </section>

  </div><!-- END div.usa-accordion-content -->
</li>
<!-- PANEL 4: PAYEE -->
<li>
  <button
    class="usa-accordion-button"
    aria-expanded="false"
    aria-controls="panel-4-payee">
    Panel 4 – Payee
  </button>
  <div id="panel-4-payee" class="usa-accordion-content">

  <section class="calculator-panel">
    <!-- SOCIAL SECURITY NUMBER -->
    <div class="panel-form-field" >
      <h2>Information for {payee}</h2>
      <label for="paySSN" aria-details="paySSN-details">Social Security or Tax Identification Number:</label>
      <input
        type="number"
        id="paySSN"
        name="paySSN"
        value=""
        onchange="SSNGood(0, 1, 'pay');"
        onblur="SSNGood(0, 1, 'pay');"
        maxlength="9"
        data-store=""
        placeholder="">
        <!-- Explain this -->
        <ul class="usa-accordion explain-this">
        <li>
        <button class="usa-accordion-button"
        aria-expanded="false"
        aria-controls="paySSN-details">
        Explain this
        </button>
        <div id="paySSN-details" class="usa-accordion-content">
          <p>The payee's Social Security Number (SSN) is required to process the RBCO.<span id="alertName"></span></p>
          <p>If this information does not appear in the body of the court order, it must be submitted to the TSP by the individual or either party's attorney of record. Failure to provide this information with your submission may delay processing of the order.</p>
        </div>
        </li>
        </ul>
      </div>

    <!-- ADDRESS FIELDS -->

    <div class="panel-form-field" >
    <h2>Contact information</h2>
    <!-- Explain this -->
    <ul class="usa-accordion explain-this">
    <li>
    <button class="usa-accordion-button"
    aria-expanded="false"
    aria-controls="contact-information-party2">
    Explain this
    </button>
    <div id="contact-information-party2" class="usa-accordion-content">
    <p>Before submitting the court order to the TSP, you must provide a current mailing address.</p>

    <p>If this information does not appear in the body of the court order, it must be submitted to the TSP by the individual or either party's attorney. Failure to provide this information with your submission may delay processing of the order.</p>

    <p><strong>Please note</strong>, the mailing address provided will be used to mail you a copy of any notices related to this court order but will not update your address of record (AOR) with the TSP.</p>
    </div>
    </li>
    </ul>

      <input
        type="checkbox"
        id="partforeignAddress"
        name="partforeignAddress"
        value="partforeignAddress"
        onclick="toggleAddress()">
        <!-- DAV, delete toggleAddress(), TEMPORARY-address-toggle.js' on line 9, and restore your onClick event -->
        <!-- onclick="pickAddressType('part')" -->
      <label for="partforeignAddress">This is a foreign address:</label>

        <div id="address-domestic" style="display: block;">
          <label for="partstreet1">Street address:</label>
          <input
            class="attention"
            id="partstreet1"
            name="partstreet1"
            type="text"
            value=""
            onchange="street1Good(0,0,'part'); processWarnLastPanel();"
            onblur="street1Good(0,0,'part'); processWarnLastPanel();"
            maxlength="38">

          <label for="partcity">City:</label>
          <input
            type="text"
            maxlength="38"
            id="partcity"
            name="partcity"
            value=""
            onchange="cityGood(0,0,'part'); processWarnLastPanel();"
            onblur="cityGood(0,0,'part'); processWarnLastPanel();">

          <label for="partstate">State:</label>
          <select
            id="partstate"
            name="partstate"
            onchange="clearError('partstate'); clearWarning('partstate'); processWarnLastPanel();">
              <option value="Select">-Select-</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="AA">Armed Forces America</option>
              <option value="AE">Armed Forces Europe</option>
              <option value="AF">Armed Forces Pacific</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MH">Marshall Islands</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="FM">Micronesia</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PW">Palau</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UM">U.S. Minor Outlying Islands</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
          </select>

          <label for="partphoneNum">Phone number:</label>
          <input
            id="partphoneNum"
            maxlength="16"
            name="partphoneNum"
            onchange="phoneNumGood(0, 0, 'part');"
            onblur="phoneNumGood(0, 0, 'part');"
            type="tel"
            autocomplete="tel"
            value="">
            <!-- DAV, browsers that do not support type:tel will fallback to type:text -->
            <!-- This lets browsers autofill the information on a user’s behalf if they’ve entered it previously. -->

          <label for="partzip">Zip code:</label>
          <input
            type="text"
            maxlength="10"
            id="partzip"
            name="partzip"
            value=""
            onchange="zipGood(0,0,'part'); processWarnLastPanel();"
            onblur="zipGood(0,0,'part'); processWarnLastPanel();">
        </div><!-- END div.address-domestic -->

        <div id="address-foreign" style="display: none;">
          <!-- Street address -->
          <label for="partfstreet">Street address:</label>
          <input
            type="text"
            maxlength="38"
            id="partfstreet"
            name="partfstreet"
            value=""
            onchange="fstreetGood(0,0,'part'); processWarnLastPanel();"
            onblur="fstreetGood(0,0,'part'); processWarnLastPanel();">

          <!-- City -->
          <label for="partfcity">City:</label>
          <input
            type="text"
            maxlength="38"
            id="partfcity"
            name="partfcity"
            value=""
            onchange="fcityGood(0,0,'part'); processWarnLastPanel();"
            onblur="fcityGood(0,0,'part'); processWarnLastPanel();">

          <!-- Postal code -->
          <label for="partfpostal">Postal code:</label>
          <input
            type="text"
            maxlength="13"
            id="partfpostal"
            name="partfpostal"
            value=""
            onchange="fpostalGood(0,0,'part'); processWarnLastPanel();"
            onblur="fpostalGood(0,0,'part'); processWarnLastPanel();">

          <!-- Country -->
          <label for="partfcountry">Country:</label>
          <input
            id="partfcountry"
            maxlength="30"
            name="partfcountry"
            onchange="fcountryGood(0,0,'part'); processWarnLastPanel();"
            onblur="fcountryGood(0,0,'part'); processWarnLastPanel();"
            type="text"
            value="">

          <p>Or select one from the list below</p>

          <label for="partfcountrylist" class="usa-sr-only">Country drop-down list:</label>
          <select  
            id="partfcountrylist"
            name="partfcountrylist"
            onclick="pickCountry('part');">
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, Democratic Republic of</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard and McDonald Islands</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="CI">Ivory Coast</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Dem Peoples Republic</option>
              <option value="KR">Korea, Republic of</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Dem. Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libyan Arab Jamahiriya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">Macedonia, form Yugoslav Rep</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="RE">Réunion</option>
              <option value="BL">Saint Barthélemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin (French part)</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="GS">So Georgia and Sandwich Isles</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan, Province of China</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UM">U.S. Minor Outlying Islands</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VA">Vatican City State</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.S.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
          </select>

          <!-- Phone number -->
          <label for="partphoneNum">Phone number:</label>
          <input
            id="partphoneNum"
            maxlength="16"
            name="partphoneNum"
            onchange="phoneNumGood(0, 0, 'part');"
            onblur="phoneNumGood(0, 0, 'part');"
            type="number"
            type="tel"
            autocomplete="tel"
            value="">
            <!-- ^^ DAV, browsers that do not support type:tel will ignore it and stick with type:number -->
            <!-- autocomplete="tel" lets browsers autofill the information on a user’s behalf if they’ve entered it previously. -->
        </div><!-- END div.address-foreign -->
    </div><!-- END div.panel-form-field -->

    <!-- TSP account type -->
    <div class="panel-form-field account-types" >
      <h2 aria-details="account-type">TSP account type</h2>


      <ul class="usa-accordion explain-this">
      <li>
      <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="account-type">
      Explain this
      </button>
      <div id="account-type" class="usa-accordion-content">
      If you are not sure what type of Thrift Savings Plan account the participant has, please contact the ThriftLine at 1-TSP-YOU-FRST (1-877-968-3778).  Release of any information  by the ThriftLine is subject to the Privacy Act.  An incorrect selection may lead to a delay, incorrect payment or the rejection of your court order.
      </div>
      </li>
      </ul>

      <!-- DAV, I UPDATED ALL OF THIS -->
    <div class="usa-input-error">
      <fieldset>
        <legend class="usa-sr-only">Account types to be divided</legend>
        <!-- Civilian -->
        <ul class="usa-unstyled-list account-type">
          <li>
          <input
            type="checkbox"
            id="partcivilian"
            name="accountType"
            value="partcivilian"
            onclick="accountTypeGood(0, 'part');"
            onblur="accountTypeGood(0, 'part');"
            checked>
          <label for="partcivilian">Civilian <span class="nobr">(CSRS or FERS)</span></label>
          </li>

          <li><label for="partacctNum">Account number [only appears if checkbox is checked, obvi]</label>
          <input
            id="civAcctNum"
            maxlength="13"
            value="civAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder="">
            </li>
        </ul>

        <!-- USV -->
        <ul class="usa-unstyled-list account-type">
          <li><input
            type="checkbox"
            id="partuniformed"
            name="accountType"
            value="partuniformed"
            onclick="accountTypeGood(0, 'part');"
            onblur="accountTypeGood(0, 'part');"
            checked>
          <label for="partuniformed"><span data-term="Uniformed Services" class="js-glossary-toggle term term-end">Uniformed Services</span> <span class="nobr regular">(Ready Reserve or Active Duty)</span></label></li>

          <li class="none">
          <label for="usvAcctNum">Account number</label>
          <input
            id="usvAcctNum"
            maxlength="13"
            value="usvAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder=""
            disabled>

          <div class="dual-accounts flex"><i class="fas fa-info-circle"></i> If you have both a civilian and uniformed services account, the account numbers are the same.
          </div>
          <!-- DAV, this should only appear below the CIV or USV account number inputs. Example: I enter in my CIV account number and then check USV. When the USV account number input appears it should be 1) disabled 2) pre-populated with the account number entered into the CIV account number field, and 3) div.dual-accounts should appear beneath the disabled field only. Remind me that I wrote SetDefaultValue() in rbco-address-toggle.js. -->
            </li>
        </ul>

        <!-- Beneficiary Participant -->
        <ul class="usa-unstyled-list account-type">
          <li>
          <input
          type="checkbox"
          id="partBPA"
          name="accountType"
          value="partBPA"
          onclick="accountTypeGood(0, 'part');"
          onblur="accountTypeGood(0, 'part');"
          checked>
          <label for="partBPA"><span data-term="Beneficiary Participant" class="js-glossary-toggle term term-end">Beneficiary Participant</span></label></li>

          <li>
          <div class="usa-input-error">
          <label class="usa-input-error-label" for="bpaAcctNum">Account number</label>
          <input
            id="bpaAcctNum"
            maxlength="13"
            value="bpaAcctNum"
            name="partacctNum"
            onchange="acctNumGood(0, 'part');"
            onblur="acctNumGood(0, 'part');"
            type="number"
            data-store=""
            placeholder="">
          <span class="usa-input-error-message" id="bpaAcctNum-message" role="alert">Account numbers are exactly 13 digits.</span>
          <span class="usa-input-error-message" id="bpaAcctNum-message" role="alert">Account number is required.</span>
          </div>
          <!-- END div.usa-input-error -->
          </li>
        </ul>
      </fieldset>
      <span class="usa-input-error-message" id="bpaAcctNum-message" role="alert">Select at least one account type.</span>
    </div>

    </div>

    <nav><ul class="navigation-buttons">
      <li>
      <button
        class="usa-button-secondary"
        href="javascript:void(0);"
        onclick="showPanel(1); return false;">Previous</button>
      </li>
      <li>
      <button
        class="usa-button"
        href="javascript:void(0);"
        onclick="processPanel(2,0,0,0); return false;">Continue</button>
      </li>
      <li>
      <button
        class="usa-button attention write-in"
        href="javascript:void(0);"
        onclick="processPanel(2,0,0,0); return false;">Continue and write-in later</button>
      </li>
    </ul></nav>

  </section>

  </div><!-- END div.usa-accordion-content -->
</li>
<!-- PANEL 4: PARTY 2 -->
<li>
  <button
    class="usa-accordion-button"
    aria-expanded="false"
    aria-controls="panel-4-party2">
    Panel 4 – Party 2
  </button>
  <div id="panel-4-party2" class="usa-accordion-content">

  <section class="calculator-panel">
    <p>Same inputs as &#8220;Panel 3 &#8211; Participant or Party 1&#8221;</p>
    <nav><ul class="navigation-buttons">
      <li>
      <button
        class="usa-button-secondary"
        href="javascript:void(0);"
        onclick="showPanel(1); return false;">Previous</button>
      </li>
      <li>
      <button
        class="usa-button"
        href="javascript:void(0);"
        onclick="processPanel(2,0,0,0); return false;">Continue</button>
      </li>
      <li>
      <button
        class="usa-button attention write-in"
        href="javascript:void(0);"
        onclick="processPanel(2,0,0,0); return false;">Continue and write-in later</button>
      </li>
    </ul></nav>

  </section>
  </div><!-- END div.usa-accordion-content -->
</li>
<!-- PANEL 5: ATTORNEY -->
<li>
  <button
    class="usa-accordion-button"
    aria-expanded="false"
    aria-controls="panel-5">
    Panel 5 – Attorney
  </button>
  <div id="panel-5" class="usa-accordion-content">

  <section class="calculator-panel">
    <!-- Attorney info Participant/Party 1 -->
    <div class="panel-form-field">
      <h2>Attorney information for {Participant or Party 1}</h2>

      <fieldset>
      <div class="usa-input-error">
      <legend class="usa-sr-only">Attorney information for participant or party 1</legend>
      <label class="usa-input-error-label" for="partATLawyer" aria-details="">Is the participant represented by an attorney?</label>
      <span class="usa-input-error-message" id="partATLawyer-error-message" role="alert">This question is required.</span>
      <ul class="usa-unstyled-list">
        <li>  
          <input
            type="radio"
            id="partATLawyerYes"
            name="partATLawyer"
            value="Y"
            onblur="pickLawyer(0, 'Y', 'partAT');"
            onchange="pickLawyer(0, 'Y', 'partAT');"
            checked>
            <label for="partATLawyerYes">Yes</label>
        </li>  
        <li>
          <input
            type="radio"
            id="partATLawyerNo"
            name="partATLawyer"
            value="N"
            onblur="pickLawyer(0, 'N', 'partAT');"
            onchange="pickLawyer(0, 'N', 'partAT');">
            <label for="partATLawyerNo">No</label>
        </li>
      </ul>
      </div><!-- end div.usa-input-error -->

          <!-- ATTORNEY NAME AND FIRM -->
          <label for="partATfullname">Attorney's name:</label>
          <input
            type="text"
            maxlength="30"
            id="partATfullname"
            name="partATfullname"
            value=""
            onchange="fullnameGood(0, 0, 'partAT'); processWarnLastPanel();"
            onblur="fullnameGood(0, 0, 'partAT'); processWarnLastPanel();">

          <label for="partATlawfirm">Law firm name:</label>
          <input type="text" maxlength="38" id="partATlawfirm" name="partATlawfirm" value="" onchange="lawfirmGood(0, 0, 'partAT'); processWarnLastPanel();" onblur="lawfirmGood(0, 0, 'partAT'); processWarnLastPanel();">

          <label for="partATjurisdiction">Jurisdiction:</label>
          <input type="text" maxlength="20" id="partATjurisdiction" name="partATjurisdiction" value="" onchange="jurisdictionGood(0, 0, 'partAT'); processWarnLastPanel();" onblur="jurisdictionGood(0, 0, 'partAT'); processWarnLastPanel();">

          <label for="partATlicense">Bar License number:</label>
          <input type="text" maxlength="20" id="partATlicense" name="partATlicense" value="" onchange="licenseGood(0, 0, 'partAT'); processWarnLastPanel();" onblur="licenseGood(0, 0, 'partAT'); processWarnLastPanel();">

          <!-- ATTORNEY STREET ADDRESS -->
          <label for="partATstreet1">Street address:</label>
          <input
            class="attention"
            id="partATstreet1"
            name="partATstreet1"
            type="text"
            value=""
            onchange="street1Good(0,0,'part'); processWarnLastPanel();"
            onblur="street1Good(0,0,'part'); processWarnLastPanel();"
            maxlength="38">

          <label for="partATcity">City:</label>
          <input
            type="text"
            maxlength="38"
            id="partATcity"
            name="partATcity"
            value=""
            onchange="cityGood(0,0,'part'); processWarnLastPanel();"
            onblur="cityGood(0,0,'part'); processWarnLastPanel();">

          <label for="partATstate">State:</label>
          <select
            id="partATstate"
            name="partATstate"
            onchange="clearError('partstate'); clearWarning('partstate'); processWarnLastPanel();">
              <option value="Select">-Select-</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="AA">Armed Forces America</option>
              <option value="AE">Armed Forces Europe</option>
              <option value="AF">Armed Forces Pacific</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MH">Marshall Islands</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="FM">Micronesia</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PW">Palau</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UM">U.S. Minor Outlying Islands</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
          </select>

          <label for="partATzip">Zip code:</label>
          <input
            type="text"
            maxlength="10"
            id="partATzip"
            name="partATzip"
            value=""
            onchange="zipGood(0,0,'part'); processWarnLastPanel();"
            onblur="zipGood(0,0,'part'); processWarnLastPanel();">

          <label for="partATphoneNum">Phone number:</label>
          <input
            id="partATphoneNum"
            name="partATphoneNum"
            type="tel"
            autocomplete="tel"
            maxlength="16"
            onchange="phoneNumGood(0, 0, 'part');"
            onblur="phoneNumGood(0, 0, 'part');"
            value="">
            <!-- DAV, browsers that do not support type:tel will fallback to type:text -->
            <!-- This lets browsers autofill the information on a user’s behalf if they’ve entered it previously. -->

          <label for="partATfaxNum">Fax number:</label>
          <input
            id="partATfaxNum"
            name="partATfaxNum"
            type="tel"
            autocomplete="tel"
            maxlength="16"
            onchange="faxNumGood(0, 0, 'partAT');"
            onblur="faxNumGood(0, 0, 'partAT');"
            value="">
      </fieldset>
    </div>

    <!-- Attorney info Payee/Party 2 -->
    <div class="panel-form-field">
      <h2>Attorney information for {Payee or Party 2}</h2>
      <fieldset>
      <div class="usa-input-error">
      <legend class="usa-sr-only">Attorney information for Payee or Party 1</legend>
      <label class="usa-input-error-label" for="partATLawyer" aria-details="">Is the Payee/Participant 1 represented by an attorney?</label>
      <span class="usa-input-error-message" id="partATLawyer-error-message" role="alert">This question is required.</span>
      <ul class="usa-unstyled-list">
        <li>  
          <input
            type="radio"
            id="payATLawyerYes"
            name="payATLawyer"
            value="Y"
            onblur="pickLawyer(0, 'Y', 'payAT');"
            onchange="pickLawyer(0, 'Y', 'payAT');">
            <label for="payATLawyerYes">Yes</label>
        </li>  
        <li>
          <input
            type="radio"
            id="payATLawyerNo"
            name="payATLawyer"
            value="N"
            onblur="pickLawyer(0, 'N', 'payAT');"
            onchange="pickLawyer(0, 'N', 'payAT');" checked>
            <!-- DAV, remove 'checked' state from ALL radio buttons. -->
            <label for="payATLawyerNo">No</label>
        </li>
      </ul>
      </div><!-- end div.usa-input-error -->
      <!-- DAV, the Payee/Participant 2 Attorney inputs are positioned ABOVE the closing </fieldset> tag, below -->
      </fieldset>
    </div><!-- end div.panel-form-field -->

    <!-- QDRO info both parties -->
    <div class="panel-form-field">
      <h2>Retirement Benefits Specialist (RBS) Information</h2>
      <fieldset>
      <div class="usa-input-error">
      <legend class="usa-sr-only">Retirement Benefits Specialist retained?</legend>
      <label class="usa-input-error-label" for="QDROLawyer" aria-details="rbs-retained">Has a Retirement Benefits Specialist been retained?</label>
      <span class="usa-input-error-message" id="QDROLawyer-error-message" role="alert">This question is required.</span>
      <ul class="usa-unstyled-list">
        <li>  
          <input
            type="radio"
            id="QDROLawyerYes"
            name="QDROLawyer"
            value="Y"
            onblur="clickLawyer(0, 'Y', 'QDRO');"
            onchange="clickLawyer(0, 'Y', 'QDRO');" checked>
            <!-- DAV, remove 'checked' state from ALL radio buttons. -->
            <label for="QDROLawyerYes">Yes</label>
        </li>  
        <li>
        <input
          type="radio"
          id="QDROLawyerNo"
          name="QDROLawyer"
          value="N"
          onblur="clickLawyer(0, 'N', 'QDRO');"
          onchange="clickLawyer(0, 'N', 'QDRO');">
          <label for="QDROLawyerNo">No</label>
        </li>
      </ul>
      </div><!-- end div.usa-input-error -->

        <!-- Explain this -->
        <ul class="usa-accordion explain-this">
        <li>
        <button class="usa-accordion-button"
        aria-expanded="false"
        aria-controls="rbs-retained">
        Explain this
        </button>
        <div id="rbs-retained" class="usa-accordion-content">
        <p>An RBS (sometimes called a &#8220;pension specialist&#8221; or a &#8220;QDRO specialist&#8221; in the private sector) is an individual who has been retained to assist you in preparing your court order for submission to the TSP.</p>

        <p>Under TSP rules, we require authorization from the individual TSP participant and/or payee to release information relating to TSP records to these individuals. If you or your attorney have retained an RBS and would like to authorize that individual to submit and receive information on your behalf, you should fill out this section of the form and include it with your submission to the TSP.</p>
        </div>
        </li>
        </ul>

      <label for="QDROretainer">Which party retained the Retirement Benefits Specialist?</label>
      <select
        id="QDROretainer"
        name="QDROretainer"
        onclick="QDROretainerGood(0);">
          <option value="Select">Select One</option>
          <option value="Participant">John Doe retained RBS</option>
          <option value="Payee">Jane Doe retained RBS</option>
          <option value="Both">Both  retained RBS</option></select>

          <!-- QDRO STREET ADDRESS -->
          <label for="QDROstreet1">Street address:</label>
          <input
            type="text"
            id="QDROstreet1"
            name="QDROstreet1"
            maxlength="38"  
            value=""
            onchange="street1Good(0,0,'QDRO'); processWarnLastPanel();"
            onblur="street1Good(0,0,'QDRO'); processWarnLastPanel();">

          <label for="QDROcity">City:</label>
          <input
            type="text"
            id="QDROcity"
            name="QDROcity"
            maxlength="38"
            value=""
            onchange="cityGood(0,0,'QDRO'); processWarnLastPanel();"
            onblur="cityGood(0,0,'QDRO'); processWarnLastPanel();">

          <label for="QDROstate">State:</label>
          <select
            id="QDROstate"
            name="QDROstate"
            onchange="clearError('QDROstate'); clearWarning('QDROstate'); processWarnLastPanel();">
              <option value="Select">-Select-</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="AA">Armed Forces America</option>
              <option value="AE">Armed Forces Europe</option>
              <option value="AF">Armed Forces Pacific</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MH">Marshall Islands</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="FM">Micronesia</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PW">Palau</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UM">U.S. Minor Outlying Islands</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
          </select>

          <label for="QDROzip">Zip code:</label>
          <input
            type="text"
            maxlength="10"
            id="QDROzip"
            name="QDROzip"
            value=""
            onchange="zipGood(0,0,'QDRO'); processWarnLastPanel();"
            onblur="zipGood(0,0,'QDRO'); processWarnLastPanel();">

          <label for="QDROphoneNum">Phone number:</label>
          <input
            id="QDROphoneNum"
            name="QDROphoneNum"
            type="tel"
            autocomplete="tel"
            maxlength="16"
            onchange="phoneNumGood(0, 0, 'QDRO');"
            onblur="phoneNumGood(0, 0, 'QDRO');"
            value="">
            <!-- DAV, browsers that do not support type:tel will fallback to type:text -->
            <!-- This lets browsers autofill the information on a user’s behalf if they’ve entered it previously. -->

          <label for="QDROfaxNum">Fax number:</label>
          <input
            type="tel"
            autocomplete="tel"
            id="QDROfaxNum"
            name="QDROfaxNum"
            value=""
            maxlength="16"
            onchange="faxNumGood(0, 0, 'QDRO');"
            onblur="faxNumGood(0, 0, 'QDRO');">

      <div class="usa-input-error">
        <legend class="usa-sr-only">Retirement Benefits Specialist retained?</legend>
        <label class="usa-input-error-label" for="QDROlicensed" aria-details=""> Is the Retirement Benefits Specialist a licensed attorney?</label>
        <span class="usa-input-error-message" id="QDROlicensed-error-message" role="alert">This question is required.</span>
        <ul class="usa-unstyled-list">
          <li>  
            <input
              type="radio"
              id="QDROlicensedYes"
              name="QDROlicensed"
              value="Y"
              onblur="deemphQDROlicensed(1);"
              onchange="deemphQDROlicensed(1);" checked>
              <!-- DAV, remove 'checked' state from ALL radio buttons. -->
              <label for="QDROlicensedYes">Yes</label>
          </li>  
          <li>
          <input
            type="radio"
            id="QDROlicensedNo"
            name="QDROlicensed"
            value="N"
            onblur="deemphQDROlicensed(0);"
            onchange="deemphQDROlicensed(0);">
            <label for="QDROlicensedNo">No</label>
          </li>
        </ul>
      </div><!-- end div.usa-input-error -->

      <label for="QDROjurisdiction">Jurisdiction:</label>
      <input
        type="text"
        id="QDROjurisdiction"
        name="QDROjurisdiction"
        maxlength="20"
        value=""
        onchange="QDROjurisdictionGood(0, 'QDRO');"
        onblur="QDROjurisdictionGood(0, 'QDRO');">

      <label for="QDROlicense">Bar License number:</label>
      <input
        id="QDROlicense"
        name="QDROlicense"
        type="text"
        maxlength="20"
        value=""
        onchange="QDROlicenseGood(0, 0, 'QDRO');"
        onblur="QDROlicenseGood(0, 0, 'QDRO');">


      </fieldset><!-- END attorney fieldset -->
    </div><!-- end div.panel-form-field -->
    <nav><ul class="navigation-buttons">
      <li>
      <button
        class="usa-button-secondary"
        href="javascript:void(0);"
        onclick="showPanel(1); return false;">Previous</button>
      </li>
      <li>
      <button
        class="usa-button"
        href="javascript:void(0);"
        onclick="processPanel(2,0,0,0); return false;">Continue</button>
      </li>
      <li>
      <button
        class="usa-button attention write-in"
        href="javascript:void(0);"
        onclick="processPanel(2,0,0,0); return false;">Continue and write-in later</button>
      </li>
    </ul></nav>
  </section>
  </div><!-- END div.usa-accordion-content -->
</li>
<!-- PANEL 6: CASE -->
<li>
  <button
    class="usa-accordion-button"
    aria-expanded="false"
    aria-controls="panel-6">
    Panel 6 – Case
  </button>
  <div id="panel-6" class="usa-accordion-content">

  <section class="calculator-panel">
  <div class="panel-form-field">
  <h2>Case information</h2>

  <div class="usa-input-error">
  <label class="usa-input-error-label" for="petitioner">Petitioner:</label>
  <span class="usa-input-error-message" id="petitioner-message" role="alert">Select a petitioner from the drop-down list.</span>
  <select
    id="petitioner"
    name="petitioner"
    onclick="petitionerGood(0);">
      <option value="Select">Select One</option>
      <option value="part">John Doe is Petitioner</option>
      <option value="pay">Jane Doe is Petitioner</option></select>
  </div><!-- END div.usa-input-error -->

  <label for="courtName">Court name:</label>
  <input
    type="text"
    id="courtName"
    name="courtName"
    maxlength="50"
    value=""
    onchange="courtNameGood(0, 0);"
    onblur="courtNameGood(0, 0);">

  <label for="jurisdiction">State/Jurisdiction:</label>
  <input
    type="text"
    id="jurisdiction"
    name="jurisdiction"
    maxlength="20"
    value=""
    onchange="casejurisdictionGood(0, 0);"
    onblur="casejurisdictionGood(0, 0);">

  <label for="caseNumber">Case number:</label>
  <input
    type="text"
    id="caseNumber"
    name="caseNumber"
    maxlength="50"
    value=""
    onchange="caseNumberGood(0, 0);"
    onblur="caseNumberGood(0, 0);">

  <label for="judgeName">Judge's name and courtroom:</label>
  <input
    type="text"
    id="judgeName"
    name="judgeName"
    maxlength="50"
    value=""
    onchange="judgeNameGood(0, 0);"
    onblur="judgeNameGood(0, 0);">
  </div>

  <!-- NAVIGATION BUTTONS, before </section> -->
  <nav><ul class="navigation-buttons">
    <li>
    <button
      class="usa-button-secondary"
      href="javascript:void(0);"
      onclick="showPanel(1); return false;">Previous</button>
    </li>
    <li>
    <button
      class="usa-button"
      href="javascript:void(0);"
      onclick="processPanel(2,0,0,0); return false;">Continue</button>
    </li>
    <li>
    <button
      class="usa-button attention write-in"
      href="javascript:void(0);"
      onclick="processPanel(2,0,0,0); return false;">Continue and write-in later</button>
    </li>
  </ul></nav>
  </section>

  </div><!-- END div.usa-accordion-content -->
</li>
<!-- PANEL 7: AWARDS -->
<li>
  <button
    class="usa-accordion-button"
    aria-expanded="false"
    aria-controls="panel-7">
    Panel 7 – Awards
  </button>
  <div id="panel-7" class="usa-accordion-content">

    <section class="calculator-panel">
    <div class="panel-form-field">
      <h2>Award builder</h2>
      <label for="showAccountNumbers" aria-details="showAccountNumbers-aria">Petitioner:</label>
      <select
        id="showAccountNumbers"
        name="showAccountNumbers"
        onchange="buildStrings(0);">
          <option value="F" selected="">Fully Redact All Personal Information</option>
          <option value="P">Partially Redact All Personal Information</option>
          <option value="A">Allow All Personal Information</option>
      </select>
      <!-- Explain this -->
      <ul class="usa-accordion explain-this">
        <li>
        <button class="usa-accordion-button"
        aria-expanded="false"
        aria-controls="showAccountNumbers-aria">
        Explain this
        </button>
        <div id="showAccountNumbers-aria" class="usa-accordion-content">
        Most court files may be viewed by the public. Some jurisdictions require that certain personal information be protected from public disclosure. This can be done by redacting, either fully or partially, the personal information in the court order and providing the information in Form TSP-92C, <i>TSP Personal Information Form</i>.
        </div>
        </li>
      </ul>
    </div><!-- END div.panel-form-field -->

    <!-- Award IN PROGRESS -->
    <ul class="usa-accordion-bordered award">
    <li>
      <button
        class="usa-accordion-button"
        aria-expanded="false"
        aria-controls="award1">
        Award (1 of x) in progress
      </button>
      <div id="award1" class="usa-accordion-content">

        <div id="1Awardtext" class="awardAccordion award-body awardBorder accordion__header edge0 noMargin">Jane Doe is awarded ??? from  the [xxx] TSP account of John Doe.</div>

        <div class="panel-form-field">
          <div class="usa-input-error">
            <label for="1awardAccount" class="usa-input-error-label">Select account to which this award applies:</label>
            <span class="usa-input-error-message" id="1awardAccount-message" role="alert">You must select an account from the drop-down list.</span>
            <select
              id="1awardAccount"
              name="1awardAccount"
              onclick="buildString(0, '1');"
              onblur="buildString(0, '1');">
                <option value="Select">Select One</option>
                <option value="part,xxxxxxxxx0123,Civ">John Doe, Civ xxxxxxxxx0123</option>
                <option value="pay,xxxxxxxxx0123,Civ">Jane Doe, Civ xxxxxxxxx0123</option>
            </select>
          </div>
        </div>

        <!-- DAV, Wrap this fieldset around radio buttons AND %/$ inputs -->
        <div class="panel-form-field">
          <fieldset class="usa-fieldset-inputs usa-sans">
            <legend>Type of award:</legend>
            <ul class="usa-unstyled-list">
              <li>
                <input
                  type="radio"
                  checked
                  id="1awardTypeFixed"
                  name="1awardType"
                  value="Fixed"
                  onblur="pickAwardType('F', '1'); buildString(0, '1');"
                  onchange="pickAwardType('F', '1'); buildString(0, '1');">
                <label for="1awardTypeFixed" id="fixedDollar">Fixed dollar amount</label>
                <!-- DAV, label ID is important!! More info below. -->
              </li>
              <li>
                <input
                  type="radio"
                  id="1awardTypePercent"
                  name="1awardType"
                  value="Percentage"
                  onblur="pickAwardType('P', '1'); buildString(0, '1');"
                  onchange="pickAwardType('P', '1'); buildString(0, '1');">
                <label for="1awardTypePercent" id="percentageBalance">Percentage of account balance</label>
              </li>
            </ul>

            <!-- HIDE/SHOW $ / % input BASED ON RADIO BUTTON SELECTION -->
            <!-- DAV, the labels on the $ / % inputs have no labels. The aria-labelledby attribute links to the appropriate radio button label ID. -->

            <!-- $ input -->
            <div class="usa-input-error">
              <label class="usa-input-error-label usa-sr-only" for="1fixedAmount">Fixed dollar amount:</label>
              <span class="usa-input-error-message" id="1fixedAmount-message" role="alert">Enter a fixed dollar amount.</span>
              <span data-format="$" class="input-symbol-left">
              <input
                aria-labelledby="fixedDollar"
                type="number"
                id="1fixedAmount"
                name="1fixedAmount"
                maxlength="11"
                value=""
                onchange="buildString(0, '1');"
                onblur="buildString(0, '1');">
              </span>
            </div>

            <!-- % input -->
            <div class="usa-input-error">
              <label class="usa-input-error-label usa-sr-only" for="1percentage">Annual percentage rate:</label>
              <span class="usa-input-error-message" id="1percentage-message" role="alert">Percentage is required.</span>
              <span data-format="%" class="input-symbol-right">
              <input
                aria-labelledby="percentageBalance"
                type="number"
                id="1percentage"
                name="1percentage"
                maxlength="5"
                value=""
                onchange="buildString(0, '1');"
                onblur="buildString(0, '1');">
              </span>
            </div>
          </fieldset>
        </div><!-- END div.panel-form-field -->


        <div class="panel-form-field">
        <!-- WITH ERROR -->
          <div class="usa-input-error">
          <fieldset class="usa-fieldset-inputs usa-sans">
          <legend class="usa-input-error-label" for="adjustmentCalc">Specify the adjustment calculation for the award:</legend>
          <span class="usa-input-error-message" id="adjustmentCalc-message" role="alert">Indicate how the earnings are to be calculated.</span>
            <ul class="usa-unstyled-list">
              <li>
              <!-- DAV, the name and ID were the same for each input, which is not allowed for radio buttons. I created a new name and made the ID = value. -->
                <input
                  type="radio"
                  id="1earningsNo"
                  name="adjustmentCalc"
                  value="1earningsNo"
                  onblur="pickEarnings('N', '1'); buildString(0, '1');"
                  onchange="pickEarnings('N', '1'); buildString(0, '1');">
                <label for="1earningsNo" id="fixedDollar">No earnings</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="1earningsYes"
                  name="adjustmentCalc"
                  value="1earningsYes"
                  onblur="pickEarnings('Y', '1'); buildString(0, '1');"
                  onchange="pickEarnings('Y', '1'); buildString(0, '1');"
                  checked="checked">
                <label for="1earningsYes">Earnings (show options)</label>
              </li>
            </ul>
          </fieldset>
          </div><!-- END div.usa-input-error -->
        </div><!-- END div.panel-form-field -->



        <div class="panel-form-field">

        <fieldset class="usa-fieldset-inputs usa-sans">
          <legend for="1earnings">Earnings options</legend>
            <ul class="usa-unstyled-list">
              <li>
                <input
                type="radio"
                id="1earningsLosses"
                name="1earnings"
                value="Earnings and Losses"
                onblur="pickEarnings('L', '1'); buildString(0, '1');"
                onchange="pickEarnings('L', '1'); buildString(0, '1');"
                checked>
                <label for="1earningsLosses">Earnings and Losses</label>
              </li>
              <li>
                <input
                type="radio"
                id="1earningsPercent"
                name="1earnings"
                value="Earnings APR"
                onblur="pickEarnings('P', '1'); buildString(0, '1');"
                onchange="pickEarnings('P', '1'); buildString(0, '1');">
                <label for="1earningsPercent" id="earnings-apr">Earnings at annual percentage rate</label>
              </li>

              <li>
                <input
                type="radio"
                id="1earningsPerdiem"
                name="1earnings"
                value="Earnings Per Diem"
                onblur="pickEarnings('D', '1'); buildString(0, '1');"
                onchange="pickEarnings('D', '1'); buildString(0, '1');">
                <label for="1earningsPerdiem" id="earnings-perdiem">Earnings at per diem dollar rate</label>
              </li>
            </ul>

              <!-- Entitlement date radio buttons -->
              <fieldset class="usa-fieldset-inputs usa-sans">
                <legend for="1earnings">Specify the entitlement date:</legend>
                  <ul class="usa-unstyled-list">
                    <li>
                      <input
                        type="radio"
                        id="1paymentDate2Order"
                        name="1paymentDate2"
                        value="As of date of order"
                        onblur="pickPaymentDate(2, 'O', '1'); buildString(0, '1');"
                        onchange="pickPaymentDate(2, 'O', '1'); buildString(0, '1');">
                      <label for="1paymentDate2Order">As of the effective date of the court order</label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="1paymentDate2Entitlement"
                        name="1paymentDate2"
                        value="Entitlement Date"
                        onblur="pickPaymentDate(2, 'E', '1'); buildString(0, '1');"
                        onchange="pickPaymentDate(2, 'E', '1'); buildString(0, '1');"
                        checked="checked">
                      <label for="1paymentDate2Entitlement">As of the following specified date:</label>
                    </li>
                  </ul>

                  <!-- Entitlement date input + date picker -->
                  <div class="usa-input-error">
                  <!-- DAV, I'm using a label (and not using aria-labelledby) on this option because the calendar UI is not apparent -->
                  <label class="usa-input-error-label" for="1paymentDate2EntitlementDate" aria-details="">Entitlement date</label>
                  <span class="usa-input-error-message" id="1paymentDate2EntitlementDate-error-message" role="alert">Entitlement date is required.</span>
                  <input
                    id="1paymentDate2EntitlementDate"
                    name="1paymentDate2EntitlementDate"
                    class="hasDatepicker flatpickr-input"
                    type="hidden"
                    onblur="DIEMSdateGood(true);"
                    onchange="DIEMSdateGood(true);"
                    value=""
                    min="0"
                    max="10000000"
                    step="0.01">
                  <input
                    aria-labelledby="entitlement-date"
                    class="hasDatepicker form-control input active"
                    tabindex="0"
                    type="text"
                    readonly="readonly"
                    placeholder="Enter date">
                  </div><!-- END div.usa-input-error -->
                </fieldset>

                <!-- % input -->
                <div class="usa-input-error">
                <label class="usa-input-error-label usa-sr-only" for="1earningsPercentRate">Annual percentage rate:</label>
                <span class="usa-input-error-message" id="1earningsPercentRate-message" role="alert">Annual percentage rate is required.</span>
                  <span data-format="%" class="input-symbol-right">
                  <input
                    aria-labelledby="earnings-apr"
                    type="number"
                    id="1earningsPercentRate"
                    name="1earningsPercentRate"
                    maxlength="11"
                    value=""
                    onchange="earningsPercentRateGood(0, '1'); buildString(0, '1');"
                    onblur="earningsPercentRateGood(0, '1'); buildString(0, '1');">
                  </span> per annum
                </div>

                <!-- $ input -->
                <div class="usa-input-error">
                <label class="usa-input-error-label usa-sr-only" for="1earningsPerdiemRate">Per diem dollar rate:</label>
                <span class="usa-input-error-message" id="1earningsPerdiemRate-message" role="alert">Enter a dollar amount greater than $0.01.</span>
                  <span data-format="$" class="input-symbol-left">
                  <input
                    aria-labelledby="earnings-perdiem"
                    type="number"
                    id="1earningsPerdiemRate"
                    name="1earningsPerdiemRate"
                    id="1earningsPercentRate"
                    name="1earningsPercentRate"
                    maxlength="10"
                    value=""
                    onchange="earningsPerdiemRateGood(0, '1'); buildString(0, '1');"
                    onblur="earningsPerdiemRateGood(0, '1'); buildString(0, '1');">
                  </span>  per day
                </div>

            </fieldset>

        </div><!-- END div.panel-form-field -->
        <!-- DELTE AWARD BUTTON -->
          <ul class="buttons justify-end">
            <li>
            <button
              class="usa-button-secondary delete"
              href="javascript:void(0);"
              onclick="showPanel(6); return false;">Delete award</button>
            </li>
          </ul>
      </div><!-- END div.usa-accordion-content -->
    </li>
    </ul>

    <!-- Award COMPLETE -->
    <ul class="usa-accordion-bordered award complete">
    <li>
      <button
        class="usa-accordion-button"
        aria-expanded="true"
        aria-controls="award2">
        Award (2 of x) Complete
      </button>
      <div id="award2" class="usa-accordion-content">
        <div id="2Awardtext" class="awardAccordion award-body awardBorder accordion__header edge0 noMargin">Jane Doe is awarded $25,000.00 from the Civilian TSP account of John Doe.</div>
        <!-- DELTE AWARD BUTTON -->
          <ul class="buttons justify-end">
            <li>
            <button
              class="usa-button-secondary delete"
              href="javascript:void(0);"
              onclick="showPanel(6); return false;">Delete award</button>
            </li>
          </ul>
      </div>
    </li>
    </ul>

    <!-- NAVIGATION BUTTONS: between </div.panel-form-field> and </section> -->
    <nav><ul class="navigation-buttons">
      <li>
      <button
        class="usa-button-secondary"
        href="javascript:void(0);"
        onclick="showPanel(6); return false;">Previous</button>
      </li>
      <li>
      <button
        class="usa-button-secondary build"
        href="javascript:void(0);"
        onclick="activateAward(); return false;">Build another award</button>
      </li>
      <li>
      <button
        class="usa-button"
        href="javascript:void(0);"
        onclick="processPanel(7,0,0,1); return false;">Submit</button>
      </li>
    </ul></nav>
    </section>

  </div><!-- END div.usa-accordion-content -->
</li>
<!-- PANEL 8: SUMMARY -->
<li>
  <button
    class="usa-accordion-button"
    aria-expanded="false"
    aria-controls="panel-8">
    Panel 8 – Summary
  </button>
  <div id="panel-8" class="usa-accordion-content">

  <p>Review the input below. Click &#8220;Change&#8221; to alter your selections. Click the &#8220;Generate PDF&#8221; button to create the court order.</p>

    <section class="calculator-panel">
    <ul class="usa-accordion-bordered icons">
      <!-- ADJUST YOUR RESULTS -->
      <li>
        <button
          class="usa-accordion-button"
          aria-expanded="true"
          aria-controls="adjust-results">
          Adjust your results <i class="fal fa-sliders-v"></i>
        </button>

        <div id="adjust-results" class="usa-accordion-content text">
  <!-- Court order details -->
  <div class="usa-grid caption">
    <div class="usa-width-one-whole">Court order details <a href="javascript:void(0)">Change</a></div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Are both parties TSP participants?:</div>
    <div class="usa-width-one-half">No</div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Relationship:</div>
    <div class="usa-width-one-half">Payee is spouse</div>
  </div>
  <!-- Participant information -->
  <div class="usa-grid caption">
    <div class="usa-width-one-whole">Participant information <a href="javascript:void(0)">Change</a></div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Name:</div>
    <div class="usa-width-one-half">John Doe</div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Account number:</div>
    <div class="usa-width-one-half">xxxxxxxxx1023</div>
  </div>
  <!-- Payee information -->
  <div class="usa-grid caption">
    <div class="usa-width-one-whole">Payee information <a href="javascript:void(0)">Change</a></div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Name:</div>
    <div class="usa-width-one-half">Jane Doe</div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Account number:</div>
    <div class="usa-width-one-half">This row should not appear if blank.</div>
  </div>
  <!-- Attorney information -->
  <div class="usa-grid caption">
    <div class="usa-width-one-whole">Attorney information <a href="javascript:void(0)">Change</a></div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Participant attorney:</div>
    <div class="usa-width-one-half">
      <div>Leslie Klinger</div>
      <div class="bold">Lawfirm:</div>
      <div>Annotate LLC</div>
      <div class="bold">Jurisdiction:</div>
      <div>District 36</div>
      <div class="bold">License:</div>
      <div>Chicago-0001</div>
      <div class="bold">Address:</div>
      <div>1 Solicitor Way</div>
      <div>Malaibu CA 90265</div>
      <div>310-123-4567 (T)</div>
      <div>310-456-7890 (F)</div>
    </div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Payee attorney:</div>
    <div class="usa-width-one-half">No payee attorney indicated.</div>
  </div>
  <!-- RBS information -->
  <div class="usa-grid caption">
    <div class="usa-width-one-whole">Retirement Benefits Specialist (RBS) <a href="javascript:void(0)">Change</a></div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">RBS retained:</div>
    <div class="usa-width-one-half">No</div>
  </div>
  <!-- Case/Account information -->
  <div class="usa-grid caption">
    <div class="usa-width-one-whole">Case/Account information <a href="javascript:void(0)">Change</a></div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Petitioner:</div>
    <div class="usa-width-one-half">John Doe</div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Court:</div>
    <div class="usa-width-one-half">DC Superior Court</div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Jurisdiction:</div>
    <div class="usa-width-one-half">Wasington, DC</div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Case number:</div>
    <div class="usa-width-one-half">14-1128</div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-half">Judge name:</div>
    <div class="usa-width-one-half">Honorable John Smith, Room 1201</div>
  </div>
  <!-- Awards -->
  <div class="usa-grid caption">
    <div class="usa-width-one-whole">Award(s) <a href="javascript:void(0)">Change</a></div>
  </div>
  <div class="usa-grid results">
    <div class="usa-width-one-whole">
      <ol>
        <li>Joan Watson is awarded $50.00 from the Civilian TSP account of Sherlock Holmes.</li>
        <li>Joan Watson is awarded 10.50% of the Uniformed Services TSP account of Sherlock Holmes as of 2021-04-14. Any outstanding loan balance should be included when calculating the payee's award.</li>
      </ol>
    </div>
  </div>

  {% comment %}
            <table class="usa-table-borderless">
              <caption class="">Court order details <a href="javascript:void(0)">Change</a></caption>
              <colgroup><col><col></colgroup>
              <tbody>
              <tr>
                <th scope="row">Are both parties TSP participants?:</th>
                <td>No</td>
              </tr>
              <tr>
                <th scope="row">Relationship:</th>
                <td>Payee is spouse</td>
              </tr>
              </tbody>
            </table>

            <table class="usa-table-borderless">
              <caption>Participant information <a href="javascript:void(0)">Change</a></caption>
              <colgroup><col><col></colgroup>
              <tbody>
              <tr>
                <th scope="row">Name:</th>
                <td>John Doe</td>
              </tr>
              <tr>
                <th scope="row">Account number:</th>
                <td>xxxxxxxxx1023</td>
              </tr>
              </tbody>
            </table>

            <table class="usa-table-borderless">
              <caption>Payee information <a href="javascript:void(0)">Change</a></caption>
              <colgroup><col><col></colgroup>
              <tbody>
              <tr>
                <th scope="row">Name:</th>
                <td>Jane Doe</td>
              </tr>
              <tr>
                <th scope="row">Account number:</th>
                <td>This row should not appear if blank.</td>
              </tr>
              </tbody>
            </table>

            <table class="usa-table-borderless attorney-information">
              <caption>Attorney information <a href="javascript:void(0)">Change</a></caption>
              <colgroup><col><col></colgroup>
              <tbody>
              <tr>
                <th scope="row">Participant attorney:</th>
                <td>
                <!-- DAV, you can either wrap each line in a <div> or add <br> after each line, whichever is easier -->
                  Jack Doe, Esq.<br>
                  <strong>Law Firm</strong>:<br>
                  Doe and Associates LLC<br>
                  <strong>Bar License Number</strong>:<br>
                  DC 123456789<br>
                  <strong>Address:</strong><br>
                  77 K Street NE<br>
                  WASHINGTON DC 20002<br>
                  202-942-1464 (T)
                </td>
              </tr>
              <tr>
                <th scope="row">Payee attorney:</th>
                <td>No payee attorney indicated</td>
              </tr>
              </tbody>
            </table>

            <table class="usa-table-borderless">
              <caption>Retirement Benefits Specialist (RBS) <a href="javascript:void(0)">Change</a></caption>
              <colgroup><col><col></colgroup>
              <tbody>
              <tr>
                <th scope="row">RBS retained:</th>
                <td>No</td>
              </tr>
              </tbody>
            </table>

            <table class="usa-table-borderless">
              <caption>Case/Account information <a href="javascript:void(0)">Change</a></caption>
              <colgroup><col><col></colgroup>
              <tbody>
              <tr>
                <th scope="row">Petitioner:</th>
                <td>John Doe</td>
              </tr>
              <tr>
                <th scope="row">Court:</th>
                <td>DC Superior Court</td>
              </tr>
              <tr>
                <th scope="row">Jurisdiction:</th>
                <td>DC</td>
              </tr>
              <tr>
                <th scope="row">Case number:</th>
                <td>3210987654321</td>
              </tr>
              <tr>
                <th scope="row">Judge name:</th>
                <td>Honorable John Smith, Room 1201</td>
              </tr>
              </tbody>
            </table>
            <!-- AWARDS -->
            <table class="usa-table-borderless awards">
              <caption>Awards <a href="javascript:void(0)">Change</a></caption>
              <colgroup><col><col></colgroup>
              <tbody>
              <tr>
                <td>
                  <ol>
                    <li>Jane Doe is awarded $25,000.00 from the Civilian TSP account of John Doe.</li>
                  </ol>
                </td>
              </tr>
              </tbody>
            </table>
  {% endcomment %}
          </div><!-- END div#adjust-results -->
        </li>
      </ul></section>

      <!-- NAVIGATION buttons -->
      <ul class="navigation-buttons">
        <li><button class="usa-button " href="javascript:void(0);" onclick="showPanel(2); return false;">Previous</button></li>
        <li><button class="usa-button pdf" href="javascript:void(0);" onclick="doReport(); return false;">Generate PDF</button></li>
        <li><button class="usa-button print" href="javascript:void(0);" title="" onclick="window.print(); return false;">Print report</button></li>
      </ul>

    </div><!-- END div#panel-8 -->
</li>
</ul><!-- END ul.usa-accordion -->

<div style="display: none" markdown="1">

Step 5 –
Tool tip: A Retirement Benefits Specialist (sometimes called a "QDRO Specialist" or "pension specialist") is an individual who has been retained to assist you in preparing your court order for submission to TSP.

Modal:

Retirement Benefits Specialist (RBS) Authorization Form
An RBS (sometimes called a "pension specialist" or a "QDRO specialist" in the private sector) is an individual who has been retained to assist you in preparing your court order for submission to the TSP.

Under TSP rules, we require authorization from the individual TSP participant and/or payee to release information relating to TSP records to these individuals. If you or your attorney have retained an RBS and would like to authorize that individual to submit and receive information on your behalf, you should fill out this form and include it with your submission to the TSP.

</div>

<!-- CONTENT END -->
