import React from "react";
import { Card, CardContent } from "@mui/material";

const CardReview = ({ reviews }) => {
  return (
    <div>
      {reviews ? (
        reviews.map((review) => {
          return (
            <Card variant="outlined" key={review.id}>
              <CardContent>
                CoffeeShop: {review.coffeeShop.name}
                <br />
                Date: {review.date}
                <br />
                Review ID: {review.id}
                <br />
                Review: {review.comments}
                <br />
                Rating: {review.rating}
                <br />
                Reviewer: {review.reviewer.email}
                <br />
              </CardContent>
            </Card>
          );
        })
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
};
export default CardReview;
