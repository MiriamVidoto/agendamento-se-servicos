import { Route, Switch } from 'react-router-dom';
import Scheduling from './pages/Scheduling';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Scheduling} />
      </Switch>
  );
}

export default App;
