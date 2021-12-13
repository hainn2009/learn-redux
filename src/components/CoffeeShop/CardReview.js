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
                CoffeeShop: {review.coffeeShopId}
                Date: {review.date}
                ID: {review.id}
                Review: {review.comments}
                Reviewer: {review.publishserId}
                Rating: {review.rating}
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
