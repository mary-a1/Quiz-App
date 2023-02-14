// Redirect to My Quizzes on submit
$(document).ready(() => {
  let questionNumber = 4;

  // $('form').on('submit', function(event) {
  //   // Initial settings
  //   event.preventDefault();

  //   // content
  //   const data = $("form").serialize();

  //   $.post("/new", data);
  // });

  $('.add-question').on('click', function() {
    questionNumber++;
    const question = `
    <fieldset class=q${questionNumber}>
    <div>
      <label for="q${questionNumber}">Question ${questionNumber}:</label><br>
      <input type="text" id="q${questionNumber}" name="q${questionNumber}" required><br>
    </div>
    <div>
      <label for="q${questionNumber}a">A:</label><br>
      <input type="text" id="q${questionNumber}a" name="q${questionNumber}a" required><br>
    </div>
    <div>
      <label for="q${questionNumber}b">B:</label><br>
      <input type="text" id="q${questionNumber}b" name="q${questionNumber}b" required><br>
    </div>
    <div>
      <label for="q${questionNumber}c">C:</label><br>
      <input type="text" id="q${questionNumber}c" name="q${questionNumber}c" required><br>
    </div>
    <div>
      <label for="q${questionNumber}d">D:</label><br>
      <input type="text" id="q${questionNumber}d" name="q${questionNumber}d" required><br>
    </div>
    <div>
      <label for="q${questionNumber}-corr-ans">Correct Answer:</label><br>
      <input type="text" id="q${questionNumber}-corr-ans" name="q${questionNumber}-corr-ans" required><br>
    </div>
  </fieldset>`;
    $(question).insertBefore(".all-buttons");
    $('.rem-question').css('display', 'block');
  });

  $('.rem-question').on('click', function() {
    const $question = `#q${questionNumber}`;
    $($question).remove();
    questionNumber--;
    $('.rem-question').css('display', (questionNumber > 4) ? 'block' : 'none');
  });
});
