import React, { Component } from 'react'; 
import { stockData } from './product'

class App extends Component {
  state = {
    products: []
  } 
  componentDidMount() {
    console.log(stockData)
    this.setState({ products: stockData })
  }
  render() { 
    return (
      this.state.products.map((data, key) => {
        return (
          <div key={key}>
            {data.productName +
              " , " +
              data.price
            }
          </div>
        );
      })
    );
  }
}
export default App;