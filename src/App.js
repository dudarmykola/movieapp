import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';

import MoviesList from './components/MoviesList';
import NotFound from './components/NotFound';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MoviesList}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
