-- PROCEDURE: public."postVehicleSpec"(integer, character varying, character varying, double precision, double precision, character varying, double precision, character varying, character varying, character varying, character varying, integer)

-- DROP PROCEDURE public."postVehicleSpec"(integer, character varying, character varying, double precision, double precision, character varying, double precision, character varying, character varying, character varying, character varying, integer);

CREATE OR REPLACE PROCEDURE public."postVehicleSpec"(
	"vehicle_idV" integer,
	"engineV" character varying,
	"frameV" character varying,
	"weightV" double precision,
	"cg_heightV" double precision,
	"differentialV" character varying,
	"wheelbaseV" double precision,
	"tiresV" character varying,
	"dampersV" character varying,
	"ecuV" character varying,
	"daqV" character varying,
	"t_id" integer)
LANGUAGE 'plpgsql'

AS $BODY$BEGIN
-- Query
IF $1=(
	SELECT vehicle_id
	FROM vehicle
	WHERE $1=vehicle_id AND $12=team_id
)
THEN
	INSERT INTO 
	vehicle_spec (
		vehicle_id, 
		engine, 
		frame, 
		weight, 
		cg_height, 
		differential, 
		wheelbase,
		tires,
		dampers, 
		ecu,
		daq
	)
	VALUES
	(
		$1,
		$2,
		$3,
		$4,
		$5,
		$6,
		$7,
		$8,
		$9,
		$10,
		$11
	);
ELSE
	Raise Exception 'Error';
END IF;
END;$BODY$;