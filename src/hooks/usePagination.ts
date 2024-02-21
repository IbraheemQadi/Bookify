import { useState } from "react";

const usePagination = (initialRowsPerPage: number = 5) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
  };

  return {
    currentPage,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
  };
};

export default usePagination;
