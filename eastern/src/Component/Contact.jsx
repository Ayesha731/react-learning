import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us:</h1>

      <Link to={"insta"}>
        <p>Contact via Instagram</p>
      </Link>
      <Link>
        <p to={"wattsapp"}>Contact via Watsapp</p>
      </Link>
      <Link>
        <p to={"mail"}> Contact via Mail</p>
      </Link>
      <Outlet />
    </div>
  );
};

export default Contact;
