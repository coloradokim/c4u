function store(){
  document.getElementById("store").addEventListener("click", function (){
    var list = [];
    var question = document.getElementById("question").value;
    localStorage.setItem("currentQuestion", question);
  } , false);
}
