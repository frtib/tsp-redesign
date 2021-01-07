{% comment %}
This is the javascript specific to panel 3.
{% endcomment %}
{% assign panelID = include.panelID | default: 3 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return ( annualReturnGood(true) & check_amounts(true) );
};

panelEnter[{{ panelID }}] = function(panel) {
  hide_option_components();
  check_amounts(false);
  // window.scroll(0,0);
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
  return true;
}


// my functions
function hide_option_components() {
  var rs = getRetirementSystem();
  if ((rs == 'USBRS') || (rs == 'US')) {
    $('#trad_option1-ul').addClass('hide');
    $('#trad_option2-ul').addClass('hide');
    $('#roth_option1-ul').addClass('hide');
    $('#roth_option2-ul').addClass('hide');
  } else {
    $('#trad_option1-ul').removeClass('hide');
    $('#trad_option2-ul').removeClass('hide');
    $('#roth_option1-ul').removeClass('hide');
    $('#roth_option2-ul').removeClass('hide');
  }
  percentFixedGood('trad', '1', false);
  percentFixedGood('trad', '2', false);
  percentFixedGood('roth', '1', false);
  percentFixedGood('roth', '2', false);
}

// which input is active, p or f?
function activeInput(type, side) {
  var rs = getRetirementSystem();
  if ((rs == 'USBRS') || (rs == 'US')) { return 'p'; }
  if ($('#'+type+'_option'+side+'_p').prop('checked')) { return 'p'; }
  if ($('#'+type+'_option'+side+'_f').prop('checked')) { return 'f'; }
  return 'x';
}

// show/hide percent/Fixed for panel 3 radio selectors
function percentFixedGood(type, side, submit) {
  var buttonName = type + '_option' + side;
  if (activeInput(type, side) == 'p') {
    $('#'+buttonName+'Percent-div').removeClass("hide");
    $('#'+buttonName+'Amount-div').addClass("hide");
    return clearError(buttonName);
  }
  if (activeInput(type, side) == 'f') {
    $('#'+buttonName+'Percent-div').addClass("hide");
    $('#'+buttonName+'Amount-div').removeClass("hide");
    return clearError(buttonName);
  }
  if (submit) { return showError(buttonName, 'Enter type of contribution'); }
  return clearError(buttonName);
}

// Trad Total is passed in on page 3 so taxes are computed using just page 2 or both page 2 and 3 contribs
// doing computation here because page 2 values already acquired
function sumWithholding(op1TradTotal, op2TradTotal) {
  var grossPay = getPosInteger('grossPay', 0);
  var addHold = getPosInteger('additionalWithholding', 0);
  var beforeHold = getPosInteger('beforeDeduction', 0);
  var afterHold = getPosInteger('afterDeduction', 0);
  var fedAllowances = getPosInteger('fedAllowances', 0);
  var paySchedule = $('#paySchedule').val();
  var maxpay_freq = get_pay_freq(paySchedule);

  var val = grossPay - addHold - beforeHold;
  var val1 = val - op1TradTotal;
  var val2 = val - op2TradTotal;
  var monthTax1 = annualTax(val1 * maxpay_freq - fedAllowances * withholding_allowance_rate, taxtableS);
  if ($('#taxStatus').val() == "M") { monthTax1 = annualTax(val1 * maxpay_freq, taxtableM); }
  monthTax1 = parseFloat((monthTax1 / maxpay_freq).toFixed(2));
  var monthTax2 = annualTax(val2 * maxpay_freq - fedAllowances * withholding_allowance_rate, taxtableS);
  if ($('#taxStatus').val() == "M") { monthTax2 = annualTax(val2 * maxpay_freq, taxtableM); }
  monthTax2 = parseFloat((monthTax2 / maxpay_freq).toFixed(2));

  val = parseFloat((val - afterHold).toFixed(2));
  // console.log('sumWithholding', val, grossPay, addHold, beforeHold, afterHold, monthTax1, monthTax2);
  return [val, grossPay, addHold, beforeHold, afterHold, monthTax1, monthTax2];
}

