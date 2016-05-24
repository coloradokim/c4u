function store(){
  document.getElementById("store").addEventListener("click", function (){
    var question = document.getElementById("question").value;
    localStorage.setItem("currentQuestion", question);
  } , false);
}

console.log(localStorage);






// on return, submit button
// goal: { currentQuestion: [] } or previous questions 
