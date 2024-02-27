import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar'
import Firstpage from './Components/Dashboard/Firstpage'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login and Signup/Login'
import Register from './Components/Login and Signup/Register'
import Puma from './Components/SHOESpage/Puma'
import Demo1 from './Components/SHOESpage/demo1'
import PumaSlider from './Components/SHOESpage/PumaSlider'
import FlipFlopdemo from './Components/SHOESpage/FlipFlopdemo'
import Nike from './Components/SHOESpage/Nike'
import ShoeDemo from './Components/Demonstrations/ShoeDemo'
import Buy from './Components/Buy,Wish,Kart/Buy'
import WishList from './Components/Buy,Wish,Kart/WishList'
import NavWish from './Components/Buy,Wish,Kart/NavWish'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<div>
            <Navbar/>
            <Firstpage/>
            <Footer/>
            </div>}>
          </Route>
          <Route exact path='/home' element={<div>
            <Navbar/>
            <Firstpage/>
            <Footer/>
            </div>}>
          </Route>
          <Route exact path='/login' element={
            <div>
            <Navbar/>
            <Login/><br></br><br></br><br></br>
            <Footer/>
            </div>
          }>
          </Route>
          <Route exact path='/Register' element={
            <div>
            <Navbar/>
            <Register/>
            <br></br><br></br><br></br><br></br><br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
            </div>
          }>
          </Route>
          <Route exact path='/puma' element={
            <div>
            <Navbar/>
            <Puma/>
            <PumaSlider/>
            <Footer/>
            </div>
          }>
          </Route>
          <Route exact path='/demo1' element={
            <div>
            <Navbar/>
            <Demo1/>
            <Footer/>
            </div>
          }>
          </Route>
          <Route exact path='/Fdemo' element={
            <div>
            <Navbar/>
            <FlipFlopdemo></FlipFlopdemo>
            <Footer/>
            </div>
          }>
          </Route>
          <Route exact path='/nike' element={
            <div>
            <Navbar/>
            <Nike/>
            <Footer/>
            </div>
          }>
          </Route>
          <Route exact path='/shoeview' element={
            <div>
            <Navbar/>
            <ShoeDemo/>
            <Footer/>
            </div>
          }>
          </Route>
          <Route exact path='/buyproduct' element={
            <div>
            <Navbar/>
            <Buy/> 
            <Footer/>
            </div>
          }>
          </Route>
          <Route exact path='/wish' element={
            <div>
            <Navbar/>
            <WishList/> 
            <Footer/>
            </div>
          }></Route>
          <Route exact path='/navwish' element={
            <div>
            <Navbar/>
            <NavWish/> 
            <Footer/>
            </div>
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
