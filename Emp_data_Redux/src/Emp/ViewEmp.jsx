import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmpData } from '../Redux/Action'
import { Link } from 'react-router-dom'
import { Table, Button, Container } from 'react-bootstrap';

function ViewEmp() {
  let emp = useSelector((state) => state.empData.employee)
  let dispatch = useDispatch()

  let deleteEmp = (pos) => {
    dispatch(deleteEmpData(pos))
  }

  return (

    <Container className="my-5">
      <h1 className="text-center mb-4">Employee Data</h1>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Hobby</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((v, i) => (
            <tr key={i}>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.password}</td>
              <td>{v.age}</td>
              <td>{v.gender}</td>
              <td>{v.hobby?.length ? v.hobby.join(", ") : "Not Selected"}</td>

              
              <td>
                <Button variant="danger" size="sm" className="me-2" onClick={() => deleteEmp(i)}>
                  Delete
                </Button>
                <Button variant="primary" size="sm" as={Link} to={`/edit/${i}`}>
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

  )
}

export default ViewEmp
