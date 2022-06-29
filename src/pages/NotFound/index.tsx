import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
      <h1 style={{ color: "red", fontSize: 100 }}>404</h1>
      <h3>Page Not Found</h3>
      <p>
        <Link to="/" style={{ textDecoration: "underline" }}>
          Go home
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
