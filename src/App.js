import './App.css';
// import {BrowserRouter as Router} from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'; 
import AppRoutes from "./components/routes/Routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React from "react";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <AppRoutes/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
