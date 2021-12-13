import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CardReview from "./CardReview";
import { fetchReview } from "../../actions/coffeeShop";
import { connect } from "react-redux";

const { REACT_APP_BACKEND_URL } = process.env;

const mapStateToProps = (state) => {
  return {
    reviews: state.coffeeShop.reviews,
  };
};

class CoffeeShop extends React.Component {
  async componentDidMount() {
    this.props.fetchReview();
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
        <CardReview reviews={this.props.reviews} />
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchReview })(CoffeeShop);
