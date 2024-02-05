function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-3");
  newNode.setAttribute("placeholder", "Enter here..");
  newNode.setAttribute("rows", 3);

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-3");
  newNode.setAttribute("placeholder", "Enter here..");
  newNode.setAttribute("rows", 3);

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating CV
function generateCV() {
  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;

  // direct

  document.getElementById("nameT2").innerHTML = nameField;

  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  // address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  // links
  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;
  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;
  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;

  // objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // work exp..
  let wes = document.getElementsByClassName("weField");
  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // acdemic qulaification
  let aqs = document.getElementsByClassName("eqField");
  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value} <li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  // -------------

  if (nameField == "" || addressT == "") {
    alert("Fill the Fields which are Marked");
    return false;
  }

  var ph = /^\d{10}$/;

 if((contactField.value.match(ph))) {
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("cv-form").style.display = "none";
  return true
 } else {
   alert("Please Enter a valid Phone Number");
 }
    
    
  
}

// printcv
function printCV() {
  window.print();
}
