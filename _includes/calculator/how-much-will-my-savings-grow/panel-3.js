{% comment %}
This is the javascript specific to panel 3.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return true;
};

panelEnter[{{ panelID }}] = function(panel) {
    // calculate and set values here
    calculateResults();
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

function showData(choice) {
  if (choice == 'graph') {
    $('#resultSelectorGraph').prop('checked', true);
    $('#show-data-graph').removeClass('hide');
    $('#show-data-table').addClass('hide');
    return true;
  }
  if (choice == 'table') {
    $('#resultSelectorTable').prop('checked', true);
    $('#show-data-graph').addClass('hide');
    $('#show-data-table').removeClass('hide');
    return true;
  }
  $('#resultSelectorCombined').prop('checked', true);
  $('#show-data-graph').removeClass('hide');
  $('#show-data-table').removeClass('hide');
  return true;
}
function calculateResults1() {
  // calculate 5 main values
  var existingBalance = 1000;
  var balanceGrowth = 2000;
  var futureContributions = 300;
  var futureGrowth = 400;
  var total = 0;

  total = existingBalance + balanceGrowth + futureContributions + futureGrowth;
  $('#existing-balance').html(CurrencyFormatted(existingBalance, 'cent'));
  $('#balance-growth').html(CurrencyFormatted(balanceGrowth, 'cent'));
  $('#future-contributions').html(CurrencyFormatted(futureContributions, 'cent'));
  $('#future-growth').html(CurrencyFormatted(futureGrowth, 'cent'));
  $('#final-total').html(CurrencyFormatted(total, 'cent'));
}

function get_pay_freq(paySchedule) {
  if (paySchedule == 'Biweekly')      return 26.0;
  if (paySchedule == 'Weekly')        return 52.0;
  if (paySchedule == 'Semimonthly')  return 24.0;
  if (paySchedule == 'Monthly')       return 12.0;
  return 1.0;
}

// Calculate how much FERS will match users contrib
function FERSmatch(matchPercent) {
  if (matchPercent <= 0.00) { return 0.01; }

  if (matchPercent >= 0.05) { return matchPercent + 0.05; }

  if (matchPercent <= 0.03) { return matchPercent * 2 + 0.01; }

  // all that's left is between 3% and 5%
  return (matchPercent - 0.03) * 1.5 + 0.07;
}

// Calculate how much USBRS will match users contrib
function USBRSmatch(years, months, matchPercent) {
  if (years > 26) { return matchPercent; }
  if ((years <= 1) && (months <= 2)) { return matchPercent; }
  if (years <= 2) { return FERSmatch(0.0) + matchPercent; }
  return FERSmatch(matchPercent);
}

var defdot = { symbol: 'circle', radius: 0.1 };
var defcircle = { symbol: 'circle', radius: 2.4 };
var defdiamond = { symbol: 'diamond', radius: 2.6 };
// the color names below are not HTML defined names, just a close name to identify what is on the screen
var colorContributions = 'gold'; // legacy '#9C1B9C';
var colorContributionsGrowth = 'gold-lighter'; // legacy '#C679DD';
var colorBalance = 'secondary'; // legacy '#EA6A17';
var colorBalanceGrowth = 'secondary-light'; // legacy '#F4B55B';
var contributionsText = 'Contributions<sup>1</sup>';

function dataBoth() {
  return [
      { name: 'Contributions Growth',   legendIndex: 1, marker: defcircle, colorIndex: colorContributionsGrowth, data: contributionGrowth },
      { name: contributionsText,                legendIndex: 2, marker: defcircle, colorIndex: colorContributions, data: contributions },
      { name: 'Account Balance Growth',         legendIndex: 3, marker: defcircle, colorIndex: colorBalanceGrowth, data: accountGrowth },
      { name: 'Existing Balance',               legendIndex: 4, marker: defcircle, colorIndex: colorBalance, data: accountBalance }
    ];
}
function dataFuture() {
  return [
      { name: 'Contributions Growth',   legendIndex: 1, marker: defcircle, colorIndex: colorContributionsGrowth, data: contributionGrowth },
      { name: contributionsText,                legendIndex: 2, marker: defcircle, colorIndex: colorContributions, data: contributions }
    ];
}
function dataBalance() {
    return [
      { name: 'Account Growth',         legendIndex: 1, marker: defcircle, colorIndex: colorBalanceGrowth, data: accountGrowth },
      { name: 'Existing Balance&nbsp;&nbsp;&nbsp;',             legendIndex: 2, marker: defcircle, colorIndex: colorBalance, data: accountBalance }
    ];
}

function savingsGrowTooltip(me) {
  // console.log(me);
  var rc = tooltipHeader(getMonthYearName(me.x+1000000000));
  rc = '';
  var points = me.points;
  // console.log(me);
  var total = 0.0;
  for (var i = points.length-1; i >= 0; i--) {
    var lColor = points[i].series.colorIndex;
    var name = points[i].series.name;
    total += points[i].y;
    rc += tooltipLegendRow(lColor, '', name, '', CurrencyFormatted(points[i].y, 'cent'));
  }
  // rc += tooltipLegendRow('white', '', '--------------------', '', '------------');
  // rc += tooltipLegendRow('white', '', 'Total Projected Balance', '', CurrencyFormatted(total, 'cent'));
  rc = tooltipRowGroup(rc);
  rc = tooltipHeader('Year '+me.x)+rc;
  rc = tooltipDiv('savings-grow-tooltip', rc);
  // console.log(rc);
  return rc;
}

function makeChart(tickInterval, rs, gs, isMatching, matchFootnoteChart) {

  if(typeof(tickInterval)==='undefined') tickInterval = 5;
  var plotdata = dataBoth();
  if (gs == 'futureOnly') { plotdata = dataFuture(); }
  if (gs == 'balanceOnly') { plotdata = dataBalance(); }
  if (rs == 'BP') { plotdata = dataBalance(); }

  return  new Highcharts.Chart({
    credits: { enabled: false },
    chart: {
      renderTo: 'chartResult',
      type: 'area',
      spacingBottom: 25,
      styledMode: true,
    },
    legend: {
      enabled: true,
      reversed: true,
      // align: 'right',
      // layout: 'vertical',
      // verticalAlign: 'top',
      useHTML: true,
      // margin: 8,
      //    x: -3,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
      borderColor: '#CCC',
      symbolWidth: 10,
      symbolPadding: 3,
      shadow: false
    },
    title: {
//      x: -40,
//      margin: 30,
//      text: 'Projected Savings Growth'
      text: ''
    },
//    subtitle: { text: 'Subtitle' },
    xAxis: {
      tickInterval: tickInterval,
      tickmarkPlacement: 'on',
      title: { text: 'Years' }
    },
    yAxis: {
      title: { text: '' },
      labels: {
        formatter: function() {
          return CurrencyFormatted(this.value, 'no_cent')
        }
      }
    },
    tooltip: {
      formatter: function () {
        return savingsGrowTooltip(this);
      },
      shared: true,
      useHTML: true
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        lineColor: '#666666',
        lineWidth: 1,
        events: { legendItemClick: function () { return false; } }      // disable disabling of plot items
      }
    },
    series: plotdata
  });
}

