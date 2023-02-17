$(document).ready(() => {
  $('.submit-btn').on('click', answersSelected);
  $('.star').on('click', starSelected);
  $('#close-btn').on('click', submitQuiz);
});

const answersSelected = function() {
  // Get initial data set up
  const data = { answersSelected: {} };
  let score = 0;
  let totalQuestions = 0;

  // Loop through the questions
  $('.q-card').each(function() {

    const questionId = $(this).attr('id');
    const correctAnswerId = $(this).children(".questions").attr("id");
    const correctAnswer = correctAnswerId.slice(-1);

    // Loop through the answers to see which one is selected
    for (let i = 1; i <= 4; i++) {
      const $answerId = `#answer_${i}_${questionId}`;
      if ($($answerId).is(':checked')) {
        data.answersSelected[`${questionId}`] = i;
        score += (correctAnswer == i) ? 1 : 0;
        break;
      }
    }
    totalQuestions++;
  });

  // Add the data collected
  $('#score').text(`${score}/${totalQuestions}`);
  $('#quiz_info').attr('value', JSON.stringify(data));
  $('#popup').removeClass('hide');
  $('#popup').addClass('show');

  // Add custom messages to the social media links
  $('.social-media').each(function() {
    const $socialMediaType = $(this).attr('id');
    switch ($socialMediaType) {
      case 'facebook':
        $($socialMediaType).attr("onclick", "window.open('https://facebook.com/sharer/sharer.php?u={www.google.com}&p[Quiz Light App]={Check out my score <%= result.score %> on this quiz <%= result.title %>}')");
        break;
      case 'email':
        $($socialMediaType).attr("onclick", "window.open('mailto:?subject=Quiz Light | <%= result.title %> &body=Check out my score <%= result.score %> on this quiz on Quiz Light App!%>')");
        break;
      case 'whatsapp':
        $($socialMediaType).attr("onclick", "window.open('whatsapp://send?text=Check out my score <%= result.score %> on this quiz <%= result.title %> on Quiz Light')");
        break;
      case 'twitter':
        const link = ``;
        $($socialMediaType).attr("onclick", "window.open(https://twitter.com/share?url=&text=Check out my score <%= result.score %> on this quiz <%= result.title %> &hashtags=QuizLight`)");

    }

  });
};

const starSelected = function() {
  // Color in the stars
  $('.star').addClass('selected');
  let count = $(this).attr('name');
  for (let i = 0; i < count - 1; i++) {
    $('.star').eq(i).removeClass('selected');
  }
  // Add the data to the submit button to transport
  const review = 5 - count;
  const data = JSON.parse($('#quiz_info').val());
  data.review = review;

  $('#quiz_info').attr('value', JSON.stringify(data));
};

const submitQuiz = function(event) {
  $('#popup').removeClass('show');
  $('#popup').addClass('hide');
  event.preventDefault();

  const data = $('#quiz_info').val();
  $.post('/quiz', data, function(res) {
    window.location.href = 'http://localhost:8080/myresults';
  });
};
