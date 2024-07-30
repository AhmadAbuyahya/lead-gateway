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
      <input type="text" value={count} />
      <button type="submit">Submit updated</button>
    </form>
  );
};

export default Form;
