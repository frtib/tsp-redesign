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

// Calculate how much FERS will match users contrib (note: auto 1% is added elsewhere)
function FERSmatching(grossPay, total_contrib) {
  var grossPay1 = grossPay * 0.01;
  var grossPay3 = grossPay * 0.03;
  var grossPay5 = grossPay * 0.05;
  var contribPercent = total_contrib / grossPay;

  if (contribPercent <= 0.00) { return 0.0; }

  if (contribPercent >= 0.05) { return grossPay5 - grossPay1; }

  if (contribPercent <= 0.03) { return total_contrib; }

  // all that's left is between 3% and 5%
  var over3 = total_contrib - grossPay3;
  return grossPay3 + (0.5 * over3);
}

// Calculate how much USBRS will match users contrib (note: auto 1% is added elsewhere)
// same as FERS for now
function USBRSmatching(grossPay, total_contrib) {
  return FERSmatching(grossPay, total_contrib);
}

if (1) {
  var growthbar12;
  // These arrays hold the data that is plotted
  var grossPaycheck = null;
  var net1Paycheck = null;
  var net2Paycheck = null;

  var taxes1 = null;
  var taxes2 = null;
  var beforetaxes = null;
  var aftertaxes = null;

  var trad1Contribution = null;
  var roth1Contribution = null;
  var trad1Growth = null;
  var roth1Growth = null;

  var trad2Contribution = null;
  var trad2Growth = null;
  var roth2Contribution = null;
  var roth2Growth = null;

  var totalTrad1 = 0.0;
  var totalTrad2 = 0.0;
}

function clearArrays() {
  grossPaycheck = new Array();
  net1Paycheck = new Array();
  net2Paycheck = new Array();

  taxes1 = new Array();
  taxes2 = new Array();
  beforetaxes = new Array();
  aftertaxes = new Array();

  trad1Contribution = new Array();
  roth1Contribution = new Array();
  trad1Growth = new Array();
  roth1Growth = new Array();

  trad2Contribution = new Array();
  trad2Growth = new Array();
  roth2Contribution = new Array();
  roth2Growth = new Array();

  totalTrad1 = 0.0;
  totalTrad2 = 0.0;
  EMPauto = 0.0;
  EMPmatch1 = 0.0;
  EMPmatch2 = 0.0;
}
function initArrayYear(newColumn, oldColumn) {
  // set starting value for new column (year) in arrays, i.e. copy last years value,
  //   but parse it so we can add to it in the paycheck loop
  grossPaycheck[newColumn] = parseFloat(grossPaycheck[oldColumn]);
  net1Paycheck[newColumn] = parseFloat(net1Paycheck[oldColumn]);
  net2Paycheck[newColumn] = parseFloat(net2Paycheck[oldColumn]);

  taxes1[newColumn] = parseFloat(taxes1[oldColumn]);
  taxes2[newColumn] = parseFloat(taxes2[oldColumn]);
  beforetaxes[newColumn] = parseFloat(beforetaxes[oldColumn]);
  aftertaxes[newColumn] = parseFloat(aftertaxes[oldColumn]);

  trad1Contribution[newColumn] = parseFloat(trad1Contribution[oldColumn]);
  roth1Contribution[newColumn] = parseFloat(roth1Contribution[oldColumn]);
  trad1Growth[newColumn] = parseFloat(trad1Growth[oldColumn]);
  roth1Growth[newColumn] = parseFloat(roth1Growth[oldColumn]);

  trad2Contribution[newColumn] = parseFloat(trad2Contribution[oldColumn]);
  trad2Growth[newColumn] = parseFloat(trad2Growth[oldColumn]);
  roth2Contribution[newColumn] = parseFloat(roth2Contribution[oldColumn]);
  roth2Growth[newColumn] = parseFloat(roth2Growth[oldColumn]);
}
function roundArrayYear(year) {
  // round each entry to nearest penny between years
  grossPaycheck[year] = grossPaycheck[year].toFixed(2);
  net1Paycheck[year] = net1Paycheck[year].toFixed(2);
  net2Paycheck[year] = net2Paycheck[year].toFixed(2);

  taxes1[year] = taxes1[year].toFixed(2);
  taxes2[year] = taxes2[year].toFixed(2);
  beforetaxes[year] = beforetaxes[year].toFixed(2);
  aftertaxes[year] = aftertaxes[year].toFixed(2);

  trad1Contribution[year] = trad1Contribution[year].toFixed(2);
  roth1Contribution[year] = roth1Contribution[year].toFixed(2);
  trad1Growth[year] = trad1Growth[year].toFixed(2);
  roth1Growth[year] = roth1Growth[year].toFixed(2);

  trad2Contribution[year] = trad2Contribution[year].toFixed(2);
  trad2Growth[year] = trad2Growth[year].toFixed(2);
  roth2Contribution[year] = roth2Contribution[year].toFixed(2);
  roth2Growth[year] = roth2Growth[year].toFixed(2);
}

