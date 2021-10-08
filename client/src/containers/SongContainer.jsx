
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import Create from "../screens/Create";
import Edit from "../screens/Edit";
import Detail from "../screens/Details";
import Songs from '../screens/Songs'
import { getSongs, createSong, updateSong, deleteSong } from "../services/songs";
import { useEffect, useState } from "react";

export default function SongsContainer() {
  const [songs, setSongs] = useState([])
  const history = useHistory();

  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getSongs();
      setSongs(songs);
    }
    fetchSongs();
  }, [])

  const addSong = async (song) => {
    const newSong = await createSong(song);
    setSongs(prevState => [...prevState, newSong]);
    history.push(`/songs/${newSong.id}`);
  }

  const editSong = async (id, song) => {
    const updatedSong = await updateSong(id, song);
    setSongs(prevState => prevState.map(song => song.id === Number(id) ? updatedSong : song))
    history.push(`/songs/${id}`)
  }

  const removeSong = async (id) => {
    await deleteSong(id);
    setSongs(prevState => prevState.filter(song => song.id !== Number(id)));
    history.push("/songs");
  }


  return (
    <Layout>
      <Switch>
        <Route path="/songs">
          <Songs songs={songs} />
        </Route>
        <Route path="/songs/new">
          <Create addSong={addSong} />
        </Route>
        <Route path="/songs/:id/edit">
          <Edit editSong={editSong} songs={songs} />
        </Route>
        <Route path="/songs/:id">
          <Detail removeSong={removeSong} />
        </Route>
      </Switch>
    </Layout>
  )
}
