import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import { useState, useContext } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const authContext = useContext(AuthContext);

	async function loginHandler({ email, password }) {
		setIsAuthenticating(true);
		try {
			const token = await login(email, password);
			authContext.authenticate(token);
		} catch (err) {
			Alert.alert('authentication failed', 'check your credentials');
			setIsAuthenticating(false);
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
