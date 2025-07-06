import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Todo from "./Todo";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { TodoContext } from "../Context/todoContext";
import axios from "axios";

export function ContainerToDoList() {
  const [alignment, setAlignment] = React.useState("");
  const [textField, setTextField] = React.useState("");
  const { todo, setTodo } = useContext(TodoContext);
  const [displayTodoType, setDisplayTodoType] = React.useState("all");
  const { v4: randomID } = require("uuid");
  randomID();

  useEffect(() => {
    axios.get("http://localhost:5004/Field/GetFindByID?ID=1").then((r) => {
      const name = r.fieldName;
      console.log(name);
    });
  }, []); // Don't call the useEffect

  const Completed = todo.filter((t) => {
    return t.isCompleted;
  });

  const non_Completed = todo.filter((e) => {
    return !e.isCompleted;
  });

  let theTodoTypeOftoggle = todo;

  if (displayTodoType === "completed") {
    theTodoTypeOftoggle = Completed;
  } else if (displayTodoType === "non-completed") {
    theTodoTypeOftoggle = non_Completed;
  } else {
    theTodoTypeOftoggle = todo;
  }

  const todojs = theTodoTypeOftoggle.map((t) => {
    return <Todo key={t.id} todos={t} />;
  });

  // eslint-disable-next-line no-lone-blocks
  {
    /*FUNCTION sections */
  }

  function handleChange(event, newAlignment) {
    setAlignment(newAlignment);
  }
  function handleAddClick() {
    const newTodo = {
      id: randomID(),
      title: textField,
      subtitle: "",
      isCompleted: false,
    };
    setTodo([...todo, newTodo]);
    setTextField("");
    localStorage.setItem("TodoKey", JSON.stringify([...todo, newTodo]));
  }
  function handleTextField(e) {
    setTextField(e.target.value);
  }

  // eslint-disable-next-line no-lone-blocks
  {
    /*FUNCTION sections */
  }

  function handleDisplayTypeOfToggleGroup(e) {
    setDisplayTodoType(e.target.value);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card
          sx={{ minWidth: 275 }}
          style={{ maxHeight: "80vh", overflow: "scroll" }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#2979ff",
              fontFamily: "sans-serif",
            }}
          >
            My{" "}
            <span
              style={{
                color: "#FF8C00",
                fontFamily: "Georgia, serif",
                fontWeight: "bold",
                fontSize: "1.25rem",
                letterSpacing: "0.05rem",
              }}
            >
              T
            </span>
            asks
          </h1>
          <Divider variant="middle" />
          <ToggleButtonGroup
            color="primary"
            value={displayTodoType}
            exclusive
            onChange={handleDisplayTypeOfToggleGroup}
            aria-label="Platform"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <ToggleButton value="non-completed">UnCompleted</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
            <ToggleButton value="all">All</ToggleButton>
          </ToggleButtonGroup>
          <CardContent></CardContent>
          <CardActions></CardActions>
          {/*THIS IS todos */}
          {todojs}

          {/*INPUT BUTTON */}
          <Grid container spacing={2}>
            <Grid
              size={4}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button
                disabled={textField.trim() === ""}
                variant="contained"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#e60000",
                  margin: "5px",
                }}
                onClick={handleAddClick}
              >
                Add Task{" "}
              </Button>
            </Grid>
            <Grid
              size={8}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TextField
                value={textField}
                onChange={(e) => {
                  handleTextField(e);
                }}
                id="outlined-basic"
                label="Task Title"
                variant="outlined"
                style={{ width: "100%", margin: "5px" }}
              />
            </Grid>
          </Grid>
          {/* <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            style={{ margin: "15px" }}
          >
            Delete All
          </Button> */}
        </Card>
      </Container>
    </React.Fragment>
  );
}
