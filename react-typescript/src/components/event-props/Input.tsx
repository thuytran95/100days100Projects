import React from 'react'

type InputProps = {
	value: string,
	handleChange : (event: React.ChangeEvent<HTMLInputElement>) => void
}


// destructuring
const Input = ({value, handleChange}: InputProps) => {
const hanldeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	console.log('handle change');
	handleChange(event)
}

  return (
	<input type="text" value={value} onChange={hanldeInputChange} />
  )
}

export default Input