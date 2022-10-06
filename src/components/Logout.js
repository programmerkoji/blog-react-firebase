import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Logout = ({ setIsAuth }) => {
	const navigate = useNavigate();

	const logout = () => {
		// ログアウト
		signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
			navigate("/login");
		});
	};
	return (
		<div>
			<p>ログアウトする</p>
			<button onClick={logout}>ログアウト</button>
		</div>
	);
};

export default Logout;
