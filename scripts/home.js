"use strict";

//Define the necessary DOM
const noUser = document.getElementById("login-modal");
const haveUser = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");
const btnLogOut = document.getElementById("btn-logout");

//If there is no user logged, button Login and button Register display.

if (current == "") {
  haveUser.style.display = "none";
  noUser.style.display = "inline";
}
//If a user is logging, button Log Out display and welcome user with firstname.
else {
  haveUser.style.display = "inline";
  noUser.style.display = "none";
  welcomeMessage.textContent = `Welcome ${current.fir}`;
}

//Add event fot Log Out button
btnLogOut.addEventListener("click", function () {
  //reser user login before
  current = "";
  saveToStorage("currentUser", current);
  //Reload page
  window.location.href = "../index.html";
});
