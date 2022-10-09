import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import CustomTable from "../../components/CustomTable";
import usePaging, { IPaginationParams } from "../../hooks/usePaging";
import { usePetition } from "../../hooks/usePetition";

const OrderPetitionTable = () => {
  const pagingOption = usePaging();
  const { getMany } = usePetition();
  const getPetitionList = (payload: IPaginationParams) => getMany(payload);
  useEffect(() => {
    getPetitionList(pagingOption);
    return () => {};
  }, []);

  return (
    <div>
      <div className=" flex justify-content-between">
        <b>สถานะคำร้อง</b>
        <InputText
          placeholder="ค้นหา"
          className="p-inputtext-sm"
          value={pagingOption.search}
          onChange={(e) =>
            pagingOption.onSearch(e.target.value, () =>
              getPetitionList(pagingOption)
            )
          }
        />
      </div>
      <CustomTable
        items={[]}
        rows={pagingOption.take}
        totalRecords={0}
        first={pagingOption.first}
        onPage={pagingOption.onPage}
        rowsPerPage={pagingOption.rowsPerPage}
        sortField={pagingOption.sortBy}
        sortOrder={pagingOption.orderBy}
        onSort={pagingOption.onSort}
      ></CustomTable>
    </div>
  );
};

export default OrderPetitionTable;
