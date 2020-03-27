-- DROP PROCEDURE public."putSensorOutputUnit"(integer, integer, character varying, integer);

CREATE OR REPLACE PROCEDURE public."putSensorOutputUnit"(
  "sensorId" integer,
	"vehicleId" integer,
	"newUnit" character varying,
	"teamId" integer)
LANGUAGE 'plpgsql'

AS $BODY$BEGIN
-- Query
IF $2=(
 	SELECT vehicle_id
 	FROM vehicle
 	WHERE $2=vehicle_id AND $4=team_id
 )
THEN
	UPDATE sensor
    SET output_unit = $3
    WHERE $1 = sensor_id;
ELSE
 	Raise Exception 'Error';
END IF;
END;$BODY$;
