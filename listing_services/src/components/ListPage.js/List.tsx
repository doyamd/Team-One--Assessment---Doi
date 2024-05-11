"use client";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CrudModal from '../CrudModal';
import { useState } from 'react';

function createData(
  id: number,
  title: string,
  discription: string,
  price: number,
 
) {
  return {id,title, discription, price};
}

const rows = [
  createData(1,'School', 'This is a school', 159),
];

export default function List() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Discription</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.discription}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"> <button onClick={() => setShowAdd(true)}>Edit</button>
      {showAdd}</TableCell>
      <TableCell align="right"> <button onClick={() => setShowAdd(true)}>Delete</button>
      {showAdd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}