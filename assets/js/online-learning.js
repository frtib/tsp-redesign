// check the online learning page for sessions in the past and hide them
function hideOldSessions() {
  const specialPrefix = 'expire-';
  // console.log('in hideOldSessions');
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy+mm+dd;  // today in digit form
  var sessionList = document.querySelectorAll('div[class^="'+specialPrefix+'"]');
  sessionList.forEach((session) => {
    var classList = session.className.split(" ");  // only one of the classes is our special one
    classList.forEach((classVal) => {
      if (classVal.substr(0,7) == specialPrefix) {
        var expireDate = classVal.split("-")[1];  // session date in digit form
        if (today > expireDate) {
          // console.log('hiding '+classVal);
          session.classList.add('hide');
        }
      }
    });
  });
}
