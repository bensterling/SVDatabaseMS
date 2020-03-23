-- DROP FUNCTION "getAllSubteams"(integer);

CREATE OR REPLACE FUNCTION public."getAllSubteams"(
	t_id integer)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE
AS $BODY$BEGIN
-- Query
RETURN (
	SELECT json_agg(row_to_json(r))
	FROM (SELECT *
		  FROM subteam
		  WHERE team_id = t_id)
	AS r
);
END;$BODY$;

ALTER FUNCTION public."getAllSubteams"(integer)
    OWNER TO postgres;
