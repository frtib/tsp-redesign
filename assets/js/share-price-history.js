var fundDates = flatpickr("#fundDates", {
  mode: "range",
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  defaultDate: [new Date().fp_incr(-30), "today"],
  minDate: "06/02/2003",
  maxDate: "today",
});

function toYYYYMMDD(d) {
    var yyyy = d.getFullYear().toString();
    var mm = (d.getMonth() + 101).toString().slice(-2);
    var dd = (d.getDate() + 100).toString().slice(-2);
    return yyyy + mm + dd;
}

function downloadSharePrices() {
  // var fundDates = document.querySelector("#fundDates")._flatpickr;
  var sDate = fundDates.selectedDates[0];
  var eDate = fundDates.selectedDates[1];
  if ((sDate == null) || (eDate == null)) { console.log('ignore'); return false; }
  var startdate = toYYYYMMDD(sDate);
  var enddate = toYYYYMMDD(eDate);
  var format = 'CSV';
  var funds = ['Lfunds', 'InvFunds'];

  doSharePriceDownload(startdate, enddate, format, funds);
  return false;
}

function getSharePricesRaw(chart) {
  // var fundDates = document.querySelector("#fundDates")._flatpickr;
  var sDate = fundDates.selectedDates[0];
  var eDate = fundDates.selectedDates[1];
  if ((sDate == null) || (eDate == null)) { console.log('ignore'); return false; }
  var startdate = toYYYYMMDD(sDate);
  var enddate = toYYYYMMDD(eDate);
  var funds = ['Lfunds', 'InvFunds'];
  var url = sharePriceDownloadString('getSharePricesRaw.html', startdate, enddate, funds);
  url += '&download=0';
  // console.log(url);
  doAjaxRetrieveRaw(chart, url);
  return false;
}

// prep no longer needed, server sends in hc format
function prepDataforHighchart(data) {
  var lines = data.split("\n");
  var header = lines.shift();
  var col = header.split(",");
  for (var i = 1; i < col.length; i++) { col[i] = mapServerFundName(col[i], false); }
  lines.reverse();
  lines[0] = col.join(",");
  return lines.join("\n");
  lines.shift();
  lines.reverse();
  lines.unshift(col.join(","));
  // lines[0] = col.join(",");
  data = lines.join("\n");
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
      var chart = fundHighchart(divName, data, '', false);
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
