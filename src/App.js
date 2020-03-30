import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './styles.scss';

//Component Pages
import Homepage from './components/Homepage/Homepage';
import Music from './components/Music/Music';

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/music" component={Music} />
        </Router>
    </div>
  );
}

export default App;