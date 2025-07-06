import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useContext, useState } from "react";
import { createButtonContext } from "./ButtonContext";

export default function Material() {
  const useTheContext = useContext(createButtonContext);
  const [buttonChecked, setButtonChecked] = useState(false);
  function handleSwitchChnage(event) {
    if (event) {
      setButtonChecked(true);
      useTheContext.setButtonValue(true);
    } else {
      setButtonChecked(false);
      useTheContext.setButtonValue(false);
    }
  }
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={(event) => {
                handleSwitchChnage(event.target.checked);
              }}
            />
          }
        />
      </FormGroup>
    </div>
  );
}
