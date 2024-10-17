import { useState } from "react";
import { Table, TableContainer, TableRow, TableCell, TableHead, TableBody, TablePagination, Paper, styled } from "@mui/material";
import { blue } from "@mui/material/colors";
function InventoryTable({ inventoryItems }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        fontSize: 20,
        backgroundColor: blue[50]
    }));
    return (
        <div style={{ marginLeft: 50, marginRight: 50 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Category</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {inventoryItems
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => (
                                <TableRow key={row.id}>
                                    <StyledTableCell>{row.id}</StyledTableCell>
                                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                                    <StyledTableCell align="left">
                                        {row.category}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {row.quantity}
                                    </StyledTableCell>
            
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={inventoryItems.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </div>
    );
}

export default InventoryTable;
