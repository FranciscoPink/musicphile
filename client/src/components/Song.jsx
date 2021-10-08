import { Link } from "react-router-dom"

export default function Song(props) {
  const { song } = props

  return (
    <div className="song">
      <Link to={`/songs/${song.id}`}>{song.name}</Link>
      <p>{song.artist.name}</p>
      <p>{song.genre.name}</p>
    </div>
  )
}