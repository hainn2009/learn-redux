import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import CoffeeShop from "./CoffeeShop";
import MeetUp from "./MeetUp";

const Main = () => (
  <Routes>
    <Route path="/counter" element={<Counter />} />
    <Route path="/coffeeShop" element={<CoffeeShop />} />
    <Route path="/meetup" element={<MeetUp />} />
  </Routes>
);

export default Main;
