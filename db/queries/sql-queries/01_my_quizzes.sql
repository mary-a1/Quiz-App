SELECT 
users.name AS creator, 
quizzes.title AS quiz,
questions.description AS question
FROM users
JOIN quizzes ON creator_id = users.id
JOIN questions ON quiz_id = quizzes.id
WHERE users.id = 1;