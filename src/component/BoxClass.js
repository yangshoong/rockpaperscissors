import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor() {
        super();
        this.result = "";
    }

    render() {
        return (
            <div className={this.props.box}>
                <h1>{this.props.title}</h1>
                <img className="item-img" src={this.props.item && this.props.item.img} alt=""></img>
                <h2>{this.props.result}</h2>

            </div>
        )
    }
}
