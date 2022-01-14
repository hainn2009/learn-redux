import React from "react";
import { connect } from "react-redux";
import { fetchCoffeeShopWithOtherInfo } from "../../actions/coffeeShop";

const mapStateToProps = (state) => {
  return {
    coffeeShops: state.coffeeShop.coffeeShopsWithOtherInfo,
  };
};

class CoffeeShop extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCoffeeShopWithOtherInfo();
  }

  render() {
    console.log(this.props.coffeeShops);
    return (
      <React.Fragment>
        {this.props.coffeeShops &&
          this.props.coffeeShops.map((shop) => (
            <React.Fragment>
              <h2>{shop.name}</h2>
              <h3>{shop.city}</h3>
              {shop.reviews.map((review) => (
                <React.Fragment>
                  Date: {review.date} <br />
                  Review: {review.comments}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, { fetchCoffeeShopWithOtherInfo })(CoffeeShop);
