import Product from './Product'
import React from 'react';
import ShowCaseLine from './Showcaseline'

class ShowCase extends React.Component {
    render() {
        const products = this.props.products;
        let showCase = [];
        products.forEach(product => {
            showCase.push(React.createElement(Product, { key: product.id, product }));
        })
        return (
            
            React.createElement(ShowCaseLine, { cards: showCase })
        )
    }
}

export default ShowCase