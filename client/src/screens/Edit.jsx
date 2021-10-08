import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function SongEdit(props) {
  const [form, setForm] = useState({
    name: "",
    artist_id: null,
    genre_id: null
  })
  const { editSong, songs } = props;
  const { id } = useParams();

  useEffect(() => {
    const song = songs.find(song => song.id === Number(id))
    if (song) {
      const { name, artist_id, genre_id } = song;
      setForm({ name, artist_id, genre_id });
    }
  }, [songs, id])

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    editSong(id, form)
  }

  return (
    <div>
      {songs.length &&
        <form onSubmit={handleSubmit}>
          <h1>Edit Song</h1>
          <label>song title</label>
          <input type="text" name="name" id="name" value={form.name} onChange={handleChange} />
          <label>artist id</label>
          <input type="number" name="genre_id" id="artist_id" value={form.artist_id} onChange={handleChange} />
          <label>genre id</label>
          <input type="number" name="genre_id" id="genre_id" value={form.genre_id} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      }
    </div>
  )
}

export default SongEdit;