// alert('functions done');
var chart;
var accountBalance = null;
var accountGrowth = null;
var contributions = null;
var contributionGrowth = null;
var total = null;
var salary = null;

function clearArrays() {
  accountBalance = new Array();
  accountGrowth = new Array();
  contributions = new Array();
  contributionGrowth = new Array();
  total = new Array();
  salary = new Array();
}

function buildTable(growthSelector, contributionsText, yearsToGo) {
  // build table header
  var headerHTML = sideScrollTH('', 'col', '', 'Year', false);
  if (growthSelector != 'futureOnly') {
    // headerHTML += sideScrollTH('', 'col', mapServerFundClassName(colorBalance), 'Existing Balance', false);
    // headerHTML += sideScrollTH('', 'col', mapServerFundClassName(colorBalanceGrowth), 'Account Balance Growth', false);
    headerHTML += sideScrollTH('', 'col', 'border-balance-existing', 'Existing Balance', false);
    headerHTML += sideScrollTH('', 'col', 'border-balance-growth', 'Account Balance Growth', false);
  }
  if (growthSelector != 'balanceOnly') {
    // headerHTML += sideScrollTH('', 'col', mapServerFundClassName(colorContributions), contributionsText, false);
    // headerHTML += sideScrollTH('', 'col', mapServerFundClassName(colorContributionsGrowth), 'Contribution Growth', false);
    headerHTML += sideScrollTH('', 'col', 'border-contributions', contributionsText, false);
    headerHTML += sideScrollTH('', 'col', 'border-contributions-growth', 'Contribution Growth', false);
  }
  headerHTML += sideScrollTH('', 'col', '', 'Total Projected Balance', false);
  headerHTML = sideScrollWrapper('', 'tr', '', '', headerHTML, false);
  headerHTML = sideScrollWrapper('  ', 'thead', '', '', headerHTML, true);

  var bodyHTML = '';
  for (var year = 0; year <= yearsToGo; year++) {
    row = sideScrollTH('', 'row', '', year, false);
    if (growthSelector != 'futureOnly') {
      row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(accountBalance[year], 'cent'), false);
      row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(accountGrowth[year], 'cent'), false);
    }
    if (growthSelector != 'balanceOnly') {
      row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(contributions[year], 'cent'), false);
      row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(contributionGrowth[year], 'cent'), false);
    }
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(total[year]), false);
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);
  var tableHTML = sideScrollTable('', 'savings-grow-table', '', headerHTML+bodyHTML, true, '');
  return tableHTML;
}

