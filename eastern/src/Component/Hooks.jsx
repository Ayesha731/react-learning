import { Box, Button, Typography, Stack } from "@mui/material";
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from "react";
import { Bars } from "react-loader-spinner";
import { Context } from "../main";
import useFetch from "./useFetch";

//-----------------------------------------1st component---------------------
const Row = ({ data }) => {
  return (
    <>
      <p>{data}</p>
      <Card data={data} />
    </>
  );
};
export { Row };
//-----------------------------------------2nd component---------------------
const Card = () => {
  const data = useContext(Context);
  const customReference = useRef(null);

  useEffect(() => {
    return () => {
      console.log(customReference.current); // it show null--because it can not get the reference-> tr resolve this issue, we use useffect
    };
  }, []);
  return (
    <>
      {/* <p> {data}</p> */}
      <p>
        App-ListComponent-Row-Card-----we pass the data through props from App
        to last one Card. Now, we use useContext hook, we can get data at any
        stage of components without passing props
      </p>
      <p ref={customReference}> {data}</p>
      <p>
        I get the above value <strong>Ayesha</strong> through Context
      </p>
    </>
  );
};
export { Card };
// ---------------------------------todo component for usecallback hook------------------
import { memo } from "react";
const AddTodo = ({ todo, addTodo }) => {
  console.log("child render");
  return (
    <>
      {todo.map((todos, i) => {
        return (
          <>
            <Typography key={i}>{todos}</Typography>
          </>
        );
      })}
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
        onClick={() => addTodo(8)}
      >
        Add Todo
      </Button>
    </>
  );
};
export const MemoizedAddTodo = memo(AddTodo);

// -----------------------------------------------------------------------------

const reducer = (state, action) => {
  if (action.type == "INC") {
    return state + 2;
  } else if (action.type == "DEC") {
    return state - 2;
  } else if (action.type == "MUL") {
    return state * 2;
  } else if (action.type == "DIV") {
    return state / 2;
  }

  return state;
};
//-----------------------------------------3th component---------------------

const Hooks = (props) => {
  const counter = useRef(0);
  const prevState = useRef("");
  const inputField = useRef();
  const [state, dispatch] = useReducer(reducer, 0);
  const [data] = useFetch(
    "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  );
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const [a, setA] = useState(0);
  const increment = (n) => {
    setA(a + n);
  };
  const decrement = (n) => {
    setA(a - n);
  };
  useEffect(() => {
    console.log("I am use Effect hook");
    counter.current += 1;
    prevState.current = input;
  }, [a, input]);

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000; i++) {}
    return num;
  };
  const calculation = useMemo(() => {
    expensiveCalculation(count);
  }, [count]);

  const addTodo = useCallback(
    (num) => {
      setTodos((t) => [...t, `This is my new todo :${num}.`]);
    },
    [todos]
  );
  // items = [];
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items is found</p>
  //     </>
  //   );

  //   items.length===0?<p>No items is found</p>:null
  //handleClick

  // const handleClick = (event) => {
  //   console.log(event);
  // };
  return (
    <>
      <Box
        sx={{ margin: "2px", border: "1px solid white", padding: "5px" }}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Typography variant="h4">Use State Hook</Typography>
        <Stack direction="row">
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
            onClick={() => increment(1)}
          >
            +
          </Button>
          <Typography sx={{ width: "50px", height: "50px", padding: "18px" }}>
            {a}
          </Typography>
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
            onClick={() => decrement(1)}
          >
            -
          </Button>
        </Stack>
        <Typography variant="h4">Use Context Hook</Typography>
        <p>{props.data}</p>

        <Row data={props.data} />
        <Typography variant="h4">Use Ref Hook</Typography>
        <input
          ref={inputField}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
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
          onClick={() => {
            console.log(inputField.current.value);
            inputField.current.value = "Aysh";
            inputField.current.style.border = "2px solid red";
          }}
        >
          Click me
        </Button>

        <p>
          It is used to store previous value, variable etc. It keep the
          reference and it is alos used to controll the rendering of the
          application. It is also used to direct manipulate the DOM.
        </p>

        <p>
          he useRef hook in React is a built-in hook that provides a way to
          create a mutable reference that can persist across re-renders. It
          allows you to access the properties of a DOM element or any other
          value that you want to persist between renders without triggering a
          re-render.
        </p>
        <h4>The application is render :{counter.current}</h4>
        <h4>The previous state is :{prevState.current}</h4>
        <Typography variant="h4">Use Reducer Hook</Typography>
        <p>
          When we want to do multiple function at one state, we use useReducer()
          hook.
        </p>
        <p>
          In React, a reducer is a function used to manage the state of a
          component or multiple components in a predictable and centralized way.
          It is an alternative to managing state with useState hooks or
          class-based state.
        </p>
        <h1>{state}</h1>
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
          onClick={() => {
            dispatch({ type: "INC" });
          }}
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
          onClick={() => {
            dispatch({ type: "DEC" });
          }}
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
          onClick={() => {
            dispatch({ type: "MUL" });
          }}
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
          onClick={() => {
            dispatch({ type: "DIV" });
          }}
        >
          Division
        </Button>
        <Typography variant="h4">Make Custom Hook to Fetch Api</Typography>
        {data.map((e, i) => {
          return <p key={i}>{e.firstName}</p>;
        })}
        <Typography variant="h4">Use Memo Hook</Typography>
        <p>
          jb ek function ko time lg raha ho kam krny me lakin dosra pr us ka kui
          effect na ho us case me useMemo best ha
        </p>
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
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </Button>
        <h6>Count:{count}</h6>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <h6>Name:{name}</h6>
        <p>
          The useMemo hook is used in React to memorize the result of a
          computation and prevent unnecessary re-calculations of that result. It
          is especially useful for optimizing the performance of your components
          by avoiding unnecessary re-renders.
        </p>
        <p>
          useMemo is a React hook that is used to optimize and memoize the value
          of a function so that it only recomputes when the input values have
          changed.
        </p>
        <Typography variant="h4">Use Callback Hook</Typography>
        <p>
          useCallback is a hook in React JS that memoizes a function so that it
          is only re-created if one of its dependencies changes.
        </p>
        <h6>Count:{count}</h6>
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
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </Button>

        <hr />
        <h6>Add New todo</h6>
        <MemoizedAddTodo todo={todos} addTodo={addTodo} />
      </Box>
    </>
  );
};

export default Hooks;
