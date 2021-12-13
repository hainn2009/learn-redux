import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CardReview from "./CardReview";

const { REACT_APP_BACKEND_URL } = process.env;

class CoffeeShop extends React.Component {
  async componentDidMount() {
    // console.log(REACT_APP_BACKEND_URL);
    const response = await fetch(`${REACT_APP_BACKEND_URL}/api/Reviews`, {
      method: "GET",
      // headers: { "Content-Type": "application/json" },
    });
    const reviews = await response.text();
    console.log(reviews);
  }
  render() {
    return (
      <div>
        <h1>CoffeShop</h1>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem> */}
        </List>
        <CardReview />
      </div>
    );
  }
}

export default CoffeeShop;
