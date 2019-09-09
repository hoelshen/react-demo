import React, {  useState, createContext, useContext } from 'react';

  const CountContext = createContext();


function Counter(){
  let count = useContext(CountContext);
  return (<div>{count}</div>)
}

function Example() {
  const [count, setCount] = useState(0);  //数组结构

  return (
    <div>
      <div>
        {count}
        <button onClick={() => { setCount(count + 1) }}>+1</button>
      </div>
      <CountContext.Provider value={count}>
             <Counter/>
        </CountContext.Provider>
    </div>
  )
}

export default Example