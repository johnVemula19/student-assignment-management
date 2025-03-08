import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AssignmentList() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/assignments')
      .then(response => setAssignments(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Assignments
      </Typography>
      <Grid container spacing={3}>
        {assignments.map(assignment => (
          <Grid item key={assignment.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {assignment.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Due Date: {assignment.dueDate}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {assignment.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  to={`/assignment/${assignment.id}`}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AssignmentList;