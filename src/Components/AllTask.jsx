import Task from "./Task";
function AllTask(props){
  return(
    <ul className="mx-6 my-4 text-xl">
      {
        props.taskList.map((val,index)=>
        <Task todoTask={val} index={index} removeTask={props.removeTask} statusUpdate={props.statusUpdate}  />)
      }
    </ul>
  )
}
export default AllTask;