import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;

export default function AlbumDetails() {
    const [album, setAlbum] = useState([]);
    const [songs, setSongs] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { album_name, artist_name } = album;
  let { id } = useParams();
    let navigate = useNavigate();
    

    useEffect(() => {
        const getAlbum = axios.get(`${API}/albums/${id}`)
          const getSongsOnAlbum = axios.get(`${API}/albums/${id}/songs`)
            Promise.all([getAlbum, getSongsOnAlbum])
            .then((res) => {
                console.log(res[0].data, res[1].data)
                setAlbum(res[0].data)
                setSongs(res[1].data)
            })
        .catch((c) => console.error("catch", c))
    }, [id])

//     let URL1 = "https://www.something.com"
// let URL2 = "https://www.something1.com"
// let URL3 = "https://www.something2.com"

// const promise1 = axios.get(URL1);
// const promise2 = axios.get(URL2);
// const promise3 = axios.get(URL3);

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log(values);
// });
  
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
    <h5>
        {album_name}
    </h5>
          <h6>{artist_name}</h6>
          

          {/* {songs.map(({ name, time, id }) => (
          <div key={id}>
                  <p>{name}</p>
                  <p>{time}</p>
              </div>
        ))} */}
          
          <section>
              <table>
                  <thead>
                      <tr>
                          <th>Song Name</th>
                          <th>Time</th>
                          <th>Delete</th>
                      </tr>
                  </thead>
                  <tbody>
                  {songs.map(({ name, time, id }) => (
          <tr key={id}>
                          <td> <Link to={`/songs/${id}`}>{name}</Link></td>
                          <td>{time}</td>
                          <td>  <ConfirmDelete
            id={id}
            navigate={navigate}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          /></td>
              </tr>
        ))}
                  </tbody>
              </table>
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
