import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import CustomTable from "../../components/CustomTable";
import usePaging, { IPaginationParams } from "../../hooks/usePaging";
import { usePetition } from "../../hooks/usePetition";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
const items = [
  {
    more: "",
    id: 1,
    petition: {
      id: 1,
      number: "1234",
      name: "ลงเรียนเพิ่ม",
    },
    quantity: 1,
    updatedAt: new Date(),
    createdAt: new Date().toLocaleString(),
    orderId: 1,
    status: "PENDIND",
    // informations: [
    //   {
    //     information: {
    //       id: 1,
    //       name: "วิชา",
    //       type: InformationType.SUBJECT,
    //     },
    //     result: "คณิต",
    //   },
    // ],
    student: {
      id: 1,
      name: "Pratya Maneechot",
      std_id: "6210014103",
      // role: UserRole.STUDENT,
      username: "pratya",
    },
    approvers: [
      {
        approver: {
          id: 1,
          name: "ที่ปรึกษา",
          // role: OperatorRole.ADVISOR,
        },
        number: 1,
        // status: OrderItemOperatorStatus.PENDIND,
      },
    ],
  },
];
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
      <div className="flex justify-content-between">
        <div></div>
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
        items={items}
        rows={pagingOption.take}
        totalRecords={0}
        first={pagingOption.first}
        onPage={pagingOption.onPage}
        rowsPerPage={pagingOption.rowsPerPage}
        sortField={pagingOption.sortBy}
        sortOrder={pagingOption.orderBy}
        onSort={pagingOption.onSort}
      >
        <Column field="id" header="หมายเลขติดตาม" className=""></Column>
        <Column field="petition.name" header="คำร้อง"></Column>
        <Column field="createdAt" header="วันที่ยื่นคำร้อง"></Column>
        <Column
          field="status"
          header="สถานะ"
          body={(data: any) => <Tag value={data?.status} rounded></Tag>}
        ></Column>
        <Column field="student.name" header="นักศึกษา"></Column>
      </CustomTable>
    </div>
  );
};

export default OrderPetitionTable;
