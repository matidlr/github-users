import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../assets/loading.gif';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AuthWrapper';

const AuthWrapper = ({ children }) => {
	const { isLoading, error, isAuthenticated, user } = useAuth0()
	const isUser = isAuthenticated && user

	if (isLoading) {
		return (
			<Wrapper>
				<img src={loadingGif} alt='spinner' />
			</Wrapper>
		)
	}
	if (error) {
		return (
			<Wrapper>
				<h1>{error.message}</h1>
			</Wrapper>
		)
	}
	if (!isUser) {
		return <Navigate to='/login' />
	}
	return <>{children}</>
}
export default AuthWrapper;