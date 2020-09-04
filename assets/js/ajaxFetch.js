/*
  All the ajax calls to the data source.
*/

function somethingNotWorking() {
  return ""
    + "<p>Hmmm, something isn’t working. Please try again in a few minutes."
    + " If the problem persists you can call the ThriftLine for assistance at "
    + "<span class='nobr'>1-877-968-3778</span>.</p>";
}
var siteName = "https://secure.tsp.gov/components/CORS/";

var singleFundData = function(fund) {

  var scriptName = 'getFundAverageAnnualReturns.html?fund=' + fund;
  var serverCall = $.get(siteName + '/' + scriptName);
    serverCall.done(
      function (data) {
          var rc = data.split("|");
          var values = rc[0].split(", ");
          // console.log('values length is ', values.length);
          if (values.length == 7) {
            $('#aar_caption').html("Average annual returns (as of December "+rc[1]+")");
            if (values[1] != '-') { $('#aar_ytd').html(values[1]+'%'); }
            if (values[2] != '-') { $('#aar_1yr').html(values[2]+'%'); }
            if (values[3] != '-') { $('#aar_3yr').html(values[3]+'%'); }
            if (values[4] != '-') { $('#aar_5yr').html(values[4]+'%'); }
            if (values[5] != '-') { $('#aar_10yr').html(values[5]+'%'); }
            // $('#aar_incep').html(values[6]); }
          }
          if (values.length == 2) {
            if ((values[0] != 'L2010') && (values[0] != 'L2020')) {
              var fund_name = values[0].replace('L', 'L ');
              $('#no_data_yet_message').html("The "+fund_name+" Fund was launched in July 2020. Historical returns will appear below as they become available.");
            }
          }
          // console.log(name + ': ' + data);
      }
    );
    serverCall.fail(
      function (jqXHR, textStatus, errorThrown) {
          var errMsg = textStatus + ': ' + errorThrown;
          // $('#aar_caption').html("Average annual returns (as of December "+values[7]+")");
          $('#aar_ytd').html('unavailable');
          $('#aar_1yr').html('unavailable');
          $('#aar_3yr').html('unavailable');
          $('#aar_5yr').html('unavailable');
          $('#aar_10yr').html('unavailable');
          // $('#aar_incep').html(values[6]);
      }
    );
//    serverCall.always(
//      function (jqXHR, textStatus) {
//      }
//    );
}

function cleanURL() {

	var uri = window.location.toString();
	if (uri.indexOf("?") > 0) {
	    var clean_uri = uri.substring(0, uri.indexOf("?"));
	    window.history.replaceState({}, document.title, clean_uri);
	}
}

// translate server fund names to names used on fund comparison page
function mapFundName (fund) {
  if (fund == 'Linc') { return 'l-income'; }
  if (fund.substring(0,1) == 'L') { return 'l-' + fund.substring(1,5); }
  return fund.toLowerCase() + '-fund';
}

function getMonthNumber(val) {
    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    month = val.toLowerCase();
    return months.indexOf(month);
}

function getMonthName (val) {
  var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
  return monthNames[val % 12];
}

function getMonthYearName (val) {
  var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
  var theDate = new Date(val);
  return monthNames[theDate.getMonth()] + ' ' + theDate.getFullYear();
}

function tooltipDiv (divClass, block) {
  return '<div class="' + divClass + '">'
    + block + '</div>';
}
function tooltipHeader(val) {
  return '<div class="tooltip-title"><strong>'+ val +'</strong>' + "</div>\n";
}
function tooltipRowGroup(group) {
  return  '<div class="tooltip-row-group">' + group + "</div>\n";
}
function tooltipLegendRow(legendColor, lClass, left, rClass, right) {
  var box = '<div class="tooltip-bar '+legendColor+'"></div>';
  if (legendColor == null) { box = '<div></div>'; }
  return  '<div class="tooltip-row">'
        + box
        + tooltipLeftRight(lClass, left, rClass, right)
        + "</div>\n";
}
function tooltipRow(lClass, left, rClass, right) {
  return  '<div class="tooltip-row">'
        + tooltipLeftRight(lClass, left, rClass, right)
        + "</div>\n";
}
function tooltipLeftRight(lClass, left, rClass, right) {
  return  '<div class="'+lClass+' tooltip-left">'  + left  + '</div>'
        + '<div class="'+rClass+' tooltip-right">' + right + '</div>';
}

