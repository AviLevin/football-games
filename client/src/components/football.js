import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';


class football extends Component {

    constructor() {
        super();
        this.state = { football: []  }
    }



    componentDidMount() {
        axios.get(`http://localhost:3000/football`)
            .then(res => {
                const football = res.data;
                console.log(football);

                this.setState({ football });
            })
    }


    

    render() {


        var newsDisplay = this.state.football.map(footballs => {
            return (
                <div class="container">
                    <h2>{footballs.category}</h2>
                   
                    <p>{footballs.teamA}</p>
                    <p>{footballs.teamB}</p>

                    <Link to={`/games/${footballs.id}`}>Read more</Link>

                    <p>------------------------------------</p>


                </div>)
        })

        return newsDisplay;

    }
}

export default football;
