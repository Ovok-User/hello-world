import { Paper, Typography } from "@mui/material";
interface NotFoundProps {
	resource: string;
}

interface NotFoundProps {
	resource: string;
}

const NotFound: React.FC<NotFoundProps> = ({ resource }) => {
	return (
		<Paper
			style={{
				padding: 20,
				textAlign: "center",
				maxWidth: 400,
				margin: "auto",
				marginTop: 100,
				borderRadius: 10,
				border: "0px",
				borderBottom: "0px",
			}}
		>
			<Typography variant="h6">{`No ${resource} Found`}</Typography>
		</Paper>
	);
};

export default NotFound;
