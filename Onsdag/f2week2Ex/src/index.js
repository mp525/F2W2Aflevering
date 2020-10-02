import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
// import navigation from "./navigation";

//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");

//var button = document.getElementById("joke1BTN").addEventListener("click", getJoke);
//var button2 = document.getElementById("btnAdd").addEventListener("click", addJoke);

//function getJoke(e){
//  e.preventDefault();
//   let id = document.getElementById("joke1NUM").value;
//   var joke = jokes.getJokeById(id);
//   document.getElementById("joke1P").innerText = joke;
//}

//function addJoke(e){
//   e.preventDefault();
//    let joke = document.getElementById("jokeToAdd").value;
//   jokes.addJoke(joke);
//   const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//   document.getElementById("jokes").innerHTML = allJokes.join("");
//}

var buttonOpg2 = document.getElementById("opg2BTN").addEventListener("click", updateQuote);
fetchQuote(); //Metode der kalder fetch

setInterval(fetchQuote,60*60*1000); //Hver time kaldes fetch

var cloverEvent = document.getElementById("svg2").addEventListener("click", clover);

function clover(e){
    e.preventDefault();
    var target = e.target;
    var id = target.id;
    var message;
    if(id === "path2822" || id === "path2820" || id === "rect2816"){
        alert("North!");
    } else if(id === "rect2841" || id === "path2843" || id === "path2845"){
        alert("South!");
    } else if(id === "rect2861" || id === "path2863" || id === "path2865"){
        alert("East!");
    } else if(id === "rect2869" || id === "path2873" || id === "path2871"){
        alert("West!");
    }
  
}

function fetchQuote(){
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("opg2").innerHTML = data.joke;
        });
}

function updateQuote(e) {
    e.preventDefault();
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("opg2").innerHTML = data.joke;
        });
    
}


//document.getElementById("joke1").innerHTML = "quotes";

// // Solution 1
// document.getElementById('1').innerHTML = 'TEST11111111111111';

// // Solution 2
// document.getElementById('2').innerHTML = 'TEST2222222222222222';


