import React from "react";

const Customer = ({ img, name, age, country }) => {
  const handleClick = () => {
    alert(`Hello Im ${name}`);
  };

  const passPara = (age) => {
    alert(age + "Years Old");
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h3>Name: {name}</h3>
      <h4>Age: {age}</h4>
      <h4>Country: {country}</h4>
      <button type="button" onClick={handleClick}>
        See My Name
      </button>
      <br />
      <button type="button" onClick={() => passPara(age)}>
        See My Age
      </button>
    </article>
  );
};

export default Customer;