function calculateResults() {
  clearArrays();

  // values used in calculation loop below
  if (true) {
    var rs = getRetirementSystem();
    var maxpay_freq = get_pay_freq(getPaySchedule());
    var annualReturn = getPosFloat('annualReturn', 0.0);
    var fedAllowances = getPosInteger('fedAllowances', 0);
    var netPay = grossPay - beforeDeduction;

    var rate = 1.0 + (annualReturn / 100.0);
    var rate2 = 1 + ($('#annualReturn').val())/(100*maxpay_freq);
    // annualized rate
    rate = Math.pow(1 + $('#annualReturn').val() / 100.0, 1.0 / maxpay_freq);
    rate2 = Math.pow(1 + $('#annualReturn').val() / 100.0, 1.0 / maxpay_freq);
  }

  // get values for scenario table
  if (true) {
   var contribs = sumContributions();
   var amts = sumWithholding(contribs[2], contribs[4]);

   var grossPay = amts[1];
   var trad1amt = contribs[2];
   var roth1amt = contribs[3];
   totalTrad1 = trad1amt;
   var trad2amt = contribs[4];
   var roth2amt = contribs[5];
   totalTrad2 = trad2amt;
   var monthTax1 = amts[5];
   var monthTax2 = amts[6];
   var additionalWithholding = amts[2];
   var beforeDeduction = amts[3];
   var afterDeduction = amts[4];
   var match_contrib1 = (trad1amt + roth1amt);
   var match_contrib2 = (trad2amt + roth2amt);
   var total_contrib1 = (trad1amt + roth1amt);
   var total_contrib2 = (trad2amt + roth2amt);
   var totalDeducted1 = beforeDeduction + afterDeduction + additionalWithholding + monthTax1 + total_contrib1;
   var totalDeducted2 = beforeDeduction + afterDeduction + additionalWithholding + monthTax2 + total_contrib2;
   var netPay1 = grossPay - totalDeducted1;
   var netPay2 = grossPay - totalDeducted2;
   /* moved down below to make global
   var EMPauto = 0.0;
   var EMPmatch1 = 0.0;
   var EMPmatch2 = 0.0;
   */
   if (rs == 'FERS') {
     EMPauto = grossPay * 0.01;
     EMPmatch1 = FERSmatching(grossPay, match_contrib1);
     EMPmatch2 = FERSmatching(grossPay, match_contrib2);
   }
   if (rs == 'USBRS') {
     EMPauto = grossPay * 0.01;
     EMPmatch1 = USBRSmatching(grossPay, match_contrib1);
     EMPmatch2 = USBRSmatching(grossPay, match_contrib2);
   }
  }

  // set input values in scenario table
  if (true) {
    $('#grosspay1').html('<strong>' + CurrencyFormatted(grossPay) + '</strong>');
    $('#grosspay2').html('<strong>' + CurrencyFormatted(grossPay) + '</strong>');
    $('#trad1').html('-' + CurrencyFormatted(trad1amt));
    $('#trad2').html('-' + CurrencyFormatted(trad2amt));
    $('#roth1').html('-' + CurrencyFormatted(roth1amt));
    $('#roth2').html('-' + CurrencyFormatted(roth2amt));
    $('#federalTaxes1').html('-' + CurrencyFormatted(monthTax1));
    $('#federalTaxes2').html('-' + CurrencyFormatted(monthTax2));
    $('#addlFedTax1').html('-' + CurrencyFormatted(additionalWithholding));
    $('#addlFedTax2').html('-' + CurrencyFormatted(additionalWithholding));
    $('#otherTaxDeductions1').html('-' + CurrencyFormatted(beforeDeduction + afterDeduction));
    $('#otherTaxDeductions2').html('-' + CurrencyFormatted(beforeDeduction + afterDeduction));
    $('#totalDeduct1').html('<strong>-' + CurrencyFormatted(totalDeducted1) + '</strong>');
    $('#totalDeduct2').html('<strong>-' + CurrencyFormatted(totalDeducted2) + '</strong>');
    $('#netPay1').html('<strong>' + CurrencyFormatted(netPay1) + '</strong>');
    $('#netPay2').html('<strong>' + CurrencyFormatted(netPay2) + '</strong>');
    $('#totalContributions1').html(CurrencyFormatted(total_contrib1));
    $('#totalContributions2').html(CurrencyFormatted(total_contrib2));
    $('#agencyAutomatic1').html(CurrencyFormatted(EMPauto));
    $('#agencyAutomatic2').html(CurrencyFormatted(EMPauto));
    $('#agencyMatchingContributions1').html(CurrencyFormatted(EMPmatch1));
    $('#agencyMatchingContributions2').html(CurrencyFormatted(EMPmatch2));
    $('#TSPIncrease1').html('<strong>' + CurrencyFormatted(parseFloat(total_contrib1 +EMPauto + EMPmatch1)) + '</strong>');
    $('#TSPIncrease2').html('<strong>' + CurrencyFormatted(parseFloat(total_contrib2 + EMPauto + EMPmatch2)) + '</strong>');
    $('#annual-rate').html(annualReturn.toFixed(2) + '%');
  }

  // build data for 40 years
  // console.log('building arrays');
  // loop control
  var year = 0;
  var maxyear = 40;
  var pay_freq = 0;  // loop variable for each paycheck during year

  // init arrays
  if (true) {
    grossPaycheck[year] = grossPay;
    net1Paycheck[year] = netPay1;
    net2Paycheck[year] = netPay2;
    taxes1[year] = parseFloat(monthTax1);
    taxes2[year] = parseFloat(monthTax2);
    beforetaxes[year] = beforeDeduction;
    aftertaxes[year] = afterDeduction;

    trad1Contribution[year] = trad1amt + (EMPauto + EMPmatch1);
    roth1Contribution[year] = roth1amt;
    trad1Growth[year] = parseFloat(trad1amt + (EMPauto + EMPmatch1)).toFixed(2);
    roth1Growth[year] = parseFloat(roth1amt).toFixed(2);

    trad2Contribution[year] = trad2amt + (EMPauto + EMPmatch2);
    roth2Contribution[year] = roth2amt;
    trad2Growth[year] = parseFloat(trad2amt + (EMPauto + EMPmatch2)).toFixed(2);
    roth2Growth[year] = parseFloat(roth2amt).toFixed(2);
  }

  for (year = 1; year <= maxyear; year++) {
    initArrayYear(year, year-1);

    // paychecks for year loop
    for (pay_freq = 1; pay_freq <= maxpay_freq; pay_freq++) {
      // save values for the year
      //trad1Growth[year] = (trad1Growth[year]) * Math.pow(rate, 1.0/maxpay_freq);
      //roth1Growth[year] = (roth1Growth[year]) * Math.pow(rate, 1.0/maxpay_freq);
      //trad1Growth[year] = (trad1Contribution[year]) * Math.pow(rate2, year*maxpay_freq);
      //roth1Growth[year] = (roth1Contribution[year]) * Math.pow(rate2, year*maxpay_freq);
      trad1Growth[year] = (trad1Growth[year]) * rate2;
      roth1Growth[year] = (roth1Growth[year]) * rate2;

      //trad2Growth[year] = (trad2Growth[year]) * Math.pow(rate, 1.0/maxpay_freq);
      //roth2Growth[year] = (roth2Growth[year]) * Math.pow(rate, 1.0/maxpay_freq);
      //trad2Growth[year] = (trad2Contribution[year]) * Math.pow(rate2, year*maxpay_freq);
      //roth2Growth[year] = (roth2Contribution[year]) * Math.pow(rate2, year*maxpay_freq);
      trad2Growth[year] = (trad2Growth[year]) * rate2;
      roth2Growth[year] = (roth2Growth[year]) * rate2;
    }

    roundArrayYear(year);
  }

  var table = buildTable(maxyear);
  $('#paycheck-estimator-table').html(table);

  initPlotArrays();

  growthbar12 = makeChart(goodMax(maxyear), maxyear);
  // alert('growthbar12');
  // growthbar12 = makeChart(goodMax(maxyear), maxyear);
  // $.each(growthbar12.series[0].data, function(i, point){ console.log(point); point.series.legendItem.element.onmouseover = null; });

  // $('#option12year').val(39).trigger('change');
  showData(0);
  setGraph();
}

