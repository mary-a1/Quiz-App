INSERT INTO users (name, email, password)
VALUES
('Eva Stanley', 'stanley@gmail.com', '$2a$10$2ed0i9DKNPHSl34dE9lsaeyv6NtE.qDSGKKNWjL8GXWVmtMc9MMMS'),
('Samantha Smith', 'smith@live.ca', '$2a$10$2ed0i9DKNPHSl34dE9lsaeyv6NtE.qDSGKKNWjL8GXWVmtMc9MMMS'),
('Jackson Lee', 'jlee@gmail.com', '$2a$10$2ed0i9DKNPHSl34dE9lsaeyv6NtE.qDSGKKNWjL8GXWVmtMc9MMMS'),
('Dominic Parks', 'parks@outlook.com', '$2a$10$2ed0i9DKNPHSl34dE9lsaeyv6NtE.qDSGKKNWjL8GXWVmtMc9MMMS'),
('ELouisa Meyer', 'meyer@hotmail.com', '$2a$10$2ed0i9DKNPHSl34dE9lsaeyv6NtE.qDSGKKNWjL8GXWVmtMc9MMMS'),
('Rahul Mehta', 'meh@live.ca', '$2a$10$2ed0i9DKNPHSl34dE9lsaeyv6NtE.qDSGKKNWjL8GXWVmtMc9MMMS');



