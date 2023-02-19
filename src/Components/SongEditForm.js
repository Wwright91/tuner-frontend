import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setSong(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };
  return (
    <div className="Edit p-4 text-center">
      <h3>
        Edit <span style={{ color: "teal" }}>{song.name}</span>
      </h3>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Song Name:</label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist:</label>
          <input
            id="artist"
            type="text"
            required
            value={song.artist}
            placeholder="Artist name..."
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="album">Album:</label>
          <input
            id="album"
            type="text"
            name="album"
            value={song.album}
            placeholder="Album name..."
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            id="time"
            type="text"
            name="time"
            value={song.time}
            placeholder="Time..."
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
        </div>

              <br />
              <div className="d-flex show-buttons">
        <button className="btn btn-outline-success">Submit</button>
        <Link to={`/songs/${id}`}>
          <button className="btn btn-outline-warning">Back</button>
        </Link>
      </div>
      </form>
    </div>
  );
}
