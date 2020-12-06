import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Link from "@material-ui/core/Link";
import App from "../App";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Link href="/" onClick={App}>
            <Tab label="A4" icon={<MenuBookIcon />} {...a11yProps(0)} />
          </Link>
          <Link href="/" onClick={App}>
            <Tab label="A5" icon={<MenuBookIcon />} {...a11yProps(1)} />
          </Link>
          <Link href="/" onClick={App}>
            <Tab label="A6" icon={<MenuBookIcon />} {...a11yProps(2)} />
          </Link>
          <Link href="/" onClick={App}>
            <Tab label="B5" icon={<MenuBookIcon />} {...a11yProps(3)} />
          </Link>
          <Link href="/" onClick={App}>
            <Tab label="四六判" icon={<MenuBookIcon />} {...a11yProps(4)} />
          </Link>
          <Link href="/" onClick={App}>
            <Tab label="B6" icon={<MenuBookIcon />} {...a11yProps(5)} />
          </Link>
          <Link href="/" onClick={App}>
            <Tab label="B4" icon={<MenuBookIcon />} {...a11yProps(6)} />
          </Link>
          <Link href="/" onClick={App}>
            <Tab label="A3" icon={<MenuBookIcon />} {...a11yProps(6)} />
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
}
