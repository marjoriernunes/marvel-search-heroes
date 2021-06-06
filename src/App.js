import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="*/hero/:id" component={Details}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
