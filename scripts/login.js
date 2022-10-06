"use strict";

//Define necessary DOM
const btnLog = document.getElementById("btn-submit");
const inpUse = document.getElementById("input-username");
const inpPas = document.getElementById("input-password");

//Add event to submit button
btnLog.addEventListener("click", function () {
  //Input form
  const data = {
    use: inpUse.value,
    pas: inpPas.value,
  };
  // Validate data
  let checkData = true;
  //Must input username and password
  if (data.use === "") {
    alert("Please input Username!");
    checkData = false;
  }
  if (data.pas === "") {
    alert("Please input Password!");
    checkData = false;
  }
  //Must have someone registered
  if (arrUser == "") {
    alert("No users registered");
    checkData = false;
  }
  //if ID correct, check password
  for (let i = 0; i < arrUser.length; i++) {
    if (data.use === arrUser[i].use) {
      if (
        data.pas !==
        arrUser[arrUser.findIndex((user) => user.use === data.use)].pas
      ) {
        alert("Wrong password!");
        checkData = false;
      }
    }
  }
  //Username must registered
  const arrUsername = arrUser.map((user) => (user = user.use));
  if (arrUsername.includes(data.use) == false) {
    alert("Username dont exist!");
    checkData = false;
  }

  if (checkData === true) {
    //Submit the user logged
    current = Object.assign(
      {},
      arrUser[arrUser.findIndex((user) => user.use === data.use)]
    );
    saveToStorage("currentUser", current);
    //Go to homepage
    window.location.href = "../index.html";
  }
});
