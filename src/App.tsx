import './App.css';
import Header from './Components/Header'
import Main from './Components/Mainpage'
import Btn from './Components/Button';
import { useState, useEffect } from 'react';

function App() {

  const [resourceType, setResourceType] = useState('posts')

  const [items,setItems] = useState([])

  const [windowsWidth, setWindowWidth] = useState(window.innerWidth)

 const handleResize = () => setWindowWidth(window.innerWidth)

  useEffect(() =>{
  window.addEventListener('resize', handleResize)

  return () =>{ 
    window.removeEventListener('resize',handleResize)
  console.log("removed windowlistener")}
},[])



useEffect( () => {
  const getTask = async ()=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  const data = await res.json()
  setItems(data) 
  console.log(data)
}
getTask()
return () => { console.log('return from  resourse change')}

},[resourceType])

// const [resourceType, setResourceType] = useState('posts')

// useEffect( () => {
// console.log(resourceType)

// return () => console.log("return from type change")
// },[resourceType])

  return (
    <>
    <div className="App">
      <p>{windowsWidth}</p>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
       <h2>{resourceType}</h2>
        {items.map(item =>{
        return <pre>{JSON.stringify(item)}</pre>
       })}
</>
  );
}

export default App;
