import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CardReview from "./CardReview";
import { fetchReview, fetchCoffeeShop, fetchReviewer } from "../../actions/coffeeShop";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const reviews = state.coffeeShop.reviews.map((review) => {
    const coffeeShop = state.coffeeShop.coffeeShops.find((coffeeShop) => coffeeShop.id === review.coffeeShopId);
    //TODO reviewer phải đăng nhập thì mới xem được, da sua lai phan quyen de khong yeu cau vay nua
    const reviewer = state.coffeeShop.reviewers.find((reviewer) => reviewer.id === review.publisherId);
    return {
      ...review,
      coffeeShop,
      reviewer,
    };
  });
  return {
    reviews,
  };
};

class CoffeeShop extends React.Component {
  async componentDidMount() {
    this.props.fetchReview();
    this.props.fetchCoffeeShop();
    this.props.fetchReviewer();
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

export default connect(mapStateToProps, { fetchReview, fetchCoffeeShop, fetchReviewer })(CoffeeShop);
