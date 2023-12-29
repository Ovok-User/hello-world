import {
	Patient,
	Practitioner,
	Project,
	Reference,
	RelatedPerson,
} from "@medplum/fhirtypes";
import { ovokClient } from "./client";
import queryString from "query-string";

export type ProfileResource = Patient | Practitioner | RelatedPerson;
export interface LoginState {
	readonly project?: Reference<Project>;
	readonly profile?: Reference<ProfileResource>;
	readonly accessToken: string;
	readonly refreshToken: string;
}

export interface BaseLoginRequest {
	readonly email: string;
	readonly password: string;
	readonly clientId?: string;
}

export interface LoginAuthenticationResponse {
	readonly accessToken: string;
	readonly refreshToken: string;
	readonly expire?: number;
}

export interface RegisterRequest {
	readonly firstName: string;
	readonly lastName: string;
	readonly email: string;
	readonly password: string;
	readonly resourceType: "Patient" | "Practitioner" | "RelatedPerson";
	readonly organizationId?: string;
	readonly projectId: string;
	readonly clientId: string;
	readonly sendMail: boolean;
}

interface ApiParams {
	[key: string]: string | number | boolean;
}
function convertJsonToUrlParams(jsonObject: ApiParams) {
	return queryString.stringify(jsonObject);
}

export async function startLogin(loginRequest: BaseLoginRequest) {
	const response = await ovokClient.post("auth/login", {
		clientId: loginRequest.clientId,
		email: loginRequest.email,
		password: loginRequest.password,
	});

	return response;
}

export async function registerNewUser(newUserRequest: RegisterRequest) {
	const response = await ovokClient.post("auth/signup", {
		clientId: newUserRequest.clientId,
		email: newUserRequest.email,
		password: newUserRequest.password,
		firstName: newUserRequest.firstName,
		lastName: newUserRequest.lastName,
		resourceType: newUserRequest.resourceType,
		organizationId: newUserRequest.organizationId,
		projectId: newUserRequest.projectId,
		sendMail: newUserRequest.sendMail,
	});

	return response;
}

export async function authMe() {
	const response = await ovokClient.get("auth/me");
	return response;
}

export async function getObservations(params?: ApiParams) {
	let url = "observation";
	if (params) {
		url = url + "?" + convertJsonToUrlParams(params);
	}

	const response = await ovokClient.get("observation");
	return response;
}
