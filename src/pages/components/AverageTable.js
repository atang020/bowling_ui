import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AverageTable({ averages }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h3>Averages</h3>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Games</TableCell>
            <TableCell>Average</TableCell>
            <TableCell>Is a Challenge?</TableCell>
            <TableCell>Sport</TableCell>
            <TableCell>Hand</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {averages.map((average) => (
            <TableRow key={average.name}>
              <TableCell component="th" scope="row">
                {average.year}
              </TableCell>
              <TableCell>{average.games}</TableCell>
              <TableCell>{average.avg}</TableCell>
              <TableCell>{average.challenge}</TableCell>
              <TableCell>{average.sport}</TableCell>
              <TableCell>{average.hand}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
