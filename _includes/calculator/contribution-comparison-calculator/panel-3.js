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
    if (cccEqualContributionChecked()) {
      $('#checked-effect').removeClass('hide');
      $('#not-checked-effect').addClass('hide');
      $('#checked-balance').removeClass('hide');
      $('#not-checked-balance').addClass('hide');
      $('#not-checked-income').addClass('hide');
    } else {
      $('#checked-effect').addClass('hide');
      $('#not-checked-effect').removeClass('hide');
      $('#checked-balance').addClass('hide');
      $('#not-checked-balance').removeClass('hide');
      $('#not-checked-income').removeClass('hide');
    }
    calculateResults();
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

function calculateResults() {
  var cccYearsUntilRetirement = getPosInteger('cccYearsUntilRetirement', 0);
  var cccYearsInRetirement = getPosInteger('cccYearsInRetirement', 0);
  var cccSalary = getPosInteger('cccSalary', 0) * 1.0;
  var cccInterestRate = getPosFloat('cccInterestRate', 0.0);
  var cccContributions = getPosFloat('cccContributions', 0.0);
  var cccTaxRateNow = getPosFloat('cccTaxRateNow', 0.0);
  var cccTaxRateLater = getPosFloat('cccTaxRateLater', 0.0);
  var payFrequency = get_pay_freq(getPaySchedule());
  var showEqual = cccEqualContributionChecked();

  var contributions = cccSalary * (cccContributions / 100);
  var interestRateFactor = cccInterestRate / 100.0;
  var taxRateNowFactor = cccTaxRateNow / 100.0;
  var taxRateLaterFactor = cccTaxRateLater / 100.0;

  var rothContributionPercent = -1;
  var rothContributions = -1;
  var contributionsTraditionalPerCheck = -1;
  var contributionsRothPerCheck = -1;
  var contributionsSpecialPerCheck = -1;
  var paycheckReductionTraditional = -1;
  var paycheckReductionRoth = -1;
  var interestRateSpecialFactor = -1;
  var balanceTraditional = -1;
  var balanceRoth = -1;
  var balanceSpecial = -1;
  var annuityTraditional = -1;
  var annuityRoth = -1;
  var annuitySpecial = -1;
  var basePaycheck = -1;

  if (showEqual) {
    //Checkbox checked case
    //Figure out how much Roth can contribute to keep costs even based on tax rate
    rothContributionPercent = contributions * (1.0 - taxRateNowFactor) * 100.0 / cccSalary;
    rothContributions = cccSalary / 100.0 * rothContributionPercent;

    contributionsTraditionalPerCheck = contributions / payFrequency;
    contributionsRothPerCheck = cccSalary / payFrequency * rothContributionPercent / 100.0;
    paycheckReductionTraditional = contributionsRothPerCheck;
    paycheckReductionRoth = contributionsRothPerCheck;

    //Impact Later: balances and annuities
    balanceTraditional = (contributions * (Math.pow(1.0 + (interestRateFactor / 12.0), cccYearsUntilRetirement * 12.0) - 1.0)) / interestRateFactor;
    balanceRoth = (contributionsRothPerCheck * payFrequency * (Math.pow(1.0 + (interestRateFactor / 12.0), cccYearsUntilRetirement * 12.0) - 1.0)) / interestRateFactor;

    annuityTraditional = balanceTraditional * (1 - taxRateLaterFactor) / ((1.0 - Math.pow(1.0 + (interestRateFactor / 12), -(cccYearsInRetirement * 12))) / interestRateFactor);
    annuityRoth = balanceRoth / ((1.0 - Math.pow(1.0 + (interestRateFactor / 12), -(cccYearsInRetirement * 12))) / interestRateFactor);
  } else {
    //Box not checked = same contributions, Roth costs more
    basePaycheck = cccSalary / payFrequency * (1.0 - taxRateNowFactor);
    rothContributionPercent = cccContributions;

    //Contributions will be the same here
    contributionsTraditionalPerCheck = contributions / payFrequency;
    contributionsRothPerCheck = contributions / payFrequency;

    //But Roth will cost more
    paycheckReductionTraditional = basePaycheck - ((cccSalary - contributions) / payFrequency * (1 - taxRateNowFactor));
    paycheckReductionRoth = basePaycheck - ((cccSalary * (1 - taxRateNowFactor) / payFrequency) - (contributions / payFrequency));

    //We also have to run a pretend IRA to invest the same amount as the extra Roth cost
    contributionsSpecialPerCheck = paycheckReductionRoth - paycheckReductionTraditional;
    interestRateSpecialFactor = interestRateFactor * (1.0 - taxRateNowFactor);

    //Impact Later: Work out the balance and annuities
    balanceTraditional = (contributions * (Math.pow(1.0 + (interestRateFactor / 12.0), cccYearsUntilRetirement * 12.0) - 1.0)) / interestRateFactor;
    balanceRoth = balanceTraditional;
    balanceSpecial = (contributionsSpecialPerCheck * payFrequency) * (Math.pow(1.0 + (interestRateSpecialFactor / 12.0), cccYearsUntilRetirement * 12.0) - 1.0) / interestRateSpecialFactor;

    annuityRoth = balanceRoth / ((1.0 - Math.pow(1.0 + (interestRateFactor / 12), -(cccYearsInRetirement * 12))) / interestRateFactor);
    annuityTraditional = annuityRoth * (1.0 - taxRateLaterFactor);
    annuitySpecial = balanceSpecial / ((1 - Math.pow(1.0 + (interestRateSpecialFactor / 12.0), -(cccYearsInRetirement * 12))) / interestRateSpecialFactor);
  }

  // fill table
  $('#grossPaycheck1').html(CurrencyFormatted(-paycheckReductionTraditional, 'cent'));
  $('#grossPaycheck2').html(CurrencyFormatted(-paycheckReductionRoth, 'cent'));
  $('#grossYear1').html(CurrencyFormatted(-paycheckReductionTraditional * payFrequency, 'cent'));
  $('#grossYear2').html(CurrencyFormatted(-paycheckReductionRoth * payFrequency, 'cent'));
  $('#contribPercent1').html(cccContributions.toFixed(1) + '%');
  $('#contribPercent2').html(rothContributionPercent.toFixed(1) + '%');
  $('#contribCheck1').html(CurrencyFormatted(contributionsTraditionalPerCheck, 'cent'));
  $('#contribCheck2').html(CurrencyFormatted(contributionsRothPerCheck, 'cent'));
  $('#contribYear1').html(CurrencyFormatted(contributionsTraditionalPerCheck*payFrequency, 'cent'));
  $('#contribYear2').html(CurrencyFormatted(contributionsRothPerCheck*payFrequency, 'cent'));

  chart1 = buildChart(balanceTraditional, balanceRoth, 'account-balance-chart', 'Gross Dollars', true, 'Account Balance');
  chart2 = buildChart(annuityTraditional, annuityRoth, 'annual-income-chart', 'Net Dollars', true, 'Annual Income');

}

