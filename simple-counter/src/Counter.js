import React, { Component } from 'react';
import { Box, Button } from '@material-ui/core';

class Counter extends Component {
    constructor() {
        super();
        this.state= {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })        
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={this.decrement.bind(this)}
                    >
                    -
                    </Button>
                    <Box component="span" m={5}>{this.state.count}</Box>
                    <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={this.increment.bind(this)}
                    >
                    +
                    </Button>                    
                </div>
            </React.Fragment>
        )
    }
}

export default Counter;