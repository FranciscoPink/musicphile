import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSong } from "../services/songs";
import { Link } from "react-router-dom";

function SongDetail(props) {
  const [song, setSong] = useState(null);
  const { id } = useParams();
  const { removeSong } = props;

  useEffect(() => {
    const fetchSong = async () => {
      const song = await getSong(id);
      setSong(song);
    }
    fetchSong();
  }, [id])



  return (
    <div>
      {
        song &&
        <>
          <h2>{song.name}</h2>
          <h2>{song.artist.name}</h2>
          <h2>{song.genre.name}</h2>
          <br />
          <Link to={`/songs/${song.id}/edit`}><button>Edit</button></Link>
          <button onClick={() => removeSong(song.id)}>Delete</button>
        </>
      }

    </div>
  )
}

export default SongDetail;