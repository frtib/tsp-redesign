---
layout: page
title: Annuity basics
styles:
sidenav: use-your-savings
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/annuity-basics.js
permalink: /annuity-basics/
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - getAnnuityRates('annuity-interest-rates');
redirect_from:
  - /annuity/
  - /MonthlyEstimate/ # Short URL on Annual Statements
  - /monthlyestimate/
---

# Annuity basics

A life annuity provides guaranteed monthly payments for as long as you are alive. If you want a life annuity that pays benefits to a survivor, or joint annuitant, you have that option as well.

The life annuity is one of the withdrawal options that are available to you once you have left the federal government or the uniformed services, or if you have a beneficiary participant account. It is not the “basic annuity” or “pension” that you will receive as a result of your retirement coverage under FERS or CSRS, or the military retired pay that members of the uniformed services receive. If you have questions about your eligibility for the basic annuity or military retired pay, contact your agency or service. To learn more about the life annuity withdrawal option, read the TSP fact sheet [Annuities]({{ site.baseurl }}/publications/tspfs24.pdf).

The minimum amount with which to purchase an annuity is $3,500. This minimum applies separately to each balance, traditional and Roth.

Be aware that an annuity is not the same as a TSP installment payment. A TSP installment payment is one of the other withdrawal options that you have as a separated participant.

<span id="annuity-interest-rates">
  Fetching the current annuity interest rate from the server...
</span>

## Monthly annuity estimate on your annual TSP statement
You may have seen a section on your annual TSP statement called “**Will you be ready for retirement?**” That section displays an estimated dollar amount for your monthly retirement income.

**We use several assumptions to calculate the annuity estimate on your TSP statement:**

- You’re age 63 (or your current age if you’re older).
- The annuity interest rate index is 1.480% (for estimates on 2020 statements).
- You purchase a single life annuity with level payments and no additional features.

To explore annuity estimates based on a different type of annuity purchase—or an annuity purchase combined with other withdrawal options—you can use the [TSP payment and annuity calculator]({{ site.baseurl }}/calculators/tsp-payment-and-annuity-calculator/).

<!-- CONTENT END -->
