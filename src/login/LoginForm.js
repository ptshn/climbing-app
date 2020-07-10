import React, { useState } from 'react';
import './LoginForm.css';
import { Redirect } from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

const LoginForm = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const handleChange = e => {
        const formInputName = e.target.name;
        const formInputValue = e.target.value;

        if (formInputName === 'username') {
            setUsername(formInputValue);
        } else if (formInputName === 'password') {
            setPassword(formInputValue);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        fakeAuth.authenticate(() => {
            setRedirectToReferrer(true);
        })
    }

    return (
        <div>
            {redirectToReferrer === true
                ? <Redirect to='/content' />
                : <div className='login'>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <label>
                            Username:
                            <input type='text' name='username' value={username} onChange={handleChange} />
                        </label>
                        <label>
                            Password:
                            <input type='text' name='password' value={password} onChange={handleChange} />
                        </label>
                            <input type='submit' value='Log In' />
                    </form>
                </div>
            }
        </div>


    )
}

export default LoginForm;