function buildTable(yearsToGo) {
  // build table header
  var headerHTML1 = sideScrollTH2('', 'col', '', 'rowspan="2"', 'Year', false);
  headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="2"', 'Scenario 1', false);
  headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="2"', 'Scenario 2', false);
  headerHTML1 = sideScrollWrapper('', 'tr', '', '', headerHTML1, false);
  var headerHTML2 = '';
  headerHTML2 += sideScrollTH('', 'col', '', 'Traditional', false);
  headerHTML2 += sideScrollTH('', 'col', '', 'Roth', false);
  headerHTML2 += sideScrollTH('', 'col', '', 'Traditional', false);
  headerHTML2 += sideScrollTH('', 'col', '', 'Roth', false);
  headerHTML2 = sideScrollWrapper('', 'tr', '', 'second-level', headerHTML2, false);
  var headerHTML = sideScrollWrapper('  ', 'thead', '', '', headerHTML1 + headerHTML2, true);

  var bodyHTML = '';
  for (var year = 0; year <= yearsToGo; year++) {
    row = sideScrollTH('', 'row', '', year, false);
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(trad1Growth[year]), false);
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(roth1Growth[year]), false);
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(trad2Growth[year]), false);
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(roth2Growth[year]), false);
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);
  // special colgroup because of 2-tier header
  var colgroup = '<colgroup><col class="column-width"></colgroup>';
  colgroup += '<colgroup span="2"></colgroup>';
  colgroup += '<colgroup span="2"></colgroup>';
  var tableHTML = sideScrollTable('', 'paycheck-estimator-table', '', headerHTML+bodyHTML, true, colgroup);
  return tableHTML;
}

