import React, { Component } from "react";
import CardItem from "./CardItem";
import axios from "axios";
const initialState = {
  ListMovie: [],
  url: "https://api.tvmaze.com/search/shows?q=test"
};
class ListMovie2 extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.getMovies();
  }
  //Get All Movies
  getMovies = () => {
    axios.get(this.state.url).then(res => {
      this.setState({
        ListMovie: res.data
      });
    });
  };

  render() {
    const { MovieName } = this.props;
    // Filtre
    const movies = this.state.ListMovie.filter(movie => {
      return (
        movie.show.name.toUpperCase().indexOf(MovieName.toUpperCase()) >= 0
      );
    }).map(movie => {
      return <CardItem movie={movie}></CardItem>;
    });
    return <div className="cards">{movies}</div>;
  }
}

export default ListMovie2;
