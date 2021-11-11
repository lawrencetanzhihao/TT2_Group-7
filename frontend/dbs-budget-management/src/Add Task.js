import {useState} from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState (false)

    const onSubmit =(e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }
    }

    onAdd({text})

    setText('')

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className = 'form control'>
                <label>Task</label> 
                <input
                    type = 'text'
                    placeholder = 'Add Task'
                    value ={text}
                    onChange={(e) => setText(e.target.value)}
            />
            </div> 

        </form>
    )
}