import React from "react";

class Student extends React.Component {

  state = {
    checkbox: false
  }
  

  render() {

    return (    <tr style={{ textAlign: "center" }}>
    <td>{this.props.student.name}</td>
    <td>{this.props.student.class_year}</td>
    <td>{this.props.student.percentage}</td>
    <td>
      <input
        type="checkbox"
        checked={null /* if true, this checkbox will be checked! */}
        onClick={() => console.log("You clicked me!")}
      />
    </td>
  </tr>
);}
  
  }


export default Student;
