/* getQueryString was delivered in paycheckEstimator.js  */
function getQueryString(qs) {
  hu = window.location.search.substring(1);
  gy = hu.split("&");
  for (i=0;i<gy.length;i++) {
    ft = gy[i].split("=");
    if (ft[0] == qs) {
      return ft[1].replace(/%20/g, ' ');
    }
  }
}
/* CurrencyFormatted was delivered in paycheckEstimator.js */
function CurrencyFormatted(num, no_cent) {
  if(isNaN(num)) { num = "0"; }
  num = num.toString().replace(/\$|\,/g,'');
  if(isNaN(num)) { num = "0"; }
  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num*100+0.50000000001);
  cents = num%100;
  num = Math.floor(num/100).toString();
  if(cents<10) {
    cents = "0" + cents;
  }
  for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) {
    num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
  }

  if (no_cent != null && no_cent == 'no_cent') {
    return (((sign)?'':'-') + '$' + num);
  } else {
    return (((sign)?'':'-') + '$' + num + '.' + cents);
  }
}

function addCommas(element) {
  var val = $('#'+element).val();
  var newval = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  $('#'+element).val(newval);
  // console.log('add commas', val, newval);
}
function removeCommas(element) {
  var val = $('#'+element).val();
  var newval = val.replace(/,/g, '');
  $('#'+element).val(newval);
  // console.log('remove commas', val, newval);
}

function showError1(element, message) {
  // $('#'+element).addClass("usa-input-error"); // aria-describedby="input-error-message"
  $('#'+element+'-input-error').addClass("usa-input-error");
  $('#'+element+'-label').addClass("usa-input-error-label");
  $('#'+element+'-error-message').addClass("usa-input-error-message");
  $('#'+element+'-error-message').html(message);
  // console.log('error is '+message)
  document.getElementById(element).setAttribute("aria-describedby", element+'-error-message');
  return false;
}
function clearError1(element) {
  // $('#'+element).removeClass("usa-input-error"); // aria-describedby="input-error-message"
  $('#'+element+'-input-error').removeClass("usa-input-error");
  $('#'+element+'-label').removeClass("usa-input-error-label");
  $('#'+element+'-error-message').removeClass("usa-input-error-message");
  $('#'+element+'-error-message').html('');
  // console.log('clearError for ['+element+']: ');
  document.getElementById(element).setAttribute("aria-describedby", '');
  return true;
}

function showError(element, message) {
  $('#'+element+'-div').addClass("usa-input-error");
  $('#'+element+'-label').addClass("usa-input-error-label");
  $('#'+element+'-error-message').addClass("usa-input-error-message");
  $('#'+element).addClass("usa-input-error-element");
  $('#'+element+'-error-message').html(message);
  // console.log('error for ['+element+']: '+message);
  // document.getElementById(element).setAttribute("aria-describedby", element+'-error-message');
  gotoAnchor(element+'-anchor');
  return false;
}
function clearError(element) {
  // $('#'+element).removeClass("usa-input-error"); // aria-describedby="input-error-message"
  $('#'+element+'-div').removeClass("usa-input-error");
  $('#'+element+'-label').removeClass("usa-input-error-label");
  $('#'+element+'-error-message').removeClass("usa-input-error-message");
  $('#'+element).removeClass("usa-input-error-element");
  $('#'+element+'-error-message').html('');
  // document.getElementById(element).setAttribute("aria-describedby", '');
  return true;
}
function testError(test, id, msg) {
    if (test) { clearError(id); } else { showError(id, msg); }
}

var warningClass = "bgYellow";
function isWarning(element) {
  if ($('#'+element).hasClass(warningClass)) { return true; }
  return false;
}
function showWarning(element, message) {
  $('#'+element+'-div').addClass("usa-input-warning");
  $('#'+element+'-label').addClass("usa-input-warning-label");
  $('#'+element+'-error-message').addClass("usa-input-warning-message");
  // $('#'+element).addClass("usa-input-warning-element");
  $('#'+element+'-error-message').html(message);
  // console.log('warning for ['+element+']: '+message);
  // document.getElementById(element).setAttribute("aria-describedby", element+'-warning-message');
  gotoAnchor(element+'-anchor');
  // scrollSmooth(element+'-anchor');
  return false;
}
function clearWarning(element) {
  // $('#'+element).removeClass("usa-input-warning"); // aria-describedby="input-warning-message"
  $('#'+element+'-div').removeClass("usa-input-warning");
  $('#'+element+'-label').removeClass("usa-input-warning-label");
  $('#'+element+'-error-message').removeClass("usa-input-warning-message");
  // $('#'+element).removeClass("usa-input-warning-element");
  $('#'+element+'-error-message').html('');
  // document.getElementById(element).setAttribute("aria-describedby", '');
  return true;
}
var attentionClass = "attention";
function isWriteIn(element) {
  if ($('#'+element).hasClass(attentionClass)) { return true; }
  return false;
}
function showWriteIn(element, message) {
  $('#'+element+'-error-message').addClass("attention");
  $('#'+element).addClass("attention");
  $('#'+element+'-error-message').html(message);
  gotoAnchor(element+'-anchor');
  return false;
}
function clearWriteIn(element) {
  $('#'+element+'-error-message').removeClass("attention");
  $('#'+element).removeClass("attention");
  $('#'+element+'-error-message').html('');
  return true;
}


function gotoAnchor(anchor) { location.replace("#" + anchor); }
function scrollSmooth(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      block: 'start', behavior: 'smooth'
    });
  }
}
function scrollAuto(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      block: 'start', behavior: 'smooth'
    });
  }
}

