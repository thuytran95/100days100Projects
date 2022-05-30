import React,{ useState } from 'react'
type LoginProps = {

}

const Login = () => {
	const [isLogin,setIsLogin] = useState(false);

	const handleLogin = () => {
		setIsLogin(true)
	};

	const handleLogout = () => { setIsLogin(false) };


	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>Usernam is  </div>
		</div>
	)
}

export default Login