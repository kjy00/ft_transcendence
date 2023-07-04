import { useState } from 'react';

const useInput = (
  initialValue: string
): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return [value, setValue, onChangeHandler];
};

export default useInput;
