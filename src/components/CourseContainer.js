import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
  state = {
    courses: [],
    students: [],
    displayCourses: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/courses')
    .then(response => response.json())
    .then(result => {
      this.setState({courses: result})
    })
    fetch('http://localhost:6001/students')
    .then(response => response.json())
    .then(result => {
      this.setState({students: result})
  })
}
  
  render() {
    return (
      <div className="ui grid container">
        <CourseDetails  courses={this.state.courses}/>
        <CourseSelector courses={this.state.courses}/>
        <StudentsList students={this.state.students}/>
      </div>
    );
  }
}

export default CourseContainer;
