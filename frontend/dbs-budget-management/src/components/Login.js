import { useState } from 'react'
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
    }

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <h4>We are <span>GROUP 7</span></h4>
            <p>Welcome back! Log in to your account to manage project budget:</p>
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
