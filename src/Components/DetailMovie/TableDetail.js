import React from "react";
import "./DetailMovie.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
  table: {
    maxWidth: "558px"
  }
});
function TableDetail({ movie, country }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow key={movie.id}>
            <TableCell>Language </TableCell>
            <TableCell>{movie.language}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Type </TableCell>
            <TableCell>{movie.type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Country </TableCell>
            <TableCell>
              {country.name} , {country.code} , {country.timezone}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Premiered Date </TableCell>
            <TableCell>
              {movie.premiered < new Date().toString() && (
                <span className="Date_No_Valid">{movie.premiered}</span>
              )}
              {movie.premiered >= new Date().toString() && (
                <span className="Date_Valid">{movie.premiered}</span>
              )}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              {movie.status === "Ended" && (
                <div className="d-block w-100 text-center">
                  <span className="badge badge-danger"> Ended</span>
                </div>
              )}
              {movie.status === "Running" && (
                <div className="d-block w-100 text-center">
                  <span className="badge badge-success"> Running </span>
                </div>
              )}
              {movie.status === "To Be Determined" && (
                <div className="d-block w-100 text-center">
                  <span className="badge badge-warning">To Be Determined </span>
                </div>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TableDetail;
