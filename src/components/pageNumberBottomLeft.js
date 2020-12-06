import React, { Component } from "react";

class PageBottomLeft extends Component {
  render() {
    return (
      <div classNname="page">
        <div className="countNumber">
          <h1>{this.props.pageNumberBottomLeft}</h1>
        </div>
      </div>
    );
  }
}

export default PageBottomLeft;
