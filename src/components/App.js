import React, { Component } from 'react';
import '../styles/App.css';
import Products from './Products.js';
import CheckCredits from './CheckCredits';

const App = () => (
    <div>
        <Products />
        <CheckCredits />
    </div>
);

export default App;
