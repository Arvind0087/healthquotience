import React from 'react';
import './App.css'
import Header from './components/Header'
import TotalCalories from './components/TotalCalories'
import AddMore from './components/AddMore'
import History from './components/History'
import { GlobalProvider } from './context/GlobalState'

function App () {
    return (
      <GlobalProvider>
        <Header />
        <TotalCalories />
        <History />
        <AddMore />
        </GlobalProvider>
    );
}

export default App;
