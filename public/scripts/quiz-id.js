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

  $('.star').on('click', answersSelected);

});

const answersSelected = function() {
  $('form').addClass('show-button');

  // Color in the stars
  $('.star').addClass('selected');
  let count = $(this).attr('name');
  for (let i = 0; i < count - 1; i++) {
    $('.star').eq(i).removeClass('selected');
  }
  // Add the data to the submit button to transport
  const review = 6 - count;
  const data = { review };

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

  $('#quiz_info').attr('value', JSON.stringify(data));
};
