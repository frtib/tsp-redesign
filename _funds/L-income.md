---
permalink: /funds-lifecycle/l-income/
layout: fund-details
title: L Income
sidenav: fund-options
redirect_from:
  - /InvestmentFunds/FundOptions/fundPerformance_LIncome.html
  - /lincome/
Fund_type: L
Fund_name: L Income
Fund_order: 7
Fund_subtitle:
Fund_objective: The L Income Fund’s investment objective is to achieve a low level of growth with a high emphasis on preservation of assets. Unlike the other four L Funds, the L Income Fund's asset allocation does not change quarterly. However, like the other funds, it is rebalanced daily to maintain its target investment mix.
Fund_objective_short: For participants who are currently withdrawing their TSP accounts in monthly payments or who plan to begin withdrawing before 2020.
Fund_recommendation: Based on the year you were born, the L Income Fund may be a good choice for you because it provides the most conservative investment mix, while still offering you some diversification.
questions:
  - question: Why should I invest in the L Income Fund?
    answer: You should consider investing in the L Income Fund if you are currently withdrawing money from your TSP account in monthly payments or you plan to begin withdrawing money before 2021.
  - question: Am I ok with market and inflation risk?
    answer: The L Income Fund can have periods of gain and loss, just as the individual TSP funds do. However, the L Income Fund is the most conservative of the L Funds. It focuses on money preservation while providing a small exposure to the riskier funds (C, S, and I Funds) in order to reduce inflation's effect on your purchasing power.
  - question: How can I use the L Income Fund in my TSP Account?
    answer: Your investment in the L Income Fund is designed to produce current income for you if you plan to start withdrawing from your account in the near future or are already receiving monthly payments from your account.  
avg_annual_returns:
  ytd: "-"
  one_yr: "-"
  three_yr: "-"
  five_yr: "-"
  ten_yr: "-"
  lifetime: "-"
inception_date: 8/1/2005
summary_update: 12/31/2020
summary_details:
  assets: $136.5 billion
  as_of_year: 2020
  gross_expense:  .057
  net_expense:    .047
  investment_expense:  .002
  benchmark_index: Not applicable
  asset_manager: Not applicable
top_ten_update:
top_ten_holdings:
additional_info: |
  The L Income Fund is designed to produce current income if you are already receiving money from your TSP account through monthly payments or if you plan to withdraw or to begin withdrawing from your account next year. The asset allocations are based on the investment consultant’s assumptions regarding future investment returns, inflation, economic growth, and interest rates. We review these assumptions at least annually to determine whether changes to the allocations are warranted.

  Remember, however, that expected risk and return are based on assumptions about future economic conditions and investment performance. There is no guaranteed rate of return for any period, either short-term or long-term. For the fund’s historical returns, visit [Share Price History]({{ site.baseurl }}/fund-performance/share-price-history/). Past performance does not guarantee future results.
risks: |
  When you invest in the L Funds, you are subject to the investment risks associated with the G, F, C, S, and I funds. Your account is not guaranteed against loss. The L Funds can have periods of gain and loss, just as the individual TSP funds do.
risk_level: low
rewards: |
  The L Funds simplify fund selection. You choose the fund that is closest to your target date (or, if your target date falls between the target dates that are offered, you can split your account between the two target date funds closest to your time horizon).

  When you invest in the L Funds:

  - You can be sure that your TSP account is broadly diversified.
  - You don't have to remember to adjust your investment mix as your target date approaches - it's done for you.
subfunds:
  - name: L2020
  - name: L2030
  - name: L2040
  - name: L2040
scripts:
  - /assets/js/calculator/lifecycle.js
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - singleFundData('Linc');
  - fundDetailsSummaryPie('Linc');
  - getFundIndexAverageAnnualReturns('Linc');
  - getGrowthLifetime('Linc');
  - LfundStackedArea('Income', 'LfundStackedArea');
---
