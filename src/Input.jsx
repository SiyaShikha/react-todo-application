import React, { useState } from "react";

export const Input = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = (e) => {
    if (e.key === "Enter") {
      if (value) onSubmit(value);
      setValue("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter..."
        value={value}
        onChange={handleChange}
        onKeyDown={handleAdd}
      />
    </>
  );
};
