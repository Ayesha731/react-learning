import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid, // Use Grid instead of Stack
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FetchApi = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
      setLoading(false);
      toast.success("Sucessfully fetched data!");
      console.log(res);
    }
    getData();

    document.title = `(${state}) Empolyees Data`;
  }, [state]);

  return (
    <Box>
      <h1>Fetch Data of Employees using APIs:</h1>

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
          setState(state + 200);
        }}
      >
        Add Employees Data: {state}
      </Button>
      <Grid container spacing={2}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              minHeight: "50vh",
            }}
          >
            <ThreeCircles color="#e65100" />
          </Box>
        ) : (
          data.map((element, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Link to={`/api/${element.id}`}>
                <Card sx={{ maxWidth: 300, margin: "8px" }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={element.imageUrl}
                    title=""
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      First Name: {element.firstName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Last Name: {element.lastName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Email:{element.email}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Contact No:{element.contactNumber}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Age: {element.age}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      DOB: {element.dob}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add to favorite</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default FetchApi;
