import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import MapIcon from "@material-ui/icons/Map";
import PersonIcon from "@material-ui/icons/Person";
import BusinessIcon from "@material-ui/icons/Business";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import "./css/menu.css";

export default function Menu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className="list"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/">
          <ListItem>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText><Link to="/wastemap">WasteMap</Link></ListItemText>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/userprofile">
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText><Link to="/userprofile">User Profile</Link></ListItemText>
          </ListItem>
        </Link>
        <Link to="/employeeform">
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText><Link to="/form">Employee Form</Link></ListItemText>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/ecommercesite">
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText><Link to="/ecommercesite">ECommerce Site</Link></ListItemText>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/settings">
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText><Link to="/settings">Settings</Link></ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />{" "}
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}