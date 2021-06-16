// Function for "Don't show this message again" checkbox in scrollAlert (RoR, Share price, Retired funds, Hx Annuities)
var scrollBox = document.querySelector("#scrollAlert");

function toggle(on) {

  if (on) {
    scrollBox.classList.add("none");
  } else {
    scrollBox.classList.add("");
  }
}

function save(on) {
  localStorage.setItem('dontShowAgain', on.toString());
}

function load() {
  return localStorage.getItem('dontShowAgain') === 'true';
}

function onChange(checkbox) {
  const value = checkbox.checked;
  toggle(value);
  // Comment out save() to restore on reload.
  // save(value);
}

const initialValue = load();
toggle(initialValue);
document.querySelector('#dontShow').checked = initialValue;


// Function for "Leave us your feedback" modal during initial launch.
// $(function() {
//   if (typeof Storage != "undefined") {
//     if (!sessionStorage.getItem("done")) {
//       setTimeout(function() {
//         $('#feedback-modal').modal('show');
//       }, 1400);
//     }
//     sessionStorage.setItem("done", true);
//   }
// });
