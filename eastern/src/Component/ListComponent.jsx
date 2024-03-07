import { Box } from "@mui/material";
import React, { useState } from "react";

//-----------------------------------------3th component---------------------
const ListComponent = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
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
    <Box
      sx={{ margin: "2px", border: "1px solid white", padding: "5px" }}
      bgcolor={"background.default"}
      color={"text.primary"}
    >
      <h1>{props.title}</h1>
      {props.item.length === 0 && <p>No items is found</p>}
      <ul className="list-group ">
        {props.item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-dark"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ListComponent;
