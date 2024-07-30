import { useState } from "react";

const Form = () => {
  const [count, setCount] = useState(0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setCount(count + 1);
      }}
    >
      <input defaultValue={0} type="text" value={count} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
