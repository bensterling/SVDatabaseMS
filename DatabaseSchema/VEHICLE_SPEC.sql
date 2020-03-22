-- TODO: Check if units are correct.
CREATE TABLE vehicle_spec(
   vehicle_id INT NOT NULL,
   spec_id SERIAL NOT NULL,
   engine VARCHAR(50) NOT NULL,
   frame VARCHAR(50) NOT NULL,
   weight FLOAT NOT NULL,
   cg_height FLOAT NOT NULL,
   differential FLOAT NOT NULL,
   wheelbase FLOAT NOT NULL,
   tires FLOAT NOT NULL,
   dampers FLOAT NOT NULL,
   ecu FLOAT NOT NULL,
   daq FLOAT NOT NULL,
   PRIMARY KEY (vehicle_id, spec_id),
   FOREIGN KEY (vehicle_id) REFERENCES vehicle (vehicle_id) ON UPDATE CASCADE ON DELETE CASCADE
);