var groupFundAnnualReturns = function(setName) {
  // fund comparison data
  var scriptName = '';
  if (setName == 'Index') { scriptName = 'getIndexAverageAnnualReturns.html'; }
  if (setName == 'Lfunds') { scriptName = 'getLfundsAverageAnnualReturns.html'; }
  if (scriptName == '') { return; }

  var serverCall = $.get(siteName + '/' + scriptName);
    serverCall.done(
      function (data) {
          var rc = data.split("|"); // strip trailing Year
          var lines = rc[0].split("\n"); // break into rows
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim() == '') { continue; }
            var values = lines[i].split(', ');
            var fundName = mapFundName(values[0]);
            //console.log(i, fundName, lines[i]);
            $('#ret-YTD-'+fundName).html(values[1]+'%');
            $('#ret-1YR-'+fundName).html(values[2]+'%');
            $('#ret-3YR-'+fundName).html(values[3]+'%');
            $('#ret-5YR-'+fundName).html(values[4]+'%');
            if (values[5] != '-') { $('#ret-10YR-'+fundName).html(values[5]+'%'); }
            $('#ret-Life-'+fundName).html(values[6]+'%');
          }
          //console.log(rc[1], setName);
          if (setName == 'Index') { $('#index-as-of').html(' as of ' + rc[2]); }
          if (setName == 'Lfunds') { $('#l-fund-as-of').html(' as of ' + rc[2]); }
          // console.log(name + ': ' + data);
      }
    );
    serverCall.fail(
      function (jqXHR, textStatus, errorThrown) {
          var errMsg = textStatus + ': ' + errorThrown;
          // $('#aar_caption').html("Average annual returns (as of December "+values[7]+")");
          $('#aar_ytd').html('unavailable');
          $('#aar_1yr').html('unavailable');
          $('#aar_3yr').html('unavailable');
          $('#aar_5yr').html('unavailable');
          $('#aar_10yr').html('unavailable');
          // $('#aar_incep').html(values[6]);
      }
    );
}

function growth100Tooltip(me) {
  // console.log(me);
  var rc = tooltipHeader(getMonthYearName(me.x+1000000000));
  rc = '';
  var points = me.points;
  for (var i = 0; i < points.length; i++) {
    var lColor = mapServerFundClassName(points[i].series.colorIndex);
    var name = points[i].series.name.split("$");
    var lName = mapServerFundName(name[0],0);
    rc += tooltipLegendRow(lColor, lColor, lName, '', '$' + points[i].y.toFixed(2));
  }
  rc = tooltipRowGroup(rc);
  rc = tooltipHeader(getMonthYearName(me.x+1000000000))+rc;
  rc = tooltipDiv('growth-100-tooltip', rc);
  // console.log(rc);
  return rc;
}
function getGrowthLifetime(fund) {
  var colorIndexFund = 'lf';
  var colorIndexInfl = 'gray';
  var colorIndexValues = 'white';

  if (fund == 'G') { colorIndexFund = 'g'; colorIndexInfl = 'gray'; }
  if (fund == 'F') { colorIndexFund = 'f'; colorIndexInfl = 'gray'; }
  if (fund == 'C') { colorIndexFund = 'c'; colorIndexInfl = 'gray'; }
  if (fund == 'S') { colorIndexFund = 's'; colorIndexInfl = 'gray'; }
  if (fund == 'I') { colorIndexFund = 'i'; colorIndexInfl = 'gray'; }

  // console.log('https://secure.tsp.gov/components/CORS/getFundGrowthInflation2.html?fund='+fund);

  Highcharts.chart('growthLifetime', {
    credits: { enabled: false },
    chart: {
      type: 'line',
      styledMode: true
    },
    title: {
      align: 'left',
      text: 'Growth of $100 since Inception'
    },
    data: {
      csvURL: 'https://secure.tsp.gov/components/CORS/getFundGrowthInflation2.html?fund='+fund
    },
    // series: [{ colorIndex: colorIndexFund }, { colorIndex: colorIndexValues }, { colorIndex: colorIndexInfl }, { colorIndex: colorIndexValues }],
    series: [{ colorIndex: colorIndexFund }, { colorIndex: colorIndexInfl }],
    yAxis: {
      labels: {
        formatter: function() {
          return '$' + this.value;
        }
      },
      title: { text: '' }
    },
    tooltip: {
      formatter: function () {
        return growth100Tooltip(this);
      },
      shared: true,
      useHTML: true
    }
  });
}

