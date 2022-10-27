import React from 'react'

export default function ContactUs() {
    return (
        <div>
            {/* contact us form */}
            <h1>Contact Us</h1>

            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.." />
            </form>

        </div>
    )
}