var colorTrad = '#9C1B9C';
var colorAgency = '#58A4C3';
var colorRoth = '#EA6A17';
var colorGrowthTrad = '#C679DD';
var colorGrowthRoth = '#F4B55B';
var colors = new Array();
colors[0] = colorGrowthTrad;
colors[1] = colorGrowthTrad;
colors[2] = colorGrowthRoth;
colors[3] = colorAgency;
colors[4] = colorRoth;
colors[5] = colorTrad;

var EMPauto = 0.0;
var EMPmatch1 = 0.0;
var EMPmatch2 = 0.0;
var trad1Contributionplot = [];
var trad1Growthplot = [];
var roth1Contributionplot = [];
var roth1Growthplot = [];
var trad2Contributionplot = [];
var trad2Growthplot = [];
var roth2Contributionplot = [];
var roth2Growthplot = [];
var years = [];

// $("#slider").slider();
var growthbar12 = null;
var stack1 = 'Scenario 1';
// var stack2 = '2Roth';
var stack2 = 'Scenario 2';


// copy printable version of values to numerical data for chart
function initPlotArrays() {
  years[0] = 0;
  trad1Contributionplot[0] = parseFloat(trad1Contribution[1]);
  trad1Growthplot[0] = parseFloat(trad1Contribution[1]);
  roth1Contributionplot[0] = parseFloat(roth1Contribution[1]);
  roth1Growthplot[0] = parseFloat(roth1Contribution[1]);
  trad2Contributionplot[0] = parseFloat(trad2Contribution[1]);
  trad2Growthplot[0] = parseFloat(trad2Contribution[1]);
  roth2Contributionplot[0] = parseFloat(roth2Contribution[1]);
  roth2Growthplot[0] = parseFloat(roth2Contribution[1]);
  for (var i = 0; i < 40; i++) {
    years[i+1] = i+1;
    trad1Contributionplot[i+1] = parseFloat(trad1Contribution[i+1]);
    trad1Growthplot[i+1] = parseFloat(trad1Growth[i+1]);
    roth1Contributionplot[i+1] = parseFloat(roth1Contribution[i+1]);
    roth1Growthplot[i+1] = parseFloat(roth1Growth[i+1]);
    trad2Contributionplot[i+1] = parseFloat(trad2Contribution[i+1]);
    trad2Growthplot[i+1] = parseFloat(trad2Growth[i+1]);
    roth2Contributionplot[i+1] = parseFloat(roth2Contribution[i+1]);
    roth2Growthplot[i+1] = parseFloat(roth2Growth[i+1]);
  }
}
function goodMax(year) {
  // return Math.round(Math.max(parseFloat(trad1Growth[year]),parseFloat(roth1Growth[year]), parseFloat(trad2Growth[year]),parseFloat(roth2Growth[year])) * 1.07);
  return Math.round(Math.max(parseFloat(trad1Growth[year])+parseFloat(roth1Growth[year]), parseFloat(trad2Growth[year])+parseFloat(roth2Growth[year])) * 1.07);
}

