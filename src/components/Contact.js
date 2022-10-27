import React from "react";

const Contact = props => {
  return (
    <div className="profile">
      <h3>Contact Page</h3>
      <h4>Reach out to us with any questions or comments</h4>
      <div className="form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email address.."
          />
          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          />
          <input style={{
            width: "20rem",
            height: "3rem",
            margin: "1rem",
            backgroundColor: "#004B8C",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
