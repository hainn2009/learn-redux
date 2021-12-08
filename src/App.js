import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "./components/Counter";
import QRCode from "qrcode.react";
import UploadFile from "./components/UploadFile";
import Contact from "./components/Contact";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLooged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {isLooged && "Only logged user can see this information"}
      <br />
      <Counter />
      <br />
      <QRCode value="http://google.com" includeMargin="true" />
      <UploadFile />
      <br />
      <Contact />
    </div>
  );
}

export default App;
