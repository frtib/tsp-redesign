// functions to support the side scrolling fund tables

// redefine first 5 in page's js file if needed
function fundCheckboxClick(chartName, cbName) {
  // console.log('fundCheckboxClick', chartName, cbName);
  fundCheckboxClickAction(chartName, cbName);
  return false;
}

function fundHighchartClick(chartName, idx, name, vis) {
  // console.log('fundHighchartClick', chartName, idx, name, vis);
  fundHighchartClickAction(chartName, idx, name, vis);
  return false;
}

function fundYaxisFormat(value) {
  return value;
}
function fundYvalueFormat(value) {
  return value;
}
function fundTooltipBody(me) {
  var rc = '';
  var points = me.points;
  for (var i = 0; i < points.length; i++) {
    // if (points[i].series.visible) { continue; }
    var lColor = mapServerFundClassName(points[i].series.colorIndex);
    var name = points[i].series.name.split("$");
    var lName = name[0]; mapServerFundName(name[0],0);
    // rc += tooltipLegendRow(lColor, lColor+' outline', lName, '', points[i].y.toFixed(2)+'%');
    rc += tooltipLegendRow(lColor, '', lName, '', fundYvalueFormat(points[i].y));
  }
  rc = tooltipRowGroup(rc);
  return rc;
}
function fundTooltip(me, chartName) {
  // console.log(me);
  var rc = fundTooltipBody(me);
  // rc = tooltipHeader(getMonthYearName(me.x+1000000000))+rc;
  rc = tooltipHeader(me.x)+rc;
  rc = tooltipDiv(chartName+'-tooltip', rc);
  // console.log(rc);
  return rc;
}

function fundHighchartClickAction(chartName, idx, name, vis) {
  if (idx < 0) { return; }
  var cbName = name.replace(' ', '_');
  setTableCheckbox(cbName,idx,vis);
  setSeriesVisibility(chartName, idx, vis);
  syncFundCheckboxGroups();
  return false;
}

// functions for fund checkboxes
function fundCheckboxClickAction(chartName, cbName) {
  if (cbName == 'Index') { indexFundSync(chartName, true); return false; }
  if (cbName == 'Lfunds') {
    // do L group
    var val = $('#Lfunds').prop('checked');  // get its new value
    if ($('#L_Income').prop('checked') != val) { $('#L_Income').click(); }
    if ($('#L_2010').prop('checked') != val) { $('#L_2010').click(); }
    if ($('#L_2020').prop('checked') != val) { $('#L_2020').click(); }
    if ($('#L_2025').prop('checked') != val) { $('#L_2025').click(); }
    if ($('#L_2030').prop('checked') != val) { $('#L_2030').click(); }
    if ($('#L_2035').prop('checked') != val) { $('#L_2035').click(); }
    if ($('#L_2040').prop('checked') != val) { $('#L_2040').click(); }
    if ($('#L_2045').prop('checked') != val) { $('#L_2045').click(); }
    if ($('#L_2050').prop('checked') != val) { $('#L_2050').click(); }
    if ($('#L_2055').prop('checked') != val) { $('#L_2055').click(); }
    if ($('#L_2060').prop('checked') != val) { $('#L_2060').click(); }
    if ($('#L_2065').prop('checked') != val) { $('#L_2065').click(); }
    syncFundCheckboxGroups();
    return false;
  }
  if (cbName == 'InvFunds') {
    // do individual group
    var val = $('#InvFunds').prop('checked');  // get its new value
    if ($('#G_Fund').prop('checked') != val) { $('#G_Fund').click(); }
    if ($('#F_Fund').prop('checked') != val) { $('#F_Fund').click(); }
    if ($('#C_Fund').prop('checked') != val) { $('#C_Fund').click(); }
    if ($('#S_Fund').prop('checked') != val) { $('#S_Fund').click(); }
    if ($('#I_Fund').prop('checked') != val) { $('#I_Fund').click(); }
    syncFundCheckboxGroups();
    return false;
  }
  syncCheckboxByName(chartName, cbName);
  syncFundCheckboxGroups();
  return false;
}

function syncCheckboxByName(chartName, cbName) {
  var vis = $('#'+cbName).prop('checked');
  // var name = cbName.replace('_', ' ');
  var name = cbName.replace('_', ' ');
  var idx = getSeriesID(name, chartName);
  // console.log({chartName}, {cbName}, {vis}, {name}, {idx});
  setTableCheckbox(cbName,idx,vis);
  setSeriesVisibility(chartName, idx, vis);
  return false;
}

