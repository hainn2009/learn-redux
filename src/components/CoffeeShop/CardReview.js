import React from "react";
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const CardReview = ({ reviews }) => {
  return (
    <div>
      <CardGroup>
        {reviews.length > 0 ? (
          reviews.map((review) => {
            return (
              <Card color="light" key={review.id}>
                <CardBody>
                  <CardTitle tag="h5">CoffeeShop: {review.coffeeShop.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Date: {review.date}
                  </CardSubtitle>
                  <CardText>
                    Review ID: {review.id}
                    <br />
                    Review: {review.comments}
                    <br />
                    Rating: {review.rating}
                    <br />
                    Reviewer: {review.reviewer.email}
                  </CardText>
                  <Button color="primary">Details</Button>
                </CardBody>
              </Card>
            );
          })
        ) : (
          <h2>No data</h2>
        )}
      </CardGroup>
    </div>
  );
};
export default CardReview;
