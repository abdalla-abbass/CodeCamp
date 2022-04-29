import React, { Component } from "react";
import "./App.scss";
import { marked } from "marked";
import Editor from "./Components/Editor";
import Previewer from "./Components/Previewer";
class App extends Component {
    state = {
        previewer: "",
    };

    onChangeHandler = (e) => {
        this.setState({ previewer: e.target.value });
    };

    getMarkdownText = () => {
        const rawMarkup = marked(this.state.previewer, { sanitize: true });
        return { __html: rawMarkup };
    };

    render() {
        return (
            <React.Fragment>
                <Editor ChangeHandler={this.onChangeHandler} />
                <Previewer getMarkdownText={this.getMarkdownText} />
            </React.Fragment>
        );
    }
}

export default App;
