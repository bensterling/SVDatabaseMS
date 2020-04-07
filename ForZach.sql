-- This is an example for assignDriverToVehicle
BEGIN
IF d_id=(
	SELECT driver_id
	FROM driver
	WHERE d_id=driver_id
)
AND v_id=(
	SELECT vehicle_id
	FROM vehicle
	WHERE v_id=vehicle_id
)
AND EXISTS (
	SELECT *
	FROM driver 
	WHERE key=(
		SELECT api_key
		FROM team
		WHERE driver.team_id=team.team_id
	)
)
AND NOT EXISTS (
	SELECT *
	FROM drives
	WHERE ($2=driver_id AND v_id=vehicle_id)
)
THEN
	INSERT INTO drives (
		driver_id,
		vehicle_id
	)
	VALUES
	(
		d_id,
		v_id
	);
ELSE
	Raise Exception 'Error';
END IF;
END;