import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  let navigate = useNavigate();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };
  return (
    <div className="New p-4 text-center">
      <h3>New Song</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Song Name:</label>
          <input
            id="name"
            value={song.name}
            type="text"
            placeholder="Song name..."
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
        <button className="btn btn-outline-success">Submit</button>
      </form>
    </div>
  );
}
