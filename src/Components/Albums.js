import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Album from "./Album";

const API = process.env.REACT_APP_API_URL;

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/albums`)
      .then((res) => {
        console.log(res.data);
        setAlbums(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div>
      <h1 className="m-5">All Albums</h1>
      <section>
        <Table striped className="m-5">
          <thead>
            <tr>
              <th>Album Name</th>
              <th>Artist</th>
              <th># of Songs</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => (
              <Album key={album.id} album={album} />
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
}
