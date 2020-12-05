import "./App.css";
import { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import AndroidIcon from '@material-ui/icons/Android';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handlePlus() {
    this.setState({ count: this.state.count + 1 });
  }
  handleMainus() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div className="App">
        <Typography component="countNumber">
          <Box fontSize="h1.fontSize" m={1}>{this.state.count}</Box>
        </Typography>
        <div className="btn">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AndroidIcon />}
            onClick={() => {
              this.handlePlus();
            }}
          >
            プラス
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<AndroidIcon />}
            onClick={() => {
              this.handleMainus();
            }}
          >
            マイナス
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
