import React from "react";
import Customer from "./customer";

const CustomerList = ({ customers }) => {
  const cuslist = customers.map((customer) => {
    return (
      <Customer
        key={customer.id}
        img={customer.img}
        name={customer.name}
        age={customer.age}
        country={customer.country}
      />
    );
  });
  return cuslist;
};

export default CustomerList;
