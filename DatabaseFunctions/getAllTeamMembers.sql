-- DROP FUNCTION "getAllTeamMembers"(integer);

CREATE OR REPLACE FUNCTION public."getAllTeamMembers"(
	t_id integer)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE
AS $BODY$BEGIN
-- Query
RETURN (
	SELECT json_agg(row_to_json(r))
	FROM (SELECT member_id, years_on_team, first_name, last_name
		  FROM team_member
		  WHERE team_id = t_id)
	AS r
);
END;$BODY$;

ALTER FUNCTION public."getAllTeamMembers"(integer)
    OWNER TO postgres;
