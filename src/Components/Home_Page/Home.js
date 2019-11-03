import React, { Component } from "react";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import ListMovies from "../ListMovies/ListMovie";

const initialState = {
  movieName: ""
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="Home_body">
        <div className="Home_Background">
          <TextField
            required
            id="standard-required"
            placeholder="Search"
            margin="normal"
            onChange={this.onChange}
            name="movieName"
            className="Search_Bar"
          />
        </div>
        <ListMovies MovieName={this.state.movieName} />
      </div>
    );
  }
}
export default Home;
