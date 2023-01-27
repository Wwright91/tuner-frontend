// import e from "express";
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Song({ song, toggleFavorite, favorite}) {

    const { name, artist, album, time, id } = song

    // console.log(favorite)

    // const [toggleFav, setToggleFav] = useState({...song, is_favorite})
    
    // const toggleFavorite = (e) => {
    //     e.preventDefault()
    //     setToggleFav(!is_favorite);
    //     return toggleFav
    // };

    // onClick={{...song, is_favorite: !song.is_favorite}}

    // onClick={() => setToggleFav(!toggleFav)}
    

    return (
        <tr className="Song">
                <td>
                {favorite ? 
                            (<span>⭐️</span>
                    ) : (
                            <span>&nbsp; &nbsp; &nbsp;</span>)
                        }
                </td>
                <td>
                   <Link to={`/songs/${id}`}>{name}</Link> 
                </td>
                <td>
                    {artist}
                </td>
                <td>
                    {album}
                </td>
                <td>
                    {time}
                </td>
            </tr>
    )
}