---
layout: page
title: Maximize your savings
styles:
sidenav: manage-your-plan
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/calculator/calculator.js
  - /assets/js/calculator/maximize-your-savings.js
permalink: /making-contributions/maximize-your-savings/
---
# Maximize your savings

When it comes to reaching your retirement goals, it’s important that you
maximize your savings. You can start by making sure you’re not leaving free
money on the table. Are you contributing enough to get at least the full match from your agency or service?

<!-- HOW WE CALCULATE THE MATCH -->
<section id="maximize">
<table class="usa-table-borderless calculate-match">
  <caption>Here's how we calculate the 5% match.</caption>
  <thead class="sticky">
    <tr>
      <th scope="col"><i class="fal fa-user-circle"></i>You</th>
      <th scope="col"><i class="fal fa-university"></i>Your agency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>contribute<br>
      <span class="percent">3%</span><br>
      of your basic pay each pay period.</td>
      <td>matches your<br>
      <span class="percent">3%</span><br>
      dollar-for-dollar.</td>
    </tr>
    <tr>
      <td>contribute an additional<br>
      <span class="percent">2%</span></td>
      <td>matches 50&cent; on the dollar.<br>
      <span class="percent">1%</span></td>
    </tr>
    <tr>
      <td class="contribute">
      <i class="fas fa-donate"></i><i class="fas fa-donate"></i><br>
      <i class="fas fa-donate"></i><i class="fas fa-donate"></i><i class="fas fa-donate"></i>
      </td>
      <td>automatically contributes<br>
      <span class="percent">1%</span><br>
      of your basic pay.</td>
    </tr>
    <tr class="total-contributions">
      <td>
        <div class="match silver">Your contributions<br><span class="percent">5%</span></div>
      </td>
      <td>
        <div class="match silver">Agency/service "free" money<br><span class="percent">5%</span></div>
      </td>
    </tr>
  </tbody>
</table>
</section><!-- // end #maximize -->

<!-- CUSTOMIZE YOUR SAVINGS -->
<section id="customize">
<div class="usa-grid-full customize">
  <div class="usa-width-one-whole blue-medium"><h2>Customize your savings</h2></div>
</div>
<div class="usa-grid-full">
<fieldset>
  <!-- Age -->
  <div class="usa-width-one-third">
    <span class="form-field-icon"><i class="far fa-user-clock"></i></span>
    <div id="your-age-input-error" class="">
        <label id="your-age-label" class="" for="your-age">Age</label>
        <span id="your-age-error-message" class="" role="alert"></span>
        <input value="" id="your-age" name="your-age" type="number" class="border-bottom"
          onChange="ageGood(0);" onBlur="ageGood(0);" aria-labeledby="your-age-label" aria-describedby="">
    </div>
  </div>
  <!-- Salary -->
  <div class="usa-width-one-third">
    <span class="form-field-icon"><i class="far fa-money-check-alt"></i></span>
    <div id="your-salary-input-error" class="">
        <label id="your-salary-label" class="" for="your-salary">Salary</label>
        <span id="your-salary-error-message" class="" role="alert"></span>
        <input value="" id="your-salary" name="your-salary" type="number" class="border-bottom"
          onChange="salaryGood(0);" onBlur="salaryGood(0);" aria-labeledby="your-salary-label" aria-describedby="">
    </div>
  </div>
  <!-- Pay frequency -->
  <div class="usa-width-one-third">
    <span class="form-field-icon"><i class="far fa-calendar-day"></i></span>
    <div id="pay-frequency-input-error" class="">
        <label id="pay-frequency-label" class="" for="pay-frequency">Pay frequency</label>
        <span id="pay-frequency-error-message" class="" role="alert"></span>
        <select id="pay-frequency" name="pay-frequency" type="text" class="border-bottom"
            onChange="frequencyGood(0);" onBlur="frequencyGood(0);"
            aria-labeledby="pay-frequency-label" aria-describedby="">
           <option value="Select"></option>
           <option value="Biweekly" selected>Biweekly (every 2 weeks, 26 times a year)</option>
           <option value="Weekly">Weekly (52 times a year)</option>
           <option value="Semi-monthly">Semi-monthly (twice a month, 24 times a year)</option>
           <option value="Monthly">Monthly (12 times a year).</option>
        </select>
    </div>
  </div>
  </fieldset>
