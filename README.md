# Assignment Management System

A React-based web application for managing and submitting assignments. Built with **Material-UI (MUI)** and integrated with a mock API using `json-server`.

---

## Features

1. **Assignment Listing**:
   - Fetch and display a list of assignments from a mock API.
   - Responsive grid layout using Material-UI Cards.

2. **Assignment Details**:
   - View detailed information about an assignment in a table structure.

3. **Assignment Submission**:
   - Submit assignments via a form with fields for:
     - Student Name
     - Email
     - Comments
     - File Upload (PDF)
   - Toggle success/error messages using Material-UI Snackbar.

4. **Responsive Design**:
   - Fully responsive layout for desktop, tablet, and mobile devices.

5. **Mock API**:
   - Simulate API calls using `json-server` and a local `db.json` file.

---
npm install
npx json-server --watch db.json --port 3001
npm start
## Technologies Used

- **Frontend**:
  - React
  - Material-UI (MUI) for styling and components
  - React Router for navigation
  - Axios for API calls
  - UUID for generating unique IDs

- **Mock API**:
  - `json-server` for simulating a REST API

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/assignment-management-system.git
   cd assignment-management-system

   assignment-management-system/
├── public/
├── src/
│   ├── components/
│   │   ├── AssignmentList.js
│   │   ├── AssignmentDetail.js
│   │   ├── SubmissionForm.js
│   │   ├── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── AssignmentPage.js
│   ├── services/
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
├── db.json
├── package.json
├── README.md


---

### Key Features of the README:
1. **Headings**: Uses `#`, `##`, and `###` for proper hierarchy.
2. **Code Blocks**: Wrapped in triple backticks (```) for readability.
3. **Lists**: Uses `-` for unordered lists and `1.` for ordered lists.
4. **Links**: Uses `[text](url)` syntax for hyperlinks.
5. **File Structure**: Uses triple backticks with plain text for the folder structure.

---

Let me know if you need further adjustments!
