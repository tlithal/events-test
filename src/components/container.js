import React from 'react';
import Counter from './counter';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
            highestCount: 0,
            highestCountName: ''
        }
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
            // if the name exists
                ? state.counts[name] += 1
            // if the name doesn't exist
                : state.counts[name] = 1;

            if(state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }

            return state;
        });
    }

    render() {
        return(
            <div>
                <h2>{this.state.highestCountName}</h2>
                <Counter name='one' count={this.state.counts.one} onClick={this.countClicks} />
                <Counter name='one' count={this.state.counts.one} onClick={this.countClicks} />
                <Counter name='two' count={this.state.counts.two} onClick={this.countClicks} />
                <Counter name='three' count={this.state.counts.three} onClick={this.countClicks} />
            </div>
        );
    }
}