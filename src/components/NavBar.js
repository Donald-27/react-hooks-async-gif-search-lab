import React from "react";

function NavBar({ color = "black", title = "Giphy Search" }) {
  const navStyle = {
    backgroundColor: color,
    color: "white",
    padding: "1rem",
    textAlign: "center",
  };

  return (
    <div style={navStyle}>
      <h1>{title}</h1>
    </div>
  );
}

export default NavBar;
