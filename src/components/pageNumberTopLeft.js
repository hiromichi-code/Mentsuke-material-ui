import React, { Component } from "react";

class PageTopLeft extends Component {
  render() {
    return (
      <div classNname="page">
        <div className="countNumber">
          <h1>{this.props.pageNumberTopLeft}</h1>
        </div>
        <style jsx>
          {`
            h1 {
              border: solid 3px black;
              height: 80px;
              width: 48px;
              margin: 0;
            }
            .countNumber {
              margin: 4px 4px;
              text-align: center;
              line-height: 80px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default PageTopLeft;
