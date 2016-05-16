function store(){
  document.getElementById("store").addEventListener("click", function (){
        var question = document.getElementById("question").value ;
        localStorage.setItem("currentQuestion", question) ;
    } , false);
}