var barChart;
function barChartTooltip(me) {
  // console.log(me);
  returnsTableActive(me.x+1);
  var rc = '';
  var points = me.points;
  for (var i = 0; i < points.length; i++) {
    var lColor = mapServerFundClassName(points[i].series.colorIndex);
    var lName = mapServerFundName(points[i].series.name,0);
    // rc += tooltipLegendRow(lColor, lColor, lName, '', points[i].y.toFixed(2)+'%');
    rc += tooltipLegendRow(lColor, '', lName, '', points[i].y.toFixed(2)+'%');
  }
  rc = tooltipRowGroup(rc);
  rc = tooltipHeader(me.points[0].key) + rc;
  rc = tooltipDiv('rates-of-return-tooltip', rc);
  // console.log(rc);
  return rc;
}
function getFundIndexAverageAnnualReturns(fund) {
  var colorFund = 'lf';
  var colorIndex = 'il';

  if (fund == 'G') { colorFund = 'g'; colorIndex = 'ig'; }
  if (fund == 'F') { colorFund = 'f'; colorIndex = 'if'; }
  if (fund == 'C') { colorFund = 'c'; colorIndex = 'ic'; }
  if (fund == 'S') { colorFund = 's'; colorIndex = 'is'; }
  if (fund == 'I') { colorFund = 'i'; colorIndex = 'ii'; }

  barChart = Highcharts.chart('annualReturnsColumn', {
    credits: { enabled: false },
    chart: {
      type: 'column',
      styledMode: true
    },
    legend: { enabled: false },
    title: {
      // text: 'Average Rates of Return' + '   <span class="hc-note">(As of December ' + year + ')</span>'
      align: 'left',
      text: 'Average Rates of Return'
    },
    data: {
      switchRowsAndColumns: true,
      beforeParse: function (csv) {
        var data = csv.split('|');
        setTitle(data[1]);
        if (data[0].includes('data unavailable')) {
          return null;
          // messy quick hack for no data
          var unavailable = data[0].split(/\r?\n/);
          unavailable = [unavailable[0], unavailable[2]].join("\n");
          return unavailable;
        }
        buildReturnsTable(data[0]);
        return data[0];
      },
      csvURL: 'https://secure.tsp.gov/components/CORS/getFundIndexAverageAnnualReturns.html?fund='+fund
    },
    series: [{ colorIndex: colorFund }, { colorIndex: colorIndex }],
    // exporting: { showTable: true },
    xAxis: {
          crosshair: true
    },
    yAxis: {
          // min: 0,
          title: { text: undefined },
      labels: { formatter: function() { return this.value + '%'; } }
    },
    tooltip: {
//          headerFormat: '<strong>{point.key}</strong><table>',
//          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//              '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
//          footerFormat: '</table>',
          formatter: function () {
            return barChartTooltip(this);
          },
          shared: true,
          useHTML: true
    }
  });
}
function setTitle(year) {
	barChart.setTitle({text: 'Average Rates of Return' + '   <span class="hc-note">(As of December ' + year + ')</span>'});
}
function mapServerFundName (f, glossaryFlag) {
  var fund = f.trim().toUpperCase();
  if (fund == 'G') { return 'G Fund'; }
  if (fund == 'F') { return 'F Fund'; }
  if (fund == 'C') { return 'C Fund'; }
  if (fund == 'S') { return 'S Fund'; }
  if (fund == 'I') { return 'I Fund'; }

  if (fund == 'LINC') { return 'L Income'; }
  if (fund == 'L2010') { return 'L 2010'; }
  if (fund == 'L2020') { return 'L 2020'; }
  if (fund == 'L2025') { return 'L 2025'; }
  if (fund == 'L2030') { return 'L 2030'; }
  if (fund == 'L2035') { return 'L 2035'; }
  if (fund == 'L2040') { return 'L 2040'; }
  if (fund == 'L2045') { return 'L 2045'; }
  if (fund == 'L2050') { return 'L 2050'; }
  if (fund == 'L2055') { return 'L 2055'; }
  if (fund == 'L2060') { return 'L 2060'; }
  if (fund == 'L2065') { return 'L 2065'; }
  if (fund == 'INFLATION') { return 'Inflation'; } // I

  if (fund == 'TBILL') { return glossaryTermString(fund, glossaryFlag); } // F
  if (fund == 'LBA') { return glossaryTermString(fund, glossaryFlag); } // F
  if (fund == 'SP500') { return glossaryTermString(fund, glossaryFlag); } // C
  if (fund == 'W4500') { return glossaryTermString(fund, glossaryFlag); } // S
  if (fund == 'EAFE') { return glossaryTermString(fund, glossaryFlag); } // I
  return '** ' + fund + ' **';
}
function glossaryTermString(fund, glossaryFlag) {
  var term = 'undefined';
  if (fund == 'TBILL') { term = '3-Month T-Bill'; } // G
  if (fund == 'LBA') { term = 'U.S. Aggregate Index'; } // F
  if (fund == 'SP500') { term = 'S&P 500'; } // C
  if (fund == 'W4500') { term = 'Dow Jones'; } // S
  if (fund == 'EAFE') { term = 'EAFE'; } // I
  if (glossaryFlag == 0) { return term; }
  return term;  // disable this for now
  return '<span data-term="'+term+'" class="js-glossary-toggle term term-end">'
        +term+'</span>';
}
function mapServerFundClassName (f) {
  try { var fund = f.trim().toUpperCase(); } catch(e) { return ""; }
  // var fund = f.trim().toUpperCase();
  if (fund == 'G') { return 'g-fund'; }
  if (fund == 'F') { return 'f-fund'; }
  if (fund == 'C') { return 'c-fund'; }
  if (fund == 'S') { return 's-fund'; }
  if (fund == 'I') { return 'i-fund'; }
  if (fund == 'LF') { return 'l-fund'; }

  if (fund == 'LINC') { return 'l-income'; }
  if (fund == 'LINCX') { return 'index-l'; }
  if (fund == 'L2010') { return 'l-2010'; }
  if (fund == 'L2020') { return 'l-2020'; }
  if (fund == 'L2025') { return 'l-2025'; }
  if (fund == 'L2030') { return 'l-2030'; }
  if (fund == 'L2035') { return 'l-2035'; }
  if (fund == 'L2040') { return 'l-2040'; }
  if (fund == 'L2045') { return 'l-2045'; }
  if (fund == 'L2050') { return 'l-2050'; }
  if (fund == 'L2055') { return 'l-2055'; }
  if (fund == 'L2060') { return 'l-2060'; }
  if (fund == 'L2065') { return 'l-2065'; }

  if (fund == 'TBILL') { return 'index-g'; } // G
  if (fund == 'IG') { return 'index-g'; } // G
  if (fund == 'LBA') { return 'index-f'; } // F
  if (fund == 'IF') { return 'index-f'; } // F
  if (fund == 'SP500') { return 'index-c'; } // C
  if (fund == 'IC') { return 'index-c'; } // C
  if (fund == 'W4500') { return 'index-s'; } // S
  if (fund == 'IS') { return 'index-s'; } // S
  if (fund == 'EAFE') { return 'index-i'; } // I
  if (fund == 'II') { return 'index-i'; } // I
  if (fund == 'IL') { return 'index-l'; } // I

  if (fund == 'GRAY') { return 'inflation-color'; } // I
  return '** ' + fund + ' **';
}
function buildReturnsTable(arr) {
  var headName = { YTD: 'YTD', '1-yr': '1&nbsp;Yrs', '3-yr': '3&nbsp;Yrs', '5-yr': '5&nbsp;Yrs', '10-yr': '10&nbsp;Yrs', Lifetime: 'Lifetime'};
  var i, j;
  var table = '<table>';
  var lines = arr.split("\n");
  var cellClass = 'even';
  // header
  var col = lines[0].trim().split(',');
  table += '<tr><th></th>';
  cellClass = 'even';
  for (i = 1; i < col.length; i++) {
    table += '<th class="' + cellClass + ' col' + i + '">'+headName[col[i].trim()]+'</th>';
    if (cellClass == 'even') { cellClass = 'odd'; } else { cellClass = 'even'; }
  }
  table += "</tr>\n";
  for (j=1; j < lines.length; j++) {
    if (lines[j].trim() == '') { continue; }
    col = lines[j].split(',');
    table += '<tr>';
    cellClass = 'odd';
    var fundName = mapServerFundName(col[0].trim(),1);
    // console.log('fund is ' + col[0].trim());
    var fund = col[0].trim().toLowerCase();
    var fundColor = mapServerFundClassName(fund);
    if ((fund == 'linc') && (j > 1)) { fundColor = mapServerFundClassName('lincx'); }
    table += '<td class="' + cellClass + ' col' + '0' + '">'
        +'<span class="rate-of-return-bar '+fundColor+'"></span>'
        + fundName +'</td>';
    if (cellClass == 'even') { cellClass = 'odd'; } else { cellClass = 'even'; }
    for (i = 1; i < col.length; i++) {
      table += '<td class="' + cellClass + ' col' + i + '">'+col[i].trim()+'%</td>';
      if (cellClass == 'even') { cellClass = 'odd'; } else { cellClass = 'even'; }
    }
    table += "</tr>\n";
  }

 table += "\n</table>"
 // console.log(arr + "\n" + table);
 $('#annualReturnsTable').html(table);
//  initGlossary();
}
function returnsTableActive(idx) {
    for (var i = 0; i < 8; i++) {
      $('.col'+i).removeClass('active');
    }
    $('.col'+idx).addClass('active');
}
function columnSort(ascending, columnClassName, tableId, headLength, tailLength) {
    var tbody = document.getElementById(tableId).getElementsByTagName(
            "tbody")[0];
    var rows = tbody.getElementsByTagName("tr");

    var unsorted = true;

    while (unsorted) {
        unsorted = false;

        for (var r = 0 + headLength; r < rows.length - 1 - tailLength; r++) {
            var row = rows[r];
            var nextRow = rows[r + 1];

            var value = row.getElementsByClassName(columnClassName)[0].innerHTML;
            var nextValue = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;

            value = value.replace(',', '.'); // in case a comma is used in float number
            nextValue = nextValue.replace(',', '.');
            value = value.replace('%', ''); // in case a comma is used in float number
            nextValue = nextValue.replace('%', '');

            if (!isNaN(value)) {
                value = parseFloat(value);
                nextValue = parseFloat(nextValue);
            }

            if (ascending ? value > nextValue : value < nextValue) {
                tbody.insertBefore(nextRow, row);
                unsorted = true;
            }
            // console.log(value, nextValue, unsorted);
        }
    }
};

