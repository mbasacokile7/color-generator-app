import { useState } from "react";

function Form() {
  // setup color state value
  const [color, setColor] = useState();

  // handle change function
  function handleChange() {}

  // Submit Function
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <input type="color" name="" id="" />
      <input type="text" placeholder="#f15025" onChange={handleChange} />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default Form;
