-- FUNCTION: public."getVehicleSpec"(integer, integer)

-- DROP FUNCTION public."getVehicleSpec"(integer, integer);

CREATE OR REPLACE FUNCTION public."getVehicleSpec"(
	t_id integer,
	v_id integer)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$BEGIN
-- Query
RETURN (
	SELECT row_to_json(r) 
	FROM vehicle_spec 
	AS r 
	WHERE v_id=(
		SELECT vehicle_id 
		FROM vehicle 
		WHERE t_id=team_id AND v_id=vehicle_id
	)
);
END;$BODY$;

ALTER FUNCTION public."getVehicleSpec"(integer, integer)
    OWNER TO postgres;