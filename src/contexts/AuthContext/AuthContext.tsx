import { AxiosError, AxiosResponse } from "axios";
import { createContext } from "react";
import { RegisterRequest } from "../../ovok";
import {
	AccessPolicy,
	Patient,
	Practitioner,
	Project,
	ProjectMembership,
	RelatedPerson,
	UserConfiguration,
} from "@medplum/fhirtypes";

export type ProfileResource = Patient | Practitioner | RelatedPerson;
interface SessionDetails {
	project: Project;
	membership: ProjectMembership;
	profile: ProfileResource;
	config: UserConfiguration;
	accessPolicy: AccessPolicy;
}
export interface User extends SessionDetails {}

export type AuthContextData = {
	user?: User;
	isAuthenticated: boolean;
	loadingUserData: boolean;
	signIn: (credentials: AxiosResponse) => Promise<void | AxiosError>;
	register: (credentials: AxiosResponse) => Promise<void | AxiosError>;
	signOut: () => void;
};

const AuthContext = createContext({} as AuthContextData);

export default AuthContext;
