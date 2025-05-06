import React, { useState } from "react";

export const Input = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    if (value === "") return;
    onSubmit(value);
    setValue("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter..."
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
