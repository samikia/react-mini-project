import React, { Component } from 'react'
import Product from '../product'
class ProductList extends Component {
    shouldComponentUpdate(nextProps, NextSate) {
        console.log('ProductList shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('ProductList getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate() {
        console.log('ProductList componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('ProductList,willunmount');
    }
    render() {
        console.log('ProductList');
        return this.props.products.map((item, index) => {
            return <Product
                click={() => this.props.click(index)}
                title={item.title}
                price={item.price}
                key={item.id}
                change={(event) => this.props.change(event, item.id)}
            />
        })
    }

}
export default ProductList