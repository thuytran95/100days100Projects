import React from 'react';
import { Name } from '../tips-for-props-types/Person.type';
type PersonListProp = {
	list: Name[]
}

const PersonList = (props: PersonListProp) => {
	const { list } = props;
	return (
		<div>
			{
				list.map((item,index) => <h2 key={index}>{item.first}-{item.last}</h2>)
			}
		</div>
	)
}

export default PersonList