</div>
<!-- button -->
<div class="usa-grid-full">
  <div class="usa-width-one-whole">
    <button class="usa-button" onClick="calculate(1);">Customize</button>
  </div>
</div>
</section><!-- // end #customize -->

<!-- HOW MUCH YOU SAVED -->
<section id="how-much-you-saved">
<table class="usa-table-borderless calculate-match">
  <caption><div>Here's how much you saved</div></caption>
  <thead>
    <tr>
      <th scope="col">Your <br><span>5%</span><br> contribution</th>
      <th scope="col">Your <br><span>8%</span><br> contribution</th>
      <th scope="col">Your <br><span>10%</span><br> contribution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="contrib1">$0.00</td>
      <td id="contrib2">$0.00</td>
      <td id="contrib3">$0.00</td>
    </tr>
    <!-- 1% Agency/service contribution -->
    <tr class="silver">
      <td colspan="3"><h3>+ 1% Agency/Service Contribution</h3></td>
    </tr>
    <tr>
      <td colspan="3" id="agencyContrib">$0.00</td>
    </tr>
    <!-- 4% Agency/Service Match -->
    <tr class="silver">
      <td colspan="3"><h3>+ 4% Agency/Service Match</h3></td>
    </tr>
    <tr>
      <td colspan="3" id="agencyMatch">$0.00</td>
    </tr>

    <!-- Balance at age -->
    {% assign ages = "62, 67, 72" | split: ", " %}
    {% for age in ages %}
      <!-- BALANCE AGE {{ age }} -->
      <tr class="silver">
      <td colspan="3"><h3>Balance at {{ age }}</h3></td>
      </tr>
      <tr class="value">
        <td class="" id="balance-1-{{ age }}">$0.00</td>
        <td class="" id="balance-2-{{ age }}">$0.00</td>
        <td class="" id="balance-3-{{ age }}">$0.00</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<!-- Recalculate -->
<div class="usa-grid-full">
  <div class="usa-width-one-whole recalculate">
  <!-- <p class="assumes-rate-of-return">Assumes a 6% annual rate of return.</p> -->
    <div id="your-rate-of-return-input-error" class="">
      <label id="your-rate-of-return-label" class="" for="your-rate-of-return">Assumed rate of return (%)</label>
      <span id="your-rate-of-return-error-message" class="" role="alert"></span>

      <div class="input-wrapper">

      <input id="your-rate-of-return" name="your-rate-of-return" type="number" value="6.0" class="border-bottom"
              onChange="rateGood(0);" onBlur="rateGood(0);" aria-labeledby="your-rate-of-return-label" aria-describedby="">
      <span class="percent">%</span><br>
      <button class="usa-button" onClick="calculate(1);">Recalculate</button>

      </div>

    </div>
  </div><!-- // end .usa-width-one-whole .recalculate -->
</div><!-- // end .usa-grid-full -->
</section>
<!-- // end #how-much-you-saved -->

<!-- DON'T LEAVE FREE MONEY ON THE TABLE -->
<section id="free-money">
<div class="usa-grid-full">
  <div class="usa-width-one-whole ">
  <span class="icon-free-money">
  <i class="far fa-dollar-sign"></i></span><br>
  Don't leave free money on the table!
  </div>
</div>
</section>
<!-- // end #free-money -->

Use our &#8220;[How Much Can I Contribute?]({{ site.baseurl }}/calculators/how-much-can-i-contribute/)&#8221; calculator to determine the specific dollar amount to be deducted each pay period in order to maximize your contributions and to ensure that you do not miss out on Agency or Service Matching Contributions if you are entitled to them.

Another way to maximize your savings is to increase your contribution amount each time you get a pay increase. Even a small amount can make a big difference! Check out our &#8220;[How Much Will My Savings Grow?]({{ site.baseurl }}/calculators/how-much-will-my-savings-grow/)&#8221; calculator.  

## Am I eligible for matching?

Only employees covered by the <span data-term="Federal Employees' Retirement System (FERS)" class="js-glossary-toggle term term-end">Federal Employees Retirement System</span> (for civilians) and the <span data-term="Blended Retirement System (BRS)" class="js-glossary-toggle term term-end">Blended Retirement System </span> (for uniformed services) are eligible for matching. If you're brand new to federal or uniformed service, you are covered by one of these systems.
