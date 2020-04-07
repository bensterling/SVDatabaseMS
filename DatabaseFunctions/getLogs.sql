-- DROP FUNCTION "getLogs"(integer, integer, integer);

CREATE OR REPLACE FUNCTION public."getLogs"(
	vehicleId integer,
	t_id integer,
  raceId integer)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE
AS $BODY$BEGIN
-- Query
IF $1=(
	SELECT vehicle_id
	FROM vehicle
	WHERE $1=vehicle_id AND $2=team_id
)
THEN
RETURN (
  WITH tmp AS
  (SELECT * FROM log
  NATURAL JOIN sensor
  NATURAL JOIN race
  WHERE vehicle_id = $1
    AND race_id = $3),

  -- Pivot data so that we have following format:
  -- utc : {sensor_id : value}
  -- Ex.
  -- 1000 : {1: 100, 2:350}
  tmp2 AS (SELECT utc,
         json_object_agg(sensor_id,total ORDER BY sensor_id)
     FROM (
       SELECT utc, sensor_id, SUM(value) AS total
          FROM tmp
          GROUP BY utc, sensor_id
     ) s
    GROUP BY utc
    ORDER BY utc)

   SELECT json_agg(row_to_json(tmp2)) FROM tmp2
);
ELSE
	Raise Exception 'Error';
END IF;
END;$BODY$;

ALTER FUNCTION public."getLogs"(integer, integer, integer)
    OWNER TO postgres;
