CREATE TABLE subteam(
   team_id INT NOT NULL,
   name VARCHAR (50) NOT NULL,
   specialization VARCHAR (50) NOT NULL,
   PRIMARY KEY (team_id, name),
   FOREIGN KEY (team_id) REFERENCES team (team_id) ON UPDATE CASCADE ON DELETE CASCADE
);
