import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { Box, Button, chipClasses, Icon, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import "./ToDoStyle.css";
import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../Context/todoContext";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Todo({ todos }) {
  const { todo, setTodo } = useContext(TodoContext);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [updateTextField, setUpdateTextField] = useState({
    updatedTitle: todos.title,
    updatedSubtitle: todos.subtitle,
  });

  function handleCheckButton() {
    const update = todo.map((t) => {
      if (t.id === todos.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodo(update);
    localStorage.setItem("TodoKey", JSON.stringify(update));
  }
  function handleDeleteEvent() {
    const deleteTodo = todo.filter((t) => t.id !== todos.id);
    setTodo(deleteTodo);
    localStorage.setItem("TodoKey", JSON.stringify(deleteTodo));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  function handleUpdateMatter() {
    const updatedTodo = todo.map((t) => {
      if (t.id === todos.id) {
        return {
          ...t,
          title: updateTextField.updatedTitle,
          subtitle: updateTextField.updatedSubtitle,
        };
      } else {
        return t;
      }
    });
    setTodo(updatedTodo);
    localStorage.setItem("TodoKey", JSON.stringify(updatedTodo));
  }
  return (
    <div>
      {/*THIS IS THE MESSAGE CONFIRM DELETE  */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Removing the component?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p style={{ fontWeight: "500" }}>
              {" "}
              Do you want to delete the component?
            </p>
            <p
              style={{
                backgroundColor: "#fff0f1",
                color: "#b00020",
                border: "1px solid #f4c2c7",
                padding: "16px",
                borderRadius: "8px",
                fontWeight: 500,
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                lineHeight: "1.5",
                maxWidth: "500px",
                marginTop: "12px",
              }}
            >
              ⚠️Warning: Removing this component is permanent and cannot <br />
              be undone. Proceed with caution!
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDeleteEvent} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/*THIS IS THE MESSAGE CONFIRM DELETE  */}

      {/*THIS IS THE MESSAGE TO EDIT */}
      <Dialog
        open={open1}
        onClose={handleClose1}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose1();
            },
          },
        }}
      >
        <DialogTitle>Update Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ fontWeight: "600", color: "#d32f2f" }}>
              {" "}
              Are you really ensure wants to update the todo ?{" "}
            </p>
          </DialogContentText>
          <TextField
            value={updateTextField.updatedTitle}
            onChange={(e) => {
              setUpdateTextField({
                ...updateTextField,
                updatedTitle: e.target.value,
              });
            }}
            autoFocus
            margin="dense"
            id="todo-title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            value={updateTextField.updatedSubtitle}
            onChange={(e) => {
              setUpdateTextField({
                ...updateTextField,
                updatedSubtitle: e.target.value,
              });
            }}
            autoFocus
            margin="dense"
            id="todo-subtitle"
            name="subtitle"
            label="Subtitle"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Cancel</Button>
          <Button type="submit" onClick={handleUpdateMatter}>
            Confirm Changes
          </Button>
        </DialogActions>
      </Dialog>
      {/*THIS IS THE MESSAGE TO EDIT */}
      <Container maxWidth="sm" className="card-hover">
        <Card
          sx={{
            minWidth: 275,
            minHeight: 100,
            backgroundColor: "#283593",
            color: "white",
            marginBottom: "20px",
            alignContent: "center",
          }}
          className="card"
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={8}>
                <Typography style={{ textAlign: "left" }}>
                  {todos.title}
                </Typography>
                <Typography style={{ textAlign: "left" }}>
                  {todos.subtitle}
                </Typography>
              </Grid>
              <Grid
                size={4}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {/*THIS IS THE CHECK  */}
                <IconButton
                  onClick={() => {
                    handleCheckButton();
                  }}
                  aria-label="delete"
                  style={{
                    color: "#8bc34a",
                    backgroundColor: todos.isCompleted ? "green" : "white",
                    border: "3px solid #8bc34a",
                  }}
                  className="check-icon"
                >
                  <CheckIcon />
                </IconButton>
                {/*THIS IS THE CHECK  */}

                {/*THIS IS THE DELETE ICON  */}
                <IconButton
                  onClick={handleClickOpen}
                  aria-label="delete"
                  style={{
                    color: "red",
                    backgroundColor: "white",
                    border: "3px solid red",
                  }}
                  className="check-icon"
                >
                  <DeleteIcon />
                </IconButton>
                {/*THIS IS THE DELETE ICON  */}
                {/*THIS IS THE EDIT ICON  */}
                <IconButton
                  onClick={() => {
                    handleClickOpen1();
                  }}
                  aria-label="delete"
                  style={{
                    color: "blue",
                    backgroundColor: "white",
                    border: "3px solid blue",
                  }}
                  className="check-icon"
                >
                  <EditIcon />
                </IconButton>
                {/*THIS IS THE EDIT ICON  */}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Container>
    </div>
  );
}
