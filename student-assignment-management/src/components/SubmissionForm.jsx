import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function SubmissionForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    comments: '',
    file: null
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(''); // State for Snackbar message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new assignment object
    const newAssignment = {
      id: uuidv4(),
      title: `Submission by ${formData.studentName}`,
      dueDate: new Date().toISOString().split('T')[0],
      description: formData.comments,
      instructions: 'Submitted via form',
      status: 'Submitted'
    };

    // Simulate API call
    axios.post('http://localhost:3001/assignments', newAssignment)
      .then(response => {
        // Show success message
        setSnackbarMessage('Assignment submitted successfully!');
        setSnackbarOpen(true);

        // Clear the form
        setFormData({
          studentName: '',
          email: '',
          comments: '',
          file: null
        });
      })
      .catch(error => {
        // Show error message
        setSnackbarMessage('Failed to submit assignment. Please try again.');
        setSnackbarOpen(true);
        console.error('Error submitting assignment:', error);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close the Snackbar
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Submit Assignment
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Student Name"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
          style={{ margin: '16px 0' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Close after 6 seconds
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default SubmissionForm;