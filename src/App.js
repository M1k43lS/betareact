
import './App.css';
import {Route,Switch} from 'react-router';
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route  path='/Home'>
          <Home />
        </Route>
      </switch> 
    </div>
  );
}

export default App;
