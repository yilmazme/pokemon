
import './App.css';
import {increase, decrease, toggleShow} from "./store/actions" ;
import {useDispatch, useSelector} from "react-redux";
import Fetch from "./components/Fetch";

function App() {

  const count = useSelector(state => state.counter)
  const isShow = useSelector(state => state.isShow)
 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h3>Account: {count}</h3>
      <button onClick={()=>dispatch(decrease(1))}>DECREASE</button>
      <button onClick={()=>dispatch(increase(1))}>INCREASE</button>
     <div>
       <br></br>
      <button onClick={()=>dispatch(toggleShow())}>Toggle View</button>

        {isShow && <h3>Hola Mundo</h3>}
     </div>
     <Fetch/>
    </div>
  );
}

export default App;
