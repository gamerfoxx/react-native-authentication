import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const authContext = useContext(AuthContext);

	async function signupHandler({ email, password }) {
		setIsAuthenticating(true);
		try {
			const token = await createUser(email, password);
			authContext.authenticate(token);
		} catch (err) {
			Alert.alert('invalid info', 'verify your fields');
			setIsAuthenticating(false);
		}
	}

	if (isAuthenticating) {
		return <LoadingOverlay message="creating user..." />;
	}

	return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
