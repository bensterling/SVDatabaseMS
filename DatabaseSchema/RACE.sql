CREATE TABLE race(
  race_id SERIAL PRIMARY KEY,
  vehicle_id INT NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  FOREIGN KEY (vehicle_id) REFERENCES vehicle (vehicle_id) ON UPDATE CASCADE ON DELETE CASCADE
);
