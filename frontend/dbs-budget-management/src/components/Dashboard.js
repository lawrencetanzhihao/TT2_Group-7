import { useState } from 'react'
import './Dashboard.css';

const Dashboard = () => {
    const [currUserId] = useState(1)
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


    return (
        <div className='dashboard'>
            <h2>My Project Dashboard</h2>
            <div className='row'>
                {projects.filter((project) => (project.user_id === currUserId)).map((project) => (
                    <div className='column'>
                        <div key={project.id} className="card">
                            <div className="container">
                                <h4><b>{project.name}</b></h4>
                                <p><b>Project Description: </b>{project.description}</p>
                                <p><b>Project Budget: </b>${project.budget}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Dashboard
