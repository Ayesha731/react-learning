import { Stack } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import Movie from "./Components/Movie";
import movies from "./movie.json";

function App() {
  return (
    <>
      <Header />
      <Stack direction="row" spacing={5} display="flex" flexWrap="wrap">
        {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </Stack>
    </>
  );
}

export default App;
