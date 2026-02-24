function SingleColor({ color }) {
  const backgroundColor = color.hex;
  return (
    <article
      className="color false"
      style={{
        background: `#${backgroundColor}`,
      }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </article>
  );
}

export default SingleColor;
