import React, { Component } from "react";
import axios from "axios";

export default class CollegeDetails extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = { colleges: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/details" + this.props.match.params.id)
      .then((res) => {
        this.setState({ colleges: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/college")
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            Name: res.data.map((college) => college.Name),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3> Get College Details by name</h3>
        <form onSubmit={this.onSubmit}></form>
      </div>
    );
  }
}
