import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Material from "./Material";
import { AccordionExpandIcon } from "./Accordion";
import ExpandDiv from "./ExpandDiv";
import { createButtonContext } from "./ButtonContext";
import { useState } from "react";

function App() {
  const [buttonValue, setButtonValue] = useState(false);
  return (
    <createButtonContext.Provider value={{ buttonValue, setButtonValue }}>
      <div className="App">
        <AccordionExpandIcon />
        <ExpandDiv />
      </div>
    </createButtonContext.Provider>
  );
}

export default App;
