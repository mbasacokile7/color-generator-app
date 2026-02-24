import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color) => {
        const id = nanoid();
        return <SingleColor key={id} color={color} />;
      })}
    </section>
  );
}

export default ColorList;
