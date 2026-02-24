import Form from "./Components/Form";
import ColorList from "./Components/ColorList";
import Values from "values.js";
import { useState } from "react";

const App = () => {
  // Setup the colors as a state value
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <Form />
      </section>
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
