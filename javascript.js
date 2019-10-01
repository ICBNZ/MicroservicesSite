/* Quiz - check answers, display score, message, answers button */
function check_answers(){
  var score = 0;
  var question1 = document.questions.question1.value;
  var q1 = question1.toLowerCase();
  var question2 = document.questions.question2.value;
  var question3 = document.questions.question3.value;

  if(q1 == "monolithic"){
    score++;
  }
  if(question2 == "Right"){
    score++;
  }
  if(question3 == "Right"){
    score++;
  }

  var message = ["100% Congratulations!", "Almost there!", "Try Again!"]
  var i;

  if (score <= 1){
    i = 2;
  }
  if (score == 2){
    i = 1;
  }
  if (score == 3){
    i = 0;
  }

  document.getElementById('submit').style.visibility = "visible";
  document.getElementById('message').innerHTML = message[i];
  document.getElementById('score').innerHTML = "Your score is " + score;
  document.getElementById('answers_button').style.visibility = "visible";
}
function view_answers(){
  document.getElementById('q_answers').style.visibility = "visible";
}

/* Company box images and company info, hide/ show with index */
$('.boxes ul li a').click(function(){
  $('.info > div').hide();
 $('.info > div').eq($(this).parent().index()).show();
});

/* Icon Animate css animation on scroll, check window view */
$(window).scroll(function () {
    $('.icons').each(function () {
        var img = $(this).offset().top;
        var h = $(this).height();
        var top = $(window).scrollTop();
        if (img < top + h && img + h > top) {
            $(this).addClass("iconAnimate");
        }
    });
});
