$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=1]:checked").val());
    var q2 = parseInt($("input:radio[name=2]:checked").val());
    var q3 = parseInt($("input:radio[name=3]:checked").val());
    var q4 = parseInt($("input:radio[name=4]:checked").val());
    var q5 = parseInt($("input:radio[name=5]:checked").val());

    //empty 
    var sum1 = q1 + q2 + q3 + q4 + q5
    var result = '';

    function getResult(sum) {
      if (sum < 50) {
        result = 'You have failed please retake the test!';
        return result
      } else if (50 < sum && sum < 80) {
        result = 'you have fairly passed!';
        return result
      } else {
        result = 'congratualtions you have passed the test!';
        return result
      }
    }

    displayResult = sum1 + getResult(sum1);

    $("#display").text(displayResult);
  });
  $("#getQuiz").click(function(){
    $("#quiz").slideDown();
  });

  $('#restart').click(function() {
    location.reload();
  });
});
