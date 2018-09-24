import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = { background: "hotpink" };
  }

  generateRandomHexColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  render() {
    return (
      <button
        className="button"
        type="button"
        style={{ ...buttonStyles, background: this.state.background }}
        onClick={() => this.setState({ background: this.generateRandomHexColor() })}
      >
        {this.props.title}
      </button>
    )
  }
}

export class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { background: "hotpink" };
  }

  generateRandomHexColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  render() {
    return (
      <div className="wrapper" style={{backgroundColor: 'yellow'}}>
        <p>{`Im stateful and my state is: { background: ${this.state.background} }` }</p>
        <ButtonStateless
          title="I am stateless"
          background={this.state.background}
          onClickReaction={() => this.setState({ background: this.generateRandomHexColor() })}
        />
      </div>
    )
  }
}

export class WrapperRedux extends React.Component {
  constructor(props) {
    super(props)
    this.state = { background: "hotpink" };
  }

  generateRandomHexColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  render() {
    return (
      <div className="wrapper" style={{backgroundColor: 'yellow'}}>
        <p>{this.state.background}</p>
        <ButtonStateless
          title="I am stateless"
          background={this.state.background}
          onClickReaction={() => this.setState({ background: this.generateRandomHexColor() })}
        />
      </div>
    )
  }
}

const ButtonStateless = ({ title, background, onClickReaction}) => (
  <button
    className="button"
    type="button"
    style={{ ...buttonStyles, background }}
    onClick={onClickReaction}
  >
    {title}
  </button>
);

const buttonStyles = {
 margin: '10px',
 fontSize: '18px',
 height: '65px',
 width: '250px',
 borderRadius: '10px',
 border: 'none',
 boxShadow: '1px 1px 0px 2px rgba (0,0,0,0.3)',
 background: 'rgb(141,217,252)',
 cursor: 'pointer',
}
