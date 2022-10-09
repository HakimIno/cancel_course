import { DataTable, DataTablePFSEvent, DataTableSortOrderType } from 'primereact/datatable';
import React from 'react';
// import { LogClient } from 'src/hooks/clientLogsHook';
// import { Group } from 'src/hooks/groupHook';
// import { License } from 'src/hooks/licenseHook';
// import { Log } from 'src/hooks/logsHook';
// import { Token } from 'src/hooks/tokenHook';
// import { User } from 'src/hooks/userHook';
// type ItemOfTable = License | User | Group | Token | Log | LogClient;
type ItemOfTable = any;
const CustomTable: React.FC<{
  items: ItemOfTable[];
  totalRecords: number;
  rows: number;
  first: number;
  onPage: (event: DataTablePFSEvent) => void;
  rowsPerPage: number[];
  sortField: string;
  sortOrder: DataTableSortOrderType;
  onSort: (e: DataTablePFSEvent) => void;
  children?: React.ReactNode;
}> = ({
  items,
  rows,
  totalRecords,
  first,
  onPage,
  rowsPerPage,
  sortField,
  sortOrder,
  onSort,
  children,
}) => {
  return (
    <DataTable
      size='small'
      value={items}
      paginator
      rows={rows}
      totalRecords={totalRecords}
      lazy
      first={first}
      onPage={onPage}
      responsiveLayout={'scroll'}
      // scrollable
      scrollHeight='65vh'
      paginatorClassName='justify-content-end'
      rowsPerPageOptions={rowsPerPage}
      paginatorTemplate='CurrentPageReport RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink'
      currentPageReportTemplate='Showing {first} to {last} of {totalRecords}'
      sortField={sortField}
      sortOrder={sortOrder}
      onSort={onSort}
    >
      {children}
    </DataTable>
  );
};

export default CustomTable;
