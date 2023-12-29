import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { useSession } from "../../hooks";
import { Button } from "@mui/material";

export default function Profile() {
	const { user, signOut } = useSession();
	const profile = user?.profile;
	return (
		<Stack
			spacing={4}
			sx={{
				display: "flex",
				maxWidth: "800px",
				mx: "auto",
				px: { xs: 2, md: 6 },
				py: { xs: 2, md: 3 },
			}}
		>
			<Card>
				<Box sx={{ mb: 1 }}>
					<Typography level="title-md">Personal info</Typography>
				</Box>
				<Divider />
				<Stack
					direction="row"
					spacing={3}
					sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
				>
					<Stack direction="column" spacing={1}>
						<AspectRatio
							ratio="1"
							maxHeight={200}
							sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
						>
							<img
								src="https://gravatar.com/avatar/2a1243934de34ffb21be2b0a3b54eb0a?s=400&d=robohash&r=x"
								loading="lazy"
								alt=""
							/>
						</AspectRatio>
						<IconButton
							aria-label="upload new picture"
							size="sm"
							variant="outlined"
							color="neutral"
							sx={{
								bgcolor: "background.body",
								position: "absolute",
								zIndex: 2,
								borderRadius: "50%",
								left: 100,
								top: 170,
								boxShadow: "sm",
							}}
						>
							<EditRoundedIcon />
						</IconButton>
					</Stack>
					<Stack spacing={2} sx={{ flexGrow: 1 }}>
						<Stack spacing={1}>
							<FormLabel>Name</FormLabel>
							<FormControl
								sx={{
									display: { sm: "flex-column", md: "flex-row" },
									gap: 2,
								}}
							>
								<Input
									disabled
									size="sm"
									placeholder={profile?.name?.[0].given?.[0] ?? ""}
								/>
								<Input
									size="sm"
									disabled
									placeholder={profile?.name?.[0].family ?? ""}
									sx={{ flexGrow: 1 }}
								/>
							</FormControl>
						</Stack>
						<Stack direction="row" spacing={2}>
							<FormControl>
								<FormLabel>Role</FormLabel>
								<Input
									disabled
									size="sm"
									defaultValue={profile?.resourceType}
								/>
							</FormControl>
							<FormControl sx={{ flexGrow: 1 }}>
								<FormLabel>Email</FormLabel>
								<Input
									size="sm"
									type="email"
									startDecorator={<EmailRoundedIcon />}
									disabled
									defaultValue={profile?.telecom?.[0].value ?? ""}
									sx={{ flexGrow: 1 }}
								/>
							</FormControl>
						</Stack>

						<Stack direction="row" spacing={2}>
							<FormControl>
								<FormLabel>City</FormLabel>
								<Input
									disabled
									size="sm"
									defaultValue={profile?.address?.[0].city ?? "Undefined"}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Country</FormLabel>
								<Input
									size="sm"
									type="text"
									disabled
									defaultValue={profile?.address?.[0].country ?? "DE"}
								/>
							</FormControl>

							<FormControl>
								<FormLabel>Pin</FormLabel>
								<Input
									size="sm"
									type="email"
									disabled
									defaultValue={profile?.address?.[0].postalCode ?? "101010"}
								/>
							</FormControl>
						</Stack>

						<Stack direction="row" spacing={2}>
							<FormControl>
								<FormLabel>Birthday</FormLabel>
								<Input
									disabled
									size="sm"
									defaultValue={profile?.birthDate ?? "Undefined"}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Gender</FormLabel>
								<Input
									size="sm"
									type="text"
									disabled
									defaultValue={profile?.gender ?? "Male"}
								/>
							</FormControl>
						</Stack>

						<Stack direction="row" spacing={2}>
							<FormControl sx={{ flexGrow: 1 }}>
								<FormLabel>Project</FormLabel>
								<Input
									disabled
									size="sm"
									defaultValue={profile?.meta?.project ?? "Undefined"}
								/>
							</FormControl>
						</Stack>
					</Stack>
				</Stack>

				<Button
					onClick={() => {
						signOut();
					}}
				>
					Log out
				</Button>
			</Card>
		</Stack>
	);
}
