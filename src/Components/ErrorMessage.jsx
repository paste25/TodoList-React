function ErrorMessage(props){
  return(
    props.taskList.length === 0 ? <h2 className="text-center mt-6 font-semibold text-2xl">Add some task</h2> : null
  )
}
export default ErrorMessage;