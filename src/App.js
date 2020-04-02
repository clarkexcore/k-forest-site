import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './styles.scss';

//Component Pages
import Homepage from './components/Homepage/Homepage';
import Music from './components/Music/Music';
import Video from './components/Video/Video';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/contact" component={Contact} />
        </Router>
    </div>
  );
}

export default App;