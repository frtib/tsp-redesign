$( document ).ready(function() {
//  $('a[href$="pdf"]').addClass('pdf');
// $('a[href$="pdf"]').addClass('pdf');
// $('a[type="button"]').removeClass('pdf');
$('a[href$="pdf"]').not('a[type="button"]').addClass('pdf');
});
