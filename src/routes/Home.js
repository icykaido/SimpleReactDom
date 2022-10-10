import {  Outlet, Link } from "react-router-dom";
import './css/Home.css'
import './css/App.css'
import logo from './logo.svg';

export default function Home(){
    return(
        <>
        <div className="someting">
    <div className="links"><Link to="page">Page</Link></div>
            {/* <h1 style={{color:"#fff"}}>Home</h1> */}
            <h1>Home</h1>
            </div>
            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        </div>
            <Outlet />
        </>
    )
}


// Home()