import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePetition } from "../../hooks/usePetition";

const PetitionMenuList = () => {
  const { getMany, petitions } = usePetition();
  useEffect(() => {
    getMany({});
    return () => {};
  }, []);

  return (
    <div className="py-5">
      <b>ยื่นคำร้อง</b>
      <ul className="mt-2 pl-0 list-none flex flex-column gap-2">
        {petitions.map((p, i) => (
          <li>
            {i + 1}. &nbsp;
            <Link to={`${p.id}/create`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetitionMenuList;
