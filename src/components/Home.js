import React from "react";

const Home = props => {
  console.log(props);
  return (
    <div>
      <div
        className="banking-ui"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "80vh"
        }}
      >
        <h1>Banking App</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "40vh"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100vh"
            }}
          >
            <button
              style={{
                width: "20rem",
                height: "3rem",
                margin: "1rem",
                backgroundColor: "#004B8C",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={() => props.setRoute("login")}
            >
              Login
            </button>
            <button
              style={{
                width: "20rem",
                height: "3rem",
                margin: "1rem",
                backgroundColor: "#4CAF50",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={() => props.setRoute("register")}
            >
              Register
            </button>
            <p style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              width: "20rem"
            }}>
              The Banking App is a banking app for the users to manage their
              accounts online. The users can view their account details, transfer
              money between accounts, pay bills and more.
          </p>
          </div>
        </div>

        {/* details of bank */}





      </div>
    </div>
  );
}

export default Home;
