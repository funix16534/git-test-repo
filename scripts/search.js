"use strict";

//Define necessary DOM and variable
const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const numPage = document.getElementById("page-num");
const btnSearch = document.getElementById("btn-submit");
const input = document.getElementById("input-query");
let url = "";
let q;

//Explain in news.js
const displayNews = function (data) {
  const html = `
  <div class="row border rounded my-3">
  <div
      class="col-4 picture"
      style="
        background-image: url(${data.urlToImage});
      "
></div>
<div class="col-8">
  <h6>${data.title}</h6>
  <p>${data.description}</p>
  <a href=${data.url}><button class="btn btn-primary">View</button></a>
</div>
  </div>
  `;
  newsContainer.insertAdjacentHTML("beforeend", html);
  newsContainer.style.opacity = 1;
};

//Works like in news.js but with q as search data
function getNews() {
  url = `https://newsapi.org/v2/top-headlines?country=us&q=${q}&category=${objSetting.category}&pagesize=${objSetting.pageSize}&page=${numPage.textContent}&apiKey=a8d84b7de82845f1bcdd2fa4735528de`;
  newsContainer.innerHTML = "";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      pageNum(posts);
      posts.articles.forEach((data) => displayNews(data));
    })
    .catch(function (err) {
      console.log("Có lỗi");
    });
}

function pageNum(data) {
  if (numPage.textContent == 1) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "inline";
  }
  if (data.articles.length < objSetting.pageSize) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "inline";
  }
}

btnSearch.addEventListener("click", function () {
  q = input.value;
  getNews();
});

btnPrev.addEventListener("click", function () {
  numPage.textContent = Number(numPage.textContent) - 1;
  getNews();
});

btnNext.addEventListener("click", function () {
  numPage.textContent = Number(numPage.textContent) + 1;
  getNews();
});