function indexFundSync(chartName, doTableColumn, noredraw) {
  var noredraw = noredraw || false;
  if ($('#Index').length <= 0) { return false; };
  var val = $('#Index').prop('checked');  // get its new value
  var chart = $('#'+chartName).highcharts();
  if (chart == null) { return false; }
  var series = chart.series;
  highchartsSeriesToggle(series, 12, val, doTableColumn);
  if (val) fundHighchartClickAction(chartName, 12, '&', series[11].visible);
  highchartsSeriesToggle(series, 14, val, doTableColumn);
  if (val) fundHighchartClickAction(chartName, 14, '&', series[13].visible);
  highchartsSeriesToggle(series, 16, val, doTableColumn);
  if (val) fundHighchartClickAction(chartName, 16, '&', series[15].visible);
  highchartsSeriesToggle(series, 18, val, doTableColumn);
  if (val) fundHighchartClickAction(chartName, 18, '&', series[17].visible);
  if (!noredraw) { chart.redraw() };
  return false;
}

// show/hide idx series from highchart display
function highchartsSeriesToggle(series, idx, show, doTableColumn) {
  if (idx < 0) { return false; }
  if (idx >= series.length) { return false; }
  series[idx].update({ showInLegend: show }, false);
  if (!show) { series[idx].setVisible(show, false); }
  if (doTableColumn) { syncTableColumn(idx+1, show); }
  return false;
}

// sync visibility after reloading data
function syncCheckboxes(chartName) {
  indexFundSync(chartName, true, true);
  syncCheckboxByName(chartName, 'L_Income');
  syncCheckboxByName(chartName, 'L_2025');
  syncCheckboxByName(chartName, 'L_2030');
  syncCheckboxByName(chartName, 'L_2035');
  syncCheckboxByName(chartName, 'L_2040');
  syncCheckboxByName(chartName, 'L_2045');
  syncCheckboxByName(chartName, 'L_2050');
  syncCheckboxByName(chartName, 'L_2055');
  syncCheckboxByName(chartName, 'L_2060');
  syncCheckboxByName(chartName, 'L_2065');
  syncCheckboxByName(chartName, 'G_Fund');
  syncCheckboxByName(chartName, 'F_Fund');
  syncCheckboxByName(chartName, 'C_Fund');
  syncCheckboxByName(chartName, 'S_Fund');
  syncCheckboxByName(chartName, 'I_Fund');
  syncFundCheckboxGroups();
  redraw(chartName);
  return false;
}

function redraw(chartName) {
  if ($('#'+chartName).length <= 0) { return; };
  var chart = $('#' + chartName).highcharts();
  if (chart) { chart.redraw(); }
}


// map cb name to index in fund list
function checkBoxColumnID(cbName, indexFundsFlag) {
  var names = ['empty', 'L_Income', 'L_2025', 'L_2030', 'L_2035', 'L_2040',
              'L_2045', 'L_2050', 'L_2055', 'L_2060', 'L_2065',
              'G_Fund', 'F_Fund', 'C_Fund', 'S_Fund', 'I_Fund'];
  var namesI = ['empty', 'L_Income',  'L_2025', 'L_2030', 'L_2035', 'L_2040',
              'L_2045', 'L_2050', 'L_2055', 'L_2060', 'L_2065',
              'G_Fund', 'F_Fund', 'i', 'C_Fund', 'i', 'S_Fund', 'i', 'I_Fund'];
  if (indexFundsFlag) { return namesI.indexOf(cbName); }
  return names.indexOf(cbName);
}
function syncFundCheckboxGroups() {
  var flag = true;
  var lf = ['L_Income', 'L_2025', 'L_2030', 'L_2035', 'L_2040', 'L_2045', 'L_2050', 'L_2055', 'L_2060', 'L_2065'];
  lf.forEach(function(id) { flag &= $('#'+id).prop('checked') });
  $('#Lfunds').prop('checked', flag);
  flag = true;
  var idv = ['G_Fund', 'F_Fund', 'C_Fund', 'S_Fund', 'I_Fund'];
  idv.forEach(function(id) { flag &= $('#'+id).prop('checked'); });
  $('#InvFunds').prop('checked', flag);
}

