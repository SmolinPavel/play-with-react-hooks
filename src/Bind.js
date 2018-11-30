import React, { Component } from 'react';

class Bind extends Component {
    state = {
        bindValue: 'testValue'
    };

    // function
    handleClick(e) {
        this.setState({ bindValue: e.target.value });
    }

    //handle = () => {}

    render() {
        const { bindValue } = this.state;
        return (
            <>
                <h1>Test Bindaa: {bindValue}</h1>
                <input value={bindValue} onChange={this.handleClick} />
            </>
        )
    }
}

export default Bind;