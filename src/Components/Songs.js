import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => setSongs(res.data))
      .catch((c) => console.warn("catch", c));
  }, []);
    
  const [toggleFav, setToggleFav] = useState(false)
    
  const toggleFavorite = (id) => {
    //   e.preventDefault()
      console.log(toggleFav, id)
      setToggleFav(!toggleFav);
  };

  return (
    <div>
      <h1 className="m-5">All Songs</h1>
      <section className="Songs">
        <Table striped className="m-5">
          <thead>
            <tr>
              <th>Favorite</th>
              <th>Name</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
                return <Song key={song.id} song={song} toggleFavorite={toggleFavorite} favorite={song.is_favorite} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}
