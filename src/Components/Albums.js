import axios from "axios";
import { useState, useEffect } from "react";
import Album from "./Album";

const API = process.env.REACT_APP_API_URL;

export default function Albums() {
    const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/albums`)
        .then((res) => {
            console.log(res.data)
            setAlbums(res.data)
        })
      .catch((c) => console.warn("catch", c));
  }, []);
    
    return (
        <div>
            {albums.map((album) => <Album key={album.id} album={ album} />)}
        </div>
    )
}