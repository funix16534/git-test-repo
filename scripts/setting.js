"use strict";

//Define necessary DOM
const inputCategory = document.getElementById("input-category");
const btnSetting = document.getElementById("btn-submit");
const inputPageSize = document.getElementById("input-page-size");

//Add event for button Setting
btnSetting.addEventListener("click", function () {
  const data = {
    category: inputCategory.value,
    pageSize: inputPageSize.value,
  };
  let checkSetting = true;
  if (data.pageSize == "") {
    alert("Input your page size!");
    checkSetting = false;
  }
  if (checkSetting === true) {
    //Save for news page
    objSetting = Object.assign({}, data);
    saveToStorage("setting", objSetting);
  }
});
