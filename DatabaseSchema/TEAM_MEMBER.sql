CREATE TABLE team_member(
   member_id SERIAL PRIMARY KEY,
   first_name VARCHAR (50) NOT NULL,
   last_name VARCHAR (50) NOT NULL,
   years_on_team INT NOT NULL,
   email VARCHAR(50) NOT NULL,
   password VARCHAR(255) NOT NULL,
   is_captain BOOLEAN NOT NULL,
   is_engineering_lead BOOLEAN NOT NULL,
   is_subteam_lead BOOLEAN NOT NULL,
   is_subteam_member BOOLEAN NOT NULL,
   team_id INT NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   FOREIGN KEY (team_id) REFERENCES team (team_id) ON UPDATE CASCADE ON DELETE CASCADE
);
