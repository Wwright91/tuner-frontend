// import e from "express";
import { Link } from "react-router-dom"

export default function Song({ song }) {
    const { name, artist, album, time, is_favorite, id } = song
    
    // const toggleFavorite = () => {
    //     e.preventDefault()
    //     setSong({ ...song, is_favorite: !song.is_favorite });
    // };

    // onClick={{...song, is_favorite: !song.is_favorite}}
    

    return (
            <tr className="Song">
                <td>
                    {is_favorite ? (
                        <span>⭐️</span>
                    ) : (
                            <span>&nbsp; &nbsp; &nbsp;</span>
                    )}
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