DROP TABLE IF EXISTS questions CASCADE;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  answer_one VARCHAR(255) NOT NULL,
  answer_two VARCHAR(255) NOT NULL,
  answer_three VARCHAR(255) NOT NULL,
  answer_four VARCHAR(255) NOT NULL,
  correct_answer SMALLINT NOT NULL
);
