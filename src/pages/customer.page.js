import React from "react";
import CustomerList from "../components/customer/customer-list";
import { Customer_DATA } from "../data/customer-data";

const CutomerPage = () => {
  return (
    <div>
      <CustomerList customers={Customer_DATA} />
    </div>
  );
};

export default CutomerPage;
