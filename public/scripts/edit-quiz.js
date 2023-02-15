// Redirect to My Quizzes on submit
$(document).ready(() => {
  let questionNumber = 0;

  $('.add-question').on('click', function() {
    questionNumber++;
    const question = `
    <fieldset class="q" id="q${questionNumber}">
    <div>
      <label for="q${questionNumber}">Question ${questionNumber}:</label><br>
      <textarea class="question-box" type="text" id="q${questionNumber}" name="q${questionNumber}" required></textarea>
    </div>
    <section class="answers">
    <div>
      <label for="q${questionNumber}a">1:</label><br>
      <textarea class="text" type="text" id="q${questionNumber}a" name="q${questionNumber}a" required></textarea>
    </div>
    <div>
      <label for="q${questionNumber}b">2:</label><br>
      <textarea class="text"  type="text" id="q${questionNumber}b" name="q${questionNumber}b" required></textarea>
    </div>
    <div>
      <label for="q${questionNumber}c">3:</label><br>
      <textarea class="text" type="text" id="q${questionNumber}c" name="q${questionNumber}c" required></textarea>
    </div>
    <div>
      <label for="q${questionNumber}d">4:</label><br>
      <textarea class="text" type="text" id="q${questionNumber}d" name="q${questionNumber}d" required></textarea>
    </div>
    </section>
    <div>
      <label for="q${questionNumber}-corr-ans">Correct Answer:</label><br>
      <select class="question" name="question-${questionNumber}" id="question-${questionNumber}">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  </fieldset>`;
    $(question).insertBefore(".all-buttons");
    $('.rem-question').css('display', 'block');
  });

  $('.rem-question').on('click', function() {
    const $question = `#q${questionNumber}`;
    $($question).remove();
    questionNumber--;
    $('.rem-question').css('display', (questionNumber > 0) ? 'block' : 'none');
  });
});
