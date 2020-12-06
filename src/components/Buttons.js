import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import RotateRightIcon from "@material-ui/icons/RotateRight";

class Buttons extends Component {
  render() {
    return (
      <div className="btn">
        <div className="btn-group-one">
          <div className="l-btn-one">
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<RotateLeftIcon />}
              onClick={() => {
                this.handleLeft();
              }}
            >
              左綴じ
            </Button>
          </div>
          <div className="l-btn-two">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<RotateRightIcon />}
              onClick={() => {
                this.handleRight();
              }}
            >
              右綴じ
            </Button>
          </div>
        </div>
        <div className="btn-group-two">
          <div className="l-btn-three">
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                this.handleLeft();
              }}
            >
              無線綴じ
            </Button>
          </div>
          <div className="l-btn-four">
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                this.handleLeft();
              }}
            >
              アジロ綴じ
            </Button>
          </div>
          <div className="l-btn-five">
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                this.handleLeft();
              }}
            >
              糸かがり
            </Button>
          </div>
          <div className="l-btn-six">
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                this.handleLeft();
              }}
            >
              中綴じ
            </Button>
          </div>
        </div>
        <style jsx>
          {`
            .btn {
              display: flex;
              flex-direction: column;
            }
            .btn-group-one,
            .btn-group-two {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
            .l-btn-one,
            .l-btn-two,
            .l-btn-three,
            .l-btn-four,
            .l-btn-five,
            .l-btn-six {
              margin: 8px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Buttons;
