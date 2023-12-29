import { AxiosError, AxiosResponse } from "axios";
import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext, User } from "../../contexts";
import { ovokClient, setAuthorizationHeader } from "../../ovok";
import { authMe } from "../../ovok/requests";
import { paths } from "../../router";
import {
	createSessionCookies,
	getToken,
	removeSessionCookies,
} from "../../utils";

type Props = {
	children: ReactNode;
};

function AuthProvider(props: Props) {
	const { children } = props;

	const [user, setUser] = useState<User>();
	const [loadingUserData, setLoadingUserData] = useState(true);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const router = useNavigate();

	const token = getToken();
	const isAuthenticated = Boolean(token);

	async function signIn(params: AxiosResponse) {
		try {
			const { access_token, refresh_token } = params.data;

			createSessionCookies({
				token: access_token,
				refreshToken: refresh_token,
			});
			const response = await authMe();
			setUser(response.data);
			setAuthorizationHeader({ request: ovokClient.defaults, token });
			router(paths.ROOT_PATH);

			return;
		} catch (error) {
			const err = error as AxiosError;
			return err;
		}
	}

	async function register(params: AxiosResponse) {
		try {
			const { access_token, refresh_token } = params.data;

			createSessionCookies({
				token: access_token,
				refreshToken: refresh_token,
			});
			const response = await authMe();
			setUser(response.data);
			setAuthorizationHeader({ request: ovokClient.defaults, token });
			router(paths.ROOT_PATH);
			return;
		} catch (error) {
			const err = error as AxiosError;
			return err;
		}
	}

	function signOut() {
		removeSessionCookies();
		setUser(undefined);
		setLoadingUserData(false);
		navigate(paths.LOGIN_PATH);
	}

	useEffect(() => {
		if (!token) {
			removeSessionCookies();
			setUser(undefined);
			setLoadingUserData(false);
		}
	}, [navigate, pathname, token]);

	useEffect(() => {
		const token = getToken();

		async function getUserData() {
			setLoadingUserData(true);

			try {
				const response = await authMe();

				if (response?.data) {
					setUser(response.data);
				}
			} catch (error) {
				/**
				 * an error handler can be added here
				 */
			} finally {
				setLoadingUserData(false);
			}
		}

		if (token) {
			setAuthorizationHeader({ request: ovokClient.defaults, token });
			getUserData();
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				user,
				loadingUserData,
				signIn,
				register,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
