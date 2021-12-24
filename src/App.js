import "./App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "./components/Counter";
import UploadFile from "./components/UploadFile";
import Contact from "./components/Contact";
// import Dashboard from "./components/dashboard/Dashboard";
// import DataTable from "./components/DataTable";
import DataGridDemo from "./components/DataGridDemo";
import CoffeeShop from "./components/CoffeeShop";
import Main from "./components/Main";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLooged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>My App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/counter">Counter</Link> | <Link to="/coffeeShop">Coffee Shop</Link> |{" "}
        <Link to="/meetup">Meet Up</Link>
      </nav>
      <Main />

      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {isLooged && "Only logged user can see this information"}
      <br />
      <Counter />
      <br />
      <UploadFile />
      <br />
      {/* <Contact /> */}
      {/* <DataTable /> */}
      {/* <DataGridDemo /> */}
    </div>
  );
}

export default App;
