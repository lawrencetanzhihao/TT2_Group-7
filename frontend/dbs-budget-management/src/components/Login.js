import { useState } from 'react'
import { useHistory } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const [users] = useState([
        {
            "id": 1,
            "username": "user101",
            "password": "123456",
            "name": "Jacky",
            "appointment": "Project Lead"
        },
        {
            "id": 2,
            "username": "user102",
            "password": "123456",
            "name": "Jane",
            "appointment": "Project Manager"
        },
        {
            "id": 3,
            "username": "user103",
            "password": "123456",
            "name": "Tom",
            "appointment": "Project Manager"
        },
        {
            "id": 4,
            "username": "user104",
            "password": "123456",
            "name": "Helen",
            "appointment": "Project Manager"
        },
        {
            "id": 5,
            "username": "user105",
            "password": "123456",
            "name": "Mark",
            "appointment": "Senior Project Manager"
        }
    ])


    const onSubmit = (e) => {
        e.preventDefault()

        if (!username) {
            alert('Please enter your username')
            return
        }

        if (!password) {
            alert('Please enter your password')
            return
        }

        // add authentication here
        console.log(username, password);

        setUsername('')
        setPassword('')

        

        history.push({
            pathname: '/dashboard',
            state: { userId: users.filter((user) => (user.username === username)).length > 0 ? users.filter((user) => (user.username === username))[0].id : -1}
        });
    }

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <h2>Welcome!</h2>
            <p>Log in to your account to manage your project budget!</p>
            <div className='form-control'>
                <input type="text" placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

            </div>
            <div className='form-control'>
                <input type="password" placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type='submit' value='Login' className='btn btn-block' />
        </form>
    )
}

export default Login;
