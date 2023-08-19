import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	async function signupHandler({ email, password }) {
		try {
			setIsAuthenticating(true);
			await createUser(email, password);
			setIsAuthenticating(false);
		} catch (err) {
			Alert.alert('invalid info', 'verify your fields');
		}
	}

	if (isAuthenticating) {
		return <LoadingOverlay message="creating user..." />;
	}

	return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
