import { LoadingButton } from "@mui/lab";
import { Alert, AlertTitle } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Logo } from "../../components/Logo";
import { useSession } from "../../hooks";
import { registerNewUser } from "../../ovok";
import config from "../../config";

function Register() {
	const [registerRequestStatus, setRegisterRequestStatus] = useState<
		"idle" | "loading" | "success"
	>("idle");
	const defaultTheme = createTheme();
	const [error, setError] = useState<string | null>(null);

	const { signIn } = useSession();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		setRegisterRequestStatus("loading");
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		if (
			!data.get("email") ||
			!data.get("password") ||
			!data.get("firstName") ||
			!data.get("lastName")
		) {
			setError("Invalid input");
			setRegisterRequestStatus("idle");
			return;
		}
		try {
			await registerNewUser({
				email: data.get("email") as string,
				password: data.get("password") as string,
				clientId: config.ovokClientId,
				firstName: data.get("firstName") as string,
				lastName: data.get("lastName") as string,
				resourceType: "Patient",
				projectId: config.ovokProjectId,
				sendDefaultEmail: false,
			})
				.then(async (response) => {
					await signIn(response);
				})
				.catch((error) => {
					setError(error.response.data.message.message);
				});
		} catch (error) {
			console.log(error);
		} finally {
			setRegisterRequestStatus("success");
		}
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Logo size={50} />
					<Typography mt={3} component="h1" variant="h5">
						Sign up
					</Typography>
					<Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
						</Grid>
						<LoadingButton
							type="submit"
							fullWidth
							loading={registerRequestStatus === "loading"}
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</LoadingButton>
						{error && (
							<Alert severity="error">
								<AlertTitle>Error</AlertTitle>
								<strong>{error}!</strong>
							</Alert>
						)}

						<Grid mt={1} container justifyContent="flex-end">
							<Grid item>
								<Link href="/login" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default Register;
