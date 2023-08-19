import axios from 'axios';

const api_key = `AIzaSyBsU01Dg6qnPU9qPhjH2krpR8U65e0IngY`;

async function authenticate(mode, email, password) {
	const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${api_key}`;
	const response = await axios.post(url, {
		email: email,
		password: password,
		returnSecureToken: true,
	});

	const token = response.data.idToken;
	console.log(token);
	return token;
}

export function createUser(email, password) {
	return authenticate('signUp', email, password);
}
export function login(email, password) {
	return authenticate('signInWithPassword', email, password);
}
