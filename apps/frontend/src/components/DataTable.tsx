import { useState } from "react";
import "./DataTable.css";

export interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  itemsPerPage?: number;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  itemsPerPage = 5,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(itemsPerPage);
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const column = columns.find((c) => c.key === sortConfig.key);
    if (!column || !column.sortable) return 0;

    const aValue = (a as Record<string, unknown>)[sortConfig.key] as
      | string
      | number;
    const bValue = (b as Record<string, unknown>)[sortConfig.key] as
      | string
      | number;

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = sortedData.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  const renderSortIcon = (key: string) => {
    if (sortConfig.key !== key) return <span style={{ opacity: 0.3 }}>↕</span>;
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <div className="data-table-container">
      <div className="table-wrapper">
        <table className="modern-data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => col.sortable && handleSort(col.key)}
                className={col.sortable ? "sortable" : ""}
                style={{ cursor: col.sortable ? "pointer" : "default" }}
              >
                {col.header} {col.sortable && renderSortIcon(col.key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              {columns.map((col) => (
                <td key={`${item.id}-${col.key}`}>
                  {col.render
                    ? col.render(item)
                    : ((item as Record<string, unknown>)[
                        col.key
                      ] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="pagination-container">
        <div className="pagination-info">
          <span>
            Rows per page:
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="pagination-select"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </span>
          <span>
            Showing <strong>{startIndex + 1}</strong> to{" "}
            <strong>{Math.min(startIndex + pageSize, data.length)}</strong> of{" "}
            <strong>{data.length}</strong> items
          </span>
        </div>
        <div className="pagination-actions">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-btn"
            title="Previous Page"
          >
            ❮
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`page-btn ${currentPage === page ? "active" : ""}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="page-btn"
            title="Next Page"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
