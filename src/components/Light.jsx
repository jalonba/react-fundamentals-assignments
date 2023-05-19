export function Light() {
  const { id } = props;
  const { lights } = useContext(SmartHomeContext);

  const isOn = lights[id];

  return (
    <button
      data-testid={`light-${id}`}
      id={id}
      style={{
        border: "solid 1px gray",
        padding: "2rem",
        fontSize: "3rem",
        background: isOn ? "#eee" : "#444",
      }}
      onClick={onToggle}
    >
      {isOn ? "💡" : "⚫️"}
    </button>
  );
}
