import React, { Component } from 'react';

class Test extends Component {

    shouldComponentUpdate(prevProps) {
        return this.props.title !== prevProps.title;
    }

    render() {
        console.log('test render!');
        return (
            <>
                <h1>{this.props.testProp}</h1>
                <h2>{this.props.title}</h2>
            </>
        );
    }
}

export default Test;