function getDownloadString(scriptName, extra) {
  var str = siteName + scriptName;
  if (extra != '') { str += '?' + extra; }
  return str;
}

function fundDownloadString(scriptName, extra, funds) {
  var str = siteName + scriptName + '?';
  str += extra;
  funds.forEach(function(fund) { str += '&'+fund+'=1'; });
  return str;
}

function sharePriceDownloadString(scriptName, startdate, enddate, funds) {
  var extra = '';
  extra += 'startdate='+startdate;
  extra += '&enddate='+enddate;
  return fundDownloadString(scriptName, extra, funds);
}

// make call to get shareprices
function doSharePriceDownload(startdate, enddate, format, funds) {
  var url = sharePriceDownloadString('getSharePrices.html', startdate, enddate, funds);
  url += '&format='+format+'&download=1';
  // console.log(url);
  window.location.href = url;
  //window.open(url, '_blank');
  return false;
}

var doAjaxRetrieve = function(divName, url) {
  $('#'+divName).html('Calling server for data...');
  // console.log(url);
  var serverCall = $.get(url);
  serverCall.done(
    function (data) {
        $('#'+divName).html(data);
    }
  );
  serverCall.fail(
    function (jqXHR, textStatus, errorThrown) {
        var errMsg = textStatus + ': ' + errorThrown;
        var userMsg = somethingNotWorking();
        $('#'+divName).html(userMsg);
    }
  );
}

