import Cookies from "universal-cookie";
import {
	COOKIE_EXPIRATION_TIME,
	REFRESH_TOKEN_COOKIE,
	TOKEN_COOKIE,
} from "../utils";

type CreateSessionCookiesParams = {
	token?: string;
	refreshToken?: string;
};

const cookies = new Cookies(null, { path: "/" });

export function createSessionCookies(params: CreateSessionCookiesParams) {
	const { token, refreshToken } = params;

	if (token) {
		cookies.set(TOKEN_COOKIE, token, {
			maxAge: COOKIE_EXPIRATION_TIME,
			path: "/",
		});
	}

	if (refreshToken) {
		cookies.set(REFRESH_TOKEN_COOKIE, refreshToken, {
			maxAge: COOKIE_EXPIRATION_TIME,
			path: "/",
		});
	}
}

export function removeSessionCookies() {
	cookies.remove(TOKEN_COOKIE);
	cookies.remove(REFRESH_TOKEN_COOKIE);
}

export function getToken() {
	return cookies.get(TOKEN_COOKIE);
}

export function getRefreshToken() {
	return cookies.get(REFRESH_TOKEN_COOKIE);
}
