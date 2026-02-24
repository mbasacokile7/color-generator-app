import Form from "./Components/Form";
import ColorList from "./Components/ColorList";

const App = () => {
  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <Form />
      </section>
      <section className="colors">
        <ColorList />
      </section>
    </main>
  );
};
export default App;
