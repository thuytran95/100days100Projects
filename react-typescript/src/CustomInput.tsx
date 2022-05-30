import React from 'react';

type InputProps = React.ComponentProps<'input'>

const CustomInput = (props: InputProps) => {
	return (
		<input type="text"  {...props} />
	)
}

export default CustomInput;

