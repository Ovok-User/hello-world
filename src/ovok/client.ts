import axios from "axios";

import { setupInterceptors } from "./interceptors";

export const ovokClient = setupInterceptors(
	axios.create({
		baseURL: process.env.REACT_APP_OVOK_BASE_URL,
	})
);
