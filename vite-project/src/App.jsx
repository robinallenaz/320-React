import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import EmployeeList from './components/EmployeeList.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SearchBar />
      <EmployeeList />
    </>
  )
}

export default App