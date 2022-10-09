import React, { useState } from "react";
import OrderPetitionTable from "../../sections/documents/OrderPetitionTable";
import PetitionMenuList from "../../sections/documents/PetitionMenuList";

const TranferPage = () => {
  return (
    <div className="m-3 p-3 border-round bg-white shadow-1">
      <OrderPetitionTable />
      <PetitionMenuList />
    </div>
  );
};

export default TranferPage;
