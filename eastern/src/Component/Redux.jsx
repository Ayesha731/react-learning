import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Inc, Dec, Mul, Div } from "../states/reducers/index";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "@mui/material";
const Redux = () => {
  const currentState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>React Redux</h1>
      <h2>{currentState}</h2>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          margin: "3px",
          "&:hover": {
            backgroundColor: "#e65100",
          },
        }}
        onClick={() => dispatch(Inc(10))}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          margin: "3px",
          "&:hover": {
            backgroundColor: "#e65100",
          },
        }}
        onClick={() => dispatch(Dec(4))}
      >
        Decrement
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          margin: "3px",
          "&:hover": {
            backgroundColor: "#e65100",
          },
        }}
        onClick={() => dispatch(Mul())}
      >
        Multiply
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          margin: "3px",
          "&:hover": {
            backgroundColor: "#e65100",
          },
        }}
        onClick={() => dispatch(Div())}
      >
        Division
      </Button>
    </div>
  );
};

export default Redux;
