import React from 'react';
import Dashboard from './Dashboard'

class App extends React.Component {
    constructor(){
        super()

        this.state = { allKpis: [] }
        this.fetchKpiData = this.fetchKpiData.bind(this)
    }

    fetchKpiData(){
        fetch(`/api/kpis`)
        .then(function(response) {
            return response.json();
        })
        .then(body => {
            console.log('body', body)
            this.setState({
                allKPIS: body
            })
    
        })
        .catch(error => console.log(error.message));
    }

    componentDidMount(){
        this.fetchKpiData()
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