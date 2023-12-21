// 10023 - Sign Up Form Validation

import React from 'react';

export function SignUpFormValidation() {
    function validate(e) {
        e.preventDefault();
        let validUsername = true;
        if (username.length === 0) {
            validUsername = false;
            setErrorUsername('Username is required');
        } else if (username.match(/[^A-Za-z0-9]/)) {
            validUsername = false;
            setErrorUsername('Username must contain only alphanumeric characters');
        } else {
            setErrorUsername('');
        }
        let validPassword = true;
        if (password.length === 0) {
            validPassword = false;
            setErrorPassword('Password is required');
        } else if (password.length < 8
            || !password.match(/[A-Z]/)
            || !password.match(/[a-z]/)
            || !password.match(/\d/)) {
            validPassword = false;
            let errorMsg = 'Password must contain at least 8 characters, ';
            errorMsg += 'with uppercase, lowercase, and digit(s)';
            setErrorPassword(errorMsg);
        } else {
            setErrorPassword('');
        }
        if (validUsername && validPassword) {
            setSuccess('Sign Up Successful');
        } else {
            setSuccess('');
        }
    }
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorUsername, setErrorUsername] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState('');
    const [success, setSuccess] = React.useState('');
    return (
        <form>
            <input
                name="username"
                placeholder="Enter your username"
                onChange={e => setUsername(e.target.value)}
            />
            <p>{errorUsername}</p>
            <input
                name="password"
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
            />
            <p>{errorPassword}</p>
            <button onClick={e => validate(e)}>Sign Up</button>
            <p>{success}</p>
        </form>
    );
}
