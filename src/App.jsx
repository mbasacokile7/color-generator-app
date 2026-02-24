import Form from "./Components/Form";
import ColorList from "./Components/ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  // Setup the colors as a state value
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  function addColor(color) {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <Form addColor={addColor} />
      </section>
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />;
    </main>
  );
};
export default App;
