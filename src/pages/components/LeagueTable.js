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

export default function LeagueTable({ leagues }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h3>Leagues</h3>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Association Name</TableCell>
            <TableCell>League Name</TableCell>
            <TableCell>Team Name</TableCell>
            <TableCell>Season</TableCell>
            <TableCell># of Games</TableCell>
            <TableCell>Average</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Sport</TableCell>
            <TableCell>Is Challenge?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leagues.map((league) => (
            <TableRow key={league.name}>
              <TableCell component="th" scope="row">
                {league.aname}
              </TableCell>
              <TableCell>{league.lname}</TableCell>
              <TableCell>{league.cname}</TableCell>
              <TableCell>{league.season}</TableCell>
              <TableCell>{league.games}</TableCell>
              <TableCell>{league.avg}</TableCell>
              <TableCell>{league.year}</TableCell>
              <TableCell>{league.sport}</TableCell>
              <TableCell>{league.challenge}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
