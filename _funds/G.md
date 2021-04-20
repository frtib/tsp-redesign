---
permalink: /funds-individual/g-fund/
layout: fund-details
title: G Fund
sidenav: fund-options
redirect_from:
  - /InvestmentFunds/FundOptions/fundPerformance_G.html
  - /gfund/
Fund_type: Individual
Fund_name: G Fund
Fund_order: 1
Fund_subtitle: Government Securities Investment Fund
Fund_objective: The G Fund’s investment objective is to ensure preservation of capital and generate returns above those of short-term U.S. Treasury securities.
Fund_objective_short: Ensure preservation of capital and generate returns above those of short-term U.S. Treasury securities.
questions:
  - question: Why should I invest in the G Fund?
    answer: The payment of G Fund principal and interest is guaranteed by the U.S. Government. This means that the U.S. Government will always make the required payments.
  - question: Am I ok with market and inflation risk?
    answer: The G Fund is subject to the possibility that your investment will not grow enough to offset the reduction in purchasing power that results from inflation (<span data-term="Inflation Risk" class="js-glossary-toggle term term-end">inflation risk</span>).
  - question: How can I use the G Fund in my TSP?
    answer: Consider investing in the G Fund if you would like to have all or a portion of your TSP account completely protected from loss. If you choose to invest in the G Fund, you are placing a higher priority on the stability and preservation of your money than on the opportunity to potentially achieve greater long-term growth in your account through investment in the other TSP funds.
avg_annual_returns:
    ytd: "-"
    one_yr: "-"
    three_yr: "-"
    five_yr: "-"
    ten_yr: "-"
    lifetime: "-"
inception_date: 4/1/1987
summary_update: 12/31/2020
summary_details:
    assets: $267.2 billion
    as_of_year: 2020
    gross_expense:  .059
    net_expense:    .049
    investment_expense:  .000
    benchmark_index: Not applicable
    asset_manager: Not applicable
composition_update: December 31, 2020
composition:
  - [Short-term U.S. Treasury securities, 100.0]
top_ten_update: 12/31/2020
top_ten_holdings:
- namex: ignored because of top_ten_text
  abbrx: XXXX
top_ten_text: |
  The G Fund rate is calculated by the U.S.
  Treasury as the weighted average yield of
  approximately 153 U.S. Treasury securities
  on the last day of the previous month.
additional_info: |
  The G Fund is invested in short-term U.S. Treasury securities specially issued to the TSP. Payment of principal and interest is guaranteed by the U.S. government. Thus, there is no “credit risk.”

  Although the securities in the G Fund earn a long-term interest rate, the Board’s investment in the G Fund is redeemable on any business day with no risk to principal. The value of  G Fund securities does not fluctuate; only the interest rate changes.

  The G Fund Yield Advantage—The G Fund rate calculation results in a long-term rate being earned on short-term securities. Because long-term interest rates are generally higher than short-term rates, G Fund securities usually earn a higher rate of return than do short-term marketable Treasury securities.
risks: |
  Your investment in the C Fund is subject to <span data-term="Market Risk" class="js-glossary-toggle term term-end">market risk</span> because the prices of the stocks in the S&P 500 Index rise and fall.

  By investing in the C Fund, you are also exposed to <span data-term="Inflation Risk" class="js-glossary-toggle term term-end">inflation risk</span>, meaning your C Fund investment may not grow enough to offset inflation.
risk_level: low
rewards: |
  While investment in the C Fund carries risk, it also offers the opportunity to experience gains from equity ownership of large and mid-sized U.S. company stocks.
scripts:
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - singleFundData('G');
  - getFundIndexAverageAnnualReturns('G');
  - getGrowthLifetime('G');
  - doCompositionPies();
  - $('.sortableColumn').click(function(e) { toggleSort(this, 0, 1); });
---
