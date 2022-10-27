import React from 'react'

export default function Register() {
    return (
        <div>
            {/* register form */}
            <h1>Register</h1>

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

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password.." />

                <input style={{
                    width: '50%',
                    margin: '0 auto',
                    marginTop: '1rem',
                    backgroundColor: '#4CAF50',
                }} type="submit" value="Register" />
            </form>
        </div>
    )
}