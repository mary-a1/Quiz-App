SELECT
results.alias AS player,
quizzes.title AS quiz,
questions.description AS question,
results.chosen_answer AS my_answer,
questions.correct_answer AS correct_answer
FROM results
JOIN users ON player_id = users.id
JOIN questions ON question_id = questions.id
JOIN quizzes ON quiz_id = quizzes.id
WHERE player_id = 3;
