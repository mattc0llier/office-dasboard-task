import React from 'react';
import Pusher from 'pusher-js';

class ConcurrentUsers extends React.Component {
    constructor(){
        super()

        this.state = { concurrentUsers: "loading..." }
        this.receiveLiveConcurrentEvents = this.receiveLiveConcurrentEvents.bind(this)
    }

    // receive live concurrent user events through pusher
    receiveLiveConcurrentEvents(pusher){
        const concurrentUsersEvents = pusher.subscribe('dashboard-client');
        concurrentUsersEvents.bind('live-concurrent-users', (event) => {
            console.log("recieved live-concurrent-users event", event);
            this.setState({
                concurrentUsers: event.totalUsers
            })
        })
    }

    componentDidMount(){

        //set up Pusher client
        Pusher.logToConsole = true;

        const pusher = new Pusher('0b3f37fdbb6b9a9a4177', {
            cluster: 'eu',
            forceTLS: true
        });

        this.receiveLiveConcurrentEvents(pusher)
    }

    render(){
        return(
            <p className='kpi-text'>
                {this.state.concurrentUsers} 
                <span className='units-text'>users</span>
            </p>
        )
    }
}

export default  ConcurrentUsers