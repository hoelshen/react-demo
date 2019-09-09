import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  useEffect(()=>{
    console.log(' 进入index')
    return ()=>{
      console.log(' 出去index')
      } 
  },[])   //如果后面跟空数组 证明只有在销毁的时候才做操作

  return (
    <>111</>
  )
}

function List() {
  useEffect(()=>{
    console.log(' 进入list')
    return ()=>{
      console.log(' 出去list');
      }
  },[])

  return (
    <>222</>

  )
}

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect ${count}`)
    return ()=>{
      console.log('解绑')
    }
  },[count])
  return (
    <div>
      <div>
        {count}
        <button onClick={() => { setCount(count + 1) }}>+1</button>
        <Router>
          <ul>
            <li>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/list/'>列表</Link>
            </li>
          </ul>
          <Route path='/' exact component={Index} />
          <Route path='/list/' component={List} />
        </Router>
      </div>
    </div>
  )
}

export default Example