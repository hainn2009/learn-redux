import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import CoffeeShop from "./CoffeeShop";
import MeetUp from "./MeetUp";
import MeetUpDetail from "./MeetUpDetail";

const Main = () => (
  <Routes>
    <Route exact path="/counter" element={Counter} />
    <Route exact path="/coffeeShop" element={CoffeeShop} />
    <Route exact path="/meetup" element={MeetUp} />
    <Route exact path="/meetup/:id" element={MeetUpDetail} />
  </Routes>
);

export default Main;
