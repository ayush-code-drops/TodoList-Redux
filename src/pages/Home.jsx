
import React, {  useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";

import axios from "axios";
import { useNavigate } from "react-router-dom";
function Home() {
    const [text, setText] = useState("");
    const {todos}=useSelector((state)=>state)
    const dispatch=useDispatch()
    const handleChange = (e) => {
        setText(e.target.value);
    };
    
    const navigate=useNavigate()
    
      const handleAdd = () => {
        let payload = {
          id: todos.length + 1,
          title: text,
          status: false,
        };
    
          dispatch(addTodo(payload));
          navigate('/allTasks')
      };
  return (
    <Box
        component="form"
        sx={{
          display: "flex",
          width: "400px",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <TextField
          id="standard-basic"
          label="Task"
          variant="outlined"
          onChange={handleChange}
          value={text}
        />
        <Button
          sx={{ backgroundColor: "teal", marginLeft: "30px", height: "40px" }}
          size="small"
          variant="contained"
          onClick={handleAdd}
        >
          Add Task
        </Button>
      </Box>
  )
}

export default Home