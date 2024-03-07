import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const UserDetail = () => {
  const { userId } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`
      );
      const res = await get.json();
      setData(res[0]);
      console.log(res);
    }
    getData();
    // document.title = `(${state}) Empolyees Data`;
  }, []);
  return (
    <div>
      <h1>User Detail:</h1>
      <Card sx={{ maxWidth: 300, margin: "8px" }}>
        <CardMedia sx={{ height: 200 }} image={data.imageUrl} title="" />
        <CardContent>
          <Typography variant="h6" component="div">
            First Name: {data.firstName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Last Name: {data.lastName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Email:{data.email}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Contact No:{data.contactNumber}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Age: {data.age}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            DOB: {data.dob}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to favorite</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserDetail;
