import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import CoffeeShop from "./CoffeeShop";
import MeetUp from "./MeetUp";
import MeetUpDetail from "./MeetUpDetail";
import ContactReactQuery from "./ContactReactQuery";

const Main = () => (
  <Routes>
    <Route exact path="/" element={ContactReactQuery} />
    <Route exact path="/contact" element={ContactReactQuery} />
    <Route exact path="/counter" element={Counter} />
    <Route exact path="/coffeeShop" element={CoffeeShop} />
    <Route exact path="/meetup" element={MeetUp} />
    <Route exact path="/meetup/:id" element={MeetUpDetail} />
  </Routes>
);

export default Main;
