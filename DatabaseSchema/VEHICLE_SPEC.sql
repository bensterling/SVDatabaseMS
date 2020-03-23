CREATE TABLE vehicle_spec(
   vehicle_id INT NOT NULL,
   engine VARCHAR(50) NOT NULL,
   frame VARCHAR(50) NOT NULL,
   weight FLOAT NOT NULL,
   cg_height FLOAT NOT NULL,
   differential VARCHAR(50) NOT NULL,
   wheelbase FLOAT NOT NULL,
   tires VARCHAR(50) NOT NULL,
   dampers VARCHAR(50) NOT NULL,
   ecu VARCHAR(50) NOT NULL,
   daq VARCHAR(50) NOT NULL,
   PRIMARY KEY (vehicle_id),
   FOREIGN KEY (vehicle_id) REFERENCES vehicle (vehicle_id) ON UPDATE CASCADE ON DELETE CASCADE
);
