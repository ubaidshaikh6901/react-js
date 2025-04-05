import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const deleteStudent = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Hobby</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td><img src={student.image} alt="" width="50" /></td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
              <td>{student.gender}</td>
              <td>{Array.isArray(student.hobby) ? student.hobby.join(', ') : student.hobby}</td>
              <td>
                <Link to={`/update/${student.id}`}><button>Edit</button></Link>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;