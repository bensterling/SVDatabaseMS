-- DROP FUNCTION "getAllTeams";

CREATE OR REPLACE FUNCTION public."getAllTeams"()
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE
AS $BODY$BEGIN
-- Query
RETURN (
	SELECT json_agg(row_to_json(team))
	FROM team
);
END;$BODY$;

ALTER FUNCTION public."getAllTeams"
    OWNER TO postgres;