var doAjaxRetrieveCallback = function(divName, url, success, fail) {
  $('#'+divName).html('Calling server for data...');
  // console.log(url);
  var serverCall = $.get(url);
  serverCall.done(
    function (data) {
        success(divName, data);
        // $('#'+divName).html(data);
    }
  );
  serverCall.fail(
    function (jqXHR, textStatus, errorThrown) {
        // var errMsg = textStatus + ': ' + errorThrown;
        // var userMsg = somethingNotWorking();
        // $('#'+divName).html(userMsg);
        fail(divName, textStatus, errorThrown);
    }
  );
}

function returnsAllTooltip(me) {
  var rc = tooltipHeader(getMonthYearName(me.x+1000000000));
  rc = '';
  var points = me.points;
  for (var i = 0; i < points.length; i++) {
    var lColor = mapServerFundClassName(points[i].series.colorIndex);
    var name = points[i].series.name.split("$");
    var lName = name[0]; mapServerFundName(name[0],0);
    // rc += tooltipLegendRow(lColor, lColor+' outline', lName, '', points[i].y.toFixed(2)+'%');
    rc += tooltipLegendRow(lColor, '', lName, '', points[i].y.toFixed(2)+'%');
  }
  rc = tooltipRowGroup(rc);
  return rc;
}
function annualReturnsAllTooltip(me) {
  // console.log(me);
  var rc = returnsAllTooltip(me);
  // rc = tooltipHeader(getMonthYearName(me.x+1000000000))+rc;
  var title = 'Annual Returns ';
  if ((me.x + 1) > me.points[0].series.xAxis.max) { title = 'YTD Returns '}
  rc = tooltipHeader(title+me.x)+rc;
  rc = tooltipDiv('growth-100-tooltip', rc);
  // console.log(rc);
  return rc;
}
function monthlyReturnsAllTooltip(me) {
  // console.log(me);
  var rc = returnsAllTooltip(me);
  // rc = tooltipHeader(getMonthYearName(me.x+1000000000))+rc;
  var title = 'Monthly Returns ';
  if ((me.x + 1) > me.points[0].series.xAxis.max) { title = 'YTD Returns '}
  rc = tooltipHeader(getMonthYearName(me.x+1000000000))+rc;
  rc = tooltipDiv('growth-100-tooltip', rc);
  // console.log(rc);
  return rc;
}
function getSeriesID(name, chart) {
  var chart = $('#'+chart).highcharts();
  if (chart == null) { return; }
  var series = chart.series;
  for (var i = 0; i < series.length; i++) {
    if (series[i].name == name) { return i; }
  }
  return -1;
}
function checkAnnualReturnsGroup() {
  var flag = true;
  var lf = ['L___Income', 'L___2025', 'L___2030', 'L___2035', 'L___2040', 'L___2045', 'L___2050', 'L___2055', 'L___2060', 'L___2065'];
  lf.forEach(function(id) { flag &= $('#'+id).prop('checked') });
  $('#Lfunds').prop('checked', flag);
  flag = true;
  var idv = ['G___Fund', 'F___Fund', 'C___Fund', 'S___Fund', 'I___Fund'];
  idv.forEach(function(id) { flag &= $('#'+id).prop('checked'); });
  $('#InvFunds').prop('checked', flag);
}
function chartResize(chartName) {
  setInterval(function() { $('#'+chartName).highcharts().reflow(); }, 100);
  return false;
}

