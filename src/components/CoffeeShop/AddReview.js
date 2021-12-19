import Select from "react-select";
import { FormGroup, Input, Label, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCoffeeShop } from "../../actions/coffeeShop";

const AddReview = () => {
  const [selectedCoffeeShop, setSelectedCoffeeShop] = useState("");
  const [review, setReview] = useState("");
  // const dispatch = useDispatch();
  const coffeeShops = useSelector((state) =>
    state.coffeeShop.coffeeShops.map((item) => ({ label: item.name, value: item.id }))
  );

  return (
    <div>
      CoffeeShop:
      <Select options={coffeeShops} value={selectedCoffeeShop} onChange={(e) => setSelectedCoffeeShop(e)} />
      <br />
      Review: <textarea value={review} onChange={(e) => setReview(e.target.value)}></textarea>
      <br />
      Rating:
      <FormGroup check>
        <Input name="radio1" type="radio" />{" "}
        <Label check>Option one is this and that—be sure to include why it's great</Label>
      </FormGroup>
      <FormGroup check>
        <Input name="radio1" type="radio" />{" "}
        <Label check>Option two can be something else and selecting it will deselect option one</Label>
      </FormGroup>
      <Button onClick={() => console.log(selectedCoffeeShop)}>Add</Button>
    </div>
  );
};
export default AddReview;