function makeChart(chartMax, year) {

  if (year < 1) { year = 1; }
  if (year > 40) { year = 40; }
  var showMatchInLegend = false;
  if (EMPauto > 0.0) { showMatchInLegend = true; }

  return  new Highcharts.Chart({
            credits: { enabled: false },
            chart: {
                height: 400,
                spacingBottom: 20,
//              marginTop: 100,
//                zoomType: 'y',
//              redraw: function() { check_labels(); },
                type: 'column',
                renderTo: 'chartResult'
            },
            title: { text: null },
            xAxis: {
                categories: [' '],
//                categories: ['Scenario 1', 'Scenario 2'],
                labels: { y: 25, style: { font: '14px Helvetica', fontWeight: 'bold' } }
//              useHTML : true
            },
            yAxis: {
                min: 0, max: chartMax,
                title: { text: '' },
                startOnTick: false, endOnTick: false, alignTicks: false,
                gridLineWidth: 1, labels: { enabled: false },
                stackLabels: {
                    formatter: function() {
                        return '<strong>' + CurrencyFormatted(this.total) + '</strong>';
                    },
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        fontSize: '12pt',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }
            },
            legend: {
                useHTML: true,
                enabled: true,
                align: 'center',
                verticalAlign: 'bottom',
                // layout: 'vertical',
                margin: 8,
                x: -3,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                borderColor: '#CCC',
                symbolWidth: 10,
                symbolPadding: 3,
                // title: { text: 'Contribution type', style: { fontStyle: 'italic' } },
                title: { text: 'Contribution type', style: { fontStyle: 'bold' } },
                // reversed: true,
                shadow: false
            },
            tooltip: {
                positioner: function (labelWidth, labelHeight, point) {
                    var x = 212;
                    if ((this.chart.hoverSeries.data[0].series.stackKey).indexOf("Scenario2") >= 0) {
                        x = 88;
                    }
                    var y = 50;
                    if (point.plotY > 50) { y = point.plotY; }
                    if (point.plotY > 200) { y = 200; }
                    // if (point.plotX > 200) { return { x: 117, y: y }; }
                    return { x: x, y: y };
                },
                useHTML: true,
                borderColor: '#aaaaaa',
//              backgroundColor: 'white',
                formatter: function () {
                  return paycheckTooltip(this);
                },
            },
            plotOptions: {
                borderWidth: 0.1, shadow: false,
                column: {
                    shadow: false,
                    borderColor: '#444444',
                    pointWidth: 120,
                    pointPadding: 0.25,
                    groupPadding: 0.05,
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true, padding: 0,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                        formatter: function() {

                            if (this.y < 0) { return this.series.userOptions.stack; }
                            if (this.y == 0.0) { return ''; };
                            return '<strong>' + CurrencyFormatted(this.y) + '</strong>'; }
                    },
                    events: { legendItemClick: function () { console.log('denied'); return false; }}
                }
            },
            series: [{
                // name: '<b>Contribution Type</b>', stack: stack1, color: 'white', data: [0] }, {
                name: 'Roth growth', stack: stack1, color:  colorGrowthRoth,
                        data: [parseFloat(roth1Growth[year])-parseFloat(roth1Contribution[year])]
            }, {
                name: 'Roth growth', stack: stack2, color:  colorGrowthRoth, showInLegend: false,
                        data: [parseFloat(roth2Growth[year])-parseFloat(roth2Contribution[year])]
            }, {
                name: 'Roth**', stack: stack1, color: colorRoth,
                        data: [parseFloat(roth1Contribution[year])]
            }, {
                name: 'Roth**', stack: stack2, color: colorRoth, showInLegend: false,
                        data: [parseFloat(roth2Contribution[year])]
            }, {
                name: 'Traditional growth', stack: stack1, color: colorGrowthTrad,
                        data: [parseFloat(trad1Growth[year])-parseFloat(trad1Contribution[year])]
            }, {
                name: 'Traditional growth', stack: stack2, color: colorGrowthTrad, showInLegend: false,
                        data: [parseFloat(trad2Growth[year])-parseFloat(trad2Contribution[year])]
            }, {
                name: 'Traditional**', stack: stack1, color: colorTrad,
                        data: [totalTrad1]
            }, {
                name: 'Traditional**', stack: stack2, color: colorTrad, showInLegend: false,
                        data: [totalTrad2]
            }, {
                name: $('#orgText1').html()+' contributions', stack: stack1, color: colorAgency, showInLegend: showMatchInLegend,
                        data: [EMPauto + EMPmatch1]
            }, {
                name: $('#orgText2').html(), stack: stack2, color: colorAgency, showInLegend: false,
                        data: [EMPauto + EMPmatch2]
            }
/*            , {
              dataLabels: { verticalAlign: 'top', x: 0, y: 3, crop: false, color: '#666666', style: { fontWeight: 'bold', fontSize: '11pt' } },
                name: 'S1', stack: stack1, showInLegend: false, color: '#666666', data: [-0.00005]
            }, {
              dataLabels: { verticalAlign: 'top', x: 0, y: 3, crop: false, color: '#666666', style: { fontWeight: 'bold', fontSize: '11pt' } },
                name: 'S2', stack: stack2, showInLegend: false, color: '#666666', data: [-0.00006]

            }
*/
          ]
        });
}

