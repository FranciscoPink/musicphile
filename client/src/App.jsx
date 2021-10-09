import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import SongContainer from './containers/SongContainer';
import Contact from './screens/Contact';

function App() {
  return (
    <Switch>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/songs">
        <SongContainer />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
