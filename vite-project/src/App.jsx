import './App.css'
import PerScholasLogo from /components/PerScholasLogo.jsx";

//Per Scholas component (usually defined in a separate file)
function PerScholasLogo() {
  return (
    <img src="" alt="Per Scholas Logo"/>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PerScholasLogo/>
    </>
  )
}

export default App
