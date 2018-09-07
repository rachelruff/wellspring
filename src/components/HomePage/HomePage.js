
import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ent: [],
      gen: [],
      health: [],
      sci: [],
      sports: [],
      tech: []
    };
  }
  // componentDidMount() {
  //   axios
  //     .get("/api/articles")
  //     .then(response =>
  //       this.setState({
  //         ent: response.data.ent,
  //         gen: response.data.gen,
  //         health: response.data.health,
  //         sci: response.data.sci,
  //         sports: response.data.sports,
  //         tech: response.data.tech
  //       })
  //     )
  //     .catch((err => console.log(err)));
  // }

  render() {
    // console.log(this.data.ent)

    return (
        
      <div className="category-container">
      Home
      <Link to='/test'>Click</Link>
      </div>
    );
  }
}