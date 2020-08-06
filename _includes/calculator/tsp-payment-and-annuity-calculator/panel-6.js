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
    return true;
}
panelExit[{{ panelID }}] = function(panel) {
    return true;
}

function resultSetSelect() {
  var idList = ['resultSetOverview','resultSetMonthly','resultSetSingle','resultSetSpouse','resultSetOther'];
  idList.forEach(function(idx) {
     if ($('#'+idx).prop('checked')) { $('#section-'+idx).removeClass('hide'); } else { $('#section-'+idx).addClass('hide'); }
  });
}

// annualized interest rate, period (monthly) multiple returned
function monthlyCompoundFactor(yearlyRate, periods) {
  var mult = 1.0 + yearlyRate/100.0;
  var annualized = periods * (Math.pow(mult, 1.0/periods) - 1.0);
  return 1.0 + annualized / periods;
}

var userValues = {};
var factors = {};

var fdPayments = {};
var fdBalance = {};
var RMDpayment = {};
var lePayments = {};
var leBalance = {};
var start = 20;
var end = 60;
var periods = 12;
var increasingFactor = 1.03;

function tableHeader (tableName) {
  if (tableName == 'monthlyPayment') {
    var headerHTML1 = sideScrollTH2('', 'col', '', '', '', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="2"', 'Fixed dollar', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="2"', 'Life Expectancy', false);
    headerHTML1 = sideScrollWrapper('', 'tr', '', '', headerHTML1, false);
    var headerHTML2 = '';
    var headerHTML2 = sideScrollTH('', 'col', '', 'Age', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'Payment', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'Year-end balance', false);
    // if (RMDflag) { headerHTML2 += sideScrollTH('', 'col', '', 'RMD payment', false); }
    headerHTML2 += sideScrollTH('', 'col', '', 'Payment', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'Year-end balance', false);
    headerHTML2 = sideScrollWrapper('', 'tr', '', 'second-level', headerHTML2, false);
    return sideScrollWrapper('  ', 'thead', '', '', headerHTML1 + headerHTML2, true);
  }
  if (tableName == 'jointSpouse') {
    var headerHTML1 = sideScrollTH2('', 'col', '', '', '', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="4"', 'Level payments', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="4"', 'Increasing payments', false);
    headerHTML1 = sideScrollWrapper('', 'tr', '', '', headerHTML1, false);
    var headerHTML2 = '';
    var headerHTML2 = sideScrollTH('', 'col', '', 'Age', false);
    headerHTML2 += sideScrollTH('', 'col', '', '100% survivor', false);
    headerHTML2 += sideScrollTH('', 'col', '', '50% survivor', false);
    headerHTML2 += sideScrollTH('', 'col', '', '100% survivor with cash', false);
    headerHTML2 += sideScrollTH('', 'col', '', '50% survivor with cash', false);
    headerHTML2 += sideScrollTH('', 'col', '', '100% survivor', false);
    headerHTML2 += sideScrollTH('', 'col', '', '50% survivor', false);
    headerHTML2 += sideScrollTH('', 'col', '', '100% survivor with cash', false);
    headerHTML2 += sideScrollTH('', 'col', '', '50% survivor with cash', false);
    headerHTML2 = sideScrollWrapper('', 'tr', '', 'second-level', headerHTML2, false);
    return sideScrollWrapper('  ', 'thead', '', '', headerHTML1 + headerHTML2, true);
  }
  if (tableName == 'jointOther') {
    var headerHTML1 = sideScrollTH2('', 'col', '', '', '', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="4"', 'Level payments', false);
    headerHTML1 = sideScrollWrapper('', 'tr', '', '', headerHTML1, false);
    var headerHTML2 = '';
    var headerHTML2 = sideScrollTH('', 'col', '', 'Age', false);
    headerHTML2 += sideScrollTH('', 'col', '', '100% survivor', false);
    headerHTML2 += sideScrollTH('', 'col', '', '50% survivor', false);
    headerHTML2 += sideScrollTH('', 'col', '', '100% survivor with cash', false);
    headerHTML2 += sideScrollTH('', 'col', '', '50% survivor with cash', false);
    headerHTML2 = sideScrollWrapper('', 'tr', '', 'second-level', headerHTML2, false);
    return sideScrollWrapper('  ', 'thead', '', '', headerHTML1 + headerHTML2, true);
  }
  if (tableName == 'single') {
    var headerHTML1 = sideScrollTH2('', 'col', '', '', '', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="3"', 'Level payments', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="3"', 'Increasing payments', false);
    headerHTML1 = sideScrollWrapper('', 'tr', '', '', headerHTML1, false);
    var headerHTML2 = '';
    var headerHTML2 = sideScrollTH('', 'col', '', 'Age', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'Basic features', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'With cash refund', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'With 10 year certain', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'Basic features', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'With cash refund', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'With 10 year certain', false);
    headerHTML2 = sideScrollWrapper('', 'tr', '', 'second-level', headerHTML2, false);
    return sideScrollWrapper('  ', 'thead', '', '', headerHTML1 + headerHTML2, true);
  }
  if (tableName == 'overview') {
    var headerHTML0 = sideScrollTH2('', 'col', '', '', '', false);
    headerHTML0 += sideScrollTH2('', 'colgroup', '', 'colspan="4"', 'Monthly payment', false);
    headerHTML0 += sideScrollTH2('', 'col', '', '', 'Single annuity', false);
    headerHTML0 += sideScrollTH2('', 'colgroup', '', 'colspan="2"', 'Joint annuity with '+getDependent().toLowerCase(), false);
    headerHTML0 = sideScrollWrapper('', 'tr', '', '', headerHTML0, false);
    var headerHTML1 = sideScrollTH2('', 'col', '', '', '', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="2"', 'Fixed dollar', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="2"', 'Life Expectancy', false);
    headerHTML1 += sideScrollTH2('', 'col', '', '', 'Level payments', false);
    headerHTML1 += sideScrollTH2('', 'colgroup', '', 'colspan="2"', 'Level payments', false);
    headerHTML1 = sideScrollWrapper('', 'tr', '', '', headerHTML1, false);
    var headerHTML2 = sideScrollTH('', 'col', '', 'Age', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'Payment', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'Year-end balance', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'Payment', false);
    headerHTML2 += sideScrollTH('', 'col', '', 'Year-end balance', false);
    headerHTML2 += sideScrollTH('', 'col', '', '(Basic)', false);
    headerHTML2 += sideScrollTH('', 'col', '', '(100% survivor)', false);
    headerHTML2 += sideScrollTH('', 'col', '', '(50% survivor)', false);
    headerHTML2 = sideScrollWrapper('', 'tr', '', 'third-level', headerHTML2, false);
    return sideScrollWrapper('  ', 'thead', '', '', headerHTML0 + headerHTML1 + headerHTML2, true);
  }

  return '';
}

function calculate() {
  userValues['amountToUse'] = getPosInteger('amountToUse', -1);
  userValues['ageNow'] = getPosInteger('ageNow', -1);
  userValues['ageFrom'] = getPosInteger('ageFrom', -1);
  userValues['ageToLive'] = getPosInteger('ageToLive', -1);
  userValues['birthMonth'] = getBirthMonth();
  userValues['birthMonthIdx'] = getBirthMonthIdx(userValues['birthMonth']);
  userValues['amountToReceive'] = getPosInteger('amountToReceive', -1);
  userValues['rateOfReturn'] = getPosFloat('rateOfReturn', -1);
  userValues['monthlyRate'] = monthlyCompoundFactor(userValues['rateOfReturn'], 12.0);
  userValues['haveDependent'] = getHaveDependent();
  userValues['dependent'] = getDependent();
  userValues['dependentAge'] = getPosInteger('dependentAge', -1);
  startCalculateAnnuities(userValues);

  var le_factor = get_life_expectancy_factor(userValues['ageNow'], userValues['birthMonthIdx']);
  calculateMonthlyPayments(userValues);
}


function startCalculateAnnuities(uv) {
  start = parseInt(uv['ageFrom']);
  end = parseInt(uv['ageToLive']);
  var jointAge = uv['dependentAge'] + uv['ageFrom'] - uv['ageNow'];

  $('#annuity-interest-rate').html('...');
  var url = getDownloadString('getAnnuityFactors.html', 'age='+start+'&jointage='+jointAge);
  doAjaxRetrieveCallback('annuity-interest-rate', url, onSuccessAnnuities, onFailAnnuities);
}
function onSuccessAnnuities(divName, data) {
    var line = data.split("\n");
    var headers = line[0].split(',');
    var values = line[1].split(',');
    var cols = headers.length;
    for (var i = 0; i < cols; i++) {
      factors[headers[i]] = values[i];
    }
//console.log(headers, values, factors);
//console.log('resetting interest rate to match dev');
//factors['interest_rate'] = '2.200';
    $('#'+divName).html(factors['interest_rate']+'%');
    calculateAnnuities(userValues);
    return true;
}
function onFailAnnuities(divName, textStatus, errorThrown) {
    $('#'+divName).html('unavailable');

    console.log(' dav, clear out old work')
    return true;
}
function calculateAnnuities(uv) {
  var values = {};
  var age = parseInt(uv['ageFrom']);
  var jointage = parseInt(uv['dependentAge']);
  var amountToUse = parseInt(uv['amountToUse']);
  var aRate = parseFloat(factors['interest_rate']) - parseFloat(factors['interest_rate_index']);
  var aFactor = parseFloat(factors['level_noadded']);
  var adjFactor = parseFloat(factors['level_noadded_adj']);
  values['level_noadded'] = (((amountToUse/1000.0) * aFactor) * (1.0 + (aRate*adjFactor)));
  aFactor = parseFloat(factors['level_cash']);
  adjFactor = parseFloat(factors['level_cash_adj']);
  values['level_cash'] = (((amountToUse/1000.0) * aFactor) * (1.0 + (aRate*adjFactor)));
  aFactor = parseFloat(factors['level_10year']);
  adjFactor = parseFloat(factors['level_10year_adj']);
  values['level_10year'] = (((amountToUse/1000.0) * aFactor) * (1.0 + (aRate*adjFactor)));
  aFactor = parseFloat(factors['increasing_noadded']);
  adjFactor = parseFloat(factors['increasing_noadded_adj']);
  values['increasing_noadded'] = (((amountToUse/1000.0) * aFactor) * (1.0 + (aRate*adjFactor)));
  aFactor = parseFloat(factors['increasing_cash']);
  adjFactor = parseFloat(factors['increasing_cash_adj']);
  values['increasing_cash'] = (((amountToUse/1000.0) * aFactor) * (1.0 + (aRate*adjFactor)));
  aFactor = parseFloat(factors['increasing_10year']);
  adjFactor = parseFloat(factors['increasing_10year_adj']);
  values['increasing_10year'] = (((amountToUse/1000.0) * aFactor) * (1.0 + (aRate*adjFactor)));
  buildSingle(values, uv);

  values['level_100'] = (((amountToUse/1000.0) * parseFloat(factors['A'])) * (1.0 + (aRate*parseFloat(factors['A_100_adj']))));
  values['level_50'] = (((amountToUse/1000.0) * parseFloat(factors['B'])) * (1.0 + (aRate*parseFloat(factors['A_50_adj']))));
  values['level_100_cash'] = (((amountToUse/1000.0) * parseFloat(factors['C'])) * (1.0 + (aRate*parseFloat(factors['A_100_adj']))));
  values['level_50_cash'] = (((amountToUse/1000.0) * parseFloat(factors['D'])) * (1.0 + (aRate*parseFloat(factors['A_50_adj']))));
  values['incr_100'] = (((amountToUse/1000.0) * parseFloat(factors['E'])) * (1.0 + (aRate*parseFloat(factors['B_100_adj']))));
  values['incr_50'] = (((amountToUse/1000.0) * parseFloat(factors['F'])) * (1.0 + (aRate*parseFloat(factors['B_50_adj']))));
  values['incr_100_cash'] = (((amountToUse/1000.0) * parseFloat(factors['G'])) * (1.0 + (aRate*parseFloat(factors['B_100_adj']))));
  values['incr_50_cash'] = (((amountToUse/1000.0) * parseFloat(factors['H'])) * (1.0 + (aRate*parseFloat(factors['B_50_adj']))));

  buildJointOther(values, uv);
  buildJointSpouse(values, uv);
  buildOverview(values, uv);
}
function buildSingle(values, uv) {
  var headerHTML = tableHeader('single');
  var row;
  var level_noadded = CurrencyFormatted(values['level_noadded'].toFixed(0));
  var level_cash = CurrencyFormatted(values['level_cash'].toFixed(0));
  var level_10year = CurrencyFormatted(values['level_10year'].toFixed(0));
  var increasing_noadded = values['increasing_noadded'];
  var increasing_cash = values['increasing_cash'];
  var increasing_10year = values['increasing_10year'];

  var slBasic = [], slCash = [], sl10yr = [], siBasic = [], siCash = [], si10yr = [];

  var bodyHTML = '';
  for (var year = start; year <= end; year++) {
    row = sideScrollTH('', 'row', '', year, false);
    row += sideScrollWrapper('', 'td', '', '', level_noadded, false);
    slBasic.push(parseFloat(values['level_noadded'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', level_cash, false);
    slCash.push(parseFloat(values['level_cash'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', level_10year, false);
    sl10yr.push(parseFloat(values['level_10year'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(increasing_noadded.toFixed(0)), false);
    siBasic.push(parseFloat(values['increasing_noadded'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(increasing_cash.toFixed(0)), false);
    siCash.push(parseFloat(values['increasing_cash'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(increasing_10year.toFixed(0)), false);
    si10yr.push(parseFloat(values['increasing_10year'].toFixed(0)));
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
    increasing_noadded *= increasingFactor;
    increasing_cash *= increasingFactor;
    increasing_10year *= increasingFactor;
    // if (balance[year] <= 0.0) { break; }
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);
  var tableHTML = sideScrollTable('', 'payment-annuity-table', '', headerHTML+bodyHTML, true, '');

  var seriesData = [
    { name: 'Level payments (Basic Features)', data: slBasic, color: clSingleBasic, marker: { symbol: 'diamond' } },
    { name: 'Level payments (w/ Cash Refund)', data: slCash, color: clSingleCash, marker: { symbol: 'diamond' }, visible: false },
    { name: 'Level payments (w/ 10 Year Certain)', data: sl10yr, color: clSingle10yr, marker: { symbol: 'diamond' }, visible: false },
    { name: 'Increasing payments (Basic Features)', data: siBasic, color: ciSingleBasic, marker: { symbol: 'triangle' } },
    { name: 'Increasing payments (w/ Cash Refund)', data: siCash, color: ciSingleCash, marker: { symbol: 'triangle' }, visible: false },
    { name: 'Increasing payments (w/ 10 Year Certain)', data: si10yr, color: ciSingle10yr, marker: { symbol: 'triangle' }, visible: false }
  ];

  $('#resultSelectorSingle-table').html(tableHTML);
  buildHighchart('resultSelectorSingle-graph', seriesData,
    'Options for single annuities.', true);
}
function buildJointSpouse(values, uv) {
  if (getDependent() != 'Spouse') {
    var msg = "You did not select a joint life annuity with a spouse.";
    $('#resultSelectorSpouse-table').html('');
    $('#resultSelectorSpouse-graph').html('');
    $('#noSpouse').html(msg);
    return;
  } else {
    $('#noSpouse').html('');
  }
  var headerHTML = tableHeader('jointSpouse');
  var row;
  var level_100 = CurrencyFormatted(values['level_100'].toFixed(0));
  var level_50 = CurrencyFormatted(values['level_50'].toFixed(0));
  var level_100_cash = CurrencyFormatted(values['level_100_cash'].toFixed(0));
  var level_50_cash = CurrencyFormatted(values['level_50_cash'].toFixed(0));
  var incr_100 = values['incr_100'];
  var incr_50 = values['incr_50'];
  var incr_100_cash = values['incr_100_cash'];
  var incr_50_cash = values['incr_50_cash'];

  var jl100 = [], jl50 = [], jl100cash = [], jl50cash = [], ji100 = [], ji50 = [], ji100cash = [], ji50cash = [];

  var bodyHTML = '';
  for (var year = start; year <= end; year++) {
    row = sideScrollTH('', 'row', '', year, false);
    row += sideScrollWrapper('', 'td', '', '', level_100, false);
    jl100.push(parseFloat(values['level_100'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', level_50, false);
    jl50.push(parseFloat(values['level_50'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', level_100_cash, false);
    jl100cash.push(parseFloat(values['level_100_cash'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', level_50_cash, false);
    jl50cash.push(parseFloat(values['level_50_cash'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(incr_100.toFixed(0)), false);
    ji100.push(parseFloat(incr_100.toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(incr_50.toFixed(0)), false);
    ji50.push(parseFloat(incr_50.toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(incr_100_cash.toFixed(0)), false);
    ji100cash.push(parseFloat(incr_100_cash.toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(incr_50_cash.toFixed(0)), false);
    ji50cash.push(parseFloat(incr_50_cash.toFixed(0)));
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
    incr_100 *= increasingFactor;
    incr_50 *= increasingFactor;
    incr_100_cash *= increasingFactor;
    incr_50_cash *= increasingFactor;
    // if (balance[year] <= 0.0) { break; }
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);
  var tableHTML = sideScrollTable('', 'payment-annuity-table', '', headerHTML+bodyHTML, true, '');

  var seriesData = [
    { name: 'Level payments (100% survivor)', data: jl100, color: clJoint100, marker: { symbol: 'diamond' } },
    { name: 'Level payments (50% survivor)', data: jl50, color: clJoint50, marker: { symbol: 'diamond' } },
    { name: 'Level payments (100% survivor w/ cash)', data: jl100cash, color: clJoint100cash, marker: { symbol: 'diamond' }, visible: false },
    { name: 'Level payments (50% survivor w/ cash)', data: jl50cash, color: clJoint50cash, marker: { symbol: 'diamond' }, visible: false },
    { name: 'Increasing payments (100% survivor)', data: ji100, color: ciJoint100, marker: { symbol: 'triangle' } },
    { name: 'Increasing payments (50% survivor)', data: ji50, color: ciJoint50, marker: { symbol: 'triangle' } },
    { name: 'Increasing payments (100% survivor w/ cash)', data: ji100cash, color: ciJoint100cash, marker: { symbol: 'triangle' }, visible: false },
    { name: 'Increasing payments (50% survivor w/ cash)', data: ji50cash, color: ciJoint50cash, marker: { symbol: 'triangle' }, visible: false }
  ];

  $('#resultSelectorSpouse-table').html(tableHTML);
  buildHighchart('resultSelectorSpouse-graph', seriesData,
    'Options for joint annuities w/ spouse.', true);
}
function buildJointOther(values, uv) {
  if (getDependent() != 'Other') {
    var msg = "You did not select a joint life annuity with someone other than a spouse.";
    $('#resultSelectorOther-table').html('');
    $('#resultSelectorOther-graph').html('');
    $('#noOther').html(msg);
    return;
  } else {
    $('#noOther').html('');
  }
  var headerHTML = tableHeader('jointOther');
  var row;
  var level_100 = CurrencyFormatted(values['level_100'].toFixed(0));
  var level_50 = CurrencyFormatted(values['level_50'].toFixed(0));
  var level_100_cash = CurrencyFormatted(values['level_100_cash'].toFixed(0));
  var level_50_cash = CurrencyFormatted(values['level_50_cash'].toFixed(0));
  if ((parseInt(uv['ageNow']) - parseInt(uv['dependentAge'])) > 10) {
    level_100 = 'unavailable';
    level_100_cash = 'unavailable';
  }

  var jl100 = [], jl50 = [], jl100cash = [], jl50cash = [];

  var bodyHTML = '';
  for (var year = start; year <= end; year++) {
    row = sideScrollTH('', 'row', '', year, false);
    row += sideScrollWrapper('', 'td', '', '', level_100, false);
    if (level_100 != 'unavailable') { jl100.push(parseFloat(values['level_100'].toFixed(0))); }
    row += sideScrollWrapper('', 'td', '', '', level_50, false);
    jl50.push(parseFloat(values['level_50'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', level_100_cash, false);
    if (level_100 != 'unavailable') { jl100cash.push(parseFloat(values['level_100_cash'].toFixed(0))); }
    row += sideScrollWrapper('', 'td', '', '', level_50_cash, false);
    jl50cash.push(parseFloat(values['level_50_cash'].toFixed(0)));
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);
  var tableHTML = sideScrollTable('', 'payment-annuity-table', '', headerHTML+bodyHTML, true, '');

  var seriesData = [
    { name: 'Level payments (100% survivor)', data: jl100, color: clJoint100, marker: { symbol: 'diamond' } },
    { name: 'Level payments (50% survivor)', data: jl50, color: clJoint50, marker: { symbol: 'diamond' } },
    { name: 'Level payments (100% survivor w/ cash)', data: jl100cash, color: clJoint100cash, marker: { symbol: 'diamond' }, visible: false },
    { name: 'Level payments (50% survivor w/ cash)', data: jl50cash, color: clJoint50cash, marker: { symbol: 'diamond' }, visible: false },
  ];

  $('#resultSelectorOther-table').html(tableHTML);
  buildHighchart('resultSelectorOther-graph', seriesData,
    'Options for joint annuities w/ other.', true);
}
function buildOverview(values, uv) {
  // build table header
  $('#RMDnote1').addClass('hide');
  var headerHTML = tableHeader('overview');
  var row;
  var level_noadded = CurrencyFormatted(values['level_noadded'].toFixed(0));
  var level_100 = CurrencyFormatted(values['level_100'].toFixed(0));
  var level_50 = CurrencyFormatted(values['level_50'].toFixed(0));
  if (uv['dependent'] == 'Other') {
    if ((parseInt(uv['ageNow']) - parseInt(uv['dependentAge'])) > 10) {
      level_100 = 'unavailable';
    }
  }

  var fdPay = [], lePay = [], slBasic = [], ja100 = [], ja50 = [];

  var bodyHTML = '';
  for (var year = start; year <= end; year++) {
    row = sideScrollTH('', 'row', '', year, false);
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(fdPayments[year]), false);
    fdPay.push( { x: year, y: fdPayments[year], z : fdBalance[year] });
    if (RMDpayment[year] > 0.0) {
      $('#RMDnote1').removeClass('hide');
      row += sideScrollWrapper('', 'td', '', 'rmd', CurrencyFormatted(fdBalance[year])+'**', false);
    } else {
      row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(fdBalance[year]), false);
    }
    // if (RMDflag) { row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(RMDpayment[year]), false); }
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(lePayments[year]), false);
    lePay.push( { x: year, y: lePayments[year], z : leBalance[year] });
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(leBalance[year]), false);
    row += sideScrollWrapper('', 'td', '', '', level_noadded, false);
    slBasic.push(parseFloat(values['level_noadded'].toFixed(0)));
    row += sideScrollWrapper('', 'td', '', '', level_100, false);
    if (level_100 != 'unavailable') { ja100.push(parseFloat(values['level_100'].toFixed(0))); }
    row += sideScrollWrapper('', 'td', '', '', level_50, false);
    ja50.push(parseFloat(values['level_50'].toFixed(0)));
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);
  var tableHTML = sideScrollTable('', 'payment-annuity-table', '', headerHTML+bodyHTML, true, '');

  var seriesData = [
    { name: 'Monthly payment (fixed dollar)', custom: {zname: 'Year-end balance (fixed dollar)'}, data: fdPay, color: cMonthlyFD, marker: { symbol: 'circle' } },
    { name: 'Monthly payment (life expectancy)', custom: {zname: 'Year-end balance (life expectancy)'}, data: lePay, color: cMonthlyLE, marker: { symbol: 'circle' } },
    { name: 'Single Life Annuity (Basic Features)', data: slBasic, color: clSingleBasic, marker: { symbol: 'diamond' } },
    { name: 'Joint Annuity/Other (100% Survivor)', data: ja100, color: clJoint100, marker: { symbol: 'triangle' } },
    { name: 'Joint Annuity/Other (50% Survivor)', data: ja50, color: clJoint50, marker: { symbol: 'triangle' } }
  ];

  $('#resultSelectorOverview-table').html(tableHTML);
  buildHighchart('resultSelectorOverview-graph', seriesData,
    'Monthly payment results and level payments for single/joint annuities.', true);
}
function buildMonthly(values, uv) {
  // build table header
  $('#RMDnote2').addClass('hide');
  var headerHTML = tableHeader('monthlyPayment');
  var row;

  var fdPay = [], lePay = [];

  var bodyHTML = '';
  for (var year = start; year <= end; year++) {
    row = sideScrollTH('', 'row', '', year, false);
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(fdPayments[year]), false);
    fdPay.push( { x: year, y: fdPayments[year], z : fdBalance[year] });
    if (RMDpayment[year] > 0.0) {
      $('#RMDnote1').removeClass('hide');
      row += sideScrollWrapper('', 'td', '', 'rmd', CurrencyFormatted(fdBalance[year])+'**', false);
    } else {
      row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(fdBalance[year]), false);
    }
    // if (RMDflag) { row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(RMDpayment[year]), false); }
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(lePayments[year]), false);
    lePay.push( { x: year, y: lePayments[year], z : leBalance[year] });
    row += sideScrollWrapper('', 'td', '', '', CurrencyFormatted(leBalance[year]), false);
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);
  var tableHTML = sideScrollTable('', 'payment-annuity-table', '', headerHTML+bodyHTML, true, '');

  var seriesData = [
    { name: 'Monthly payment (fixed dollar)', custom: {zname: 'Year-end balance (fixed dollar)'}, data: fdPay, color: cMonthlyFD, marker: { symbol: 'circle' } },
    { name: 'Monthly payment (life expectancy)', custom: {zname: 'Year-end balance (life expectancy)'}, data: lePay, color: cMonthlyLE, marker: { symbol: 'circle' } },
  ];

  $('#resultSelectorMonthly-table').html(tableHTML);
  buildHighchart('resultSelectorMonthly-graph', seriesData,
    'Monthly payment results.', true);
}

var colorSubBlue = '#4572A7';
var colorSubRed = '#AA4643';
var colorSubGreen = '#89A54E';
var colorSubPurple = '#80699B';
var colorSubCyan = '#3D96AE';
var colorSubOrange = '#DB843D';
var colorSubSkyBlue = '#92A8CD';
var colorSubBrown = '#A47D7C';

var cMonthlyFD = colorSubGreen;
var cMonthlyLE = colorSubBlue;
var clSingleBasic = colorSubRed;
var clSingleCash = colorSubBrown;
var clSingle10yr = colorSubOrange;
var ciSingleBasic = colorSubBlue;
var ciSingleCash = colorSubPurple;
var ciSingle10yr = colorSubSkyBlue;
var clJoint100 = colorSubSkyBlue;
var clJoint50 = colorSubBrown;
var clJoint100cash = colorSubBlue;
var clJoint50cash = colorSubRed;
var ciJoint100 = colorSubPurple;
var ciJoint50 = colorSubOrange;
var ciJoint100cash = colorSubCyan;
var ciJoint50cash = colorSubGreen;

function buildHighchart(divName, seriesData, desc, RMDflag) {
  var chart = Highcharts.chart(divName, {
      chart: {
          type: 'line'
      },
      credits: { enabled: false },
      legend: { enabled: true },
      accessibility: {
          description: desc
      },
      title: { text: null },
      xAxis: {
          title: { text: 'Age' },
          allowDecimals: false,
          crosshair: true,
          labels: { formatter: function () { return this.value; } },
          accessibility: { rangeDescription: 'Age. ' }
      },
      yAxis: {
          title: { text: 'Monthly income' },
          labels: { formatter: function () { return CurrencyFormatted(this.value); } }
      },
      tooltip: {
        shared: true,
        usrHTML: true,
        formatter: function () {
          var year = this.x;
          var RMDnote = '';
          var rc = '<strong>Age</strong> ' + year + '<br><br><br>';
          var pts = this.points.length;
          for (var i = 0; i < pts; i++) {
            if (RMDflag && (i == 0)) { if (RMDpayment[year] > 0.0) { RMDnote = '**'; } } else { RMDnote = ''; }
            var point = this.points[i];
            rc += point.series.name + ': <strong>' + CurrencyFormatted(point.y) + '</strong><br>';
            if (point.point.z) {
              rc += point.series.userOptions.custom.zname + ': <strong>' + CurrencyFormatted(point.point.z) + RMDnote + '</strong><br>';
            }
          }
          return rc;
        }
      },
      plotOptions: {
          line: {
              pointStart: start
              // marker: { enabled: false, symbol: 'circle', radius: 2, states: { hover: { enabled: true } } }
          }
      },
      series: seriesData
  });
  return chart;
}

function calculateMonthlyPayments(uv) {
   fdPayments = {};
   fdBalance = {};
   lePayments = {};
   leBalance = {};
   start = parseInt(uv['ageFrom']);
   end = parseInt(uv['ageToLive']);

   var yr, mth;
   var RMD = 0.0;
   var RMDage = 72;
   // if (uv['birthMonthIdx'] >= 7) { RMDage = 70; }
   var leFactors = get_life_expectancy_factors(uv['birthMonthIdx']);
   leFactors = get_life_expectancy_factors(9);
   fdBalance[start-1] = parseFloat(uv['amountToUse']);
   leBalance[start-1] = parseFloat(uv['amountToUse']);
   fdPayments[start-1] = parseFloat(uv['amountToReceive']);
   lePayments[start-1] = 0.0;
   for (yr = start; yr <= end; yr++) {
     fdBalance[yr] = fdBalance[yr-1];
     fdPayments[yr] = fdPayments[yr-1];
     leBalance[yr] = leBalance[yr-1];
     lePayments[yr] = parseFloat((leBalance[yr] / leFactors[yr] / periods).toFixed(2));
     RMDpayment[yr] = 0.0;
     for (mth = 1; mth <= periods; mth++) {
       if (leBalance[yr] > 0.0) {
         if (leBalance[yr] < lePayments[yr]) { lePayments[yr] = leBalance[yr]; }
         leBalance[yr] = (leBalance[yr]-lePayments[yr])*uv['monthlyRate'];
       } else lePayments[yr] = 0.0;
       if (fdBalance[yr] > 0.0) {
         if (fdBalance[yr] < fdPayments[yr]) { fdPayments[yr] = fdBalance[yr]; }
         fdBalance[yr] = (fdBalance[yr]-fdPayments[yr])*uv['monthlyRate'];
       } else fdPayments[yr] = 0.0;
       fdBalance[yr] = parseFloat(fdBalance[yr].toFixed(2));
       leBalance[yr] = parseFloat(leBalance[yr].toFixed(2));
     }
     // Do we need to to do an RMD for fixed payment balance?
     if (yr >= RMDage) {
       RMD = fdBalance[yr] / leFactors[yr] - fdPayments[yr] * periods;
       if (RMD > 0) {
         RMD = parseFloat(RMD.toFixed(2));
         RMDpayment[yr] = RMD;
         fdBalance[yr] -= RMD;
         // fdBalance[yr] = parseFloat(fdBalance[yr].toFixed(2));
       }
     }
   }

   buildMonthly([], uv);
}

-->
</script>
