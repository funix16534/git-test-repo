"use strict";

//Get the required DOM
const btnReg = document.getElementById("btn-submit");
const inpFir = document.getElementById("input-firstname");
const inpLas = document.getElementById("input-lastname");
const inpUse = document.getElementById("input-username");
const inpPas = document.getElementById("input-password");
const inpCon = document.getElementById("input-password-confirm");

//Definite necessary variable and function

function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password
  );
  return user;
}
let dataUser;

//Add event to submit button
btnReg.addEventListener("click", function () {
  //Input form
  const data = {
    fir: inpFir.value,
    las: inpLas.value,
    use: inpUse.value,
    pas: inpPas.value,
    con: inpCon.value,
  };
  // Validate data
  //Firstname, Lastnam, Username must be fill
  let checkData = true; //if data is invalid, the next event will not happen.
  if (data.fir === "") {
    alert("Please input First Name!");
    checkData = false;
  }
  if (data.las === "") {
    alert("Please input Last Name!");
    checkData = false;
  }
  if (data.use === "") {
    alert("Please input Username!");
    checkData = false;
  }
  //ID must unique
  for (let i = 0; i < arrUser.length; i++) {
    if (data.use === arrUser[i].use) {
      alert("Username must unique!");
      checkData = false;
    }
  }
  //Password must be input and confirm
  if (data.pas === "") {
    alert("Please input Password!");
    checkData = false;
  }
  if (data.con === "") {
    alert("Please confirm Password!");
    checkData = false;
  }
  //Confirm password must right
  if (data.con !== data.pas) {
    alert("Differnt Password!");
    checkData = false;
  }
  if (checkData === true) {
    delete data.con; //You don't need that.
    //Save new data, copy data to display data on screen
    dataUser = Object.assign({}, data);
    arrUser.push(dataUser);
    saveToStorage("listUser", arrUser);
    //Go to login page
    window.location.href = "../pages/login.html";
  }
});
