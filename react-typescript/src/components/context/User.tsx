import React,{ useContext, useState } from 'react';
import { AuthUser, UserContext } from './UserContext';

const User = () => {
	const userContext = useContext(UserContext)

	const handleLogin = () => {
		userContext.setUser({
			name: 'Adam',
			email: 'adam@gmail.com'
		})

	};

	const handleLogout = () => {
		userContext.setUser(null)
		// setUser(null)
	};

	return (
		<div style={{ marginTop: '20px' }}>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>

			<div>Username is {userContext.user?.name}</div>
			<div>User's email is {userContext.user?.email}</div>
		</div>
	)
}

export default User