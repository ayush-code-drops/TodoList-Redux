import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import axios from 'axios'
import TodoItemSingle from "../components/TodoSingle";
function Task() {
  const { id } = useParams();
  //console.log('id',id)
  const [task, setTask] = useState({});
 
  useEffect(() => {
axios.get(`https://json-server-deploy-mock.herokuapp.com/tasks/${id}`).then((res)=>setTask(res.data))
  }, []);
  return <div>
    <TodoItemSingle  data={task}  />
  </div>;
}

export default Task;
