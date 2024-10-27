import { useEffect} from 'react'
import { Row, Table } from 'react-bootstrap';
import { TData, TTeachersData } from '../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { getAllTeachersAsync } from '../../../redux/slices';

const TeachersList = () => {


  const dispatch = useDispatch<AppDispatch>();
  const teachers :TTeachersData= useSelector((state: RootState) =>state.teachers.teachers
);
 
 
  useEffect(()=>{

    dispatch(getAllTeachersAsync())
  

  },[dispatch]);



   
  
    
    
  return (

    <>  
    
    <Row className="text-center mt-5">
    <h1 >Teachers List</h1>


    </Row>
    <Table striped bordered hover >
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>image</th>
      </tr>
    </thead>
    <tbody>
      {teachers.map((teacher :TData)=>{
        return(
           <tr>
            <td>{teacher.id}</td>
            <td>{teacher.name}</td>
            <td>{teacher.email}</td>
            <td>{teacher.imageUrl}</td>
          
        
          </tr>)
      })}
     
      </tbody>
      </Table>

      </>
      
  
  )
}

export default TeachersList
