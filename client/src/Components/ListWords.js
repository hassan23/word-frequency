import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    width: "30%",
    marginLeft: "35%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 200
  },
  progress: {
    margin: theme.spacing(2)
  }
}));

export default ({ topWords, isLoading }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {topWords.length ? (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Word</TableCell>
              <TableCell align="right">Frequency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topWords.map(({ word, frequency }) => (
              <TableRow key={word}>
                <TableCell>{word}</TableCell>
                <TableCell align="right">{frequency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : isLoading ? (
        <CircularProgress className={classes.progress} color="secondary" />
      ) : (
        ""
      )}
    </Paper>
  );
};
