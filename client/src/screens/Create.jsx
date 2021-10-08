import { useState } from "react"

function SongCreate(props) {
  const [form, setForm] = useState({
    name: "",
    artist_id: null,
    genre_id: null
  });

  const { addSong } = props;
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    addSong(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Song</h1>
      <label>song title</label>
      <input type="text" name="name" id="name" value={form.name} onChange={handleChange} />
      <label>artist id</label>
      <input type="number" name="genre_id" id="artist_id" value={form.artist_id} onChange={handleChange} />
      <label>genre id</label>
      <input type="number" name="genre_id" id="genre_id" value={form.genre_id} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SongCreate;
