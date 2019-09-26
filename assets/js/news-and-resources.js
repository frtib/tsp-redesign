// get tax data
function setTaxData() {
  var year = 2018;
  var today = new Date();
  year = today.getFullYear();
  // year = determineActingYear();
  console.log('getting values for year '+ year);
  var taxList = getTaxValues(year);
  $('#tax-year').html(taxList[0]);
  $('#contribution-limit').html(CurrencyFormatted(taxList[1], 'no_cent'));
  $('#catchup-limit').html(CurrencyFormatted(taxList[2], 'no_cent'));
  $('#withholding-allowance').html(CurrencyFormatted(taxList[3], 'no_cent'));
  $('#annual-addition').html(CurrencyFormatted(taxList[4], 'no_cent'));
}

function onSuccess(divName, data) {
  if (divName == 'both') {
    var rates = data.split(", ");
    $('#loan-rate').html(rates[0]);
    $('#annuity-rate').html(rates[1]);
    return true;
  }
  $('#'+divName).html(data);
}
function onFail(divName, textStatus, errorThrown) {
  $('#'+divName).html('failed');
}
// get loan rate and annuity rate
function getLoanAndAnnuityRate() {
  $('#loan-rate').html('fetching...');
  $('#annuity-rate').html('fetching...');
  var url = getDownloadString('getCurrentLoanInterestAndAnnuityRate.html', '');
  doAjaxRetrieveCallback('both', url, onSuccess, onFail);
}
// get loan rate
function getLoanRate() {
  $('#loan-rate').html('fetching...');
  var url = getDownloadString('getCurrentLoanInterestRate.html', '');
  doAjaxRetrieveCallback('loan-rate', url, onSuccess, onFail);
}
// get annuity rate
function getAnnuityRate() {
  $('#annuity-rate').html('fetching...');
  var url = getDownloadString('getCurrentAnnuityRate.html', '');
  doAjaxRetrieveCallback('annuity-rate', url, onSuccess, onFail);
}
