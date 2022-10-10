import { Link } from "react-router-dom"
import './css/App.css'
import logo from './logo.svg';
import './css/Home.css'

export default function Page(){
    return(
        <div>
            <div className="someting"> 
            <div className="links"><Link to="/">Home</Link></div>
            <h1>Page</h1>
            </div>
            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        </div>
        </div>
    )
}

// Page()