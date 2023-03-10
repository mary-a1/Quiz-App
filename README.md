# Quiz Light Project

Quiz Light is a full stack web application built with Node and Express that lets you create quizzes and share them between friends. The creator of the quiz can view and share all the results at the end of the quiz.


## Final Product
!["Homepage"](docs/quiz-homepage.png)

!["Search Page"](docs/quiz-search.png)

!["Create Quiz Page"](docs/quiz-create.png)

!["My Quizzes Page"](docs/quiz-myquizzes.png)

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- Express
- PG 6.x
- Bcrypt
- Chalk
- Cookie Session
- Morgan
- EJS
- Sass

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
6. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
7. Visit `http://localhost:8080/`


[Our Planning](https://docs.google.com/document/d/1ytfNu72n7IhTsfabH17MTKdcO3XPmumQ0NQZ3zYg75w/edit)
