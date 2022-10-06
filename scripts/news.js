"use strict";

//Define necessary DOM and variable
const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const numPage = document.getElementById("page-num");
let url = "";
let numArticles;

//Code html for news
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
  //Display on news-container
  newsContainer.insertAdjacentHTML("beforeend", html);
  newsContainer.style.opacity = 1;
};

function getNews() {
  url = `https://newsapi.org/v2/top-headlines?country=us&category=${objSetting.category}&pagesize=${objSetting.pageSize}&page=${numPage.textContent}&apiKey=a8d84b7de82845f1bcdd2fa4735528de`;

  //Get new news container
  newsContainer.innerHTML = "";
  //Take data from API
  fetch(url)
    //JSON=>object
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      pageNum(posts); //I will explain this below
      //In object 'post' have array 'articles' - where contain news
      posts.articles.forEach((data) => displayNews(data));
    })
    //Just in case
    .catch(function (err) {
      console.log("Có lỗi");
    });
}

function pageNum(data) {
  //Page one does't have button Previous
  if (numPage.textContent == 1) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "inline";
  }
  //Last page doesn't have button Next
  //For example, total number of articles has 108, there are 20 articles per page. In the last page there are 8 articles smaller than the page size so the next button will be hidden.
  if (data.articles.length < objSetting.pageSize) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "inline";
  }
}

//Call when load page
getNews();

//Add event for button Prev and Next, minus/plus 1 for page number and reload
btnPrev.addEventListener("click", function () {
  numPage.textContent = Number(numPage.textContent) - 1;
  getNews();
});

btnNext.addEventListener("click", function () {
  numPage.textContent = Number(numPage.textContent) + 1;
  getNews();
});
