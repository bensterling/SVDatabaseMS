CREATE TABLE drives(
   d_id SERIAL PRIMARY KEY,
   driver_id INT NOT NULL,
   vehicle_id, INT NOT NULL,
   FOREIGN KEY (driver_id) REFERENCES driver (driver_id) ON UPDATE CASCADE ON DELETE CASCADE,
   FOREIGN KEY (vehicle_id) REFERENCES vehicle (vehicle_id) ON UPDATE CASCADE ON DELETE CASCADE
);
