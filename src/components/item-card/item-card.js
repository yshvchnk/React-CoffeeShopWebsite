import { Component } from "react";

import "./item-card.scss";

class ItemCard extends Component {
    render() {
        const { imgsrc, imgalt, text, price } = this.props;
        return (
            <div className="card">
                <div className="item-img">
                    <img src={imgsrc} alt={imgalt} />
                </div>
                <p className="item-text">{text}</p>
                <p className="item-price">{price}</p>
            </div>
        );
    }
}

export default ItemCard;
