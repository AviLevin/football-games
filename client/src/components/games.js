import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

class games extends Component {
  constructor() {
    super();
    this.state = { games: [] };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    axios.get(`http://localhost:3000/games/${id}`).then(res => {
      const games = res.data;
      console.log(games);

      this.setState({ games });
    });
  }

  render() {
    var newsDisplay = this.state.games.map(gamess => {
      return (
        <div class="container">

          <h2>{gamess.category}</h2>

          <p>{gamess.teamA}</p>
          <p>{gamess.teamB}</p>
          <p>{gamess.scoreA}</p>
          <p>{gamess.scoreB}</p>
          <p>{gamess.time}</p>
           



        </div>
      );
    });
    return newsDisplay;
  }
}

export default games;
