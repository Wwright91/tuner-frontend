import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function AlbumNewForm() {
  let navigate = useNavigate();

  const addAlbum = (newAlbum) => {
    axios
      .post(`${API}/albums`, newAlbum)
      .then(
        () => {
          navigate(`/albums`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [album, setAlbum] = useState({
    album_name: "",
    artist_name: "",
  });

  const handleTextChange = (event) => {
    setAlbum({ ...album, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAlbum(album);
  };
  return (
    <div className="New p-4 text-center">
      <h3>New Album</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="album_name">Album Name:</label>
          <input
            id="album_name"
            value={album.album_name}
            type="text"
            onChange={handleTextChange}
            placeholder="Album name..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist_name">Artist:</label>
          <input
            id="artist_name"
            type="text"
            required
            value={album.artist_name}
            placeholder="Artist name..."
            onChange={handleTextChange}
          />
        </div>
        <br />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
