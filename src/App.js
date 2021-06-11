import React, {Component} from 'react'
import Video from './components/pages/Video';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render(){
        return (
            <>
              <div>
                <Router>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/:url" component={Video} />
                  </Switch>
                </Router>
              </div>
            </>
        );
    }
}
export default App;