-- DROP FUNCTION "getAllDrivers";

CREATE OR REPLACE FUNCTION public."getAllDrivers"()
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE
AS $BODY$BEGIN
-- Query
RETURN (
	SELECT json_agg(row_to_json(driver))
	FROM driver
);
END;$BODY$;

ALTER FUNCTION public."getAllDrivers"
    OWNER TO postgres;
