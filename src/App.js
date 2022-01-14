import "./App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "./components/Counter";
import UploadFile from "./components/UploadFile";
import Contact from "./components/Contact";
// import Dashboard from "./components/dashboard/Dashboard";
// import DataTable from "./components/DataTable";
// import DataGridDemo from "./components/DataGridDemo";
// import CoffeeShop from "./components/CoffeeShop";
import Main from "./components/Main";
import Navbar from "./components/Navbar";



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
        <Link to="/meetup">Meet Up</Link> | <Link to="/contact">Contact</Link>
      </nav>
      {/* <Navbar /> */}
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
      <div>
        <Link to="/meetups/add">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-plus-circle-fill float-end"
            viewBox="0 0 16 16"
            color="red"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default App;
