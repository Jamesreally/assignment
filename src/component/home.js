import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="background">
      <div className="homefile">
        {" "}
        Awesome! You're Welcome to Our Page,
        <p>
          To view people around you go to the{" "}
          <Link className="Links" to="/Users">
            Users
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Home;
