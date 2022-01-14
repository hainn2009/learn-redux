import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Review from "./CoffeeShop";
import CoffeeShop from "./CoffeeShop/coffeeShop";
import MeetUp from "./MeetUp";
import MeetUpDetail from "./MeetUpDetail";

const Main = () => (
  <Routes>
    <Route exact path="/counter" element={<Counter />} />
    <Route exact path="/coffeeShop/coffeeShops" element={<CoffeeShop />} />
    <Route exact path="/coffeeShop/reviews" element={<Review />} />
    <Route exact path="/meetup" element={MeetUp} />
    <Route exact path="/meetup/:id" element={MeetUpDetail} />
  </Routes>
);

export default Main;
