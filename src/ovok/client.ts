import axios from "axios";

import { setupInterceptors } from "./interceptors";

export const ovokClient = setupInterceptors(
	axios.create({
		baseURL: process.env.OVOK_BASE_URL ?? "https://api.dev.ovok.com/",
	})
);
