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
    calculate();

    // $('#account-depleted').html(CurrencyFormatted(contributionLimit, 'no_cent'));
    gotoAnchor('panel-3');
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

var payments = [];
var balance = [];
var numYears = 40;
var yearsTilDepleted = 0;
var monthsRemainder = 1;
var lastPaymentYear = 1000;

function calculate() {
  yearsTilDepleted = 0;
  monthsRemainder = 1;
  lastPaymentYear = 1000;
  var accountAmount = getPosInteger('accountAmount', 0);
  var choice = getFrequency();
  var frequency = choice[0];
  var periods = choice[2];
  var rateOfReturn = parseFloat($('#rateOfReturn').val());
  var amountToReceive = getPosInteger('amountToReceive', 0);
  // console.log('calculate ', accountAmount, periods, frequency, rateOfReturn, amountToReceive);

  var rate = rateOfReturn / 100.0;
  var periodRate = (Math.pow(1.0 + rate, 1.0 / periods) - 1.0); // annualize rate per period
  var rate = periods * periodRate; //annualized rate for year
  // console.log(numYears, periodRate, rate);

  // number of payments in upper table
  $('#deplete-text').html('Will deplete your account in');
  var fmonths = -1.0 * Math.log(1 - periodRate * accountAmount / (1.0 * amountToReceive));
  fmonths /= Math.log(1 + periodRate);
  fmonths = Math.trunc(fmonths) + 1;
  if (isNaN(fmonths)) {
    setPaymentsLength(1000, 1000, periods);
    $('#deplete-text').html('Will never deplete your account. See your <a href="#projected-year-end-balances">projected year-end balances</a> below.');
    $('#account-depleted').html('--');
  } else {
    var fyears = Math.trunc(fmonths/periods);
    fmonths = fmonths - fyears * periods;
    setPaymentsLength(fyears, fmonths, periods);
  }

  var curPayment = amountToReceive;
  var curBalance = accountAmount;
  for (var year = 1; year <= numYears+10; year++) {
    payments[year] = curPayment;
    for (var period = 1; period <= periods; period++) {
      if (curBalance > 0.0) {
        if (curBalance < curPayment) {
          yearsTilDepleted = year-1;
          monthsRemainder = period * 12 / periods;
          curBalance = 0.0;
          curPayment = 0.0;
        } else {
          curBalance -= curPayment;
          curBalance = parseFloat((curBalance * (1.0 + periodRate)).toFixed(2));
        }
      } else curPayment = 0;
    }
    balance[year] = curBalance;
  }
  while (monthsRemainder >= 12) { monthsRemainder -= 12; yearsTilDepleted += 1; }
  lastPaymentYear = yearsTilDepleted;
  if (monthsRemainder > 0) { lastPaymentYear++; }
  if (curBalance <= 0.0) { setPaymentsLength(yearsTilDepleted, monthsRemainder, periods); }

  // console.log('last year ', lastPaymentYear, yearsTilDepleted, monthsRemainder);
  $('#resultSelector0-table').html(buildTable());

  var chart = buildChart('resultSelector0-graph', payments, balance);
}

function setPaymentsLength(years, months, periods) {
  var y = ' years';
  var p = 'payments';
  var footnote = '';
  var installments = months;
  if (periods == 4) { installments /= 3; }
  if (years == 1) { y = ' year'; }
  if (installments == 1) { p = 'payment'; }
  if (months <= 0) {
    $('#account-depleted').html(years + y);
    footnote = 'The last full year you will receive fixed dollar installment payments will be year ' + years + '.';
  } else {
    $('#account-depleted').html(years + y + ',<br>' + months + ' months');
    footnote = 'You will recieve your last ' + installments + ' installment '+p+' in year ' + (years+1) + '.';
  }
  if (years >= (numYears+10)) { $('#installment-payment-footnote').html(''); } else { $('#installment-payment-footnote').html(footnote); }
}

function buildTable() {
  // build table header
  var choice = getFrequency();
  if (choice[0] == 'Annually') { choice[0] = 'Annual'; }
  var headerHTML = sideScrollTH('', 'col', '', 'Year', false);
  headerHTML += sideScrollTH('', 'col', '', choice[0] + ' payment', false);
  headerHTML += sideScrollTH('', 'col', '', 'Year-end balance', false);
  headerHTML = sideScrollWrapper('', 'tr', '', '', headerHTML, false);
  headerHTML = sideScrollWrapper('  ', 'thead', '', '', headerHTML, true);

  var bodyHTML = '';
  for (var year = 1; year <= numYears; year++) {
    row = sideScrollTH('', 'row', '', year, false);
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(payments[year]), false);
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(balance[year]), false);
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
    if (balance[year] <= 0.0) { break; }
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);
  var tableHTML = sideScrollTable('', 'installment-payment-table', '', headerHTML+bodyHTML, true, '');
  return tableHTML;
}

function buildChart(divName, payments, balance) {
  var yearEndBalance = [];
  for (var i = 1; i <= numYears; i++) {
    yearEndBalance.push(balance[i]);
    if (balance[i] <= 0.0) { break; }
  }
  var chart = Highcharts.chart(divName, {
      chart: {
          type: 'area'
      },
      credits: { enabled: false },
      legend: { enabled: false },
      accessibility: {
          description: 'Image description: Based on the user input, the year end balance for the account is shown.'
      },
      title: { text: null },
      xAxis: {
          title: { text: 'Payment year' },
          allowDecimals: false,
          crosshair: true,
          labels: { formatter: function () { return this.value; } },
          accessibility: {
              rangeDescription: 'Number of years making payments. '
          }
      },
      yAxis: {
          title: { text: 'Year-end balance' },
          labels: { formatter: function () { return CurrencyFormatted(this.value); } }
      },
      tooltip: {
        formatter: function () {
          return '<strong>Year</strong> ' + this.x + '<br>' + this.series.name + ': ' + CurrencyFormatted(this.y);
        }
      },
      plotOptions: {
          area: {
              pointStart: 1,
              marker: { enabled: false, symbol: 'circle', radius: 2, states: { hover: { enabled: true } } }
          }
      },
      series: [{ name: 'Year-end balance', data: yearEndBalance, color: '#89A54E' }]
  });
  return chart;
}

-->
</script>
