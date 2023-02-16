$(document).ready(() => {
  $('.star').on('click', answersSelected);

});

const answersSelected = function() {

  // Color in the stars
  $('.star').addClass('selected');
  let count = $(this).attr('name');
  for (let i = 0; i < count - 1; i++) {
    $('.star').eq(i).removeClass('selected');
  }
  // Add the data to the submit button to transport
  const review = 6 - count;
  const data = {
    review,
    quizId: 
  };

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
