

//Router-dom
import { Route, Routes } from 'react-router-dom'

//Components
import Navbar from "../Navigation/navbar.component"
import Main from '../../Components/main/main.component'

const Home = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Navbar />} >
        

        
        </Route>
      </Routes>

      <Main />

    </div>

  )
}

export default Home
