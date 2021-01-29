import React from "react"
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
      <div className='app'>
          <Header/>
          <LandingPage/>
          <Footer/>
      </div>
  )
}

export default App;
