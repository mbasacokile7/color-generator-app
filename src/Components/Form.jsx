import { useState } from "react";

function Form() {
  // setup color state value
  const [color, setColor] = useState("");

  // handle change function
  function handleChange(e) {
    setColor(e.target.value);
  }

  // Submit Function
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <input type="color" value={color} onChange={handleChange} />
      <input
        type="text"
        placeholder="#f15025"
        onChange={handleChange}
        value={color}
      />
      <button type="submit" className="btn" style={{ background: color }}>
        Submit
      </button>
    </form>
  );
}

export default Form;
