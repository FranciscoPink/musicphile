import './App.css';
import { Route, Swtich } from 'react-router-dom';
import Home from './screens/Home';
import Nav from './components/Nav'
import Contact from "./screens/Contact"
// import Container from './containers/Container';

function App() {
  return (
    <switch>
      <div>
        <div>
          <Nav />
        </div>
        <div >
          <Home />
        </div>
        <div>
          <Route path="/contact" ><Contact /></Route>
          {/* <Route path="/" ></Route> */}
        </div>
      </div>
    </switch>
  );
}

export default App;
