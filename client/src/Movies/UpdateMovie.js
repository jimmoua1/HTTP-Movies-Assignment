import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateMovie = props => {
  const [updateForm, setUpdateForm] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: ["", "", ""]
  });

  useEffect(() => {
    if (props.movie) {
      return setUpdateForm(props.movie);
    }
  }, [props.movie, props.match.params.id]);

  const updateHandler = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${updateForm.id}`, updateForm)
      .then(res => console.log(res))
      .catch(error => console.log(error));
    props.history.push(`/`);
  };

  return (
    <form onSubmit={updateHandler}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={updateForm.title}
          placeholder="...title"
          onChange={e =>
            setUpdateForm({ ...updateForm, title: e.target.value })
          }
        />
      </div>
      <div>
        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={updateForm.director}
          placeholder="...director"
          onChange={e =>
            setUpdateForm({ ...updateForm, director: e.target.value })
          }
        />
      </div>
      <div>
        <label>Metascore:</label>
        <input
          type="number"
          name="metascore"
          value={updateForm.metascore}
          placeholder="...metascore"
          onChange={e =>
            setUpdateForm({ ...updateForm, metascore: e.target.value })
          }
        />
      </div>
      <div>
        <label>Star 1:</label>
        <input
          type="text"
          name="star1"
          value={updateForm.stars[0]}
          placeholder="...star"
          onChange={e =>
            setUpdateForm({
              ...updateForm,
              stars: [e.target.value, updateForm.stars[1], updateForm.stars[2]]
            })
          }
        />
      </div>
      <div>
        <label>Star 2:</label>
        <input
          type="text"
          name="star2"
          value={updateForm.stars[1]}
          placeholder="...star"
          onChange={e =>
            setUpdateForm({
              ...updateForm,
              stars: [updateForm.stars[0], e.target.value, updateForm.stars[2]]
            })
          }
        />
      </div>
      <div>
        <label>Star 3:</label>
        <input
          type="text"
          name="star3"
          value={updateForm.stars[2]}
          placeholder="...star"
          onChange={e =>
            setUpdateForm({
              ...updateForm,
              stars: [updateForm.stars[0], updateForm.stars[1], e.target.value]
            })
          }
        />
      </div>
      <button>Update</button>
    </form>
  );
};

export default UpdateMovie;