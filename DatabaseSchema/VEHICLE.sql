CREATE TABLE vehicle(
  vehicle_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  seasons_driven INT NOT NULL,
  team_id INT NOT NULL,
  FOREIGN KEY (team_id) REFERENCES team (team_id) ON UPDATE CASCADE ON DELETE CASCADE
);
