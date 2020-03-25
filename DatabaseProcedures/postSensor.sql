
-- DROP PROCEDURE public."postSensor"(integer, character varying, character varying, character varying);

CREATE OR REPLACE PROCEDURE public."postSensor"(
	"vehicle_idV" integer,
	"name" character varying,
	"outputUnit" character varying,
  "category" character varying,
	"t_id" integer)
LANGUAGE 'plpgsql'

AS $BODY$BEGIN
-- Query
IF $1=(
	SELECT vehicle_id
	FROM vehicle
	WHERE $1=vehicle_id AND $5=team_id
)
THEN
	INSERT INTO
	sensor (
		vehicle_id,
		name,
		output_unit,
        category
	)
	VALUES
	(
		$1,
		$2,
		$3,
    $4
	);
ELSE
	Raise Exception 'Error';
END IF;
END;$BODY$;
