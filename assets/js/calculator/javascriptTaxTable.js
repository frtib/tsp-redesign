function round_cents(num) {
  num = isNaN(num) || num === '' || num === null ? 0.00 : num;
  return parseFloat(num).toFixed(2);
}

var taxMinYear = 2019;
var taxMaxYear = 2021;
var IRC_acting_year = taxMaxYear;

var taxValues = {
    2021: { contribution_limit: 19500.00, catchup_limit: 6500.00,
      withholding_allowance: 4200.00, annual_addition: 58000 },
    2020: { contribution_limit: 19500.00, catchup_limit: 6500.00,
      withholding_allowance: 4200.00, annual_addition: 57000 },
    2019: { contribution_limit: 19000.00, catchup_limit: 6000.00,
      withholding_allowance: 4200.00, annual_addition: 56000 },
    2018: { contribution_limit: 18500.00, catchup_limit: 6000.00,
      withholding_allowance: 4150.00, annual_addition: 56000 }
}

var acting_year = constrainYear(determineActingYear());
// console.log('acting year is ' + acting_year);

// assume most recent tax table
// DONALD:  still 2020 tax values, dont have 2021 tables yet
// IRS Pub. 15-T, Page 6, LEFT, Single.  2020 Percentage Method Tables for Automated Payroll Systems
var taxtableS = [ [3800.00, 0.00, 0.0], [13675.00, 0.10, 0.0], [43925.00, 0.12, 987.5],
                [89325.00, 0.22, 4617.5], [167100.00, 0.24, 14605.5], [211150.00, 0.32, 33271.5],
                [522200.00, 0.35, 47367.5], [-1, 0.37, 156235.0] ];
// IRS Pub. 15-T, Page 6, LEFT, Married.  2020 Percentage Method Tables for Automated Payroll Systems
var taxtableM = [ [11900.00, 0.00, 0.0], [31650.00, 0.10, 0.0], [92150.00, 0.12, 1975.0],
                [182950.00, 0.22, 9235.0], [338500.00, 0.24, 29211.0], [426600.00, 0.32, 66543.0],
                [633950.0, 0.35, 94735.0], [-1, 0.37, 167307.50] ];

if (acting_year == 2020) {
  // 2020 tax values
  // IRS Pub. 15-T, Page 6, LEFT, Single.  2020 Percentage Method Tables for Automated Payroll Systems
  var taxtableS = [ [3800.00, 0.00, 0.0], [13675.00, 0.10, 0.0], [43925.00, 0.12, 987.5],
                  [89325.00, 0.22, 4617.5], [167100.00, 0.24, 14605.5], [211150.00, 0.32, 33271.5],
                  [522200.00, 0.35, 47367.5], [-1, 0.37, 156235.0] ];
  // IRS Pub. 15-T, Page 6, LEFT, Married.  2020 Percentage Method Tables for Automated Payroll Systems
  var taxtableM = [ [11900.00, 0.00, 0.0], [31650.00, 0.10, 0.0], [92150.00, 0.12, 1975.0],
                  [182950.00, 0.22, 9235.0], [338500.00, 0.24, 29211.0], [426600.00, 0.32, 66543.0],
                  [633950.0, 0.35, 94735.0], [-1, 0.37, 167307.50] ];
}

if (acting_year == 2019) {
  // 2019 tax values
  // IRS Pub. 15, Table 7(a) SINGLE person, ANNUAL Payroll Period
  taxtableS = [ [3800.00, 0.00, 0.0], [13500.00, 0.10, 0.0], [43275.00, 0.12, 970.0],
                [88000.00, 0.22, 4543.0], [164525.00, 0.24, 14382.5], [207900.00, 0.32, 32748.5],
                [514100.00, 0.35, 46628.5], [-1, 0.37, 153798.5] ];
  // IRS Pub. 15, Table 7(b) MARRIED person, ANNUAL Payroll Period
  taxtableM = [ [11800.00, 0.00, 0.0], [31200.00, 0.10, 0.0], [90750.00, 0.12, 1940.0],
                [180200.00, 0.22, 9086.0], [333250.00, 0.24, 28765.0], [420000.00, 0.32, 65497.0],
                [624150.0, 0.35, 93257.0], [-1, 0.37, 164709.50] ];
}

