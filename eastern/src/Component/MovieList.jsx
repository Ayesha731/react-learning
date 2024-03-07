import { Stack } from "@mui/material";
import Movie from "./Movie";
import movies from "../movie.json";

function MovieList() {
  return (
    <>
      <h1>Movie List:</h1>
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

export default MovieList;