function getContribution(type, side, grossPay) {
  var field = type + '_option' + side;
  var amount = getPosInteger(field + 'Amount', 0);

  if (activeInput(type, side) == 'p') {
    var percent = getPosInteger(field + 'Percent', 0);
    amount = (percent/100.0) * grossPay;
    //amount = amount.toFixed();
  }

  return amount;
}

function sumContributions() {
  var grossPay = getPosInteger('grossPay', 0);
  var trad_option1 = getContribution('trad','1', grossPay);
  $('#lblAYRtradContrib1').html(CurrencyFormatted(trad_option1));
  var roth_option1 = getContribution('roth','1', grossPay);
  $('#lblAYRrothContrib1').html(CurrencyFormatted(roth_option1));
  var trad_option2 = getContribution('trad','2', grossPay);
  $('#lblAYRtradContrib2').html(CurrencyFormatted(trad_option2));
  var roth_option2 = getContribution('roth','2', grossPay);
  $('#lblAYRrothContrib2').html(CurrencyFormatted(roth_option2));

  var val1 = trad_option1 + roth_option1;
  var val2 = trad_option2 + roth_option2;

  return [val1, val2, trad_option1, roth_option1, trad_option2, roth_option2];
}

function getInputID(rs, type, side) {
  var myInput = type + '_option' + side + 'Amount';
  if (activeInput(type, side) == 'p') { myInput = type + '_option' + side + 'Percent'; }
  return myInput;
}

// something must be entered in one of the 4 boxes for Scenario 1
function option1Good(submit) {
  if (!submit)  return true;
  var rs = getRetirementSystem();
  var trad_input = getInputID(rs, 'trad', 1);
  var trad_set = getPosInteger(trad_input, -1);
  var roth_input = getInputID(rs, 'roth', 1);
  var roth_set = getPosInteger(roth_input, -1);
  if ((trad_set + roth_set) <= -2) {
    var msg = "Enter either a whole percentage or a fixed dollar amount for traditional and/or Roth contributions for Scenario 1.";
    if ((rs == 'USBRS') || (rs == 'US')) {
      msg = "Enter a whole percentage for traditional and/or Roth contributions for Scenario 1.";
    }
    showError(roth_input, msg);
    showError(trad_input, msg);
    return false;
  }
  return true;
}

// can't do catchup without trad or roth
function option2Good(submit) {
  return true;  // nothing to check since catchup inputs removed
}

// test exceeding yearly IRC limits
function test_limits(submit, amts, contribs) {
  // test limits
    // 17,000
    var pay_freq = get_pay_freq(getPaySchedule());

    var limitRegular = IRC_current_contribution_limit;
    var limitCatch = IRC_current_catchup_contribution_limit;
    var limitTotal = limitRegular;
    var age50 = getAge50();
    if (age50 == 'age50Yes') { limitTotal += limitCatch; }
    var msg = '';
    var rs = getRetirementSystem();

    // warn: exceed elective deferral limit
    msg = "Your regular employee contributions exceed the "
      + "Internal Revenue Code (IRC) elective deferral ";
    if (age50 == 'age50Yes') {
      msg += " and catch-up contribution limits" + " (" + CurrencyFormatted(limitRegular, 'no_cent') + " + "
        + CurrencyFormatted(limitCatch, 'no_cent');
    } else {
      msg += "limit " + " (" + CurrencyFormatted(limitRegular, 'no_cent');
    }
    msg += " in " + IRC_current_year + ").";
    var op1annualTR = pay_freq * contribs[0];  // option 1 annual Trad + Roth
    var op2annualTR = pay_freq * contribs[1];  // option 1 annual Trad + Roth
    $('#totalTR1').html(CurrencyFormatted(op1annualTR, 'no_cent'));
    $('#totalTR2').html(CurrencyFormatted(op2annualTR, 'no_cent'));
    if (op1annualTR > limitTotal) {
      var trad_input = getInputID(rs, 'trad', 1);
      var roth_input = getInputID(rs, 'roth', 1);
      if ($('#'+roth_input).val() != '') { showWarning(roth_input, msg); }
      if ($('#'+trad_input).val() != '') { showWarning(trad_input, msg); }
    }
    if (op2annualTR > limitTotal) {
      var trad_input = getInputID(rs, 'trad', 2);
      var roth_input = getInputID(rs, 'roth', 2);
      if ($('#'+roth_input).val() != '') { showWarning(roth_input, msg); }
      if ($('#'+trad_input).val() != '') { showWarning(trad_input, msg); }
    }

   return true;
}

