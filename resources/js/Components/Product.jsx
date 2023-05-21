import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div className="col-3 align-self-center mb-5">
                <div className="card product" id={this.props.product.id}>
                    <div className="market-img photo">
                        <img src={this.props.product.photo} className="card-img-top ph" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.name}</h5>
                        <p className="card-text">{this.props.product.coast} р/ч</p>
                        <a href="#" className="btn btn-primary">Заказать</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product