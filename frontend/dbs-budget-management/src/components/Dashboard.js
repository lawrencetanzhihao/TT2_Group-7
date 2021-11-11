import { useState } from 'react'
import { useHistory } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
    const [userId, setUserId] = useState(0)
    const history = useHistory();
    const [projects] = useState([
        {
            "id": 1,
            "user_id": 4,
            "name": "RTF",
            "budget": 12000,
            "description": "Realtime Face Recogniton"
        },
        {
            "id": 2,
            "user_id": 1,
            "name": "SWT",
            "budget": 80000,
            "description": "Smart Watch Tracker"
        },
        {
            "id": 3,
            "user_id": 2,
            "name": "ULS",
            "budget": 11000,
            "description": "Upgrade Legacy System"
        }
    ])

    const onClick = (e) => {
        e.preventDefault()

        history.push(`/budget`);
    }

    const logout = (e) => {
        e.preventDefault()

        history.push(`/`);
    }

    return (
        <div className='dashboard'>
            <div className='header'>
                <h2>My Project Dashboard</h2>
                <input type="number" placeholder='Enter user ID'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} />
                <button className='btn' onClick={logout}>Logout</button>
            </div>
            <div className='row'>
                {projects.filter((project) => (project.user_id === parseInt(userId))).length > 0 ?
                (projects.filter((project) => (project.user_id === parseInt(userId))).map((project) => (
                    <div className='column' onClick={onClick}>
                        <div key={project.id} className="card">
                            <div className="container">
                                <h4><b>{project.name}</b></h4>
                                <p><b>Project Description: </b>{project.description}</p>
                                <p><b>Project Budget: </b>${project.budget}</p>
                            </div>
                        </div>
                    </div>
                ))):('You have no project.')}
            </div>

        </div>
    )
}

export default Dashboard
