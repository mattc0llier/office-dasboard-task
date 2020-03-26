import React from 'react';
import Dashboard from './Dashboard'

class App extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="app">
                <Dashboard />
            </div>
            
        )
    }
}

export default App