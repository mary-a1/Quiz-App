let count = 0;
let marks = 0;
let answer = [];

$(document).ready(() => {

  $('#finish-btn').hide();
  $('#result').hide();

  const buttonManager = () => {
    if (count === 4) {
      $('#next-btn').hide();
      $('#finish-btn').show();
    }
  };

  buttonManager();

  const addQuestions = (data, i) => {
    $('#question').text(data[i].description);
    $('#answer1').text(data[i].answer_one);
    $('#answer2').text(data[i].answer_two);
    $('#answer3').text(data[i].answer_three);
    $('#answer4').text(data[i].answer_four);
  };

  const selectedAnswer = () => {
    for (let i = 0; i < 4; i++) {
      let a = document.getElementById('answer-buttons').children;
      if (a[i].innerHTML === answer[count]) {
        $('#answer-buttons').children('button')[i].classList.add('active');
      } else {
        $('#answer-buttons').children('button')[i].classList.remove('active');
      }
    }
  };

  const createResult = (data) => {
    for (let i = 0; i < answer.length; i++) {
      marks++;
    }
    $('#cards').hide();
    $('#controls').hide();

    $('#result').show();
  };

  // $('#answer-buttons').hide();

/*
  const loadQuestions = function() {
    $.getJSON("/quiz/:id", function(data) {
      //get data from /routes/quiz-id.js
      $('#answer-buttons').show();
      addQuestions(data, count);
    });
  };

  loadQuestions();
*/

  //attach API
  fetch('temp-data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    $('#answer-buttons').show();
    addQuestions(data.questions, count);

    //select answer
    $('.btn').on('click', function() {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      answer[count] = $(this).html();
    });

    //next question
    $('#next-btn').on('click', function() {
      if (count > answer.length - 1) {
        alert("Please select an answer.");
        //need to be replaced with proper error message
      } else {
        count++;
        addQuestions(data.questions, count);
        $('.btn').removeClass('active');
        buttonManager();
        selectedAnswer();
      }
    });

    //finish quiz
    $('#finish-btn').on('click', function() {
      if (count > answer.length - 1) {
        alert("Please select an answer.");
      } else {
        createResult(data);
      }
    });


  })

});
