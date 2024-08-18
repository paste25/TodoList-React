import AppName from "./Components/AppName";
import Input from "./Components/Input";
import ErrorMessage from "./Components/ErrorMessage";
import AllTask from "./Components/AllTask";
import { useState } from "react";
function App() {
  let [taskList, setTaskList] = useState([]);

  function addTask(taskInput) {
    if(taskInput.length>0){
      setTaskList([...taskList, {task:taskInput,
        status:false
      }]);
    }
    else{
      alert("Please enter a task");
    }
  }

  function removeTask(task){
    const newTaskList=taskList.filter((val,index) => index !== task)
    setTaskList(newTaskList)
  }

  function statusUpdate(checkedTask){
    if(taskList[checkedTask].status===false){
    taskList[checkedTask].status=true;
    setTaskList([...taskList])
  }
    else if(taskList[checkedTask].status===true){
      taskList[checkedTask].status=false;
      setTaskList([...taskList])
    }
  }

  return (
    <div className="w-2/5 min-h-96 bg-white ml-[32%] mt-36 rounded-lg shadow-2xl ">
      <AppName />
      <Input addTask={addTask} />
      <ErrorMessage taskList={taskList} />
      <AllTask taskList={taskList}  removeTask={removeTask} statusUpdate={statusUpdate}/>
    </div>
  );
}

export default App;
