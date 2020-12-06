import React, { Component } from "react";

class PageTopRight extends Component {
  render() {
    return (
      <div classNname="page">
        <div className="countNumber">
          <h1>{this.props.pageNumberTopRight}</h1>
        </div>
      </div>
    );
  }
}

export default PageTopRight;
