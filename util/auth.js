import axios from 'axios';

const api_key = `AIzaSyBsU01Dg6qnPU9qPhjH2krpR8U65e0IngY`;

export async function createUser(email, password) {
	console.log(email, password);
	const response = await axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=` + api_key,
		{
			email: email,
			password: password,
			returnSecureToken: true,
		}
	);
}

function loginUser() {}
