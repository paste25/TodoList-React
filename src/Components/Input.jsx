import { useRef, useState } from "react";

function Input(props){
  
  // let [task, setTask]=useState("");

  let task=useRef();

  function addTaskInput(event){
    event.preventDefault();
    props.addTask(task.current.value)
    task.current.value="";
  }

return(
  <form className="bg-[#edeef0] w-6/12 ml-48 rounded-3xl flex items-center justify-between mt-8" onSubmit={addTaskInput}>
  <input type="text" placeholder="Add Task" className="bg-[#edeef0] focus:outline-none w-8/12 mx-5" ref={task}/>
  <button className="bg-orange-600 py-3 px-8 rounded-3xl text-white">Add</button>
  </form>
)
}
export default Input;