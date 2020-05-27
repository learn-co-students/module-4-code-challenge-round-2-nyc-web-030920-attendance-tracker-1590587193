import React, {Component} from "react";

import Title from "./Title";
import CourseContainer from "./CourseContainer";

class App extends Component {

  state = {
    displayCourses: []
  }

  filterCourses = (name) => {
    let filteredArray = []
    if (name === "Select a Course") {
      filteredArray = this.state.courses
    } else {
      filteredArray = this.state.courses.filter(course => course.name === name)
    }
    this.setState({displayCourses: filteredArray})
  }

  render() {
    return (
  <div className="ui raised segment">
    <Title />
    <CourseContainer filterCourses={this.filterCourses}/>
  </div>
    )

  }
}

export default App;
