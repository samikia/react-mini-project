import React, { useState } from "react"
import ProductList from "./component/product/productList/productList"
import Main from "./component/main/main"
import './app.css'
import Wrapper from "./component/hoc/wrapper"
import Container from "./component/hoc/container"
import AuthContext from "./context/auth-context"
// const App = (props) => {
//     const [product, setProduct] = useState({
//         Products: [
//             { title: 'book1', price: 98 },
//             { title: 'book2', price: 29 },
//             { title: 'book3', price: 120 },
//         ],
//     })
//     const changePriceHandler = () => {
//         setProduct({
//             Products: [
//                 { title: 'book1', price: 120 },
//                 { title: 'book2', price: 120 },
//                 { title: 'book3', price: 120 },
//             ],
//         })
//     }

//     return (
//         <div id="main" className="container">
//             <h2>React App</h2>
//             <Product title={product.Products[0].title} price={product.Products[0].price} />
//             <Product title={product.Products[1].title} price={product.Products[1].price} />
//             <button onClick={changePriceHandler}>Change Price</button>
//         </div>
//     )
// }




class App extends React.Component {
    constructor(props) {
        super(props)
        console.log('App.js constractor')
    }
    state = {
        products: [
            { id: 1, title: 'book1', price: 99 },
            { id: 2, title: 'book2', price: 100 },
            { id: 3, title: 'book3', price: 79 },
        ],
        showProducts: false,
        showMain: true,
        auth: false
    }
    componentDidMount() {
        console.log('App.js componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextSate) {
        console.log('app.js shouldComponentUpdate');
        return true
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('App.js compoentDidMount');
    }
    changeTitleHandler = (event, id) => {
        const productIndex = this.state.products.findIndex((item) => {
            return item.id === id
        })
        const product = {
            ...this.state.products[productIndex]
        }
        product.title = event.target.value
        const products = [...this.state.products]
        products[productIndex] = product
        this.setState({ products: products })
    }
    toggelProductHandler = () => {
        const show = this.state.showProducts
        this.setState({ showProducts: !show })
    }
    deleteProductHandler = (productIndex) => {
        const products = [...this.state.products]
        products.splice(productIndex, 1)
        this.setState({ products: products })
    }
    loginHandler = () => {
        this.setState({ auth: true })
    }
    render() {
        console.log('App.js render');
        let products = null
        if (this.state.showProducts) {
            products = (
                <div>
                    <ProductList
                        products={this.state.products}
                        click={this.deleteProductHandler}
                        change={this.changeTitleHandler}
                        isAuth={this.state.auth}
                    />
                </div>
            )
        }
        return (
            <Container>
                <button onClick={() => { this.setState({ showMain: false }) }}>remove main</button>
                <AuthContext.Provider value={{ auth: this.state.auth, login: this.loginHandler }}>
                    {this.state.showMain ?
                        <Main
                            products={this.state.products}
                            click={this.toggelProductHandler}
                        /> : null}
                    {products}
                </AuthContext.Provider>
            </Container>
        )
    }
}

export default Wrapper(App, 'center');