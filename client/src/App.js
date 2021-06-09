import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import football from "./components/football"
import basketball from "./components/basketball"
import games from "./components/games"





function App() {
    return (
        <div>
            <Router>

                <div>
                    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">football</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/basketball/">basketball</Link>
                            </li>
                           
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="/add/">add</Link>
                            </li> */}
                        </ul>
                    </nav>

                    <Route path="/" exact component={football} />
                 
                    <Route path="/basketball" component={basketball} />
                    <Route path="/games/:id" component={games} />


                </div>
            </Router>

        </div>
    );
}

export default App;
