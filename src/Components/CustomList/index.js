import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styles from "../../Assets/jss/customListStyle";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Storage from "@material-ui/icons/Storage";
import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

const CustomList = ({ data = [], handleClickDatabase, handleLogout }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Database
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Databases" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.map(value => (
            <ListItem button className={classes.nested} onClick={() => handleClickDatabase(value)}>
              <ListItemIcon>
                <Storage />
              </ListItemIcon>
              <ListItemText primary={value.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      <ListItem button onClick={handleLogout}>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
}

CustomList.propTypes = {
  data: PropTypes.array,
  handleClickDatabase: PropTypes.func
};

export default CustomList