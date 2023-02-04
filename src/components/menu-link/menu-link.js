import { Component } from "react";

import "./menu-link.scss";

class MenuLink extends Component {
    render() {
        const { name, href, color } = this.props;
        return (
            <>
                <li className="menu-link">
                    <a href={href} className={color}>
                        {name}
                    </a>
                </li>
            </>
        );
    }
}

export default MenuLink;
