import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";

import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;

export default function AlbumDetails() {
  const [album, setAlbum] = useState([]);
  const [songs, setSongs] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { album_name, artist_name } = album;
  let { albumName } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const getAlbum = axios.get(`${API}/albums/${albumName}`);
    const getSongsOnAlbum = axios.get(`${API}/albums/${albumName}/songs`);
    Promise.all([getAlbum, getSongsOnAlbum])
      .then((res) => {
        console.log(res[0].data, res[1].data);
        setAlbum(res[0].data);
        setSongs(res[1].data);
      })
      .catch((c) => console.error("catch", c));
  }, [albumName]);

  // const deleteAlbum = () => {
  //   axios.delete(`${API}/albums/${id}`)
  //   .then(() => {
  //     navigate(`/albums`)
  //     },
  //   (error) => console.error(error)
  //   ).catch((c) => {
  //     console.warn("catch", c)
  //   })
  // }

  // const handleDelete = () => {
  //   deleteAlbum()
  //  }

  return (
    <article className="Album-Details">
          <h3 className="text-center">{album_name}</h3>
          <p className="text-center">by</p>
      <h5 className="text-center artist">{artist_name}</h5>
<br/>
      <section>
        <Table striped>
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Time</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {songs.map(({ name, time, id }) => (
              <tr key={id}>
                <td>
                  {" "}
                  <Link to={`/songs/${id}`}>{name}</Link>
                </td>
                <td>{time}</td>
                <td>
                  <Link to={`/songs/${id}/edit`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
                <td>
                  {" "}
                  <ConfirmDelete
                    id={id}
                    navigate={navigate}
                    show={show}
                    handleClose={handleClose}
                    handleShow={handleShow}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>

      {/* <div className="showNavigation">
      <div>
        <Link to={`/albums`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/albums/${id}/edit`}>
          <button>Edit</button>
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
    </div> */}
      {/* <Reviews/> */}
    </article>
  );
}
