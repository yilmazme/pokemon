import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "./state/index"

function App() {

  const mehmet = useSelector((state)=>state.account)
  const dipatch = useDispatch()

  const {depositeMoney, withdrawMoney} =  bindActionCreators(actionCreators, dipatch);

  return (
    <div className="App">
      <h3>Account: {mehmet}</h3>
      <button onClick={()=>{depositeMoney(10)}}>Deposite</button>
      <button onClick={()=>{withdrawMoney(7)}}>Withdraw</button>

    </div>
  );
}

export default App;
