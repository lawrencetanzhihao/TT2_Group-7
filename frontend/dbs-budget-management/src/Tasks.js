const Tasks = ({tasks}) => {
    return(
        <>
            {tasks.map((task, index) => 
                <Task key = {index} task ={task} />
            )}
        </>
    )
}
/* to split the obtained JSON into different parts */

export default Tasks