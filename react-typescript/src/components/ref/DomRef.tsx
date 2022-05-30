import React, { useEffect, useRef } from 'react'

const DomRef = () => {
	const inputRef = useRef<HTMLInputElement>(null!);

	useEffect(()=> {
		inputRef.current.focus()
	}, [])


  return (
	<div>DomRef
		<input type="text" ref={inputRef} />
	</div>
  )
}

export default DomRef;