
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var audio = document.getElementById("myAudio");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");

var ans = 0;
var allAns = [];
var switchAns = [];

opt1.addEventListener("click", function() {
  if (opt1.innerHTML == ans) {
    equationCreation();
  }
  else {
    audio.play();
  }
})

opt2.addEventListener("click", function() {
  if (opt2.innerHTML == ans) {
    equationCreation();
  }
  else {
    audio.play();
  }
})

opt3.addEventListener("click", function() {
  if (opt3.innerHTML == ans) {
    equationCreation();
  }
  else {
    audio.play();
  }
})

function equationCreation() {
  
  var numVal1 = Math.floor(Math.random() * 10);
  var numVal2 = Math.floor(Math.random() * 10);
  var dummyNum1 = Math.floor(Math.random() * 10);
  var dummyNum2 = Math.floor(Math.random() * 10);
  
  if (numVal2> numVal1) {
    equationCreation();
  }
  else{
  num1.innerHTML = numVal1;
  num2.innerHTML = numVal2;

  ans = numVal1 - numVal2;

  allAns = [ans, dummyNum1, dummyNum2];
switchAns = [];
  for (var i = allAns.length; i--;) {
    switchAns.push(allAns.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  }

  opt1.innerHTML = switchAns[0];
  opt2.innerHTML = switchAns[1];
  opt3.innerHTML = switchAns[2];
}}
equationCreation();