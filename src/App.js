import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = 'Welcome to the blog';
  const likes = 50;
  const link = "http://www.google.com"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path='/'>
            <home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
