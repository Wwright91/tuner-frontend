import { Link } from "react-router-dom"

export default function Album({ album }) {
    const {album_name, artist_name, id} = album
    return (
        <div>
            <Link to={`/albums/${id}/songs`}>
            <h2>{album_name}</h2>
            </Link>
            <h3>{artist_name}</h3>
        </div>
    )
}