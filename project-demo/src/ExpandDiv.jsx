import { useContext } from "react";
import { createButtonContext } from "./ButtonContext";

export default function ExpandDiv() {
  const useTheContextHere = useContext(createButtonContext);
  if (!useTheContextHere.buttonValue) {
    return (
      <div
        style={{
          backgroundColor: "orange",
          width: "100%",
          height: "200px",
        }}
      >
        <h1 style={{ marginLeft: "40%" }}>Heigh Lighted value</h1>
      </div>
    );
  } else {
    return (
      <div
        id="mk-big"
        style={{
          backgroundColor: "orange",
          width: "100%",
          height: "400px",
          transition: "height 0.5s ease",
        }}
      >
        <h1 style={{ marginLeft: "40%" }}>Heigh Lighted value</h1>
      </div>
    );
  }
}
