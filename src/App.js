import './App.css';
import React, { useState } from "react";
import AddTodo from './AddTodo';
import Todo  from './Todo';


export function App() {
  let [todos, updateData] = useState([{
    text : "Meditation",
    isDone : true,
  }]);

  function editTask(cTodo) {
      for(let element of todos) {
          if(element === cTodo) {
            element = cTodo;
          }
      }
    let newData = [...todos];
    updateData(newData);
  }


  const addNewTask = (e)=> {
    todos.push(e);
    console.log(todos);
    let newData = [...todos];
    updateData(newData);
  }
  function deleteTask(cTodo) {
      let newData = [];
        for(let element of todos) {
          if(element != cTodo) {
            newData.push(element);
          }
      }
      updateData(newData);
  }
  return (
    
    <center>
      <div className='p-3 app ' >
        <AddTodo addNewTask={addNewTask}/>
        {todos.map((todo)=><Todo editTask={editTask} deleteTask={deleteTask} todo={todo}/>)} 
     </div>
    </center>
  );
}


