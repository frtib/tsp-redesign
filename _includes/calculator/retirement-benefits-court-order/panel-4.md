{% comment %}
Party 2 panel (4) for RBCO.
{% endcomment %}
{% assign panelID = include.panelID | default: 4 %}
{% assign hide = 'display: block;' %}
{% if include.hide == 1 %} {% assign hide = 'display: none;' %} {% endif %}

<section id="panel-{{ panelID }}" class="calculator-panel" style="{{ hide }}"  markdown="1">

<!-- Social Security number -->
<div class="panel-form-field" id="paySSN-outer-div">
  <h2 id="payPanel-H2-2">Information for {payee}</h2>
    <div id="paySSN-div">
      <label class="" id="paySSN-label" for="paySSN">Social Security or Tax Identification number:</label>
      <span class="" id="paySSN-error-message" role="alert"></span>
      <input id="paySSN" name="paySSN" class="format-left" value="" data-store="" myPlaceholder=""
        aria-labelledby="paySSN-label" type="text"  xdisabled xpattern="\d*"
        onKeyDown="return filterNumeric(event);" onDragStart="return false;" onDrop="return false;"
        onblur="SSNGood(0, 1, 'pay');" onchange="SSNGood(0, 1, 'pay');" maxlength="9">
    </div>
    <!-- Explain this -->
    <ul class="usa-accordion explain-this">
    <li>
    <button class="usa-accordion-button" aria-expanded="false" aria-controls="paySSN-details">Explain this</button>
    <div id="paySSN-details" class="usa-accordion-content">
      <p>The payee's Social Security number (SSN) is required to process the RBCO.<span id="alertName"></span></p>
      <p>If this information does not appear in the body of the court order, it must be submitted to the TSP by the individual or either party's attorney of record. Failure to provide this information with your submission may delay processing of the order.</p>
    </div>
    </li>
    </ul>
  </div>


{% include calculator/retirement-benefits-court-order/address-section.html prefix='pay' %}

{% include calculator/retirement-benefits-court-order/account-number-section.html prefix='pay' %}

{% include calculator/button-block.html panelID=panelID prev=3 next=5 nextOK=5 %}

</section>