var lastMax = -1;

function check_labels() {
  var i, color, align, height, x;
  var plotSizeY = growthbar12.plotSizeY/1000.0;
  var series = growthbar12.series;
  var length = series.length - 2;
  for (i = 1; i < length; i++) {
      color = series[i].options.dataLabels.color;
      align = series[i].options.dataLabels.align;
      height = parseInt((series[i].data[0].yBottom - series[i].data[0].plotY)/plotSizeY);
      x = series[i].options.dataLabels.x;

      if (height <= 30) {
        if (parseInt(i/2) % 2) {
          if (series[i].options.dataLabels.align != 'right') {
            series[i].options.dataLabels.align = 'right';
            series[i].options.dataLabels.x = -120;
            series[i].hide(); series[i].show();
          }
        } else {
          if (series[i].options.dataLabels.align != 'left') {
            series[i].options.dataLabels.align = 'left';
            series[i].options.dataLabels.x = 120;
            series[i].hide(); series[i].show();
          }
        }
      } else {
          if (series[i].options.dataLabels.align != null) {
            series[i].options.dataLabels.align = null;
            series[i].options.dataLabels.x = 0;
            series[i].hide(); series[i].show();
          }
      }
  }

}

function drawGraph() {
  var newyear = $('#option12year').val();
  var newMax = goodMax(newyear);
  growthbar12.destroy();
  growthbar12 = makeChart(newMax, newyear);
  lastMax = newMax;
  $('#option12year').val(newyear);
  check_labels();
}

$('#option12year').change(function() {
  var newyear = this.value;
  var zone = newyear;
  zone = Math.floor((zone-1)/10) * 10 + 10;
  zone = 40;
  // var newMax = goodMax(zone);
  var newMax = goodMax(newyear);

  growthbar12.destroy();
  growthbar12 = makeChart(newMax, newyear);
  lastMax = newMax;
  check_labels();
});

function setGraph() {
   //finish doing things - make sure graph is ready before setting init value
  $('#option12year').val(40);
  $('#option12year').trigger('change');
}

function paycheckTooltip(me) {
  // console.log(me);
  if (me.series.index < 0) { return null; }
  var idx = 0;
  var key = 'Scenario 2';
  if ((me.series.index % 2) <= 0 ) { key = 'Scenario 1'; }

  var rc = '';
  var data = me.series.xAxis.series;
  var name = '';

  rc = tooltipRowGroup(rc);
  rc = tooltipHeader(key)+rc;
  rc += tooltipRow('', '', '', '&nbsp;');

  // name = "<span style='float: right; color:"+'black'+"'>"+'Total'+"</span>";
  name = "<span style='color:"+'black'+"'>"+'Total'+"</span>";
  rc += tooltipRow('bold', name, 'bold', CurrencyFormatted(me.point.stackTotal, 'cent'));
  var j = me.series.index % 2;
  for (; j<data.length; j += 2) {
    if (data[j].points[idx].y > 0) {
      // name = "<span style='float: right; color:"+data[j].color+"'>"+data[j].name+"</span>";
      name = "<span style='color:"+data[j].color+"'>"+data[j].name+"</span>";
      rc += tooltipRow('bold', name, 'bold', CurrencyFormatted(data[j].points[idx].y));
    }
  }
  rc = tooltipDiv('paycheck-estimator-tooltip', rc);
  // console.log(rc);
  return rc;
}

-->
</script>
