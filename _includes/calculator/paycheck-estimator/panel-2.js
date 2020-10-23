{% comment %}
This is the javascript specific to panel 2.
{% endcomment %}
{% assign panelID = include.panelID | default: 2 %}
{% assign panelName = include.panelName | default: 'panel-' | append: panelID %}
<script type="text/javascript">
<!--
panelNames['{{ panelName}}'] = {{ panelID }};
panelGood[{{ panelID }}] = function(forceValue) {
  return ( sumWithholdingGood(true) & fedAllowancesGood(true) & taxStatusGood(true)
    & payScheduleGood(true) & grossPayGood(true)
   );
};

panelEnter[{{ panelID }}] = function(panel) {
  setAnnualGrossPay();
  hideWorksheet({{panelID}});
  // window.scroll(0,0);
  return true;
}
panelExit[{{ panelID }}] = function(panel) {
  hideWorksheet({{panelID}});
  return true;
}


// hideBlock() calls
function hidePaySchedule(hideFlag) { hideBlock(hideFlag, 'paySchedule-hide', 'lblAYRpaySchedule-row'); }

// my functions
function get_pay_freq(paySchedule) {
  if (paySchedule == 'Biweekly')      return 26.0;
  if (paySchedule == 'Weekly')        return 52.0;
  if (paySchedule == 'Semi-monthly')  return 24.0;
  if (paySchedule == 'Monthly')       return 12.0;
  return 1.0;
}

function getPaySchedule() {
  var rs = getRetirementSystem();
  if ((rs == 'FERS') || (rs == 'CSRS')) {
    return $('#paySchedule').val();
  }
  return 'Monthly';
}

function payScheduleGood(submit) {
  var rs = getRetirementSystem();
  if ((rs == 'USBRS') || (rs == 'US')) { return clearError('paySchedule'); }
  setAnnualGrossPay();
  var paySchedule = getPaySchedule();
  $('#lastPaySchedule').val(paySchedule);
  if (paySchedule == 'Select') {
    if (submit) { return showError('paySchedule', "Select your pay schedule."); }
  }

  return clearError('paySchedule');
}

function showWorksheet(idx) {
  $('#panel-'+idx).addClass('hide');
  $('#panel-'+idx+'-worksheet').removeClass('hide');
}

function hideWorksheet(idx) {
  $('#panel-'+idx).removeClass('hide');
  $('#panel-'+idx+'-worksheet').addClass('hide');
}

function clearWorksheet(idx) {
  $('#xxx').val(0.0);
}

function saveWorkseetTotals(idx) {
  // sum values, copy to panel 2
  var i = 0;
  var before = 0;
  var after = 0;
  for (i = 1; i <= 4; i++) { before += getPosInteger('pre'+i, 0); }
  for (i = 1; i <= 19; i++) { after += getPosInteger('post'+i, 0); }

  $('#beforeDeduction').val(before);
  $('#afterDeduction').val(after);
  hideWorksheet(idx);
}

function setAnnualGrossPay() {
  $('#annualGrossPay').html("");
  var pay_freq = get_pay_freq($('#paySchedule').val());
  var monthly = getPosInteger('grossPay', -1);
  if (monthly < 0) { return false; }
  if (pay_freq < 5) { return false; }
  // var pay = "[" + CurrencyFormatted(monthly * pay_freq) + "/yr]";
  var pay = CurrencyFormatted(monthly * pay_freq) + " per year";
  $('#annualGrossPay').html(pay);
  return true;
}

function grossPayGood(submit) {
  if (!submit) {
    if ($("#grossPay").val() == '') { return clearError('grossPay'); }
  }
  var grossPay = getPosInteger('grossPay', -1);
  if (grossPay > 0) { $('#grossPay').val(grossPay); }

  setAnnualGrossPay();
  if (grossPay < 0.0) {
    return showError('grossPay', "Enter your gross pay per paycheck.");
  }
  if ((grossPay < 1.0) || (grossPay > 100000.0)) {
    return showError('grossPay', "Gross Pay amount must be between $1 and $100,000.");
  }

  clearError('grossPay');
  //$('#lblAYRgrossPay').html(CurrencyFormatted(grossPay));
  return sumWithholdingGood(submit);
}


function set_taxStatus(status) {
  $('#taxStatusSingle').attr('checked', false);
  $('#taxStatusMarried').attr('checked', false);
  $('#taxStatusSingleRate').attr('checked', false);

  if (status == 'S') { $('#taxStatusSingle').attr('checked', true); }
  if (status == 'M') { $('#taxStatusMarried').attr('checked', true); }
  if (status == 'MS') { $('#taxStatusSingleRate').attr('checked', true); }
}
function getTaxStatus() {
  if ($('#taxStatusSingle').prop('checked')) { return 'S'; }
  if ($('#taxStatusMarried').prop('checked')) { return 'M'; }
  if ($('#taxStatusSingleRate').prop('checked')) { return 'MS'; }
  return '';
}

