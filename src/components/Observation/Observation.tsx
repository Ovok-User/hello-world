import React from "react";
import { Observation } from "@medplum/fhirtypes";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/joy";

interface ObservationProps {
	observations: Observation[];
}

const ObservationComponent: React.FC<ObservationProps> = ({ observations }) => {
	const columns: GridColDef[] = [
		{ field: "id", headerName: "ID", width: 300 },
		{ field: "subject", headerName: "Subject", width: 300 },
		{ field: "status", headerName: "Status", width: 220 },
		{ field: "code", headerName: "Code", width: 220 },
		{ field: "category", headerName: "Category", width: 250 },
	];

	const rows = observations.map((observation) => ({
		id: observation.id,
		status: observation.status || "",
		category: observation.category?.[0] || "",
		code: observation.code || "",
		subject: observation.subject?.id || "",
	}));

	return (
		<Box
			height={"100%"}
			p={5}
			sx={{
				margin: "0 auto", // Horizontal margin
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box sx={{ mb: 1 }}>
				<Typography fontSize={20} level="title-md">
					Observations
				</Typography>
			</Box>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10,
						},
					},
				}}
				pageSizeOptions={[5, 10, 20, 50, 100]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</Box>
	);
};

export default ObservationComponent;
