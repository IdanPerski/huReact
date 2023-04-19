import { TextField, Button, List, Box } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "85%",
          justifyContent: "center",
          m: "1rem auto",
        }}
      >
        <TextField />

        <Button variant="text" color="success">
          add task
        </Button>
      </Box>

      <TodoItem />
    </>
  );
}
