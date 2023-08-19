import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function LoginScreen() {
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	async function loginHandler({ email, password }) {
		try {
			setIsAuthenticating(true);
			await login(email, password);
			setIsAuthenticating(false);
		} catch (err) {
			Alert.alert('authentication failed', 'check your credentials');
		}
	}

	if (isAuthenticating) {
		return <LoadingOverlay message="Logging in..." />;
	}

	return (
		<AuthContent
			isLogin
			onAuthenticate={loginHandler}
		/>
	);
}

export default LoginScreen;
