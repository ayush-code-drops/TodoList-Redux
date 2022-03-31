import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";
const bull = (
  <Box
   
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function TodoItem({ data,max }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(removeTodo(id));
  };
  const handleToggle = (id) => {
    // console.log(id)
    dispatch(toggleTodo(id));
    
  };
  const navigate=useNavigate()
  const handleSwitchTasks = (id) => {
navigate(`/tasks/${id}`)
}
 
  return (
    <Card sx={{ maxWidth: {max}, margin: "20px", boxShadow: '3px 3px 10px teal' }}
   
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, fontWeight:'bold'}}
          variant="h3"
          color="text.secondary"
          gutterBottom
        >
          {data.title}
        </Typography>
        <Typography variant="h5" component="div">
          <Link to={`/tasks/${data.id}`}>View Task</Link>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h6">
          {data.status===true ?<div style={{color:'green',textDecoration:'line-through'}}>Completed</div> : <div style={{color:'red'}}>Not Completed</div>}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleToggle(data.id)} size="small">
          Toggle Task
        </Button>

        <Button onClick={() => handleDelete(data.id)} size="small">
          Delete Task
        </Button>
      </CardActions>
    </Card>
  );
}
