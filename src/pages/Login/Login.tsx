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
import { startLogin } from "../../ovok/requests";
import config from "../../config";

function Login() {
	const [loginRequestStatus, setLoginRequestStatus] = useState<
		"idle" | "loading" | "success"
	>("idle");
	const defaultTheme = createTheme();
	const [error, setError] = useState<string | null>(null);

	const { signIn } = useSession();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		setLoginRequestStatus("loading");
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		if (!data.get("email") || !data.get("password")) {
			setError("Invalid input");
			setLoginRequestStatus("idle");
			return;
		}
		try {
			await startLogin({
				email: data.get("email") as string,
				password: data.get("password") as string,
				clientId: config.ovokClientId,
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
			setLoginRequestStatus("success");
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
						Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							autoFocus
							label="Email Address"
							name="email"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
						/>

						<LoadingButton
							type="submit"
							fullWidth
							loading={loginRequestStatus === "loading"}
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</LoadingButton>
						{error && (
							<Alert severity="error">
								<AlertTitle>Error</AlertTitle>
								<strong>{error}!</strong>
							</Alert>
						)}

						<Grid mt={1} container>
							<Grid item>
								<Link href="/register" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default Login;
