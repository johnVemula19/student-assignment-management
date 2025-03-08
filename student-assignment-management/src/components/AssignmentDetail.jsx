import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Table, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import axios from 'axios';

function AssignmentDetail() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    console.log('Fetching assignment with ID:', id); // Debugging
    axios.get(`http://localhost:3001/assignments/${id}`)
      .then(response => {
        console.log('Assignment data:', response.data); // Debugging
        setAssignment(response.data);
      })
      .catch(error => {
        console.error('Error fetching assignment:', error); // Debugging
      });
  }, [id]);

  if (!assignment) return <div>Loading...</div>;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Assignment Details
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
              <TableCell>{assignment.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Due Date</TableCell>
              <TableCell>{assignment.dueDate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
              <TableCell>{assignment.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Instructions</TableCell>
              <TableCell>{assignment.instructions}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell>{assignment.status}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default AssignmentDetail;