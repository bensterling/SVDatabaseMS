CREATE TABLE driver(
   driver_id SERIAL PRIMARY KEY,
   first_name VARCHAR (50) NOT NULL,
   last_name VARCHAR (50) NOT NULL,
   years_of_experience INT NOT NULL,
   age INT NOT NULL,
   height FLOAT NOT NULL,
   weight FLOAT NOT NULL,
   team_id INT NOT NULL,
   FOREIGN KEY (team_id) REFERENCES team (team_id) ON UPDATE CASCADE ON DELETE CASCADE
);
