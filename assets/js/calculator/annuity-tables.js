function setTop() {
  // OVERVIEW
  var r1_Overview = document.getElementById("overview-r1c").offsetHeight;
  var r2_Overview = document.getElementById("overview-r2c").offsetHeight;

  if (document.getElementById("overview-r2") != null) {
    var r2nodesOverview = document.getElementById("overview-r2").childNodes;
    for (var i = 0; i < r2nodesOverview.length; i++) {
      if (r2nodesOverview[i].nodeName.toLowerCase() == "th") {
        r2nodesOverview[i].style.top = r1_Overview + "px";
      }
    }
  }

  if (document.getElementById("overview-r3") != null) {
    var r3nodesOverview = document.getElementById("r3").childNodes;
    for (var i = 0; i < r3nodesOverview.length; i++) {
      if (r3nodesOverview[i].nodeName.toLowerCase() == "th") {
        r3nodesOverview[i].style.top = r1_Overview + r2_Overview + "px";
      }
    }
  }

  // TSP monthly payments
  var r1_Monthly = document.getElementById("monthly-r1c").offsetHeight;
  // var r2_Monthly = document.getElementById("monthly-r2c").offsetHeight;

  if (document.getElementById("monthly-r2") != null) {
    var r2nodesMonthly = document.getElementById("monthly-r2").childNodes;
    for (var i = 0; i < r2nodesMonthly.length; i++) {
      if (r2nodesMonthly[i].nodeName.toLowerCase() == "th") {
        r2nodesMonthly[i].style.top = r1_Monthly + "px";
      }
    }
  }


  // Single life annuity
  var r1_Single = document.getElementById("single-r1c").offsetHeight;
  // var r2_Single = document.getElementById("single-r2c").offsetHeight;

  if (document.getElementById("single-r2") != null) {
    var r2nodesSingle = document.getElementById("single-r2").childNodes;
    for (var i = 0; i < r2nodesSingle.length; i++) {
      if (r2nodesSingle[i].nodeName.toLowerCase() == "th") {
        r2nodesSingle[i].style.top = r1_Single + "px";
      }
    }
  }

  // Joint life with spouse annuity
  var r1_Joint = document.getElementById("joint-r1c").offsetHeight;
  // var r2_Joint = document.getElementById("joint-r2c").offsetHeight;

  if (document.getElementById("joint-r2") != null) {
    var r2nodesJoint = document.getElementById("joint-r2").childNodes;
    for (var i = 0; i < r2nodesJoint.length; i++) {
      if (r2nodesJoint[i].nodeName.toLowerCase() == "th") {
        r2nodesJoint[i].style.top = r1_Joint + "px";
      }
    }
  }



} // end function setTop()
