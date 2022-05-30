import React from 'react';

type GreetProps = {
	name: string,
	messageCount?: number, //optional
	isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {

	const { messageCount = 0 } = props;
	return (
		<div>
			{props.isLoggedIn ? <h2>Hello {props.name}, you have {messageCount}unread message</h2> : "WElcom guest"}
		</div>
	)
}

export default Greet;