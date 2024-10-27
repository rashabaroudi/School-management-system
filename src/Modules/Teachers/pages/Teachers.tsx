import { Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import TeachersList from "../components/TeachersList"



const Teachers = () => {
  return (
    <>
   
      
        <Row className="container mx-auto text-center">
          <TeachersList/>
        </Row>
      
   
    
    </>
  )
}

export default Teachers
