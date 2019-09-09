import React, {
  useReducer
} from 'react'

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1
      case "sub":
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <div>{count}</div> 
      <button onClick={()=>{dispatch('add')}}></button>
      <button onClick={()=>{dispatch('sub')}}></button>
    </div>
  )
}

export default ReducerDemo;


// Reducer
// function countReducer(state, action){
//   switch (action.type) {
//     case "add":
//       return state +1
//       break;
//     case "mul":
//       return state -1
//       break;

//     default:
//       return state
//       break;
//   }
// }