function calculateResults() {
  clearArrays();

  // These variables hold values used in the calculations
  var agency = 'agency';
  var isMatching = false;
  var rs = getRetirementSystem();
  contributionsText = 'Contributions';
  if ((rs == 'FERS') || (rs == 'USBRS')) {
    contributionsText = 'Contributions<sup>1</sup>';
    isMatching = true;
    if (rs == 'USBRS') { agency = 'service'; }
  }
  var matchFootnoteChart = '1. Includes any '+agency+' contributions';
  var matchFootnoteTable = "<div id='footnotes'>\n  <ol>    <li>Includes any "+agency+" contributions</li>\n  </ol>\n</div>";

  // console.log('rs '+rs, 'agency '+agency);

  var amountToUse = getPosInteger('amountToUse', 0);
  var yearsToContribute = getPosInteger('yearsToContribute', 0);
  var DIEMSdate = $.trim($('#DIEMSdate').val());
  var DIEMSdate2 = flatpickr.parseDate(DIEMSdate, "F j, Y");
  // console.log(DIEMSdate2);
  if (DIEMSdate2) { DIEMSdate2 = parseInt(flatpickr.formatDate(DIEMSdate2, "Ymd")); }
  var matchDelay = 0;
  if (DIEMSdate2 < 20180101) { matchDelay = 2; }
  var annualPay = getPosInteger('annualPay', 0);
  var paySchedule = getPaySchedule();
  var contributionSelector = getContributionSelector();
  var annualPayFixed = getPosFloat('annualPayFixed', 0.0);
  var annualPayPercent = getPosFloat('annualPayPercent', 0.0);
  var annualPayIncreasePercent = getPosFloat('annualPayIncreasePercent', 0.0);
  var yearsToGo = getPosInteger('yearsToGo', 0);
  var yearsServed = getPosInteger('yearsServed', 0);
  var catchupAmount = getPosInteger('catchupAmount', 0);
  var rateOfReturn = getPosFloat('rateOfReturn', 0.0);

  var growthSelector = getGrowthSelector();
  if (rs == 'BP') { growthSelector = 'balanceOnly'; }
  if (growthSelector == 'futureOnly') { amountToUse = 0; }
  if (growthSelector == 'balanceOnly') { yearsToContribute = 0; }
  // console.log(growthSelector);
  // console.log(amountToUse,yearsToContribute,matchDelay,DIEMSdate,DIEMSdate2,annualPay,paySchedule,annualPayPercent,annualPayIncreasePercent,yearsToGo,yearsServed,catchupAmount,rateOfReturn);

  // loop control
  var periodLength = get_pay_freq(paySchedule);
  if (rs == 'US') { periodLength = 12.0; }
  if (rs == 'USBRS') { periodLength = 12.0; }
  if (rs == 'BP') { periodLength = 1.0; }
  var period = 0;
  var year = 0;
  var returnRate = rateOfReturn / 100.0;
  returnRate = Math.pow(1 + returnRate, 1.0 / periodLength) - 1.0;
  // console.log(periodLength, returnRate);
  var annualPayRate = annualPayPercent / 100.0;
  if (rs == 'FERS') {
    var fixedPercent = annualPayFixed / annualPay;
    fixedPercent = FERSmatch(fixedPercent);
    annualPayFixed = annualPay * fixedPercent;
    annualPayRate = FERSmatch(annualPayRate);
  }
  if (rs == 'BP') { yearsToContribute = 0; }
  // annualPayRate = annualPayRate / periodLength;
  var annualPayAmt = 0.0;
  var annualPayIncreaseRate = (annualPayIncreasePercent) / 100.0 + 1.00;
  // deal with rounding of catchup
  var catchupPaycheck = parseInt(catchupAmount / periodLength * 100.0) / 100.0;
  var catchupCatchup = parseInt(100 * parseFloat(catchupAmount - parseFloat(catchupPaycheck) * periodLength).toFixed(2));

  // alert(catchupPaycheck + '  ' + catchupCatchup);
  accountBalance[year] = amountToUse;
  accountGrowth[year] = 0.0;
  contributions[year] = 0.0;
  contributionGrowth[year] = 0.0;
  total[year] = accountBalance[year] + accountGrowth[year] + contributions[year] + contributionGrowth[year];
  salary[year] = parseFloat((annualPay / periodLength).toFixed(2));
  salary[year+1] = salary[year];

  for (year = 1; year <= yearsToGo; year++) {
    accountBalance[year] = amountToUse;
    accountGrowth[year] = accountGrowth[year-1];
    contributions[year] = contributions[year-1];
    contributionGrowth[year] = contributionGrowth[year-1];
    if (year > 1) { salary[year] = parseFloat((salary[year-1] * annualPayIncreaseRate).toFixed(2)); }
    for (period = 1; period <= periodLength; period++) {
      contributionGrowth[year] += parseFloat(((contributions[year] + contributionGrowth[year]) * returnRate).toFixed(2));
      if (year <= yearsToContribute) {
        // console.log('1', yearsServed, year, period, yearsToContribute);
        if (rs == 'USBRS') {
          // console.log('2', year, period, annualPayRate, salary[year]*annualPayRate, parseFloat(salary[year] * USBRSmatch(year+yearsServed, period, annualPayRate).toFixed(2)), catchupPaycheck);
          annualPayAmt = parseFloat((salary[year] * USBRSmatch(year+yearsServed+matchDelay, period, annualPayRate)).toFixed(2));
        } else {
          if (contributionSelector == 'contributionFixed') {
            annualPayAmt = parseFloat((annualPayFixed / periodLength).toFixed(2));
          } else {
            annualPayAmt = parseFloat((salary[year] * annualPayRate).toFixed(2));
          }
        }
        // console.log('contrib is ' + annualPayAmt + ' and ' + parseFloat(catchupPaycheck));
        contributions[year] += annualPayAmt + parseFloat(catchupPaycheck);
        if (period <= catchupCatchup) { contributions[year] += 0.01; }
      }
    }
    accountGrowth[year] += parseFloat(((accountBalance[year-1] + accountGrowth[year-1]) * (rateOfReturn / 100.0)).toFixed(2));
    total[year] = accountBalance[year] + accountGrowth[year] + contributions[year] + contributionGrowth[year];
  }
  var table = buildTable(growthSelector, contributionsText, yearsToGo);

  // if (isMatching) { table += matchFootnoteTable; }
  if (isMatching) { $('#show-data-footnote').html(matchFootnoteTable); }
    else { $('#show-data-footnote').html(''); }
  $('#savings-grow-table').html(table);

  $('#existing-balance').html(CurrencyFormatted(accountBalance[yearsToGo], 'cent'));
  $('#balance-growth').html(CurrencyFormatted(accountGrowth[yearsToGo], 'cent'));
  $('#future-contributions').html(CurrencyFormatted(contributions[yearsToGo], 'cent'));
  $('#future-growth').html(CurrencyFormatted(contributionGrowth[yearsToGo], 'cent'));
  $('#final-total').html('<strong>' + CurrencyFormatted(total[yearsToGo], 'cent') + '</strong>');


  var tickInterval = parseInt(yearsToGo / 10);
  chart = makeChart(tickInterval, rs, growthSelector, isMatching, matchFootnoteChart);
  // if (isMatching) {
  //   chart.renderer.text(matchFootnoteChart, chart.legend.group.translateX+5, chart.chartHeight-15).css({ fontSize: '12', textAlign: 'left'}).add();
  //   //chart.renderer.label(matchFootnoteChart, chart.legend.group.translateX+5, chart.chartHeight-15, null, null, null, true).css({ fontSize: '12', textAlign: 'left'}).add();
  // }
}

-->
</script>
