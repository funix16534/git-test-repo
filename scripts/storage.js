"use strict";

//Create class

class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
}

class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}

//Definite necessary functions
//Javascript=> JSON
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
//JSON=>Javascript
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password
  );

  return user;
}

//Save data for user
//For login, register, home
let arrUser = [];
arrUser = localStorage.getItem("listUser") ? getFromStorage("listUser") : [];
//For login, todo
let current;
current = localStorage.getItem("currentUser")
  ? getFromStorage("currentUser")
  : "";
//For setting
let objSetting;
objSetting = localStorage.getItem("setting")
  ? getFromStorage("setting")
  : { category: "general", pageSize: 20 };
