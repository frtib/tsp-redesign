function toggleInputLabels() {
  var checkBoxCiv = document.getElementById("partcivilian");
  var checkBoxUsv = document.getElementById("partuniformed");
  var checkBoxBpa = document.getElementById("partBPA");

  var civ = document.getElementById("civInput");
  var usv = document.getElementById("usvInput");
  var dual = document.getElementById("dualInput");
  var bpa = document.getElementById("bpaInput");


// Civililan account
  if (checkBoxCiv.checked == true){
    civ.style.display = "block";
    usv.style.display = "none";
    dual.style.display = "none";
  } else {
    civ.style.display = "none";
  }
// USV account
  if (checkBoxUsv.checked == true){
    usv.style.display = "block";
    civ.style.display = "none";
    dual.style.display = "none";
  } else {
     usv.style.display = "none";
  }
// Civilian and USV accounts
  if (checkBoxUsv.checked == true && checkBoxCiv.checked == true){
    dual.style.display = "block";
    civ.style.display = "none";
    usv.style.display = "none";
  } else {
     dual.style.display = "none";
  }
// BPA account
  if (checkBoxBpa.checked == true){
    bpa.style.display = "block";
  } else {
     bpa.style.display = "none";
  }
}
