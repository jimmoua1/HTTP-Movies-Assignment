import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieToEdit, setMovieToEdit] = useState({});

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const updateMovie = movie => {
    setMovieToEdit(movie);
  };

  console.log(movieToEdit);

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return (
            <Movie
              {...props}
              addToSavedList={addToSavedList}
              updateMovie={updateMovie}
            />
          );
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props} movie={movieToEdit} />;
        }}
      />
    </>
  );
};

export default App;