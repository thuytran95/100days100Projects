import React from 'react';
import { PersonProp } from '../tips-for-props-types/Person.type';

const Person = (props: PersonProp) => {
	const { name } = props;
	return (
		<div>{name.first} {name.last}</div>
	)
}

export default Person