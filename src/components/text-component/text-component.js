import { Component } from "react";

import "./text-component.scss";

class TextComponent extends Component {
    render() {
        const { text, mainClass, color } = this.props;
        return (
            <>
                <p className={mainClass + " " + color}>{text}</p>
            </>
        );
    }
}

export default TextComponent;
