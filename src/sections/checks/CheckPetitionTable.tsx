import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import CustomTable from "../../components/CustomTable";
import usePaging, { IPaginationParams } from "../../hooks/usePaging";
import { usePetition } from "../../hooks/usePetition";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import "./CheakPetition.css";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

const items = [
  {
    more: "",
    id: 1,
    quantity: 1,
    updatedAt: new Date(),
    createdAt: formatDate(new Date().toLocaleString()),
    documentDetails: "asdsaguyiidddddd dddddddddd iiiiiiiiiiii",
    semesterYear: "2/2565",
    status: `มียอดค้างชำระ ${300}`,
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
    note: {
      id: 1,
      name: "",
    },
    statusTwo: 'พิมพ์คำร้องเพื่อชำระเงินที่กองคลังและนำเอกสารส่งคืนฝ่ายทะเบียน เพื่อดำเนินการจัดทำเอกสาร'
  },
];
const CheckPetitionTable = () => {
  const pagingOption = usePaging();
  const { getMany } = usePetition();
  const getPetitionList = (payload: IPaginationParams) => getMany(payload);
  useEffect(() => {
    getPetitionList(pagingOption);
    return () => {};
  }, []);

  const actionBodyTemplate = () => {
    return (
      <div className="button-demo">
        <div className="template">
          <Link to={`/documents`} className="no-underline">
            <Button
              className="print p-0"
              aria-label="Amazon"
              onClick={() => {}}
            >
              <i className="pi pi-print px-2 "></i>
              <span className="p-2 text-sm font-bold ">พิมใบคำร้อง</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  const statusBody = (data: any) => {
    return (
      <div className="w-16rem min-h-full text-center">
        <span className="flex surface-overlay  text-green-600 " >{data?.statusTwo}</span>
        <span className="text-red-500 font-bold text-sm">"{data?.status}"</span>
      </div>
    );
  };

  return (
    <div className="">
      {/* <div className="flex justify-content-between ml-10">
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
      </div> */}
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
        <Column
          field="createdAt"
          header="วันที่ยื่นคำร้อง"
          headerClassName="sm-invisible"
        ></Column>
        <Column
          field="documentDetails"
          header="รายละเอียดเอกสาร"
          bodyClassName="sm-invisible"
        ></Column>
        <Column
          field="semesterYear"
          header="ภาคปี"
          bodyClassName="sm-invisible"
        ></Column>

        <Column field="status" header="สถานะ" body={statusBody}></Column>
        <Column field="note.name" header="หมายเหตุ"></Column>
        <Column field="createdAt" header=":" body={actionBodyTemplate}></Column>
      </CustomTable>
    </div>
  );
};

export default CheckPetitionTable;
