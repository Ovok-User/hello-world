import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers";
import { Router } from "./router";

// const theme = createTheme({
// 	/** Your theme override here */
// });

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
