import React, { Component } from "react";
import axios from "axios";

const College = (props) => (
  <tr>
    <td>{props.college.id}</td>
    <td>{props.college.Name}</td>
    <td>{props.college.YearFounded}</td>
    <td>{props.college.City}</td>
    <td>{props.college.State}</td>
    <td>{props.college.Country}</td>
    <td>{props.college.StudentsNo}</td>
    <td>{props.college.Courses}</td>
  </tr>
);

export default class CollegeList extends Component {
  constructor(props) {
    super(props);

    this.state = { colleges: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/college")
      .then((res) => {
        this.setState({ colleges: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  collegeList() {
    return this.state.colleges.map((curr) => {
      return <College college={curr} key={curr._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>List of Colleges</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Id</th>
              <th>College Name</th>
              <th>Year Founded</th>
              <th>City</th>
              <th>State</th>
              <th>Counthy</th>
              <th>Students No</th>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody> {this.collegeList()} </tbody>
        </table>
      </div>
    );
  }
}
