import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <Header/>
        <MainComponent/>
        <Footer/>
    </>
  
)

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="src/assets/react.svg" alt="React Logo" />
            </div>

            <nav className="crumbs">
                <ol>
                    <li className="crumb">Pricing</li>
                    <li className="crumb">About</li>
                    <li className="crumb">Contact</li>
                </ol>
            </nav>
        </header>
    );
}

function MainComponent() {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
            </ol>
        </main> 
    )
}

function Footer() {
    return (
        <footer>
            <small>@ 20xx last_name development. All rights reserved.</small>
        </footer>
    )
}