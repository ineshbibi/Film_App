import React, { Component } from "react";
import "./DetailMovie.css";
import Axios from "axios";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import TableDetail from "./TableDetail";
import Button from "@material-ui/core/Button";
import PrevEpisode from "../PrevEpisode/PrevEpisode";
const initialState = {
  movie: "",
  defaultRate: 0,
  image: "",
  country: "",
  url: "",
  prevEp: ""
};
class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    Axios.get("http://api.tvmaze.com/shows/" + this.props.id).then(res => {
      this.setState({
        movie: res.data,
        image: res.data.image,
        country: res.data.network.country,
        url: res.data._links.previousepisode.href
      });
      this.getPrevEpisode(res.data._links.previousepisode.href);
    });
  }

  getPrevEpisode(url) {
    Axios.get(url).then(res => {
      this.setState({
        prevEp: res.data
      });
      console.log(res.data);
    });
  }
  //Redirection to the main website
  CheckWebSite = () => {
    window.location = this.state.movie.url;
  };
  render() {
    const { movie, defaultRate, image } = this.state;

    return (
      <div className="Detail_Body">
        <div className="Detail_Body_Left">
          <div className="Previous_Episode_box">
            <a
              className="Previous_Episode_But"
              target="_blank"
              href={this.state.prevEp.url}
            >
              Previous Episode
            </a>
          </div>
          <div>
            {movie.image !== null && (
              <img src={image.original} alt="" className="Detail_Photo" />
            )}
            {movie.image == null && (
              <img
                src={require("../../images/image-not-found.png")}
                alt=""
                className="No_Photo"
              />
            )}
          </div>
          <div className="View_Butt_Box">
            <Button className="View_Button" onClick={this.CheckWebSite}>
              Web site
            </Button>
          </div>
        </div>
        <div className="Detail_Body_Center">
          <div className="Detail_Name_Rank">
            <span className="Detail_Film_Name">{movie.name} </span>
            {movie.rating !== undefined && (
              <Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
                className="Stars"
              >
                <Rating value={Math.round(movie.rating.average)} readOnly />
              </Box>
            )}
            {movie.rating === undefined && (
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating value={defaultRate} readOnly />
              </Box>
            )}
          </div>
          {movie.summary !== "" && (
            <div
              dangerouslySetInnerHTML={{ __html: movie.summary }}
              className="Summary"
            />
          )}
          {movie.summary === "" && (
            <p className="Summary">
              Pas de description disponible en ce moment ....
            </p>
          )}
          <PrevEpisode prevEp={this.state.prevEp} />
        </div>
        <div className="Detail_Body_Right">
          <TableDetail movie={this.state.movie} country={this.state.country} />
        </div>
      </div>
    );
  }
}

export default DetailMovie;
