import React,{ useEffect,useRef,useState } from 'react';

const MutableRef = () => {
	const [timer,setTimer] = useState(0);
	const interValRef = useRef<number | undefined>(undefined);


	const stopTimer = () => {
		if (interValRef) {
			window.clearInterval(interValRef.current);
		}
	};

	useEffect(() => {
		interValRef.current = window.setInterval(() => {
			setTimer(timer => timer + 1)
		},1000)

		return () => {
			stopTimer()
		}
	},[])


	return (
		<div> Mutable Ref
			<h1>Hook timer - {timer}</h1>
			<button onClick={() => stopTimer()}>Stop timer</button>
		</div>
	)
}

export default MutableRef;