function getPosInteger(id, def) {
  var val = parseInt($('#'+id).val());
  if (isNaN(val)) { val = def; }

  return val;
}
function getPosFloat(id, def) {
  var val = parseFloat($('#'+id).val());
  if (isNaN(val)) { val = def; }

  return val;
}

function resultSelector(set, choice) {
  var type = choice.replace(set, '');
  if (type == 'Graph') {
    $('#'+choice).prop('checked', true);
    $('#'+set+'-graph').removeClass('hide');
    $('#'+set+'-table').addClass('hide');
    return true;
  }
  if (type == 'Table') {
    $('#'+choice).prop('checked', true);
    $('#'+set+'-graph').addClass('hide');
    $('#'+set+'-table').removeClass('hide');
    return true;
  }
  $('#'+choice).prop('checked', true);
  $('#'+set+'-graph').removeClass('hide');
  $('#'+set+'-table').removeClass('hide');
  return true;
}

// most calculators will hide an AYR element when they hide an input element
function hideBlock(hideFlag, block1, block2) {
  if (hideFlag) {
    $('#'+block1).addClass('hide');
    $('#'+block2).addClass('hide');
    return true;
  }
  $('#'+block1).removeClass('hide');
  $('#'+block2).removeClass('hide');
  return false;
}

// generic string validation
function stringGood(submit, writein, prefix, id, errorMsg) {
  var myID = prefix + id;
  // if (writein) { clearWriteIn(myID); }
  clearWriteIn(myID);
  if ($('#'+myID).length) {
    var val = $.trim($('#'+myID).val());
    $('#lblAYR'+myID).html(val);
    if (val.length > 0) { return clearError(myID); }
  }
  if (submit) { return showError(myID, errorMsg); }
  if (writein) { return showWriteIn(myID, errorMsg); }
  return clearError(myID);
}
// generic string validation for RBCO
function stringGood2(submit, writein, prefix, id, errorMsg) {
  var myID = prefix + id;
  // if (writein) { clearWriteIn(myID); }
  clearWriteIn(myID);
  if ($('#'+myID).length) {
    var val = $.trim($('#'+myID).val());
    $('#lblAYR'+myID).html(val);
    if (val.length > 0) { return clearError(myID); }
  }
  if (submit) { return showError(myID, errorMsg); }
  if (writein) { return showWriteIn(myID, ''); }
  return clearError(myID);
}

// generic dropdown validation
function ddGood(submit, writein, prefix, id, errorMsg) {
  var myID = prefix + id;
  var val = $('#'+myID).val();
  $('#lblAYR'+myID).html(val);
  if (writein) { if (val == 'Select') { return showWriteIn(myID, errorMsg); } }
  clearWriteIn(myID);
  if (submit == 0) { return clearError(myID); }
  if (val == 'Select') { return showError(myID, errorMsg); }
  return clearError(myID);
}
// generic dropdown validation RBCO
function ddGood2(submit, writein, prefix, id, errorMsg) {
  var myID = prefix + id;
  var val = $('#'+myID).val();
  $('#lblAYR'+myID).html(val);
  if (writein) { if (val == 'Select') { return showWriteIn(myID, ''); } }
  clearWriteIn(myID);
  if (submit == 0) { return clearError(myID); }
  if (val == 'Select') { return showError(myID, errorMsg); }
  return clearError(myID);
}

// remove troublesome characters (MS WORD) from an input field, return the string.
function launderString(string) {
    // smart single quotes and apostrophe
    string = string.replace(/[\u2018|\u2019|\u201A]/g, "\'");
    // smart double quotes
    string = string.replace(/[\u201C|\u201D|\u201E]/g, "\"");
    // ellipsis
    string = string.replace(/\u2026/g, "...");
    // dashes
    string = string.replace(/[\u2013|\u2014]/g, "-");
    // circumflex
    string = string.replace(/\u02C6/g, "^");
    // open angle bracket
    string = string.replace(/\u2039/g, "");
    // spaces
    string = string.replace(/[\u02DC|\u00A0]/g, " ");

    string = string.replace('&', " ");

    return string;
}
// fetch input field value, clean it, reset it, return it
function launderInput(field) {
  var val = launderString($.trim($('#'+field).val()));
  $('#'+field).val(val);
  return val;
}

function filterNumeric (event) {
  var key = event.key;
  var keyCode = ('which' in event) ? event.which : event.keyCode;
  if ((event.shiftKey) && (keyCode == 9)) { return true; } // shift AND tab
  if (event.shiftKey) { return false; } // shift, disallow special chars over numbers
  if (event.ctrlKey) { return false; } // control key
  if ((keyCode >= 48) && (keyCode <= 57)) { return true; }  // digit
  if ((keyCode >= 96) && (keyCode <= 105)) { return true; }  // keypad
  if ((keyCode == 46) || (keyCode == 8) || (keyCode == 9)) { return true; }; // delete, bs, tab
  if ((keyCode >= 35) && (keyCode <= 40) ) { return true; }; // end, home, arrow keys
  return false;
}

// IE doesn't support Math.trunc().
function mathTrunc(x) {
  if (x > 0) { return Math.floor(x); }
  return Math.ceil(x);
}

function positiveOnly(event, floatFlag, negFlag) {
  var asciiCode = (event.which) ? event.which : event.keyCode;
  // console.log({asciiCode});
  if ((negFlag == 0) && (asciiCode == 45)) { return false; }
  if ((floatFlag == 0) && (asciiCode == 46)) { return false; }
  if (asciiCode > 31 && (asciiCode < 45 || asciiCode > 57)) return false;
  return true;
}
