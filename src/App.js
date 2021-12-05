import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "./components/Counter";
import QRCode from "qrcode.react";
import UploadFile from "./components/UploadFile";

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
    </div>
  );
}

export default App;
