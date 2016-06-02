function askQuestion(){
  var question = document.getElementById('question').value;
  var responseTypes = ['Turn and Talk to your neighbor', 'Write down your answer in your text editor', 'Write your answer on a mini-whiteboard', 'Cold Call!']
    document.getElementById("newQuestion").innerHTML = question;
    document.getElementById("waitTime").innerHTML = "WAIT FOR IT...";

    var intervalID = window.setInterval(provideWaitTime, 4500);
    function provideWaitTime() {
      document.getElementById("gatherStudentData").innerHTML = responseTypes[Math.floor(Math.random() * responseTypes.length)];
      clearInterval(intervalID)
    }
  };
