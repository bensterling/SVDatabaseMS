-- TODO: Check units are correct.
CREATE TABLE log(
  log_id SERIAL PRIMARY KEY,
  utc TIMESTAMP NOT NULL,
  value FLOAT NOT NULL,
  race_id INT NOT NULL,
  sensor_id INT NOT NULL,
  FOREIGN KEY (race_id) REFERENCES race (race_id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (sensor_id) REFERENCES sensor (sensor_id) ON UPDATE CASCADE ON DELETE CASCADE
);