// reuseable simple check.  all boxes should be 0+ and whole numbers
function inputGood(field, submit) {
  clearWarning(field);
  if (!submit) {
    if ($('#'+field).val() == '') { return clearError(field); }
  }
  var id = getPosInteger(field, -1);
  if (id > 0) { $('#'+field).val(id); }
  if (id < 0) { return showError(field, 'Enter a value of at least 0.'); }
  if (field.slice(-7) == 'Percent') { if (id > 99) { return showError(field, 'Enter a value from 0 to 99.'); } }
  // if (submit) { if (id < 0) { return showError(field, 'Please enter a valid value.'); } }
  return clearError(field);
}
// function getContribution(id, grossPay) {
function check_amounts(submit) {
  // assume all is good
  var rc = true;
  var i;
  var idList = [getInputID(rs, 'trad', 1), getInputID(rs, 'roth', 1), getInputID(rs, 'trad', 2), getInputID(rs, 'roth', 2)];
  for (i = 0; i < idList.length; i++) { rc &= inputGood(idList[i], false); }
  sumContributions();

  // test for good input
  rc &= option2Good(submit) & option1Good(submit);

  // test for exceed limits

  // get totals
  var contribs = sumContributions();
  var amts = sumWithholding(contribs[2], contribs[4]);

  // test exceeding yearly IRC limits (warnings first so they can be overwritten by errors)
  // if (!test_limits(submit, amts, contribs)) { rc = false; }
  test_limits(submit, amts, contribs);

  // test totals
  var val1 = amts[0] - contribs[0] - amts[5];
  var val2 = amts[0] - contribs[1] - amts[6];
  var msgTradRoth = "The total amount of additional withholding, payroll deductions, contributions, and calculated Federal taxes must be less than your gross pay.";

  // test grossPay vs. deductions
  var rs = getRetirementSystem();
  if (val1 < 0.0) {
    var trad_input = getInputID(rs, 'trad', 1);
    var roth_input = getInputID(rs, 'roth', 1);
    if (contribs[3] > 0.0) { showError(roth_input, msgTradRoth); }
    if (contribs[2] > 0.0) { showError(trad_input, msgTradRoth); }
    rc = false;
  }
  if (val2 < 0.0) {
    var trad_input = getInputID(rs, 'trad', 2);
    var roth_input = getInputID(rs, 'roth', 2);
    if (contribs[5] > 0.0) { showError(roth_input, msgTradRoth); }
    if (contribs[4] > 0.0) { showError(trad_input, msgTradRoth); }
    rc = false;
  }

  return rc;
}

function annualReturnGood(submit) {
  if (!submit) {
    if ($("#annualReturn").val() == '') { return clearError('annualReturn'); }
  } else {
     if ($("#annualReturn").val() == '') { return showError('annualReturn', 'Please enter your expected rate of return.'); }
  }
  var annualReturn = parseFloat($("#annualReturn").val());
  if (annualReturn > 0) { $('#annualReturn').val(annualReturn.toFixed(2)); }

  if ((annualReturn < 0.0) || (annualReturn > 99.0)) {
    return showError('annualReturn', "Expected Annual Return should be between 0% and 99%.");
  }

  $("#annualReturn").val(parseFloat(0+$("#annualReturn").val()).toFixed(2));
  $('#lblAYRannualReturn').html($("#annualReturn").val());
  return clearError('annualReturn');
}

-->
</script>
