import React, { Component } from "react";
import "./menu.item.styles.scss";
export class MenuItem extends Component {
  render() {
    return (
      <div className={`${this.props.size} menu-item`}>
        <div className = 'background-image' style={{
          backgroundImage: `url(${this.props.imageurl})`,
        }}/>
          <div className="content">
            <h1 className="title">{this.props.title}</h1>
            <span className="subtitle">{this.props.subtitle}</span>
          </div>
      </div>
    );
  }
}

export default MenuItem;
