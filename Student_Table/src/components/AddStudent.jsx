import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    hobby: [],
    image: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const newStudent = { ...student, id: Date.now() };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    navigate('/');
  };

  return (
    <div>

      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={student.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={student.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={student.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Hobbies:</label>
          <div className="gender-container">
            {['Reading', 'Sports', 'Music', 'Gaming'].map((hobbyOption) => (
              <label key={hobbyOption}>
                <input
                  type="checkbox"
                  name="hobby"
                  value={hobbyOption}
                  checked={student.hobby.includes(hobbyOption)}
                  onChange={(e) => {
                    const value = e.target.value;
                    setStudent((prev) => ({
                      ...prev,
                      hobby: e.target.checked
                        ? [...prev.hobby, value]
                        : prev.hobby.filter((h) => h !== value),
                    }));
                  }}
                />
                {hobbyOption}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={student.image} onChange={handleChange} required />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;