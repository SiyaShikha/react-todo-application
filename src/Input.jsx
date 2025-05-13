import { useState } from "react";

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
      <div class="flex justify-center w-full my-2">
        <div class="flex justify-center w-full max-w-sm min-w-[200px]">
          <input
            class="w-full bg-white placeholder:text-slate-400 text-sm border border-slate-300 rounded-md px-3 py-3 transition duration-200 ease focus:outline-none focus:border-slate-500 hover:border-slate-500 shadow-sm focus:shadow"
            type="text"
            placeholder="Enter..."
            value={value}
            onChange={handleChange}
            onKeyDown={handleAdd}
          />
        </div>
      </div>
    </>
  );
};
