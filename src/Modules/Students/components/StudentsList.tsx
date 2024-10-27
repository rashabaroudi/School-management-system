
import  React, { useEffect, useState } from 'react'

import { TData, TStudentsData } from '../types/list';
import { getStudentsData } from '../services/list';
import { Table } from 'react-bootstrap';

const StudentsList = () => {
    const [students,setStudents]=useState<TStudentsData>([]);
    useEffect(()=>{
    getStudentsData().then(data=>{
      setStudents(data);
      console.log(data);
    })
      },[]);
    
    
  return (
    <Table striped bordered hover >
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>User Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student :TData)=>{
        return(
           <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.username}</td>
            <td>{student.email}</td>
        
          </tr>)
      })}
     
      </tbody>
      </Table>
      );
  
}

export default StudentsList
