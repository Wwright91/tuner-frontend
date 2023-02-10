import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;

export default function SongDetails() {
  const [song, setSong] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, artist, album, time, is_favorite } = song;
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        console.log(res.data);
        setSong(res.data);
      })
      .catch((c) => console.error("catch", c));
  }, [id]);

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="card-body text-center song-details">
      <article className="Song-Details">
        <h3>
          {is_favorite ? <span>⭐️</span> : null} {name}
        </h3>
        <h5>{artist}</h5>
        {album !== "N/A" ? (
          <Link to={`/albums/${album}/songs`}>
            <h6>{album}</h6>
          </Link>
        ) : null}
        <p>{time}</p>
        <div className="d-flex show-buttons">
          <div>
            <button className="btn btn-dark" onClick={goBack}>
              Back
            </button>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
          </div>
          <div>
            <ConfirmDelete
              id={id}
              navigate={navigate}
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
