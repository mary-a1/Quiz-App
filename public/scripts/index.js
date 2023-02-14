// When clicked on a quiz
$(document).ready(() => {
  $('button').on('click', function(event) {
    event.preventDefault();
    const id = $(".quizId").text();
    $.post('/', id);
  });
});
