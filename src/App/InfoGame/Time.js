import React, { useEffect, useState } from 'react';

function Time({hours, minutes}) {
	const [blink, setBlink] = useState('');

	useEffect(() => {
		let id = setInterval(() => {
			let classBlink = 'blink-time';
			if (!blink) {
				setBlink(classBlink);
			} else {
				setBlink('');
			}
		}, 1000);

		return () => clearInterval(id);
	}, [blink])
	
  return (
	<div className="app__time">
		{hours}
		<span className={blink}>:</span>
		{minutes}
	</div>
  )
}

export default Time;