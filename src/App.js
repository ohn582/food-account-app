import React from 'react';
import AdminPage from './components/Main/AdminPage';
import CardInfo from './components/Cards/CardInfo';
import CartList from './components/ShoppingCart/CartList';
import Default from './components/Main/Default';
import MainStyle from './components/Main/MainStyle';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import Slider from './components/SlideShow/Slider'
// import CardUi from './components/Cards/CardUi';


import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



import './App.css';
import AdminDeleteProducts from './components/Main/AdminDeleteProducts';
import AdminUpdatePro from './components/Main/AdminUpdatePro';

class App extends React.Component {

  state = {
    user: {},
    products: [],
    displayProducts: [],
    cart: [],
    token: null
  }


  setUser = (user, token) => {
    this.setState({
      user: user,
      token: token
    })
    localStorage.token = token
    localStorage.user = user.username
  }



  componentDidMount() {
    const url = "http://13.58.204.144:3001"

    fetch(`http://13.58.204.144:3001/products`)
      .then(r => r.json())
      .then(data => { this.setState({ products: data, displayProducts: data }) })
  }

  makeNewProduct = (newProduct) => {
    const url = "http://13.58.204.144:3000"
    fetch(`http://13.58.204.144:3001/products`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          name: newProduct.name,
          description: newProduct.description,
          price: newProduct.price,
          image: newProduct.image
        })
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: [...this.state.products, data],
          displayProducts: [...this.state.products, data]
        })

      })
      .catch(err => console.log(err))
  }

  deleteProduct = (id) => {
    const url = "http://13.58.204.144:3000"

    fetch(`http://13.58.204.144:3001/products/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then()
    this.setState({
      displayProducts: this.state.displayProducts.filter(product => product.id !== id)
    })
  }


  updateProduct = (product) => {
    const url = "http://13.58.204.144:3000"

    fetch(`http://13.58.204.144:3001/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image
      })
    })
      .then(r => r.json())
      .then(updatedProduct => {

        this.setState({
          products: this.state.products.map(product => product.id !== updatedProduct.id ? product : updatedProduct),
          displayProducts: this.state.products.map(product => product.id !== updatedProduct.id ? product : updatedProduct)
        })

      })
  }


  handleItem = (id) => {
    const item = this.state.products.find((product) => product.id === id)
    console.log(item)

  }

  addToCart = (product) => {
    if (!this.state.cart.includes(product)) {
      this.setState({
        cart: [...this.state.cart, product]
      })
    }

  }

  render() {
    return (



      <BrowserRouter>
        {this.state.token ? <Redirect to="/home" /> : <Redirect to="/signin" />}

        <Switch>
          <Route exact path={"/home"} activeClassName="active">
            <MainStyle addToCart={this.addToCart} cart={this.state.cart} handleItem={this.handleItem} products={this.state.displayProducts} counter={this.state.counter} />
          </Route >

          <Route path={"/admin"} activeClassName="active">
            <AdminPage makeNewProduct={this.makeNewProduct} />
          </Route>

          <Route path={"/delete"} activeClassName="active">
            <AdminDeleteProducts products={this.state.displayProducts} deleteProduct={this.deleteProduct} />
          </Route >

          <Route path={"/update"} activeClassName="active">
            <AdminUpdatePro products={this.state.products} updateProduct={this.updateProduct} />
          </Route >

          <Route path={"/signin"} activeClassName="active">
            <SignIn cart={this.state.cart} setUser={this.setUser} />
          </Route>

          <Route path={"/item/:id"} activeClassName="active">
            {this.renderItem}
          </Route>
          <Route path={"/cart"} activeClassName="active">
            <CartList cart={this.state.cart} />
          </Route>
          <Route path={"/register"} activeClassName="active">
            <SignUp cart={this.state.cart} />
          </Route>
          {/* <Route path={"/ti"} component={Slider} activeClassName="active"/> */}
          <Route component={Default} />
        </Switch>

      </BrowserRouter>


    )
  }

  renderItem = (renderParams) => {
    const id = parseInt(renderParams.match.params.id)
    let product = this.state.products.find(product => product.id === id)
    return <CardInfo
      id={product.id}
      // handleItem={this.props.handleItem} 
      name={product.name}
      image={product.image}
      description={product.description}
      price={product.price}
      key={product.id} />
  }
}



export default App;