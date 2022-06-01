import React, { ReactElement } from 'react';
interface CardHeaderProps {
	style: React.CSSProperties;
	otherStyle: React.CSSProperties;
}

const CardHeader: React.FC<CardHeaderProps> = ({
	style,
	otherStyle,
	children,
	...rest
}) => {
	return (
		<div style={{ ...style, ...otherStyle }} {...rest}>
			{children}
		</div>
	);
};

CardHeader.displayName = 'Header';


const CardBody: React.FC<CardHeaderProps> = ({
	style,
	children,
	otherStyle,
	...rest
}) => {
	return (
		<div style={{ ...style, ...otherStyle }} {...rest}>
			{children}
		</div>
	);
};

CardBody.displayName = 'Body';

const CardFooter: React.FC<CardHeaderProps> = ({
	style,
	children,
	otherStyle,
	...rest
}) => {
	return (
		<div style={{ ...style, ...otherStyle }} {...rest}>
			{children}
		</div>
	);
};

CardFooter.displayName = 'Footer';

interface CardProps {
	Header: React.ReactNode 
}

const getChildrenWithDisplayName = (
	children: React.ReactChildren,
	displayName: string
) => {
	return React.Children.map(children, (child: any) => {
		return child.type.dislayName === displayName ? child : null;
	});
};



const Card: React.FC<CardProps> = ({ Header }) => {
	return <div>Card</div>;
};



export default Card;
