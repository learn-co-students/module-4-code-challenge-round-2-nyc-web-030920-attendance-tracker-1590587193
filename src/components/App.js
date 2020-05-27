import React, {Component} from "react";

import Title from "./Title";
import CourseContainer from "./CourseContainer";

class App extends Component {

  state = {
    displayCourses: []
  }



  render() {
    return (
  <div className="ui raised segment">
    <Title />
    <CourseContainer />
  </div>
    )

  }
}

export default App;
