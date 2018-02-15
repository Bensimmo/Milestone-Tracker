import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="page-wrap">
                <Sidebar />
            </div>
        );
    }
}

export default App;
