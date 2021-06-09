import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';


class basketball extends Component {

    constructor() {
        super();
        this.state = { basketball: []  }
    }



    componentDidMount() {
        axios.get(`http://localhost:3000/basketball`)
            .then(res => {
                const basketball = res.data;
                console.log(basketball);

                this.setState({ basketball });
            })
    }


    

    render() {


        var newsDisplay = this.state.basketball.map(basketballs => {
            return (
                <div class="container">
                    <h2>{basketballs.category}</h2>
                   
                    <p>{basketballs.teamA}</p>
                    <p>{basketballs.teamB}</p>

                    <Link to={`/games/${basketballs.id}`}>Read more</Link>

                    <p>------------------------------------</p>


                </div>)
        })

        return newsDisplay;

    }
}

export default basketball;
