import React from 'react';
import Nav from './Nav'
import Dashboard from './Dashboard'
import Footer from './Footer'
import '../../styles/components/app.scss';

class App extends React.Component {
    constructor(){
        super();

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
                allKpis: body
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
                <Nav />
                <Dashboard allKpis={this.state.allKpis} />
                <Footer />
            </div>
        )
    }
}

export default App;