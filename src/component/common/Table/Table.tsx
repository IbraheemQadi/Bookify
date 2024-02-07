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

interface TableRowType {
  id: number;
}

interface Props<T> {
  data: T[];
  headers: string[];
  page: number;
  rowsPerPage: number;
  setpage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
  onRowClick: (row: T) => void;
}

export default function Table<T extends TableRowType>({
  data,
  headers,
  page,
  rowsPerPage,
  setpage: setPage,
  setRowsPerPage,
  onRowClick,
}: Props<T>) {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const isSelectedRow = (id: number) => selectedRow === id;

  const handleRowClick = (row: T) => {
    setSelectedRow((state) => (state === row?.id ? null : row?.id));
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
          {data.map((row) => (
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
        count={-1}
        rowsPerPageOptions={[3, 5, 10]}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
}
