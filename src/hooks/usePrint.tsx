import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const usePrint = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return {
    componentRef,
    handlePrint,
  };
};