function getSeriesID(name, chartName) {
  if ($('#'+chartName).length <= 0) { return; };
  var chart = $('#'+chartName).highcharts();
  if (chart == null) { return; }
  var series = chart.series;
  // console.log({chart},{series});
  for (var i = 0; i < series.length; i++) {
    if (series[i].name == name) { return i; }
  }
  return -1;
}

function borderClass(fund) {
  // Added nobr class to Individual and L fund table headers <th>
  if (fund.trim().substring(0,1).toLowerCase() == 'l') { return 'border-l-fund nobr'; }
  if (fund.slice(-4).toLowerCase() == 'fund') { return 'border-'+fund.trim().substring(0,1).toLowerCase()+'-fund nobr'; }
  // its an index fund
  if (fund.substring(0,4) == 'U.S.') { return 'border-index-f'; }
  if (fund.substring(0,4) == 'S&P ') { return 'border-index-c'; }
  if (fund.substring(0,4) == 'Dow ') { return 'border-index-s'; }
  if (fund.substring(0,4) == 'EAFE') { return 'border-index-i'; }
  return 'border-'+fund;
}

function setSeriesVisibility(chart, idx, val) {
  if (idx < 0) { return false; }
  if ($('#'+chart).length <= 0) { return false; };
  var chart = $('#'+chart).highcharts();
  if (chart == null) { return; }
  var series = chart.series;
  if (idx >= series.length) { return false; }
  series[idx].setVisible(val, false);
  return -1;
}
function syncTableColumn(col,vis) {
  if (vis) {
    $('.col'+col).show();
  } else {
    $('.col'+col).hide();
  }
}
function setTableCheckbox(name,idx,val) {
  syncTableColumn(idx+1,val);
  if (name.indexOf('&') > -1) { return false; }
  // if (name.includes('&')) { return false; }
  if (val) { $('#'+name).prop('checked', true); } else { $('#'+name).prop('checked', false); }
}

