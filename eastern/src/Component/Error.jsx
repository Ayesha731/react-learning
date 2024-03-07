import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 Page not found!</h1>
      <Button
        size="large"
        sx={{
          backgroundColor: "black",
          color: "white",
          margin: "3px",
          "&:hover": {
            backgroundColor: "#e65100",
          },
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default Error;
