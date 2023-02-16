$(document).ready(() => {
  // $('#popup-container').hide();
  // $('#overlay').hide();

  $('#submit-btn').on('click', function() {
    let score = 0;
    $("input[type='radio']:checked").each(function() {
      if ($("input[type='radio']:checked") === $("#correct-answers")) {
        score++;
      } else {
        score+=0;
      }
    });

    $('#score').text(score);

    $('#popup-container').show();
    $('#overlay').show();
  });

  $('#close-btn').on('click', function() {
    $('#popup-container').hide();
    $('#overlay').hide();
  });

  $("#rateYo").rateYo({
    numStars: 4,
    spacing: "10px"
  });

  $('form').on('submit', answersSelected);

});

const answersSelected = function(event) {
  event.preventDefault();
  const data = {};

  $('.questions').each(function() {

    const questionId = $(this).attr('id');

    for (let i = 1; i <= 4; i++) {
      const $answerId = `#answer_${i}_${questionId}`;
      if ($($answerId).is(':checked')) {
        data[`${questionId}`] = i;
        break;
      }
    }
  });

  console.log(data);

  $.ajax({
    method: "POST",
    url: "/quiz",
    data
  });
};
