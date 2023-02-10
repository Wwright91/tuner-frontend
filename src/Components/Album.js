import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Album({ album }) {
  const { album_name, artist_name } = album;
  const [numOfSongs, setNumOfSongs] = useState([]);
  //   console.log(album);

  useEffect(() => {
    axios
      .get(`${API}/albums/${album_name}/songs`)
      .then((res) => {
        console.log(res.data);
        setNumOfSongs(res.data.length);
      })
      .catch((c) => console.warn("catch", c));
  }, [album_name]);

  return (
    <tr>
      <td>
        <Link to={`/albums/${album_name}/songs`} className="albums">
          <h2>{album_name}</h2>
        </Link>
      </td>
      <td>
        <h3>{artist_name}</h3>
      </td>
      <td>{numOfSongs}</td>
    </tr>
  );
}
