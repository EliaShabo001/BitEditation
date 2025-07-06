import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Material from "./Material";
import { Container } from "@mui/material";

export function AccordionExpandIcon() {
  return (
    <Container maxWidth="lg">
      <div style={{ marginTop: "40px" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Selection 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Selection 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Material />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}
