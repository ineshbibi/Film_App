import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to={`/`}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <HomeIcon fontSize="large" />
            </IconButton>
          </Link>
          <Typography variant="h6">Movie Time</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