function taxStatusGood(submit) {
  var status = getTaxStatus();

  if (status == 'S') { return clearError('taxStatus'); }
  if (status == 'M') { return clearError('taxStatus'); }
  if (status == 'MS') { return clearError('taxStatus'); }

  return showError('taxStatus', "Select your tax status.");
}

function fedAllowancesGood(submit) {
  if (!submit) {
    if ($("#fedAllowances").val() == '') { return clearError('fedAllowances'); }
  }
  var fedAllowances = getPosInteger('fedAllowances', -1);
  if (fedAllowances > 0) { $('#fedAllowances').val(fedAllowances); }

  var fedAllowances = getPosInteger('fedAllowances', -1);
  if (fedAllowances < 0) {
    return showError('fedAllowances', "Enter your total federal allowances.");
  }
  if (fedAllowances > 99) {
    return showError('fedAllowances', "Federal allowances must be less than 100.");
  }


  //$('#lblAYRfedAllowances').html(parseFloat(0+$('#fedAllowances').val()));
  return clearError('fedAllowances');
}

function additionalWithholdingGood(submit) {
  if (!submit) {
    if ($("#additionalWithholding").val() == '') { return clearError('additionalWithholding'); }
  }
  var additionalWithholding = getPosInteger('additionalWithholding', -1);
  if (additionalWithholding > 0) { $('#additionalWithholding').val(additionalWithholding); }

  if (additionalWithholding < 0) {
    return showError('additionalWithholding', "Enter your additional withholding amount.");
  }
  if (additionalWithholding > 10000) {
    return showError('additionalWithholding', "Additional withholding should be no more than $10,000.");
  }

  //$('#lblAYRadditionalWithholding').html(CurrencyFormatted(parseFloat($('#additionalWithholding').val())));
  return clearError('additionalWithholding');
}
function beforeDeductionGood(submit) {
  if (!submit) {
    if ($("#beforeDeduction").val() == '') { return clearError('beforeDeduction'); }
  }
  var beforeDeduction = getPosInteger('beforeDeduction', -1);
  if (beforeDeduction > 0) { $('#beforeDeduction').val(beforeDeduction); }

  if (beforeDeduction < 0) {
    return showError('beforeDeduction', "Enter your total total before tax deductions.");
  }
  if (beforeDeduction > 10000) {
    return showError('beforeDeduction', "Total before tax deductions should be no more than $10,000.");
  }

    //$('#lblAYRbeforeDeduction').html(CurrencyFormatted(parseFloat($('#beforeDeduction').val())));
  return clearError('beforeDeduction');
}
function afterDeductionGood(submit) {
  if (!submit) {
    if ($("#afterDeduction").val() == '') { return clearError('afterDeduction'); }
  }
  var afterDeduction = getPosInteger('afterDeduction', -1);
  if (afterDeduction > 0) { $('#afterDeduction').val(afterDeduction); }

  if (afterDeduction < 0) {
    return showError('afterDeduction', "Enter your total after tax deductions.");
  }
  if (afterDeduction > 10000) {
    return showError('afterDeduction', "Total after tax deductions should be no more than $10,000.");
  }

  //$('#lblAYRafterDeduction').html(CurrencyFormatted(parseFloat($('#afterDeduction').val())));
  return clearError('afterDeduction');
}

function sumWithholdingGood(submit) {
  var good = afterDeductionGood(submit) & beforeDeductionGood(submit) & additionalWithholdingGood(submit);
  if (!good) { return false; }

  var amts = sumWithholding(0, 0);
  var msg1 = "Additional tax withholding must be less than your gross pay.";
  var msg2 = "The total amount of your deductions must be less than your gross pay.";

  if ((amts[0]-amts[5]) < 0.0) {
    // showError('grossPay', msg);
    testError((amts[4] <= 0.0), 'afterDeduction', msg2);
    testError((amts[3] <= 0.0), 'beforeDeduction', msg2);
    testError((amts[2] <= 0.0), 'additionalWithholding', msg1);
    return false;
  }
  return true;
}

function deductionGood(field, submit) {
  if ($("#"+field).val() == '') { return clearError(field); }
  var fieldVal = getPosInteger(field, -1);
  if (fieldVal > 0) { $('#'+field).val(fieldVal); }

  if (fieldVal < 0) {
    return showError(field, "Enter the deduction amount.");
  }

  return clearError(field);
}

-->
</script>
