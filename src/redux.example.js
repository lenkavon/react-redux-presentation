import React from 'react';

const Cart = ({numberOfItems}) => (
  <div className="wrapper" style={{backgroundColor: 'hotpink'}}>
    Cart: {numberOfItems}
  </div>
)

const ButtonStateless = ({ title, onClickReaction}) => (
  <button
    className="button"
    type="button"
    style={buttonStyles}
    onClick={onClickReaction}
  >
    {title}
  </button>
);

export class WrapperRedux extends React.Component {
  constructor(props) {
    super(props)
    this.state = { numberOfItems: 0 };
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart() {
    const currentState = this.state.numberOfItems;
    this.setState({ numberOfItems: currentState + 1 });
  }

  render() {
    return (
      <div className="wrapper" style={{backgroundColor: this.props.background || 'yellow'}}>
        <h5>{this.props.title}</h5>
        {this.props.cart && <Cart numberOfItems={this.state.numberOfItems}/>}
        <ButtonStateless
          title="Add +1 to Cart"
          onClickReaction={this.addToCart}
        />
      </div>
    )
  }
}



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
