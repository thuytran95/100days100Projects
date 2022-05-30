import React from 'react';

type StatusProps = {
	status: 'loading' | 'success' | 'error', // only accept one of them
}

const Status = (props: StatusProps) => {
	let message;
	if(props.status === 'loading'){
		message = 'Loading...';
	} else if (props.status === 'success'){
		message = 'Data fetch successfully'
	} else if (props.status ==='error'){
		message = 'Error'
	}

	return (
		<div>
			<h2>{message}</h2>
		</div>
	)
}

export default Status