function parseEmptyData(columns) {
  var newColumns = [];
  Highcharts.each(columns, function(c, j) {
    newColumns.push([]);
    Highcharts.each(c, function(p, i) {
      //console.log('p = |'+p+'|');
      newColumns[j].push(parseFloat(p) || null);
    })
  })
  return newColumns;
}


var deletedAlready = {};
function deleteEmptyPoints(chartName) {
  var chart = $('#'+chartName).highcharts();
  if (chart == null) { return; }
  // console.log(chart);
  if (deletedAlready[chartName]) { return; }  // been there, done that already
  var series = chart.series;
  for (var s = 0; s < series.length; s++) {
    // console.log('series '+s+'  '+series[s].points);
    // console.log(series[s].data);
    for (var p = series[s].data.length-1; p >= 0; p--) {
      if (series[s].data[p].y == null)  { series[s].data[p].remove(false, false); } else { break; }
    }
    for (var p = 0; p < series[s].data.length; p++) {
      if (series[s].data[p].y == null)  { series[s].data[p].remove(false, false); } else { break; }
      //console.log(series[s].data[p]);
    }
  }
  // series[x].data[y].remove(true);
  chart.redraw();
  // deletedAlready[chartName] = 1;
}


var getAnnuityRates = function(spanName) {
  // fund comparison data
  var scriptName = 'getAnnuityRates.html';
  // $('#'+spanName).html('THE annuity interest rate index is 1.75% for annuities purchased in February 2020 and 1.75% for annuities purchased in January 2020.');

  var serverCall = $.get(siteName + '/' + scriptName);
    serverCall.done(
      function (data) {
          // expecting 3 lines, header an last 2 rates
          var lines = data.split("\n"); // break into rows
          // console.log(lines);
          if (lines.length < 3) { showErrorAnnuityRateText(spanName); return; }
          // skip line[0]
          setAnnuityRateText(spanName, lines[1], lines[2]);
      }
    );
    serverCall.fail(
      function (jqXHR, textStatus, errorThrown) {
          var errMsg = textStatus + ': ' + errorThrown;
          showErrorAnnuityRateText(spanName);
      }
    );
}

