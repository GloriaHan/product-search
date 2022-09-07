import React, { Component } from 'react'
import Product from '../Product'

const products = [
  {
    name: 'Leather Jacket',
    category: 'jackets',
    description:
      "Whether it's to protect from wind or just to look super cool, this leather jacket has you covered.",
    price: 400,
  },
  {
    name: 'Wool cardigan',
    category: 'jackets',
    description:
      'Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.',
    price: 80,
  },
  {
    name: 'Striped business shirt',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this striped shirt.',
    price: 50,
  },
  {
    name: 'Short-sleeved polo shirt',
    category: 'shirts',
    description: 'The best shirt you can get for that business-casual look.',
    price: 30,
  },
  {
    name: 'Plain business shirt',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this plain business shirt.',
    price: 50,
  },
  {
    name: 'Suit Jacket',
    category: 'jackets',
    description: 'Wear it with jeans or suit pants, it works with both!',
    price: 120,
  },
  {
    name: 'Suit Trousers',
    category: 'pants',
    description:
      "Get 5 of these and you've got pants for every day of the week.",
    price: 100,
  },
  {
    name: 'Denim Jeans',
    category: 'skirts',
    description:
      'A timeless classic, these denim jeans will never go out of style.',
    price: 80,
  },
]

export default class ProductList extends Component {
  state = { newProducts: products,
            input: ''
          }

  typeSellect = (type1, type2) => {
    const result = products.filter((item) =>
      type2
        ? item.category === type1 || item.category === type2
        : item.category === type1
    )
    this.setState({ newProducts: type1 ? result : products })
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }

  showData = () => {
    const { input } = this.state
    const searchResult = products.filter(
      (item) =>
        item.name.toLowerCase().indexOf(input.toLowerCase()) > 0 ||
        item.description.toLowerCase().indexOf(input.toLowerCase()) > 0
    )
    this.setState({
      newProducts:
        searchResult.length > 0
          ? searchResult
          : 'No Result, please search again.',
    })
  }
  enterChange = (e) => {
    if (e.keyCode === 13) {
      this.showData()
    }
  }

  priceSearch = (e)=>{
    const priceResult = this.state.newProducts.sort((a,b)=>{
      if(e.target.value==="lth") return a.price - b.price;
      if(e.target.value==="htl") return b.price - a.price;
    })
    this.setState({newProducts: priceResult});
  }

  render() {
    return (
      <div  style={{
        textAlign: 'center',
      }}>
        <h1
          style={{
            backgroundColor: 'rgba(152, 241, 237, 0.6)',
            textAlign: 'center', width:'500px', margin:'20px auto'
          }}
        >
          Products List
        </h1>
        <button onClick={() => this.typeSellect('shirts')}>Shirt</button>&nbsp;&nbsp;
        <button onClick={() => this.typeSellect('pants', 'skirts')}>
          Pants and Skirts
        </button>
        &nbsp;&nbsp;
        <button onClick={() => this.typeSellect('jackets')}>Jackets</button>&nbsp;&nbsp;
        <button onClick={() => this.typeSellect()}>All products</button>&nbsp;&nbsp;
        <p></p>
        <input
          type="text"
          onChange={this.handleChange}
          onKeyUp={this.enterChange}
          // value={this.state.input}
          placeholder="search and press enter"
        />&nbsp;
        {/* <input ref={c => this.input = c} type="text" placeholder="search the name or description"/>&nbsp; */}
        <button onClick={this.showData}>enter</button>&nbsp;&nbsp;
        <select onChange={this.priceSearch}>
          <option>--please select by price--</option>
          <option value="htl">Price: high to low</option>
          <option value="lth">Price: low to high</option>
        </select>


        <div>
          {typeof this.state.newProducts !== 'string'
            ? this.state.newProducts.map((item) => (
                <Product
                  key={item.name}
                  name={item.name}
                  category={item.category}
                  description={item.description}
                  price={item.price}
                />
              ))
            : this.state.newProducts}
        </div>
      </div>
    )
  }
}
