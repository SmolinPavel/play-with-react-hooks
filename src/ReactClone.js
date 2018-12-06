import React, { Children, cloneElement, Component } from 'react';

class ReactClone extends Component {
  render() {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
        <Button value="D" />
      </Buttons>
    );
  }
}

const Button = ({ onClick, value }) => (
  <button value={value} onClick={onClick}>
    Button component
  </button>
);

class Buttons extends Component {
  state = { selected: 'None' };

  selectItem = selected => {
    this.setState({ selected });
  };

  render() {
    const { children } = this.props;
    const fn = child =>
      cloneElement(child, {
        onClick: () => this.selectItem(child.props.value)
      });
    const items = Children.map(children, fn);

    return (
      <div>
        <h2>You've selected: {this.state.selected}</h2>
        {items}
      </div>
    );
  }
}

export default ReactClone;
