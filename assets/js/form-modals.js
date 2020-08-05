/* ADD data-toggle AND data-target ATTRIBUTES BASED ON href */
/* href$ = The $ operator means 'ends with' */

function addFormModals() {
  $('a[href$="tsp-1.pdf"]').not('.form').attr('data-toggle', 'modal').attr('data-target', '#tsp01');
  $('a[href$="tsp-3.pdf"]').not('.form').attr('data-toggle', 'modal').attr('data-target', '#tsp03');
  $('a[href$="tsp09"]').attr('data-toggle', 'modal').attr('data-target', '#tsp09');
  $('a[href$="tsp-15.pdf"]').not('.form').attr('data-toggle', 'modal').attr('data-target', '#tsp15');
  $('a[href$="tsp20"]').not('.form').attr('data-toggle', 'modal').attr('data-target', '#tsp20');
  $('a[href$="tsp-25.pdf"]').not('.form').attr('data-toggle', 'modal').attr('data-target', '#tsp25');
  // $('a[href$="tsp-92.pdf"]').not('.form').attr('data-toggle', 'modal').attr('data-target', '#tsp92');  
}

/* CLICK FUNCTIONS FOR TSP-9, TSP-15, and TSP-25 Yes-No BUTTONS */
$(function () {
    $(".yesBtn").click(function () {
        $("ul.decision").addClass("hide");
        $("div.yes").removeClass("hide")
    });
    $(".noBtn").click(function () {
        $("ul.decision").addClass("hide");
        $("div.no").removeClass("hide")
    });
});

/* RESET CSS OF CONTENT ON MODAL.DISMISS */
  $('.modal.fade').on('hide.bs.modal', function () {
    setTimeout(function(){ // Delay CSS changes until after modal fades away
        $("ul.decision").removeClass("hide");
        $("div.yes").addClass("hide");
        $("div.no").addClass("hide");
      }, 1000);  // 1000 = 1.0 seconds
})
