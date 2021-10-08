import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import SongContainer from './containers/SongContainer';

function App() {
  return (
    <Switch>
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
