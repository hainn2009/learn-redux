import Select from "react-select";
import { FormGroup, Input, Label, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCoffeeShop } from "../../actions/coffeeShop";

const AddReview = () => {
  const [selectedCoffeeShop, setSelectedCoffeeShop] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  // const dispatch = useDispatch();
  const coffeeShops = useSelector((state) =>
    state.coffeeShop.coffeeShops.map((item) => ({ label: item.name, value: item.id }))
  );
  // TODO: Need to import action to add a review

  return (
    <div>
      CoffeeShop:
      <Select options={coffeeShops} value={selectedCoffeeShop} onChange={(e) => setSelectedCoffeeShop(e)} />
      <br />
      Review: <textarea value={review} onChange={(e) => setReview(e.target.value)}></textarea>
      <br />
      Rating:
      <FormGroup check>
        <Input name="rating" type="radio" value="1" onChange={(e) => setRating(Number(e.target.value))} />
        <Label>1</Label>
      </FormGroup>
      <FormGroup check>
        <Input name="rating" type="radio" value="2" onChange={(e) => setRating(Number(e.target.value))} />
        <Label>2</Label>
      </FormGroup>
      <FormGroup check>
        <Input name="rating" type="radio" value="3" onChange={(e) => setRating(Number(e.target.value))} />
        <Label>3</Label>
      </FormGroup>
      <FormGroup check>
        <Input name="rating" type="radio" value="4" onChange={(e) => setRating(Number(e.target.value))} />
        <Label>4</Label>
      </FormGroup>
      <FormGroup check>
        <Input name="rating" type="radio" value="5" onChange={(e) => setRating(Number(e.target.value))} />
        <Label>5</Label>
      </FormGroup>
      <Button onClick={() => console.log(selectedCoffeeShop)}>Add</Button>
    </div>
  );
};
export default AddReview;