if (acting_year == 2018) {
  // 2018 tax table
  // IRS Pub. 15, Table 7(a) SINGLE person, ANNUAL Payroll Period
  taxtableS = [ [3700.00, 0.00, 0.0], [13225.00, 0.10, 0.0], [42400.00, 0.12, 952.5],
                  [86200.00, 0.22, 4453.5], [161200.00, 0.24, 14089.5], [203700.00, 0.32, 32089.5],
                  [503700.00, 0.35, 45689.5], [-1, 0.37, 150689.5] ];
  // IRS Pub. 15, Table 7(b) MARRIED person, ANNUAL Payroll Period
  taxtableM = [ [11550.00, 0.00, 0.0], [30600.00, 0.10, 0.0], [88950.00, 0.12, 1905.0],
                  [176550.00, 0.22, 8907.0], [326550.00, 0.24, 28179.0], [411550.00, 0.32, 64179.0],
                  [611550.00, 0.35, 91379.0], [-1, 0.37, 161379.00] ];
}

// default tax values
var IRC_limit_year = acting_year;
var IRC_acting_year = acting_year;
var IRC_contribution_limit = taxValues[acting_year]['contribution_limit'];
var IRC_catchup_contribution_limit = taxValues[acting_year]['catchup_limit'];
var withholding_allowance_rate = taxValues[acting_year]['withholding_allowance'];
var annual_addition = taxValues[acting_year]['annual_addition'];
// console.log(IRC_limit_year, IRC_acting_year, IRC_contribution_limit, IRC_catchup_contribution_limit, withholding_allowance_rate);

function constrainYear(year) {
  if (year < taxMinYear) { year = taxMinYear; }
  if (year > taxMaxYear) { year = taxMaxYear; }
  return year;
}
function determineActingYear() {
  var today = new Date();
  var curYear = String(today.getFullYear());
  // padStart broken in IE 11
  // var curMonth = String(today.getMonth()+1).padStart(2, '0');
  // var curDay = String(today.getDate()).padStart(2, '0');
  var curMonth = ('0' + String(today.getMonth()+1)).slice(-2);
  var curDay = ('0' + String(today.getDate())).slice(-2);
  var curDate = curYear + curMonth + curDay;
  // console.log('date is '+curDate);
  // early in year, before taxes due, use last year
  var earlyTest = curYear + '0415';
  if (curDate <= earlyTest) return today.getFullYear()-1;
  // late in year, use next year 'cause taxes
  var lateTest = curYear + '1101';
  if (curDate > lateTest) return today.getFullYear()+1;
  // otherwise return current year
  return today.getFullYear();
}

function getContributionLimit(year) {
  if (year < taxMinYear) return taxValues[taxMinYear]['contribution_limit'];
  if (year > taxMaxYear) return taxValues[taxMaxYear]['contribution_limit'];
  return taxValues[year]['contribution_limit'];
}

function getTaxValues(yearIn) {
  var year = yearIn;
  if (year < taxMinYear) { year = taxMinYear; }
  if (year > taxMaxYear) { year = taxMaxYear; }
  return [
    year,
    taxValues[year]['contribution_limit'],
    taxValues[year]['catchup_limit'],
    taxValues[year]['withholding_allowance'],
    taxValues[year]['annual_addition'],
  ];
}

// Calculate annual income tax for a S (single) or MS (married filing single) person
function annualTax (income, taxarray) {
  // handle minimal case
  if (income < taxarray[0][0]) { return 0.0; }

  // handle other cases
  // note there is always a lower bracket because lowest is handled above
  var i = 1;
  while (i < taxarray.length) {
    if (income < taxarray[i][0]) {
      // bracket found
      return round_cents(taxarray[i][2] + (taxarray[i][1] * (income - taxarray[i-1][0])));
    }
    i++;
  }

  // we didn't find bracket so we must be in highest bracket
  i = taxarray.length - 1;
  return round_cents(taxarray[i][2] + (taxarray[i][1] * (income - taxarray[i-1][0])));
}
