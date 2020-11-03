---
permalink: /funds-individual/s-fund/
layout: fund-details
title: S Fund
sidenav: fund-options
redirect_from:
  - /InvestmentFunds/FundOptions/fundPerformance_S.html
  - /sfund/
Fund_type: Individual
Fund_name: S Fund
Fund_order: 4
Fund_subtitle: Small cap stock Index investment fund
Fund_objective: The S Fund's investment objective is to match the performance of the Dow Jones U.S. Completion Total Stock Market Index, a broad market index made up of stocks of small-to-medium U.S. companies not included in the S&P 500 Index.
Fund_objective_short: Match the performance of the Dow Jones U.S. Completion Total Stock Market Index.
questions:
  - question: Why should I invest in the S Fund?
    answer: While investment in the S Fund carries risk, it also offers the opportunity to experience gains from equity ownership of small-to-mid-sized U.S. companies. It provides and excellent means of further diversifying your domestic equity holdings.
  - question: Am I ok with market and inflation risk?
    answer: There is a risk of loss if the Dow Jones U.S. Completion TSM Index declines in response to changes in overall economic conditions (<span data-term="Market Risk" class="js-glossary-toggle term term-end">market risk</span>) or if <span class="nobr">S Fund</span> investments do not outpace or grow enough to offset the reduction in purchasing power (<span data-term="Inflation Risk" class="js-glossary-toggle term term-end">inflation risk</span>).
  - question: How can I use the S Fund in my TSP?
    answer: The S Fund can be useful in a portfolio that also contains stock funds that track other indexes. The C, S, and I Funds, for example, track different segments of the overall stock market without overlapping. By investing in all segments of the stock market (as opposed to just one), you reduce your exposure to market risk.
avg_annual_returns:
    ytd: "-"
    one_yr: "-"
    three_yr: "-"
    five_yr: "-"
    ten_yr: "-"
    lifetime: "-"
inception_date: 5/1/2001
summary_update: 12/31/2019
summary_details:
    assets: $74.1 billion
    as_of_year: 2019
    gross_expense:  .052
    net_expense:    .042
    other_expense:  .018
    benchmark_index: Dow Jones U.S. Completion TSM Index | www.djindexes.com
    asset_manager: BlackRock Institutional Trust Company, N.A
composition_update: December 31, 2019
composition:
  - [Information Technology, 17.8]
  - [Financials, 17.6]
  - [Health Care, 13.6]
  - [Industrials, 13.6]
  - [Consumer Discretionary, 11.3]
  - [Real Estate, 9.4]
  - [Communication Services, 4.8]
  - [Materials, 4.0]
  - [Consumer Staples, 2.7]
  - [Utilities, 2.7]
  - [Energy, 2.5]
top_ten_update: 12/31/2019
top_ten_holdings:
  - name: Tesla Motors Inc.
    abbr: TSLA
  - name: Blackstone Group, Inc. Class A
    abbr: BX
  - name: Lululemon Athletica, Inc.
    abbr: LULU
  - name: Workday, Inc. Class A
    abbr: WDAY
  - name: Splunk, Inc.
    abbr: SPLK
  - name: Palo Alto Networks, Inc.
    abbr: PANW
  - name: CoStar Group, Inc.
    abbr: CSGP
  - name: Square, Inc. Class A
    abbr: SQ
  - name: Dexcom, Inc.
    abbr: DXCM
  - name: Liberty Broadband Corp. Series C
    abbr: LBRDK
additional_info: |
  The FRTIB&#8217;s Executive Director currently allocates the selection, purchase, investment, and management of assets contained in the <span class="nobr">S Fund</span> to BlackRock Institutional Trust Company, N.A. The Fund is invested in the Dow Jones U.S. Completion TSM Index, which contains a large number of stocks, including illiquid stocks with low trading volume and stocks with prices lower than $1.00 per share.

  Therefore, it is not efficient for the Fund to invest in every stock in the index. The <span class="nobr">S Fund</span> holds the stocks of most of the companies in the index with market values greater than $1 billion. However, a mathematical sampling technique is used to select among the smaller stocks.

  The performance of the <span class="nobr">S Fund</span> is evaluated on the basis of how closely its returns match those of the Dow Jones U.S. Completion TSM Index. A portion of <span class="nobr">S Fund</span> assets is reserved to meet the needs of daily client activity. This liquidity reserve is invested in futures contracts of the S&P 400 and Russell 2000 (other broad equity indexes).
risks: |
  Your investment in the <span class="nobr">S Fund</span> is subject to <span data-term="Market Risk" class="js-glossary-toggle term term-end">market risk</span> because the Dow Jones U.S. Completion Total Stock Market Index returns will move up and down in response to overall economic conditions.

  By investing in the <span class="nobr">S Fund</span>, you are also exposed to <span data-term="Inflation Risk" class="js-glossary-toggle term term-end">inflation risk</span>, meaning your <span class="nobr">S Fund</span> investment may not grow enough to offset the reduction in purchasing power that results from inflation.
risk_level: medium-high
rewards: |
  While investment in the <span class="nobr">S Fund</span> carries risk, it also offers the opportunity to experience gains from equity ownership of small to mid-sized U.S. companies. It provides an excellent means of further diversifying your domestic equity holdings.
scripts:
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - singleFundData('S');
  - getFundIndexAverageAnnualReturns('S');
  - getGrowthLifetime('S');
  - doCompositionPies();
  - $('.sortableColumn').click(function(e) { toggleSort(this, 0, 1); });
---