var chart1 = null;
var chart2 = null;
var colorTrad = '#c67309';
var colorRoth = '#1e6ea0';

function strong(txt) { return '<strong>' + txt + '</strong>'; }
function buildChart(xval, yval, targetDiv, yAxisTitle, showValues, titleText) {

  return  new Highcharts.chart(targetDiv, {
      chart: { type: 'column' },
      title: { text: titleText },
      credits: false,
      // subtitle: { text: yAxisTitle },
      xAxis: { labels: { enabled: false }, tickLength: 0 },
      yAxis: {
          min: 0,
          title: { text: strong(yAxisTitle) }
      },
      legend: { itemDistance: 100, x: 15 },
      tooltip: {
        formatter: function() {
            return this.series.name +'<br/>'+ strong(CurrencyFormatted(this.y, 'cent'));
            },
          // shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
            dataLabels: {
              enabled: true, crop: false, overflow: 'none',
              formatter: function() { return CurrencyFormatted(this.y, 'cent'); }
            },
            pointPadding: 0.2,
            borderWidth: 0
          }
      },

      series: [
        { name: 'Traditional', data: [ xval ], color: colorTrad },
        { name: 'Roth', data: [ yval ], color: colorRoth }]
  });
}

function buildChart1(xval, yval, targetDiv, yAxisTitle, showValues, titleText){

    Highcharts.visualize = function(options) {
        options.xAxis.categories = [];
        options.xAxis.categories.push('Traditional');
        options.xAxis.categories.push('Roth');
        options.credits = false;
        options.series = [];
        options.series[0] = { name: 'Traditional', data: [xval], color: '#c67309', dataLabels: { enabled: true } };
        options.series[1] = { name: 'Roth', data: [yval], color: '#1e6ea0', dataLabels: { enabled: true } };
        var chart = new Highcharts.Chart(options);
        }

    var options = {
      // colors: [ '#c67309', '#1e6ea0' ],
        chart: {
            renderTo: targetDiv,
            type: 'column',
            height: 230,
            width: 220,
            reflow: false,
            borderRadius: 0,
            plotBackgroundColor: '#EDE9E6',
            backgroundColor: '#FFFFFF'
            },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: showValues,
                    rotation: 270,
                    color: 'red',
                    y: 75,
                    formatter: function(){
                        return CurrencyFormatted(this.y, 'cent');
                        }
                    }
                }
            },
        legend: {
            enabled: true
            },
        title: {
            text: titleText,
            x: 25,
            style: {
                color: '#494947',
                fontFamily: 'Verdana',
                fontSize: '12px',
                fontWeight: 'bold'
                }
            },
        xAxis: {
            lineWidth: 0,
            minorTickLength: 20,
            tickLength: 0,
            lineWidth: 0,
            offset: 8,
            labels: {
                enabled: false,
                style: {
                    color: '#494947',
                    fontFamily: 'Verdana',
                    fontSize: '12px',
                    fontWeight: 'bold'
                    },
                formatter: function(){
                    return this.value.toString().replace(' ', '<br>');
                    }
                }
           },
        yAxis: {
            title: {
                text: yAxisTitle,
                style: {
                    color: '#494947',
                    fontFamily: 'Verdana',
                    fontSize: '12px',
                    fontWeight: 'bold'
                    }
                },

            gridLineWidth: 3
            },
        tooltip: {
            formatter: function() {
                return this.series.name +'<br/>'+
                '<b>' + CurrencyFormatted(this.y, 'cent') + '</b>';
                },
            style: {
                padding: '10px',
                color: '#222222'
                },
            borderColor: '#c67309'
            }
        };
    Highcharts.visualize(options);
    }//buildChart
-->
</script>
