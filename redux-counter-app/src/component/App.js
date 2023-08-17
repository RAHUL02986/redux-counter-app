import {connect} from "react-redux";
import Steps from "./Steps";
import Max from "./Max";
import { decrement, increment, reset } from "../store/action";
function App(props){          
        return<>
        <div className="container">
            <h2 className="heading">Counter App</h2>
        <h1> {props.count}</h1>

        <button onClick={()=>props.dispatch(increment())}>
            Increment</button>
        <button onClick={()=>props.dispatch(decrement())}>
            Decrement</button>
        <button onClick={()=>props.dispatch(reset())}>
            Reset</button> 
        <div>
            <Steps/>
        </div> 
        <div>
            <Max/>
        </div>
        </div> 
      </>
        }
        function getCount(state){
            return{
                count: state.value
            }
        }
export default connect(getCount)(App);