var getHistoricalAnnuityRates = function(currentSpan, historicalDiv) {
  // fund comparison data
  var scriptName = 'getAnnuityRates.html?numRates=1000';
  var fetchMsg = 'Fetching data, please wait ...';
  $('#'+currentSpan).html(fetchMsg);
  $('#'+historicalDiv).html(fetchMsg);
  var serverCall = $.get(siteName + '/' + scriptName);
    serverCall.done(
      function (data) {
          // expecting header line and one row for each historical rate, sorted
          var lines = data.split("\n"); // break into rows
          // console.log(lines);
          // skip line[0]
          var cols = lines[1].split(",");
          var currentStr = 'Annuity interest rate for '+cols[2]+' '+cols[1]+' is <strong>'+cols[3]+'%</strong>.';
          $('#'+currentSpan).html(currentStr);
          // $('#'+historicalDiv).html(data);
          var rates = {};
          var len = lines.length;
          var i;
          var minYear = 3000;
          var maxYear = 0;
          for (i = 1; i < len; i++) {
            cols = lines[i].split(",");
            if (cols[1]) {
              rates[cols[1]+'-'+cols[2]] = cols[3];
              if (cols[1] < minYear) { minYear = cols[1]; }
              if (cols[1] > maxYear) { maxYear = cols[1]; }
            }
            rates['minYear'] = minYear;
            rates['maxYear'] = maxYear;
          }
          $('#'+historicalDiv).html(buildHistoricalAnnuityTable(rates));
          $('.sortableColumn').click(function(e) { toggleSort(this, 0, 0); });
          sideScrollControls('historical-rates');
      }
    );
    serverCall.fail(
      function (jqXHR, textStatus, errorThrown) {
          var errMsg = textStatus + ': ' + errorThrown;
          errMsg = somethingNotWorking();
          $('#'+currentSpan).html(errMsg);
          $('#'+historicalDiv).html('');
      }
    );
}
function buildHistoricalAnnuityTable(rates) {
  // build table header
  var i, j, row, val;
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var headerHTML = sideScrollTH2('', 'col', 'sortableColumn sort-column-desc', 'id="sortYear"', 'Year', false);
  for (i = 0; i < 12; i ++) {
    headerHTML += sideScrollTH2('', 'colgroup', '', '', months[i], false);
  }
  headerHTML = sideScrollWrapper('', 'tr', '', '', headerHTML, false);
  var headerHTML = sideScrollWrapper('  ', 'thead', '', '', headerHTML, true);

  var bodyHTML = '';
  for (j = rates['maxYear']; j >= rates['minYear']; j--) {
    row = sideScrollTH('', 'row', 'sortYear', j.toString(), false);
    for (i = 0; i < 12; i ++) {
      val = rates[j.toString()+'-'+months[i]];
      if (!val) { val = ''; } else { val += '%'; }
      row += sideScrollWrapper('', 'td', '', '', val, false);
    }
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);
  // special colgroup because of 2-tier header
  var colgroup = '';
  var tableHTML = sideScrollTable('', 'historical-rates-table', 'historical-rates', headerHTML+bodyHTML, true, colgroup);
  return tableHTML;
}
// make call to get historical annuity rates
function doDownloadAnnuityRates(format) {
  var url = getDownloadString('getAnnuityRates.html', 'numRates=1000');
  url += '&format='+format+'&download=1&table=1';
  window.location.href = url;
  //window.open(url, '_blank');
  return false;
}


function toggleSort(me, hl, tl) {
  var myId = me.id;
  var isSortedAsc = $('#'+myId).hasClass('sort-column-asc');
  $('.sortableColumn').removeClass('sort-column-asc');
  $('.sortableColumn').removeClass('sort-column-desc');
  if (isSortedAsc) {
    columnSort(false, myId, me.closest('table').id, hl, tl);
    $('#'+myId).addClass('sort-column-desc');
  } else {
    columnSort(true, myId, me.closest('table').id, hl, tl);
    $('#'+myId).addClass('sort-column-asc');
  }
  return false;
}

function toggleSort1(me) {  // first version, 2 states
  var myId = me.id;
  var tableId = 'sector-composition';
  if ($('#'+myId).hasClass('sort-column-asc')) {
    columnSort(true, myId, me.closest('table').id, 0, 1);
    $('#'+myId).removeClass('sort-column-asc');
    $('#'+myId).addClass('sort-column-desc');
  } else {
    columnSort(false, myId, me.closest('table').id, 0, 1);
    $('#'+myId).removeClass('sort-column-desc');
    $('#'+myId).addClass('sort-column-asc');
  }
  return false;
}
