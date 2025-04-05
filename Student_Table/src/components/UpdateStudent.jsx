import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';

const UpdateStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    hobby: [],
    image: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const currentStudent = students.find(student => student.id === parseInt(id));
    if (currentStudent) setStudent(currentStudent);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const updatedStudents = students.map(s =>
      s.id === parseInt(id) ? { ...student, id: s.id } : s
    );
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    navigate('/');
  };

  return (
    <div>
      <h2>Update Student</h2>
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
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
