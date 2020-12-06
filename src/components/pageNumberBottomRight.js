import React, { Component } from "react";

class PageBottomRight extends Component {
  render() {
    return (
      <div classNname="page">
        <div className="countNumber">
          <h1>{this.props.pageNumberBottomRight}</h1>
        </div>
      </div>
    );
  }
}

export default PageBottomRight;
