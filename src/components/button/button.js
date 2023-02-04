import { Component } from "react";

import "./button.scss";

class Button extends Component {
    render() {
        const { text, color } = this.props;
        return <button className={"button " + color}>{text}</button>;
    }
}

export default Button;
