import React,{ useState } from 'react';

type AuthUser = {
	name: string,
	email: string
}

const User = () => {
	// const [user,setUser] = useState<null | AuthUser>(null);

	// case: user not be null
	const [user,setUser] = useState<AuthUser>({} as AuthUser);


	const handleLogin = () => {
		setUser({
			name: 'Yiwa',
			email: 'yiwa@gmail.com'
		})
	};

	const handleLogout = () => {
		// setUser(null)
	};

	return (
		<div style={{ marginTop: '20px' }}>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>

			<div>Username is {user?.name}</div>
			<div>User's email is {user?.email}</div>
		</div>
	)
}

export default User