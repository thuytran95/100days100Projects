import React from 'react';

export type SearchProps = {
	value?: string,

} & React.ComponentProps<'input'>

const Search = ({ ...rest }: SearchProps) => {
	return (
		<input type='text' {...rest} />
	)
}

export default Search