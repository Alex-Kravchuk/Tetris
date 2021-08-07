import React, { useEffect, useState } from "react";
import Time from "./Time";

function SystemSigns() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
 
 useEffect(() => {
	 let id = setInterval(() => {

		setHours( (prevHours) => {
			let newHours = new Date().getHours();
			if (newHours !== prevHours) return newHours;
			return prevHours;
		});

		setMinutes((prevMinutes) => {
			let newMinutes = new Date().getMinutes();
			newMinutes = newMinutes.toString().length === 1 ? '0' + newMinutes : newMinutes;
			if (newMinutes !== prevMinutes) return newMinutes;
			return prevMinutes;
		});

	 }, 1000)
	 
	 return () => clearInterval(id);

 }, [hours, minutes])

  return (
    <div className="app__system-signs">
      <div className="app__mute">
        <i className="fas fa-volume-mute"></i>
      </div>
      <div className="app__pause">
        <i className="fas fa-pause"></i>
      </div>
	<Time hours={hours} minutes={minutes} />
    </div>
  );
}

export default SystemSigns;
