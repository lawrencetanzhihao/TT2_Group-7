const Task = ({task}) =>{
    return (
        <div className = 'task'>
            <p>{task.category}</p>
            <p>{task.expense}</p>
            <p>{task.category}</p>
            <p>{task.project}</p>
            <p>{task.user}</p>
        </div>
    )
    }