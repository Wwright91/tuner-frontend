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
    album_id: 0
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
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Artist name..."
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album name..."
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="Time..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
              />
               <label htmlFor="album_id">Album Id:</label>
        <input
          id="album_id"
          type="number"
          name="album_id"
          value={song.album_id}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}