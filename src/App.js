import React, { Component } from 'react';
import { connect } from 'react-redux' 
class App extends Component {

  render() {
    return (
      <div class="products">
        {this.props.products.map((product) => (
          <div class="card" style="width: 18rem;">
          <img src={`/images/${product.image}`} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{product.productName}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        ))}
        

      </div>
    )
  }
} 
function mapStateToProps(state) {
  console.log(state)
  return {
    products: state
  }
}
export default connect(mapStateToProps)(App);