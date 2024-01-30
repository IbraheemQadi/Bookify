import {
  Table as MuiTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

interface Props {
  data: unknown[];
  headers: string[];
  onRowClick: (row) => void;
}

const Table = ({ data, headers, onRowClick }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const isSelectedRow = (id: number) => selectedRow === id;

  const handleRowClick = (row) => {
    setSelectedRow((state) => (state === row.id ? null : row.id));
    onRowClick(row);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
    setSelectedRow(null);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                hover
                key={row.id}
                sx={{ cursor: "pointer" }}
                selected={isSelectedRow(row.id)}
                onClick={() => handleRowClick(row)}
              >
                {Object.values(row).map((value) => (
                  <TableCell key={value}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </MuiTable>
      <TablePagination
        component={"div"}
        count={data.length}
        rowsPerPageOptions={[5, 10]}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
};

export default Table;
