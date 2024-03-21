import React, { Component } from 'react'
import './App.css';
import BoxClass from "./component/BoxClass";

const choice = {
    rock: {
        name: "Rock",
        img: "https://letstalkscience.ca/sites/default/files/2020-02/balanced-stones-on-a-pebble-beach.jpg"

    },
    scissors: {
        name: "Scissors",
        img: "https://www.sallybeauty.co.uk/dw/image/v2/BBTX_PRD/on/demandware.static/-/Sites-sally-master-catalog/default/dw5f0fe95b/images/original/815144_1.jpg?sw=1000&sh=1000"
    },
    paper: {
        name: "Paper",
        img: "https://5.imimg.com/data5/HC/KF/HZ/SELLER-4619430/white-art-paper.jpg"
    }
}


export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
            comResult: "",
        };
    }


    play = (userChoice) => {

        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice),
            comResult: this.judgement(computerChoice, choice[userChoice]),
        })
    }


    randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];

    }


    judgement = (user, computer) => {
        if (user.name === computer.name) {
            return "tie";
        } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose";
        else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose";
        else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";

    }


    render() {
        return (
            <div>
                <div className="main">
                    <BoxClass
                        title="You"
                        item={this.state.userSelect}
                        result={this.state.result}
                        box={this.state.result}
                    />
                    <BoxClass
                        title="Computer"
                        item={this.state.computerSelect}
                        result={this.state.comResult}
                        box={this.state.comResult}
                    />
                </div>
                <div className="main">
                    <button onClick={() => this.play("scissors")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>

            </div>
        )
    }
}
