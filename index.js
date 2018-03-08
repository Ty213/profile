var loadPortfolio = document.querySelector('.loadPortfolio');
var portfolio = document.querySelector('.wrapper__portfolio');
var about = document.querySelector('.wrapper__about');
var downButton = document.querySelector(".loadPortfolio");
var upButton = document.querySelector(".loadWelcome");

loadPortfolio.addEventListener("click",function() {
    about.style.display = "none";
    portfolio.style.display = "block";
    downButton.style.display = "none";
    upButton.style.display = "block"; 
});

upButton.addEventListener("click", function() {
    about.style.display = "block";
    downButton.style.display = "block";
    upButton.style.display = "none"; 
})