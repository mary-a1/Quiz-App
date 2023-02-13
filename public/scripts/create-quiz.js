// Redirect to My Quizzes on submit
$(document).ready(() => {
  $('form').on('submit', submitQuiz);
});

const submitQuiz = function(event) {
  // Initial settings
  event.preventDefault();

  // content
  const data = $(this).serialize();
  $.post("/quiz/new", data);
};
