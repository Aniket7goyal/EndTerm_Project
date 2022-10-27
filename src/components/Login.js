import React from 'react'

export default function Login() {
    return (
        <div>
            {/* login form */}
            <h1>Login</h1>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                margin: '0 auto'
            }}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email address.." />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your password.." />
                <input style={{
                    width: '50%',
                    margin: '0 auto',
                    marginTop: '1rem',
                    backgroundColor: '#4CAF50',
                }} type="submit" value="Login" />
            </form>
        </div>
    )
}