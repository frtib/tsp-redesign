// ref: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
// Use its "alt" text as a caption
var captionText = document.getElementById("caption-text");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
  if (event.target == modal || event.target == span) {
    modal.style.display = "none";
  }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
  //      alert('Esc key pressed.');
        modal.style.display = "none";
    }
};
