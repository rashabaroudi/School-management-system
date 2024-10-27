import {  Row } from "react-bootstrap"
import StudentsList from "../components/StudentsList"

const Students = () => {
  return (
    <>
   
        <Row className="text-center mt-5">
        <h1 >Students List</h1>
        </Row>
        <Row className="container mx-auto text-center">
          <StudentsList/>
        </Row>
      
   
    
    </>
  )
}

export default Students
