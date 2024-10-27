import { Row } from "react-bootstrap"
import CoursesList from "../components/CoursesList"

const Courses = () => {
  return (
    <Row xs={1} md={2} className="g-4">
    <CoursesList/>
  </Row>
  )
}

export default Courses
