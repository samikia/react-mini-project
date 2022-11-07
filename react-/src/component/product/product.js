import React, { Component } from 'react'
import './product.css'
import Wrapper from '../hoc/wrapper';
import Authcontext from '../../context/auth-context';
class Product extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    static contextType = Authcontext
    componentDidMount() {
        this.inputRef.current.focus()
    }
    render() {
        console.log('Product');
        return (<>

            {this.context.auth ? <p>logged in!</p> : <p>Please loging!</p>}

            <p key='1' onClick={this.props.click}>product name: {this.props.title}</p>
            <p key='2'>product price: {this.props.price}</p>
            <p key='3'>{this.props.children}</p>
            <input ref={this.inputRef} key='4' type="text" onChange={this.props.change} value={this.props.title} />
        </>
        )

    }
}

export default Wrapper(Product, 'product');