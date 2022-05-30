import React from 'react'
import Greet from '../basic-prop-type/Greet'

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
	return (
		<div>
			{props.messageCount}
		</div>
	)
}

export default CustomComponent