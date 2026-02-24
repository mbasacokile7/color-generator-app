import { useState } from "react";

function Form({ addColor }) {
  // setup color state value
  const [color, setColor] = useState("");

  // handle change function
  function handleChange(e) {
    setColor(e.target.value);
  }

  // Submit Function
  function handleSubmit(e) {
    e.preventDefault();
    addColor(color);
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
