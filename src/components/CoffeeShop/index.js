import React from "react";
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
    // Phai co async await để load đầy đủ dữ liệu
    await this.props.fetchCoffeeShop();
    await this.props.fetchReviewer();
    await this.props.fetchReview();
  }
  render() {
    return (
      <div>
        <h1>CoffeShop</h1>

        <CardReview reviews={this.props.reviews} />
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchReview, fetchCoffeeShop, fetchReviewer })(CoffeeShop);
