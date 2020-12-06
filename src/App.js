import React, { Component } from "react";
import "./App.css";
import PageTopLeft from "./components/pageNumberTopLeft";
import PageBottomLeft from "./components/pageNumberBottomLeft";
import PageTopRight from "./components/pageNumberTopRight";
import PageBottomRight from "./components/pageNumberBottomRight";
import Buttons from "./components/Buttons";
import ScrollableTabsButtonForce from "./components/ScrollableTabsButtonForce";

class App extends Component {
  render() {
    const pageNumberTopLeft = [3, 14, 15, 2];
    const pageNumberBottomLeft = ['六', 11, 10, 7];
    const pageNumberTopRight = [1, 16, 13, 4];
    const pageNumberBottomRight = ['八', '九', 12, 5];
    return (
      <div className="App">
        <div className="ScrollableTabsButtonForce">
          <ScrollableTabsButtonForce />
        </div>
        <div className="btn">
          <Buttons />
        </div>
        <div className="main">
          <h2>16ページ</h2>
          <div className="leftMain">
            <div className="top">
              {pageNumberTopLeft.map((pageNumber) => {
                return <PageTopLeft pageNumberTopLeft={pageNumber} />;
              })}
            </div>
            <div className="bottom">
              {pageNumberBottomLeft.map((pageNumber) => {
                return <PageBottomLeft pageNumberBottomLeft={pageNumber} />;
              })}
            </div>
          </div>
          <div className="rightMain">
            <div className="top">
              {pageNumberTopRight.map((pageNumber) => {
                return <PageTopRight pageNumberTopRight={pageNumber} />;
              })}
            </div>
            <div className="bottom">
              {pageNumberBottomRight.map((pageNumberFour) => {
                return (
                  <PageBottomRight pageNumberBottomRight={pageNumberFour} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
