import './index.css';
import Login from './pages/Login/Login'
import SignUp from "./pages/signUp/SignUp"
import Home from './pages/Home/Home';
const App = () => {
  return (
    <div className='flex h-screen  items-center justify-center '>
      {/* <SignUp></SignUp> */}
      {/* <Login></Login> */}
      <Home></Home>
    </div>
  )
}

export default App
