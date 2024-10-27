import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { TCourses, TData } from '../types/types';
import { getCourses } from '../services/list';

const CoursesList = () => {

    const [courses,setCourses]=useState<TCourses>([]);
    useEffect(()=>{getCourses().then(data=>{
        setCourses(data)
}) },[]);
  return (
    <Row  xs={1} md={2} className="g-4 w-100" >
    {courses.map((course :TData, idx :number) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={course.url} />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
  )
}

export default CoursesList
