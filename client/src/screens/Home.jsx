import './styling.css'
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className='homeContainer'>
        <h1 className='welcome'>Welcome</h1>
        <p className="musicphileDescription">Musicphile is a music sharing library. Share what you find with the world, and amuse yourself with arcane tunes brought to you by other music enthusiasts. 🎶</p>
      </div>
      <div>
      </div>
    </Layout>
  )
}

export default Home;
