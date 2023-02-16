$(document).ready(() => {
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
