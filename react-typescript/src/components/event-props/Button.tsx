import React from 'react'
type ButtonProps = {
	handleClick: (event: React.MouseEvent<HTMLButtonElement>,id: number) => void, //void: does not return any thing

}
const Button = (props: ButtonProps) => {
	const { handleClick } = props;
	return (
		<button onClick={(event) => { handleClick(event,1) }} >Click me</button>
	)
}

export default Button