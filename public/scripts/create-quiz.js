// Redirect to My Quizzes on submit
$(document).ready(() => {
  let questionNumber = 4;

  $('.add-question').on('click', function() {
    questionNumber++;
    const question = `
    <fieldset class="questions">
    <div>
      <label for="q1">Question ${questionNumber}:</label><br>
      <textarea class="question-box" type="text" id="q${questionNumber}" name="q${questionNumber}" required></textarea>
    </div>
    <section class=answers-one>
      <div>
        <label for="q${questionNumber}a">1:</label><br>
        <textarea class="text" type="text" id="q${questionNumber}a" name="q${questionNumber}a" required></textarea>
      </div>
      <div>
        <label for="q${questionNumber}b">2:</label><br>
        <textarea class="text" type="text" id="q${questionNumber}b" name="q${questionNumber}b" required></textarea>
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
      <select name="question-one" id="question-one">
        <option value="option-1">1</option>
        <option value="option-2">2</option>
        <option value="option-3">3</option>
        <option value="option-4">4</option>
      </select>
    </div>

  </fieldset>`;
    $(question).insertBefore(".all-buttons");
    $('.rem-question').css('display', 'block');
  });

  $('.rem-question').on('click', function() {
    const $question = `.q${questionNumber}`;
    $($question).remove();
    questionNumber--;
    $('.rem-question').css('display', (questionNumber > 4) ? 'block' : 'none');
  });
});
