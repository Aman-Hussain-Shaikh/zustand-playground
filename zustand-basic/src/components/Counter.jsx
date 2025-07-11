import useCounterStore from "../store/counterStore";

function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div
      style={{
        background: "#ccc111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        border: "2px solid black",
      }}
    >
      <p>Count : {count}</p>
      <button onClick={increment} style={{ width: "40px", fontSize: "20px" }}>
        +
      </button>
      <button onClick={decrement} style={{ width: "40px", fontSize: "20px" }}>
        -
      </button>
      <button onClick={reset} style={{ width: "50px", padding: "5px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
