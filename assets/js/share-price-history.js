/*
var fundDates = flatpickr("#fundDates", {
  mode: "range",
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  defaultDate: [new Date().fp_incr(-30), "today"],
  minDate: "06/02/2003",
  maxDate: "today",
});
*/
var fundDateStart = flatpickr("#fundDateStart", {
  // mode: "range",
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  defaultDate: new Date().fp_incr(-30),
  minDate: "06/02/2003",
  maxDate: "today",
  onChange: function(dObj, dStr) { clearError('dateRange'); }
});
var fundDateEnd = flatpickr("#fundDateEnd", {
  // mode: "range",
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  defaultDate: "today",
  minDate: "06/02/2003",
  maxDate: "today",
  onChange: function(dObj, dStr) { clearError('dateRange'); }
});

function toYYYYMMDD(d) {
    var yyyy = d.getFullYear().toString();
    var mm = (d.getMonth() + 101).toString().slice(-2);
    var dd = (d.getDate() + 100).toString().slice(-2);
    return yyyy + mm + dd;
}

function getSharePriceDates() {
  // var start = fundDates.selectedDates[0];
  // var end = fundDates.selectedDates[1];
  clearError('dateRange');
  var startdate = fundDateStart.selectedDates[0];
  var enddate = fundDateEnd.selectedDates[0];
  if ((startdate == null) || (enddate == null)) { return [null, null]; }
  var start = toYYYYMMDD(startdate);
  var end = toYYYYMMDD(enddate);
  if (end < start) { showError('dateRange', "Start date must be before end date."); return [null, null]; }
  return [start, end];
}
function downloadSharePrices() {
  // var fundDates = document.querySelector("#fundDates")._flatpickr;
  var dateRange = getSharePriceDates();
  if (dateRange[0] == null) { return false; }
  var format = 'CSV';
  var funds = ['Lfunds', 'InvFunds'];
  doSharePriceDownload(dateRange[0], dateRange[1], format, funds);
  return false;
}

function getSharePricesRaw(chart) {
  // var fundDates = document.querySelector("#fundDates")._flatpickr;
  var dateRange = getSharePriceDates();
  if (dateRange[0] == null) { return false; }
  var funds = ['Lfunds', 'InvFunds'];
  var url = sharePriceDownloadString('getSharePricesRaw.html', dateRange[0], dateRange[1], funds);
  url += '&download=0';
  // console.log(url);
  doAjaxRetrieveRaw(chart, url);
  return false;
}

function prepDataforHighchart(data) {
    var lines = data.split("\n");
    for (var i = 1; i < lines.length; i++) {
        var line = lines[i].split(",");
        if (line[0] !== "") {
            var elements = line[0].split(/[ \.]/);
            line[0] = Date.UTC(elements[3], getMonthNumber(elements[0]), elements[1]);
            lines[i] = line.join(",");
        } else {
            lines.length = i;
            break;
        }
    }
    return lines.join("\n");
}

function buildSideScrollTableSH(chartName, data) {
  var i, j, colClass, row;
  var lines = data.split("\n");
  // prep header row
  var header = lines.shift();
  var col = header.split(",");
  var headerHTML = sideScrollTH('', 'col', '', col[0], false);  // column 0 is date
  for (i = 1; i < col.length; i++) {
    colClass = borderClass(col[i])+' col'+i;
    headerHTML = headerHTML + sideScrollTH('', 'col', colClass, col[i], false);
  }
  headerHTML = sideScrollWrapper('', 'tr', '', '', headerHTML, false);
  headerHTML = sideScrollWrapper('  ', 'thead', '', '', headerHTML, true);
  // console.log(headerHTML);

  // loop on each row, body groups
  var bodyHTML = '';
  // highcharts likes low to high, we want table high to low
  for (j = lines.length-1; j >= 0; j--) {
    if (lines[j].trim() == '') { continue; }
    row = '';
    var col = lines[j].split(",");
    var row = sideScrollTH('', '', '', col[0].replace('.',','), false);  // column 0 is date
    for (i = 1; i < col.length; i++) {
      colClass = 'col'+i;
      if (col[i].trim() == '') {
        row = row + sideScrollWrapper('', 'td', '', 'empty-table-cell ' + colClass, '', false);
      } else {
        row = row + sideScrollWrapper('', 'td', '', colClass, fundYvalueFormat(parseFloat(col[i].trim())), false);
      }
    }
    bodyHTML += sideScrollWrapper('    ', 'tr', '', '', row, true);
  }
  bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);

  // wrap in table
  var table = sideScrollTable('', chartName+'-table', '', headerHTML+bodyHTML, true, '');
  // console.log(table);
  return table;
}
var doAjaxRetrieveRaw = function(divName, url) {
  $('#'+divName).html('Calling server for data...');
  var serverCall = $.get(url);
  serverCall.done(
    function (data) {
      var chartdata = prepDataforHighchart(data);
      var chart = fundHighchart(divName, chartdata, '', false);
      $('#'+divName+'-table').html(buildSideScrollTableSH(divName, data));
      syncCheckboxes(divName);
      chartResize(divName);
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

function fundYvalueFormat(value) {
  return '$' + value.toFixed(4);
}
function fundYaxisFormat(value) {
  return '$' + value;
}
function fundTooltip(me, chartName) {
  // console.log(chartName)
  // console.log(me);
  var rc = fundTooltipBody(me);
  // var dateInt = me.x;
  var dateInt = me.points[0].key;
  if (parseInt(dateInt) > 1000) {
    // key is a unix timestamp
    if (dateInt <= 999999999) { dateInt *= 1000; }
    dateInt = Highcharts.dateFormat('%b %d, %Y', dateInt);
  }  // else assume its the date format we want
  rc = tooltipHeader(dateInt)+rc;
  rc = tooltipDiv(chartName+'-tooltip', rc);
  // console.log(rc);
  return rc;
}
