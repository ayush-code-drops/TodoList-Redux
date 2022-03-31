import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllTasks from '../pages/AllTasks'
import Home from '../pages/Home'
import Task from '../pages/Task'

function AllRoutes() {
  return (
      <Routes>
          <Route path='/' element={<Home />}>
              
          </Route>
          <Route path='/allTasks' element={<AllTasks />}></Route>
          <Route path='/tasks/:id' element={<Task />}>
              
          </Route>
  </Routes>
  )
}

export default AllRoutes