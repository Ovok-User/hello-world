import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import Tabs from "@mui/joy/Tabs";
import Typography from "@mui/joy/Typography";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useEffect, useState } from "react";
import Profile from "../../components/Profile/Profile";
import { useSession } from "../../hooks";
import { getObservations } from "../../ovok";
import { ObservationComponent } from "../../components/Observation";
import { Loader } from "../../components";
import { NotFound } from "../../components/NotFound";

export default function Home() {
	const session = useSession();
	const profile = session.user?.profile;
	const [selectedTab, setSelectedTab] = useState(0);

	const [observations, setObservations] = useState([]);

	useEffect(() => {
		const params = {
			_count: 100,
		};
		getObservations(params)
			.then((response) => {
				console.log("response", response);
				setObservations(response.data);
			})
			.catch((error) => {
				console.error("Error fetching observations:", error);
			});
	}, []);

	const handleTabChange = (_event: any, newValue: any) => {
		setSelectedTab(newValue);
	};
	return (
		<Box sx={{ flex: 1, width: "100%" }}>
			<Box
				sx={{
					position: "sticky",
					top: { sm: -100, md: -110 },
					bgcolor: "background.body",
					zIndex: 9995,
				}}
			>
				<Box sx={{ px: { xs: 2, md: 6 } }}>
					<Breadcrumbs
						size="sm"
						aria-label="breadcrumbs"
						separator={<ChevronRightRoundedIcon />}
						sx={{ pl: 0 }}
					>
						<Link
							underline="none"
							color="neutral"
							href="#some-link"
							aria-label="Home"
						>
							<HomeRoundedIcon />
						</Link>
						<Link
							underline="hover"
							color="neutral"
							href="/"
							fontSize={12}
							fontWeight={500}
						>
							Home
						</Link>
						<Typography color="primary" fontWeight={500} fontSize={12}>
							<Link
								underline="hover"
								color="neutral"
								href="/"
								fontSize={12}
								fontWeight={500}
							>
								Observations
							</Link>
						</Typography>
					</Breadcrumbs>
					<Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
						{`Hello ${
							profile?.name?.[0]?.given?.[0] ?? profile?.telecom?.[0]?.value
						}`}
					</Typography>
				</Box>
				<Tabs
					defaultValue={0}
					value={selectedTab}
					onChange={handleTabChange}
					sx={{
						bgcolor: "transparent",
					}}
				>
					<TabList
						tabFlex={1}
						size="sm"
						sx={{
							pl: { xs: 0, md: 4 },
							justifyContent: "left",
							[`&& .${tabClasses.root}`]: {
								fontWeight: "600",
								flex: "initial",
								color: "text.tertiary",
								[`&.${tabClasses.selected}`]: {
									bgcolor: "transparent",
									color: "text.primary",
									"&::after": {
										height: "2px",
										bgcolor: "primary.500",
									},
								},
							},
						}}
					>
						<Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={0}>
							Profile
						</Tab>
						<Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={1}>
							Observations
						</Tab>
					</TabList>
				</Tabs>
			</Box>
			{selectedTab ? (
				observations && observations.length > 0 ? (
					<ObservationComponent observations={observations} />
				) : (
					<NotFound resource="Observations" />
				)
			) : (
				<Profile />
			)}
		</Box>
	);
}
