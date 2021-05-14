import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    handleIncrement = product => {
        this.setState({ count: this.state.count + 1 });
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : this.state.count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count ===0) ? "warning" : "primary";
        return classes;
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.handleIncrement(product)} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        ); 
    }
}
 
export default Counter;