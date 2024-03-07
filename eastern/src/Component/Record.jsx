import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Record = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form]);
    // setName("");
    // setEmail("");
    setForm(form);
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  const handlePress = (e) => {
    if (e.key == "Enter") {
      addData();
    }
  };
  return (
    <Box>
      <h1>Record Keeping:</h1>

      <Stack
        direction={"row"}
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <TextField
          onKeyDown={(e) => {
            handlePress(e);
          }}
          value={form.name}
          onChange={(event) => {
            setForm({ ...form, name: event.target.value });
          }}
          id="outlined-basic"
          label="name"
          variant="outlined"
        />
        <TextField
          onKeyDown={(e) => {
            handlePress(e);
          }}
          value={form.email}
          onChange={(event) => {
            setForm({ ...form, email: event.target.value });
          }}
          id="outlined-basic"
          label="email"
          variant="outlined"
        />
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
          onClick={addData}
        >
          <AddIcon />
        </Button>
      </Stack>
      <Stack>
        <Card
          sx={{
            width: "80%",
            margin: "auto",
            marginTop: "20px",
            border: "1px solid black",
            height: "80px",
            padding: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <h6>Name</h6>
            </Grid>
            <Grid item xs={4}>
              <h6>Email</h6>
            </Grid>
            <Grid item xs={4}>
              <h6>Remove</h6>
            </Grid>
          </Grid>
        </Card>
        {data.map((element, index) => {
          return (
            <Card
              sx={{
                width: "80%",
                margin: "auto",
                marginTop: "20px",
                border: "1px solid black",
                height: "80px",
                padding: "20px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography>{element.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>{element.email}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    size="large"
                    sx={{
                      backgroundColor: "black",
                      color: "white",

                      "&:hover": {
                        backgroundColor: "#e65100",
                      },
                    }}
                    onClick={() => removeItem(index)}
                  >
                    <DeleteIcon />
                  </Button>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Record;
