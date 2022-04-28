import React, { Component } from "react";
import "./App.scss";
import "./Quote.scss";

function Quote({ quote: { text, author }, onClickHandler }) {
    return (
        <div id="quote-box">
            <h3 id="text">{text}</h3>
            <p id="author">- {author}</p>
            <div className="btns">
                <a
                    id="tweet-quote"
                    href="twitter.com/intent/tweet"
                    target="_blank"
                >
                    <i class="fa-brands fa-twitter " id="tweet-quote-i"></i>
                </a>
                <button id="new-quote" onClick={onClickHandler}>
                    New Quote
                </button>
            </div>
        </div>
    );
}

export class App extends Component {
    state = {
        quotes: [
            {
                id: 1,
                text: "Strive not to be a success, but rather to be of value.",
                author: "Albert Einstein",
            },

            {
                id: 2,
                text: "The only person you are destined to become is the person you decide to be.",
                author: "Ralph Waldo Emerson",
            },
            {
                id: 3,
                text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
                author: "Maya Angelou",
            },
            {
                id: 4,
                text: "Dream big and dare to fail.",
                author: "Norman Vaughan",
            },
            {
                id: 5,
                text: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
                author: "Vincent Van Gogh",
            },
            {
                id: 6,
                text: "We become what we think about.",
                author: "Earl Nightingale",
            },
        ],
        currentId: 0,
        color: "123456",
    };
    changeColor = () => {
        let color = "";
        for (let i = 0; i < 6; i++) {
            color = color + Math.floor(6 * Math.random());
        }
        return color;
    };
    onClickHandler = () => {
        let id = this.state.currentId;
        id = id + 1;
        if (id > 5) {
            id = 0;
        }
        const color = this.changeColor();
        this.setState({ currentId: id, color: color });
    };
    render() {
        return (
            <div
                className="app"
                style={{
                    background: "#" + this.state.color,
                    color: "#" + this.state.color,
                }}
            >
                <Quote
                    quote={this.state.quotes[this.state.currentId]}
                    onClickHandler={this.onClickHandler}
                />
            </div>
        );
    }
}

export default App;
