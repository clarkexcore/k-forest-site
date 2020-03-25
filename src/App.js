import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './styles.scss';

//Component Pages
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={Homepage} />
        </Router>
    </div>
  );
}

export default App;
