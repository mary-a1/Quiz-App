SELECT
users.id AS creator,
quizzes.title AS quiz,
results.alias AS player,
questions.description AS question,
results.chosen_answer AS player_answer,
questions.correct_answer AS correct_answer
FROM users
JOIN quizzes ON creator_id = users.id
JOIN questions ON quiz_id = quizzes.id
JOIN results ON question_id = questions.id
WHERE users.id = 1;