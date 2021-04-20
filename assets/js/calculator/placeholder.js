// Standard setup for account numbers and dates

// move data-store values into each box
var storesTSP = [];

function submitTSP(form) {
  for (var i = 0; i < storesTSP.length; i++) {
    var store = $(storesTSP[i]).attr('data-store');
    var val = $(storesTSP[i]).val();
    var name = storesTSP[i].substr(1);
    form.append('<input type="hidden" name="'+name+'Store" value="'+store+'" /> ');
    form.append('<input type="hidden" name="'+name+'Val" value="'+val+'" /> ');
    // $('<input />').attr('type', 'hidden').attr('name', "something").attr('value', "something").appendTo('#form');
    // alert(storesTSP[i] + '  ' + store);
    $(storesTSP[i]).val(store);
  }
  // form.append('<input type="hidden" name="dav" value="test" /> ');
  return true;
}


function setPlaceholder(input, width) {
                // var val = input.attr('data-store').toString();
                var val = $(input).attr('data-store').toString();
                var len = val.length;
                var x = "xxxxxxxxxxxxxxxxxxxxxx";
                if (len > 4) {
                   x = x.slice(4 - len);
                } else {
                   x = '';
                }
                var placeholder = x + val.slice(-4);
                placeholder = placeholder.slice(-width);
                $(input).attr('myPlaceholder', placeholder);
                // $(input).css('color','#BBBCBF');
                // $(input).val('');
                $(input).val(placeholder);
}

function setAccountPlaceholder(input) {
                // var val = input.attr('data-store').toString();
                var val = $(input).attr('data-store').toString();
                var len = val.length;
                var x = "xxxxxxxxxxxxx";
                if (len > 4) {
                   x = x.slice(4 - len);
                } else {
                   x = '';
                }
                var placeholder = x + val.slice(-4);
                placeholder = placeholder.slice(-13);
                $(input).attr('myPlaceholder', placeholder);
                // $(input).css('color','#BBBCBF');
                // $(input).val('');
                $(input).val(placeholder);
}

function accountNumberTSP(id) {
  var jQid = "#" + id;
  $(jQid).focus(function( ) {
                // var input = $(this);
                var input = $(jQid);
                var store = $(jQid).attr('data-store').toString();
                // $(jQid).attr('myPlaceholder', "");
                $(jQid).css('color','#444444');
                $(jQid).val(store);
  });

/*
  $(jQid).change(function( ) {
                // var input = $(this);
                var input = $(jQid);
                var val = $(jQid).val();
                $(jQid).attr('data-store', val);
  });
*/

  $(jQid).blur(function( ) {
                // var input = $(this);
                var input = $(jQid);
                var val = $(jQid).val();
                $(jQid).attr('data-store', val);
                // setPlaceholder(input, 13);
                setPlaceholder(jQid, 13);
  });
  storesTSP.push(jQid);
}

function setSSNplaceholder(input) {
                var val = input.attr('data-store').toString();
                var len = val.length;
                var x = "xxxxxxxxx";
                if (len > 4) {
                   x = x.slice(4 - len);
                } else {
                   x = '';
                }
                var placeholder = x + val.slice(-4);
                placeholder = placeholder.slice(-9);
                input.attr('myPlaceholder', placeholder);
                // input.css('color','#BBBCBF');
                // input.val('');
                input.val(placeholder);
}

function datepickerTSP(id) {
  var jQid = "#" + id;
    // $(jQid).datepicker( );
    $(jQid).datepicker({
      showOn: "both",
      buttonImage: "/resources/images/calendar.gif",
      buttonImageOnly: true,
      // showOptions: { direction: "up" },
      buttonText: "Select date",
      changeMonth: true,
      changeYear: true,
      onClose: function(dateText, inst){
                    $(this).datepicker( "setDate", $(this).datepicker("getDate"));
                    // console.log("Hello World");
                    return false;
               }
    });
    $(jQid).datepicker( "option", "dateFormat", "mm/dd/yy");
    $(jQid).attr( "placeholder", "mm/dd/yyyy");
    $(jQid).change(function(){
      // $(jQid).datepicker( "setDate", $(jQid).datepicker("getDate"));
      return false;
    });
    // $(jQid).blur(function(){ $(jQid).datepicker( "hide" ); });
}
