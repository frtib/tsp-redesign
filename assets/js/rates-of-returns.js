
function getRatesOfReturn(chart) {
  var funds = ['Lfunds', 'InvFunds', 'IndexFunds'];
  var url = fundDownloadString('getMonthlyReturnsSummary.html', '', funds);
  // console.log(url);
  doAjaxRetrieveRoR(chart, url);
  return false;
}

var doAjaxRetrieveRoR = function(divName, url) {
  $('#'+divName+'-message').html('Calling server for data...');
  // console.log('url ', url);
  var serverCall = $.get(url);
  serverCall.done(
    function (data) {
      // fix columns server side
      var lines = data.split("\n");
      var col = lines[0].split(",");
      // for(var i = col.length-1; i > 1; i--) { col[i] = mapServerFundName(col[i]); }
      lines[0] = col.join(",");
      data = lines.join("\n");
      // fundHighchart(divName+'-annual', data, 'Annual Returns', false);
      // fundHighchart(divName+'-monthly', data, 'Monthly Returns', false);
      // buildSideScrollTableRoR will split data rows and call highcharts
      $('#'+divName+'-table').html(buildSideScrollTableRoR(divName, data));
      syncCheckboxes(divName+'-annual');
      syncCheckboxes(divName+'-monthly');
      chartResize(divName+'-annual');
      chartResize(divName+'-monthly');
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

function buildSideScrollTableRoR(chartName, data) {
  var i, j, colClass, row;
  var lines = data.split("\n");
  // prep header row
  var header = lines.shift();
  var col = header.split(",");
  var lineType = col.shift(); // ignore header[0] (type)
  header = col.join(",");
  var annualData = [];
  var monthlyData = [];
  var headerHTML = sideScrollTH('', 'col', '', col[0], false);  // column 0 is date
  for (i = 1; i < col.length; i++) {
    colClass = borderClass(col[i].trim())+' col'+i;
    headerHTML = headerHTML + sideScrollTH('', 'col', colClass, col[i], false);
  }
  headerHTML = sideScrollWrapper('', 'tr', '', '', headerHTML, false);
  headerHTML = sideScrollWrapper('  ', 'thead', '', '', headerHTML, true);
  // console.log(headerHTML);

  // loop on each row, body groups
  var bodyHTML = '';
  var lastLineType = '';
  var monthName = '';
  var yearName = '';
  var tmpRows = "";
  var row;
  var YTD = " YTD";
  var val;
  // highcharts likes low to high, we want table high to low
  for (j = lines.length-1; j > 0; j--) {
    if (lines[j].trim() == '') { continue; }
    row = '';
    var col = lines[j].split(",");
    lineType = col.shift();
    val = '';

    if (lineType != lastLineType) {
      if (tmpRows != '') {
        var xClass = 'annual-returns';
        if (lastLineType == 'm') {
          xClass = 'monthly-returns hide';
          val = 'year_'+yearName+'_months';
        }
        // yearName from previous loop
        bodyHTML += sideScrollWrapper('  ', 'tbody', val, xClass, tmpRows, true);
      }
      tmpRows = '';
      lastLineType = lineType;
    }
    yearName = col[0].substr(0,4);
    if (lineType == 'm') {
      monthName = getMonthName(parseInt(col[0].substr(4, 2))-1);
      val = monthName; //  + ' ' + yearName;
      col[0] = monthName + ' ' + yearName;
      monthlyData.unshift(col.join(","));
      row = sideScrollTH('', '', '', val, false);
    } else {
      var id = "year_"+yearName;
      val = '<label id="'+id+'_label" for="'+id+'">'+yearName+YTD+'</label>';
      val += '<input type="checkbox" id="'+id+'" onClick="toggleTableMonths(\''+id+'\')">';
      col[0] = yearName;
      annualData.unshift(col.join(","));
      row = sideScrollTH('', '', '', val, false);
      YTD = '';
    }
    for (i = 1; i < col.length; i++) {
      colClass = 'col'+i;
      val = fundYvalueFormat(parseFloat(col[i].trim()));
      if (col[i].trim() == '') {
        colClass = "empty-table-cell "+colClass;
        val = '';
      }
      row = row + sideScrollWrapper('', 'td', '', colClass, val, false);
    }
    tmpRows += sideScrollWrapper('    ', 'tr', '', '', row, true);
  }
  // bodyHTML = sideScrollWrapper('  ', 'tbody', '', '', bodyHTML, true);

  // wrap in table
  var table = sideScrollTable('', chartName+'-table', '', headerHTML+bodyHTML, true, '');
  // console.log(headerHTML+bodyHTML);
  // console.log(table);
  annualData.unshift(header);
  monthlyData.unshift(header);
  // console.log(annualData);
  fundHighchart(chartName+'-annual', annualData.join("\n"), '', true);
  fundHighchart(chartName+'-monthly', monthlyData.join("\n"), '', true);
  return table;
}

function toggleTableMonths(rowID) {
  if ($('#'+rowID+'_label').hasClass('bounce')) {
    $('#'+rowID+'_label').removeClass('bounce');
    $('#'+rowID+'_months').addClass('hide');
  } else {
    $('#'+rowID+'_label').addClass('bounce');
    $('#'+rowID+'_months').removeClass('hide');
  }
  // window.redraw();
  return false;
}

function fundYvalueFormat(value) {
  return value.toFixed(2)+'%';
}

function fundCheckboxClick(chartName, cbName) {
  fundCheckboxClickAction(chartName+"-monthly", cbName);
  fundCheckboxClickAction(chartName+"-annual", cbName);
  return false;
}

function fundHighchartClick(chartName, idx, name, vis) {
  var otherChart;
  if (chartName.substr(-6, 6) == 'annual') {
    otherChart = chartName.replace('-annual', '-monthly');
  } else {
    otherChart = chartName.replace('-monthly', '-annual');
  }
  fundHighchartClickBuddy(chartName, idx, name, vis);
  fundHighchartClickBuddy(otherChart, idx, name, vis);
  return false;
}

// handle connected index funds
function fundHighchartClickBuddy(chartName, idx, fundName, vis) {
  if (idx < 0) { return; }
  var chart = $('#'+chartName).highcharts();
  if (chart == null) { return; }
  var series = chart.series;
  var name = series[idx].name;
  if ((name == 'F Fund') || (name == 'C Fund') || (name == 'S Fund') || (name == 'I Fund')) {
    // I clicked on an individual fund with an index
    if ((series[idx].visible) && (series[idx+1].visible)) { fundHighchartClickAction(chartName, idx+1, series[idx+1].name, vis); }
    fundHighchartClickAction(chartName, idx, name, vis);
    return false;
  }
  // index fund clicks buddy
  if (idx > 0) {
    var name = series[idx-1].name;
    if ((name == 'F Fund') || (name == 'C Fund') || (name == 'S Fund') || (name == 'I Fund')) {
      // I clicked on an index fund
      if ((!series[idx].visible) && (!series[idx-1].visible)) { fundHighchartClickAction(chartName, idx-1, name, vis); }
      fundHighchartClickAction(chartName, idx, series[idx].name, vis);
      return false;
    }
  }
  fundHighchartClickAction(chartName, idx, fundName, vis);
  return false;
}

function fundTooltip(me, chartName) {
  // console.log(me);
  var rc = fundTooltipBody(me);
  var tipTitle = getMonthYearName(me.x+1000000000);
  // if (chartName.includes('-annual')) {
  if (chartName.indexOf('-annual') > -1) {
    tipTitle = 'Annual Returns ';
    if ((me.x + 1) > me.points[0].series.xAxis.max) { tipTitle = 'YTD Returns '}
    tipTitle += me.x;
  }
  rc = tooltipHeader(tipTitle)+rc;
  rc = tooltipDiv('rates-of-return'+'-tooltip', rc);
  // console.log(rc);
  return rc;
}
