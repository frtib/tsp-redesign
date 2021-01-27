---
permalink: /funds-individual/f-fund/
layout: fund-details
title: F Fund
sidenav: fund-options
redirect_from:
  - /InvestmentFunds/FundOptions/fundPerformance_F.html
  - /ffund/
Fund_type: Individual
Fund_name: F Fund
Fund_order: 2
Fund_subtitle: Fixed Income Index Investment Fund
Fund_objective: The F Fund's investment objective is to match the performance of the Bloomberg Barclays U.S. Aggregate Bond Index, a broad index representing the U.S. bond market.
Fund_objective_short: Match the performance of the Bloomberg Barclays U.S. Aggregate Bond Index.
questions:
  - question: Why should I invest in the F Fund?
    answer: F Fund investors are rewarded with the opportunity to earn higher rates of return over the long term than they would from investments in short-term securities such as the G Fund. The overall risk is relatively low in comparison to certain other fixed income investments in the market because the F Fund includes only investment-grade securities.
  - question: Am I ok with market and inflation risk?
    answer: F Fund returns move up and down with the returns in the bond market (<span data-term="Market Risk" class="js-glossary-toggle term term-end">market risk</span>). F Fund investors are also exposed to the possibility that principal and interest payments on the bonds that comprise the index will not be paid (credit default risk) or if F Fund investments do not outpace or grow enough to offset the reduction in purchasing power (<span data-term="Inflation Risk" class="js-glossary-toggle term term-end">inflation risk</span>). Your F Fund investment is also exposed to prepayment risk, which is the probability that if interest rates fall, bonds that are represented in the index will be paid back early thus forcing lenders to reinvest at lower rates.
  - question: How can I use the F Fund in my TSP?
    answer: In periods of falling interest rates, the F Fund will experience gains from the resulting rise in bond prices. So in the long run, you may expect F Fund returns to exceed those of the G Fund; however, you should also expect greater price volatility (up and down movements). A retirement portfolio that contains stock funds, like the C, S, and I Funds, along with the F Fund, will tend to be less volatile than one that contains stock funds alone.
avg_annual_returns:
    ytd: "-"
    one_yr: "-"
    three_yr: "-"
    five_yr: "-"
    ten_yr: "-"
    lifetime: "-"
inception_date: 1/29/1988
summary_update: 12/31/2019
summary_details:
    assets: $33.5 billion
    as_of_year: 2020
    gross_expense:  .058
    net_expense:    .048
    other_expense:  .012
    benchmark_index: Bloomberg Barclays U.S. Aggregate Bond Index | bloombergindices.com
    asset_manager: BlackRock Institutional Trust <br />Company, N.A.
composition_update: December 31, 2019
composition:
  - [Government/Government-Related, 41.5]
  - [Asset-Backed Securities, 29.6]
  - [Credit, 29.0]
top_ten_update:
top_ten_holdings:
  - namex: ignored because of top_ten_text
    abbrx: XXXX
top_ten_text: |
  The F Fund tracks the Bloomberg Barclays U.S. Aggregate Bond Index,
  a broadly diversified index of the U.S. bond market.

  On December 31, 2019, the index included 10,252 notes and bonds.

  Because the U.S. Aggregate contains such a large number of securities,
  it is not feasible for the F Fund to invest in each security in the index.
additional_info: |
  By law, the <span class="nobr">F Fund</span> must be invested in fixed-income securities. The Federal Retirement Thrift Investment Board has chosen to invest the <span class="nobr">F Fund</span> in an index fund that tracks the Bloomberg Barclays U.S. Aggregate Bond Index, a broadly diversified index of the U.S. bond market.

  The U.S. Aggregate Index consists of high-quality fixed-income securities with maturities of more than one year. Because the U.S. Aggregate Index contains such a large number of securities, it is not feasible for the <span class="nobr">F Fund</span> to invest in each security in the index.

  The FRTIB&#8217;s Executive Director currently allocates the selection, purchase, investment, and management of assets contained in the <span class="nobr">F Fund</span> to BlackRock Institutional Trust Company, N.A. BlackRock selects a large representative sample of the various types of asset-backed, U.S. government, corporate, and foreign government securities included in the overall index. The performance of the <span class="nobr">F Fund</span> is evaluated on the basis of how closely its returns match those of the U.S. Aggregate Index.
risks: |
  Your investment in the C Fund is subject to <span data-term="Market Risk" class="js-glossary-toggle term term-end">market risk</span> because the prices of the stocks in the S&P 500 Index rise and fall.

  By investing in the C Fund, you are also exposed to <span data-term="Inflation Risk" class="js-glossary-toggle term term-end">inflation risk</span>, meaning your C Fund investment may not grow enough to offset inflation.
risk_level: low-medium
rewards: |
  While investment in the C Fund carries risk, it also offers the opportunity to experience gains from equity ownership of large and mid-sized U.S. company stocks.
scripts:
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - singleFundData('F');
  - getFundIndexAverageAnnualReturns('F');
  - getGrowthLifetime('F');
  - doCompositionPies();
  - $('.sortableColumn').click(function(e) { toggleSort(this, 0, 1); });
---
