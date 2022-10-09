import {
  DataTablePFSEvent,
  DataTableSortOrderType,
} from "primereact/datatable";
import { useState } from "react";

export interface IPaginationParams {
  skip?: number;
  take?: number;
  sortBy?: string;
  orderBy?: DataTableSortOrderType;
  search?: string;
}
const usePaging = () => {
  const rowsPerPage = [10, 25, 100];
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState<DataTableSortOrderType>(-1);
  const [search, setSearch] = useState("");
  const [first, setFirst] = useState(0);

  // const [rows, setRows] = useState(10);
  // const [sortField, setSortField] = useState("id");
  // const [sortOrder, setSortOrder] = useState<DataTableSortOrderType>(-1);
  // const [page, setPage] = useState(1);
  // const [search, setSearch] = useState("");

  const onPage = (event: DataTablePFSEvent) => {
    const startIndex = event.first;
    const row = event.rows;
    const p = event.page ? event.page + 1 : 1;
    setSkip(p);
    setFirst(startIndex);
    setTake(row);
  };
  const onSort = (e: DataTablePFSEvent) => {
    const sort = e.sortField;
    setSortBy(sort);
    setOrderBy(e.sortOrder);
  };

  const [timer, setTimer] = useState<number | null>(null);
  const onSearch = (text: string, callAPI: () => void) => {
    setSearch(text);
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      callAPI();
    }, 600);

    setTimer(newTimer);
  };

  return {
    rowsPerPage,
    onPage,
    onSort,
    first,
    setFirst,
    search,
    onSearch,
    skip,
    take,
    sortBy,
    orderBy,
  };
};
export default usePaging;
