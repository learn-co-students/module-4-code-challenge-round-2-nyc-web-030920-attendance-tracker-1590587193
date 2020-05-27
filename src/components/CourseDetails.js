import React from "react";

const CourseDetails = (props) => {
  return (
    <div className="ui center aligned header sixteen wide column">
      <p>{props.courses.name}</p>
      <p>{props.courses.instructor && `Ran by: ${props.courses.instructor}`}</p>
      <p>{props.courses.semester && `During: ${props.courses.semester}`}</p>
    </div>
  );
};

// This makes it so, when no course is passed
// CourseDetails will still get a course, but it will be an empty object.
CourseDetails.defaultProps = {
  courses: {
    name: "No course selected."
  }
};

export default CourseDetails;

