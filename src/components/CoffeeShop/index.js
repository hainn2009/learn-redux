import React from "react";
import { fetchAll } from "../../actions/coffeeShop";
import { connect } from "react-redux";
import CardReview from "./CardReview";
import AddReview from "./AddReview";

const mapStateToProps = (state) => {
  let reviews = [];
  if (state.coffeeShop.coffeeShops.length > 0 && state.coffeeShop.reviewers.length > 0) {
    reviews = state.coffeeShop.reviews.map((review) => {
      const coffeeShop = state.coffeeShop.coffeeShops.find((coffeeShop) => coffeeShop.id === review.coffeeShopId);
      //TODO reviewer phải đăng nhập thì mới xem được, da sua lai phan quyen de khong yeu cau vay nua
      const reviewer = state.coffeeShop.reviewers.find((reviewer) => reviewer.id === review.publisherId);
      return {
        ...review,
        coffeeShop,
        reviewer,
      };
    });
  }

  return {
    reviews,
  };
};

class Review extends React.Component {
  componentDidMount() {
    this.props.fetchAll();
  }
  render() {
    console.log("render run");
    return (
      <div>
        <h1>CoffeShop</h1>
        <AddReview />
        <CardReview reviews={this.props.reviews} />
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchAll })(Review);
