

import 'typeface-noto-sans-tc'
import 'typeface-poppins'

import Login from './pages/Login'
import Search from './pages/Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Profile from './pages/Profile'

import PopUpMenue from './components/search/popUpMenue'

function App() {
  // usePreventZoom();
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Fav" element={<Favourite />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/PopUp" element={<PopUpMenue />} />


        </Routes>
      </BrowserRouter>




    </div>


  )
}

export default App
