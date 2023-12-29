interface AppConfig {
	ovokClientId: string;
	ovokProjectId: string;
	ovokOrganisationId: string;
}

const config: AppConfig = {
	ovokClientId: process.env.REACT_APP_OVOK_CLIENT_ID || "",
	ovokProjectId: process.env.REACT_APP_OVOK_PROJECT_ID || "",
	ovokOrganisationId: process.env.REACT_APP_OVOK_ORGANISATION_ID || "",
};

export default config;
