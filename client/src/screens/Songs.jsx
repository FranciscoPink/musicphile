import './styling.css'
import Song from "../components/Song"
import { Link } from "react-router-dom"

function Songs(props) {
  const { songs } = props
  return (
    <>
      <h1>Shared Music</h1>
      <Link to="/songs/new">Add to the Playlist</Link>
      <div className="songslist">
        {songs.map(song => <Song song={song} key={song.id} />)}
      </div>
    </>
  )
}

export default Songs;