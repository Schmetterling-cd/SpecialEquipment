import React from 'react';

class ShowCaseLine extends React.Component {
    render() {
        return (
            <div className="row justify-start pt-5 pb-5">
                {this.props.cards}
            </div>
        )
    }
}

export default ShowCaseLine