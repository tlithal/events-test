import React from 'react';
import SecondCounter from './second-counter';

export default class SecondCounterContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            showCounter: true
        };
    }

    render() {
        return(
            // If 'this.state.showCounter is true then post SecondCounter else return null
            <div>
                {this.state.showCounter ? <SecondCounter /> : null}
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => {
                this.setState({showCounter: false
            });
        }, 11000);
    }
}