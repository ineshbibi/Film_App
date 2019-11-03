import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./ListMovies.css";
const useStyles = makeStyles({
  card: {
    maxWidth: 200
  },
  media: {
    height: 140
  }
});
function CardItem({ movie }) {
  const classes = useStyles();
  return (
    <Card className={classes.card} key={movie.id}>
      <CardActionArea>
        <Link to={`/Detail/${movie.show.id}`}>
          <CardMedia>
            {movie.show.image !== null && (
              <img src={movie.show.image.medium} alt="" className="image" />
            )}
            {movie.show.image == null && (
              <img
                src={require("../../images/image-not-found.png")}
                alt=""
                className="no_image"
                key={movie.id}
              />
            )}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" className="name_card">
              <h2 className="name_card_h2">{movie.show.name}</h2>
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default CardItem;