INSERT INTO quizzes (creator_id, title, type, public, thumbnail_url)
VALUES
(1, 'Test your Covid Knowledge', 'Educational', false, 'https://s3.amazonaws.com/cms.ipressroom.com/173/files/20224/6287efab2cfac2722d8cb83b_COVID-19+image/COVID-19+image_hero.jpg'),
(1, '8th Grade History Quiz', 'Educational', true, 'https://www.cvsu.org/cms/lib/VT01919337/Centricity/Domain/146/historical%20-%20Ross%20flag.jpg'),
(2, 'The Ultimate Harry Potter Quiz', 'Trivia', true, 'https://play-lh.googleusercontent.com/2kBabvPwoBWnnSFWYyjXuKaK5hrmRwA662aOJ5LaVvJv8F2O8BAvrv7DbpOxuWfz2w11'),
(3, 'Javascript Basics 1', 'Educational', true, 'https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg'),
(1, 'DC or Marvel?', 'Trivia', true, 'https://freeaddon.com/wp-content/uploads/2017/09/marvel-vs-dc-0.jpg'),
(2, 'Fun with "SpongeBob SquarePants"', 'Trivia', true, 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_main_characters.png/370px-SpongeBob_SquarePants_main_characters.png'),
(1, 'Names of the World Capitals', 'Educational', true, 'https://m.media-amazon.com/images/I/81Q1GHQs1KL.jpg'),
(3, 'Javascript Basics 2', 'Educational', true, 'https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg'),
(2, 'Shakespeare, eh?', 'Trivia', true, 'https://img.freepik.com/free-vector/hand-drawn-flat-design-shakespeare_23-2149263487.jpg?w=2000'),
(2, 'It Happened in the Eighties', 'Trivia', true, 'https://img.freepik.com/free-vector/back-80s-retro-neon-paradise-background_1017-32955.jpg?w=2000');


INSERT INTO questions (quiz_id, description, answer_one, answer_two, answer_three, answer_four, correct_answer)
VALUES
(1, 'What does the ???19??? in ???COVID-19??? refer to?', 'It''s the 19th variant', 'It''s the 19th pandemic', 'The name of a gene', 'The year it was discovered', 4),
(1, 'Which viruses belong to the coronavirus family?', 'SARS and influenza', 'SARS and MERS', 'SARS and HIV', 'Other', 2),
(1, 'How does COVID-19 spread?', 'Via droplets of air that we breathe', 'Via contaminated water', 'Via sexual fluid', 'Via food', 1),
(1, 'How many coronaviruses are there?', '19', '4', 'Hundreds', 'Thousands', 3),
(1, 'What are the common symptoms of COVID-19?', 'Cough', 'Fever', 'Tiredness', 'All of the above', 4),
(2, 'When did the titanic sink?', '1901', '1812', '1912', '1982', 3),
(2, 'Where did the Olympic Games originate?', 'Russia', 'Rome', 'Greece', 'England', 3),
(2, 'Who painted the Mona Lisa?', 'Michelangelo', 'Leonardo da Vinci', 'Raffaello', 'Giovanni Bellini', 2),
(2, 'Which country sent an Armada to attack Britain in 1588?', 'China', 'Italy', 'Spain', 'India', 3),
(2, 'The Industrial Revolution began in which country?', 'Germany', 'Spain', 'Italy', 'Great Britain', 4),
(2, 'What year did the First World War begin?', '1867', '1914', '1918', '1939', 2),
(3, 'What is the name of Harry''s owl?', 'Hedwig', 'Peeves', 'Nagini', 'Crookshanks', 1),
(3, 'What is Dumbledore''s first name?', 'Percival', 'Wulfric', 'Brian', 'Albus', 4),
(3, 'What organization did Hermione start in her 4th year?', 'Dumbledoors Society for Good', 'Society for the Promotion of Elvish Welfare', 'Society for House-Elves', 'Society for the Good', 2),
(3, 'What class did Neville end up teaching at Hogwarts?', 'Potions', 'History of Magic', 'Astronomy', 'Herbology', 4),
(3, 'How old was Nicholas Flamel when he destroyed the Sorcerer''s stone?', '85', '99', '65', '665', 4),
(3, 'How many staircases does Hogwarts have?', '153', '199', '142', '99', 3),
(3, 'How many possible Quidditch fouls are there?', '5', '50', '70', '700', 4),
(4, 'Inside which HTML element do we put the JavaScript?', '<js></js>', '<javascript></javascript>', '<scripting></scripting>', '<script></script>', 4),
(4, 'Where is the correct place to insert a JavaScript?', 'Both the <head> section and the <body> section are correct', 'the <head> section', 'the <body> section', 'None of the above', 1),
(4, 'What is the correct syntax for referring to an external script called "xxx.js"?', '<script href="xxx.js">', '<script src="xxx.js">', '<script name="xxx.js">', 'None of the above', 2),
(4, 'How do you write "Hello World" in an alert box?', 'alert("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");', 'msg("Hello World");', 1),
(4, 'How do you create a function in JavaScript?', 'function = myFunction()', 'function myFunction()', 'function: myFunction()', 'All of the above', 2),
(5, 'Which of these superheroes was created by Marvel?', 'Firestorm', 'Superman', 'Spider-Man', 'The Flash', 3),
(5, 'Which of these superheroes was not created by DC?', 'Star Lord', 'Batman', 'Wonder Woman', 'Atom', 1),
(5, 'Which of these organizations can be found in Marvel Comics?', 'Queen Industries', 'Star Labs', 'S.H.I.E.L.D.', 'Mercury Labs', 3),
(5, 'Which of the following is a DC villain?', 'Vandal Savage', 'Thanos', 'Dr. Doom', 'Ultron', 1),
(5, 'Which of the following is the real identity of a DC character?', 'Bruce Banner', 'Barry Allen', 'Tony Stark', 'Stan Lee', 2),
(5, 'Which of the following objects would not be found in the Marvel Universe?', 'Infinity stones', 'Mjolnir', 'Terrigen crystals', 'Kryptonite', 4),
(6, 'Who is SpongeBob''s best friend?', 'Patrick', 'Sandy', 'Squidward', 'Gary', 1),
(6, 'Patrick is what kind of animal?', 'Clownfish', 'Jellyfish', 'Starfish', 'Puffer fish', 3),
(6, 'Who is Plankton''s wife?', 'Donna the Muntant Clam', 'Shellie the Evil Worm', 'Karen the Mark II Univac "W.I.F.E." Computer', 'Nikki the Plankton', 4),
(6, 'What does Patrick lose in his dream that SpongeBob invades?', '25 cents', 'his bubbles', 'some pizza', 'his brain', 1),
(6, 'Out of these four choices, which of these characters loves money the most?', 'Mr. Krabs', 'Sandy', 'Patrick', 'Mrs. Puff', 1),
(6, 'Where does SpongeBob live, according to the opening theme?', 'An apartment on 21st street', 'A pineapple under the sea', 'A fish tank in a pet shop', 'A Mr. Clean Magic Eraser Sponge Box', 2),
(6, 'What is Spongebob''s personal motto?', '"Another day, another dollar."', '"Everyone''s an idiot except me."', '"Tommorow will be better."', '"I''m ready!"', 4),
(7, 'This capital city is over 3,500 years old and is its country''s largest city. It was invaded in the 13th Century by Genghis Khan.', 'Islamabad, Pakistan', 'Kabul, Afghanistan', 'Dhaka, Bangladesh', 'Kathmandu, Nepal', 2),
(7, 'A military force forcibly evacuated the entire population of this capital city in 1975. It remained virtually deserted until 1979 when the military force was overthrown.', 'Rangoon, Burma', 'Bangkok, Thailand', 'Phnom Penh, Cambodia', 'Vientiane, Laos', 3),
(7, 'This capital city is one of the largest urban centers in the South Pacific islands. It is home to the University of the South Pacific, and its residents speak their native language along with Hindi and English.', 'Suva, Fiji', 'Jakarta, Indonesia', 'Wellington, New Zealand', 'Papeete, Tahiti', 1),
(7, 'This capital city is surrounded by mountains and is one of the oldest metropolises in the western hemisphere. It is built on a former lake bed at an elevation of over 7,300 feet.', 'Tegucigalpa, Honduras', 'Mexico City, Mexico', 'Managua, Nicaragua', 'San Salvador, El Salvador', 2),
(7, 'This capital city''s huge size accounts for almost one third of its country''s population. The city was founded in 1535 and was named by its founders the ''City of Kings''.', 'Brasilia, Brazil', 'La Paz, Bolivia', 'Lima, Peru', 'Quito, Ecuador', 3),
(7, 'Unlike many European capitals, this city is not located on a major river. It became its country''s capital in 1607 and its altitude of 2,100 feet makes it one of Europe''s highest capitals. The city was occupied by French troops under Napoleon in the early 19th Century and Napoleon''s brother Joseph was installed on the throne.', 'Vienna, Austria', 'Madrid, Spain', 'Bern, Switzerland', 'Bonn, Germany', 2),
(8, 'JavaScript is a ___ -side programming language.', 'Client', 'Server', 'Both', 'None', 3),
(8, 'What will Boolean(3 < 7) return?', 'true', 'false', 'NaN', 'SyntaxError', 1),
(8, 'Which is the correct ???if??? statement to execute certain code if ???x??? is equal to 2?', ' if(x 2)', 'if(x = 2)', 'if(x === 2)', 'if(x != 2 )', 3),
(8, 'How do you find the minimum of x and y using JavaScript?', 'min(x,y);', 'Math.min(x,y)', 'Math.min(xy)', 'min(xy);', 3),
(8, 'Which of the following statements will throw an error?', 'const fun = function bar{ }', 'function fun( ){ }', 'const fun = function bar( ){ }', 'All', 1),
(9, 'Who is Hamlet''s best friend?', 'Rosencrantz', 'Marcellus', 'Guildenstern', 'Horatio', 4),
(9, 'Who is not dead at the end of ''Macbeth''?', 'Macbeth', 'MacDuff', 'Banquo', 'Young Siward', 2),
(9, 'Which of these characters does not appear in ''The Two Gentlemen of Verona''?', 'Proteus', 'Shylock', 'Launce', 'Valentine', 2),
(9, 'What day is the main battle in ''Henry V'' fought?', 'Christmas (December 25)', 'Bastille Day (July 14)', 'Saint Crispin''s Day (October 25)', 'A random day (October 19)', 3),
(9, 'What is Romeo''s last name?', 'Plantagenet', 'Capulet', 'Montague', 'None of the Above', 3),
(9, 'Who killed Ophelia?', 'Hamlet', 'Nobody', 'Polonius', 'Laertes', 2),
(10, 'In 1983, what toy did you have to wait in long lines to buy?', 'Nintendo', 'Cabbage Patch Dolls', 'Pet Rocks', 'Tickle Me Elmo', 2),
(10, 'Which book, written by an author forced to go into hiding, was a bestseller in 1989?', '''The Tommyknockers''', '''So, Sue Me''', '''The Piper''s Son''', '''The Satanic Verses''', 4),
(10, 'Who got the Grammy award for best new artist in 1989?', 'Tracy Chapman', 'The Police', 'Mariah Carey', 'The Blues Brothers', 1),
(10, 'In 1983 what did 125 million people watch?', 'The Challenger Disaster', '''Ghostbusters''', 'The finding of the Titanic', 'the final episode of ''M*A*S*H''', 4),
(10, 'Who examined the Shroud of Turin in 1988?', 'The Jewish Council', 'The Pope', 'U.S. scientists', 'The Jesuits', 3),
(10, 'In 1984 what movie villain was introduced?', 'Chucky', 'Jason', 'Freddy Krueger', 'Michael Meyers', 3);


INSERT INTO results (player_id, question_id, chosen_answer)
VALUES
(1, 19, 4),
(1, 20, 1),
(1, 21, 2),
(1, 22, 1),
(1, 23, 2),
(2, 37, 3),
(2, 38, 3),
(2, 39, 3),
(2, 40, 3),
(2, 41, 3),
(2, 42, 3),
(3, 24, 3),
(3, 25, 4),
(3, 26, 3),
(3, 27, 1),
(3, 28, 3),
(3, 29, 1),
(4, 6, 2),
(4, 7, 3),
(4, 8, 3),
(4, 9, 1),
(4, 10, 3),
(4, 11, 3),
(5, 12, 3),
(5, 13, 3),
(5, 14, 3),
(5, 15, 3),
(5, 16, 3),
(5, 17, 3),
(5, 18, 3),
(6, 12, 3),
(6, 13, 1),
(6, 14, 3),
(6, 15, 4),
(6, 16, 4),
(6, 17, 3),
(6, 18, 2),
(6, 24, 3),
(6, 25, 4),
(6, 26, 3),
(6, 27, 1),
(6, 28, 3),
(6, 29, 1);



INSERT INTO quiz_reviews (quiz_id, player_id, rating)
VALUES
(4, 1, 4),
(7, 2, 3),
(5, 3, 3),
(2, 4, 4),
(3, 5, 3),
(3, 6, 4);
