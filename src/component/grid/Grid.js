import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useGridData } from "./hooks/useGridData";
const Grid = () => {
    const { handleRowUpdate, filteredRows, showSnackbar, columns } = useGridData();
    return (_jsx(Box, { children: _jsx(DataGrid, { rows: filteredRows, columns: columns, processRowUpdate: handleRowUpdate, onProcessRowUpdateError: (error) => showSnackbar({
                title: "Error on Updating Row",
                message: `${error}`,
                severity: "error",
                variant: "outlined",
            }), sx: {
                "& .MuiDataGrid-columnHeader": {
                    backgroundColor: "#eceff1",
                    fontSize: "16px",
                    fontWeight: "bolder",
                    textAlign: "center",
                },
                "& .MuiDataGrid-columnHeaderTitleContainer": {
                    display: "flex",
                    justifyContent: "center",
                },
                "& .MuiDataGrid-cell": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                },
            }, initialState: {
                pagination: { paginationModel: { pageSize: 8 } },
            }, pageSizeOptions: [8], checkboxSelection: false, disableRowSelectionOnClick: true }) }));
};
export default Grid;
