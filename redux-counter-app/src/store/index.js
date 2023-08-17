import {createStore} from 'redux'

function counterReducer(state = { value: 0, step: 1 ,max:Infinity }, action) {
    console.log(state.max)

    switch (action.type) {
      case 'increment':
        if(state.value<= state.max){
            return {...state, value: state.value + state.step }
        }else{
            alert(`can't exceed more than ${state.max}`);
            return state;
        }
      case 'decrement':
        if (state.value > 0) {
            return { ...state, value: state.value - state.step };
          } else {
            alert("why u go below 0");
            return state;
          }
            case 'changeStep':
            return {...state, step: action.payload }
            case 'changeMax':
                return {...state, max: action.payload }
    
    
        case 'reset':
        return {...state, value: 0 }

      default:
        return state;
    }
  }
  let store = createStore(counterReducer);
  export default store;