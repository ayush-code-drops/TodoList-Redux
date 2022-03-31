
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, todoSuccess } from "../redux/action";
import TodoItem from "../components/TodoItem";
import axios from "axios";
function AllTasks() {
    const { todos } = useSelector((state) => state);
    const fetchTasks = () => {
      return axios.get("https://json-server-deploy-mock.herokuapp.com/tasks");
    };
  
    const dispatch = useDispatch();
    useEffect(() => {
      fetchTasks().then((res) => dispatch(todoSuccess(res.data)));
    }, []);
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
  
    }}
  >
    {todos?.map((item) => (
      <TodoItem key={item.id} data={item} max={300} />
    ))}
  </Box>
  )
}

export default AllTasks