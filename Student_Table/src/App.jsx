import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentTable from './components/StudentTable';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import Header from './components/Header';
import './components/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<StudentTable />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;