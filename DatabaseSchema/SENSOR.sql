CREATE TABLE sensor(
  sensor_id SERIAL PRIMARY KEY,
  vehicle_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  output_unit VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  lower_bound INTEGER NOT NULL,
  upper_bound INTEGER NOT NULL,
  FOREIGN KEY (vehicle_id) REFERENCES vehicle (vehicle_id) ON UPDATE CASCADE ON DELETE CASCADE
);
