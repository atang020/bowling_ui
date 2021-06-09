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

export default function ProfileTable({ profile }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h3>Profile</h3>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Association</TableCell>
            <TableCell>Member</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={profile.prefix}>
            <TableCell component="th" scope="row">
              {`${profile.prefix}-${profile.suffix}`}
            </TableCell>
            <TableCell>{profile.first} {profile.last}</TableCell>
            <TableCell>{profile.assn}</TableCell>
            <TableCell>{profile.pba}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
