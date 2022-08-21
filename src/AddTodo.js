import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React,{useState} from 'react'


const AddTodo = ({addNewTask}) => {
    

    let [text,changeText] = useState("");
    function onClickAdd() {
        if(text==="") {
            return;
        }
       let newTodo = {
        text : text,
        isDone : false,
      };
      changeText("");
      addNewTask(newTodo); 
    }
    function handleChange(event) {
        changeText(event.target.value);
    }
   
  return (

    <div className="form-group d-flex gap-2">
            <input type="text" value={text} className="form-control mt-3" id="exampleInputPassword1" placeholder="Enter Task Name" onChange={handleChange}/>
            <button onClick={onClickAdd} type="button" className="btn btn-primary btn-lg mt-3 w-25">Add</button>
    </div>
  );
}
export default AddTodo;