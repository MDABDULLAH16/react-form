import { useState } from "react";
const useInputField = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const handleValueOnChanges = (e) => {
    setValue(e.target.value);
  };
  return [value, handleValueOnChanges];
};
export default useInputField;