function fundHighchart(chartName, csvData, title, indexFundsFlag) {
  // monthData = [100, 200, 300, 400];
  //console.log(monthData);
  //console.log('in getMonthlyReturnsAll');
  var series14 = [{ colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' },
    { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' },
    { colorIndex: 'g' }, { colorIndex: 'f' }, { colorIndex: 'if' }, { colorIndex: 'c' }, { colorIndex: 'ic' },
    { colorIndex: 's' }, { colorIndex: 'is' }, { colorIndex: 'i' }, { colorIndex: 'ii' }];
    var series10 = [{ colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' },
      { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' }, { colorIndex: 'lf' },
      { colorIndex: 'g' }, { colorIndex: 'f' }, { colorIndex: 'c' }, { colorIndex: 's' }, { colorIndex: 'i' }];
  return Highcharts.chart(chartName, {
    credits: { enabled: false },
    chart: {
      type: 'line',
      styledMode: true,
    },
    title: {
      align: 'left',
      text: title
    },
    data: { csv: csvData, },
    plotOptions: {
      series: { events: {
        legendItemClick: function(e) {
          var i = e.target.index;
          var vis = !this.visible;
          fundHighchartClick(chartName, i, this.name, vis);
          return false;
        }
      }}
    },
    responsive: {
      rules: [{
        condition: {
          minWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'right', verticalAlign: 'top',
            layout: 'vertical', x: 0, y: 20
          },
        }
      }]
    },
    series: indexFundsFlag ? series14 : series10,
    // series: [{ data: monthData }],
    exporting: { enabled: true },
    //       chart.options.exporting.enabled = false;
    yAxis: {
      labels: {
        formatter: function() {
          return fundYaxisFormat(this.value);
        }
      },
      title: { text: '' }
    },
    xAxis: { type: 'datetime' },
    tooltip: {
      formatter: function () {
        return fundTooltip(this, chartName);
      },
      shared: true,
      useHTML: true
    }
  });
}


// expand/collapse button for side scroll tables
// function toggleTableWidth(chartName) {
//   if ($('#'+chartName+'-section').hasClass('full-width')) {
//     $('#'+chartName+'-section').removeClass('full-width');
//     document.getElementById(chartName+'-button').innerHTML = "Expand table <i class='fal fa-expand-wide'></i>";
//   } else {
//     $('#'+chartName+'-section').addClass('full-width');
//     document.getElementById(chartName+'-button').innerHTML = "Collapse table <i class='fal fa-compress-wide'></i>";
//   }
//   // window.redraw();
//   return false;
// }

// table-side-scroll building function
function sideScrollTable(prefix, xclass, id, tableContent, nl, colgroup) {
  var myClass = '';
  var myID = '';
  var myNL = '';
  if (nl) { myNL = "\n";}
  if (xclass != '') { myClass = ' class="'+xclass+'"'; }
  if (id != '') { myID = ' id="'+id+'"'; }
  var rc =  prefix + '<table' + myID + myClass + '>' + myNL;
  // allow caller to control colgroup block
  if (colgroup == '') { rc += prefix + '  <colgroup><col class="column-width"></colgroup>' + myNL; } // default
  if ((colgroup.length) > 4) { rc += prefix + '  ' + colgroup + myNL; } // by callerjavascript
  rc += tableContent;
  rc += prefix + '</table>' + myNL;
  return rc;
}
function sideScrollTH(prefix, scope, xclass, txt, nl) {
  var myClass = '';
  var myScope = '';
  if (xclass != '') { myClass = ' class="'+xclass+'"'; }
  if (scope != '') { myScope = ' scope="'+scope+'"'; }
  var rc = prefix + '<th' + myScope + myClass + '>' + txt + '</th>';
  if (nl) rc += "\n";
  return rc;
}
function sideScrollTH2(prefix, scope, xclass, extraHTML, txt, nl) {
  var myClass = '';
  var myScope = '';
  if (xclass != '') { myClass = ' class="'+xclass+'"'; }
  if (scope != '') { myScope = ' scope="'+scope+'"'; }
  var rc = prefix + '<th ' + extraHTML + myScope + myClass + '>' + txt + '</th>';
  if (nl) rc += "\n";
  return rc;
}
// tbody, tr, thead
function sideScrollWrapper(prefix, tag, id, xclass, content, nl) {
  var myID = '';
  var myNL = '';
  var myClass = '';
  if (nl) { myNL = "\n";}
  if (xclass != '') { myClass = ' class="'+xclass+'"'; }
  if (id != '') { myID = ' id="'+id+'"'; }
  return    prefix + '<'+tag+myID+myClass+'>' + myNL
          + content
          + prefix + '</'+tag+'>' + myNL;
}


// Removing function as part of dav-634-RoR-Last-X-years
// With body { overflow: initial }, top row and left column of RoR table are sticky.
// Buttons have no effect -- but it reintroduces horizontal scrolling issues for desktop user without a scroll wheel.

// function containerSlide(amt) {
//   window.scrollBy(amt, 0);
//   event.preventDefault();
// }

function sideScrollControls(chartName, executeFlag) {
  // Side scroll controls for table
  // var container = document.getElementById(chartName+"-table");
  var container = document.getElementById(chartName+"-section");
  var leftBtn = document.querySelector("#slideLeft");
  var rightBtn = document.querySelector("#slideRight");
  var alertScroll = document.querySelector("#scrollAlert");

  function scrollWindow(amt) {
    window.scrollBy(amt, 0);
    event.preventDefault();
  }
  if (leftBtn) { leftBtn.addEventListener("click", function (event) { scrollWindow(-150); }); }
  if (rightBtn) { rightBtn.addEventListener("click", function (event) { scrollWindow(150); }); }

  //check to determine if an overflow is happening
  function isOverflowing(element) {
    return (element.scrollWidth > element.offsetWidth);
  }

  // If no overflow, disable scroll buttons
  function disableButtons(element) {
    if (isOverflowing(element)) {
        if (alertScroll) { alertScroll.classList.remove("hidden"); }
    } else {
        if (alertScroll) { alertScroll.classList.add("hidden"); }
    }
  }

  // Recheck overflow on the following events
/*
    window.addEventListener('load', function() {
    disableButtons(container);
    // Add inline style to body tag to enable sticky header and left column simultaneously.
    document.body.style.overflowX = "initial";
  });
*/
  window.addEventListener('resize', function() {
    disableButtons(container);
  });
  window.addEventListener('click', function() {
    disableButtons(container);
  });

  if (executeFlag) {
    disableButtons(container);
    document.body.style.overflowX = "initial";  // on first call, not load because of ajax
  }
}
