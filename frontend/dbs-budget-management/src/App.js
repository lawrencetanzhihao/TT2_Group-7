import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  return (
    <div classsName='container'>
      <Header />
      <Tasks />
    </div>
  )
}

useEffect(() => {
    const fetchTasks = async () =>{
      const res = await fetch('https://github.com/mmtxs/TT2/tree/main/data')
      const data = await res.Json()

      return data
  }

  fetchTasks()
}, [])


export default App;
