import React from "react";

function Previewer(props) {
    return (
        <div id="previewer">
            <h2>Previewer</h2>
            <div dangerouslySetInnerHTML={props.getMarkdownText()}></div>
        </div>
    );
}

export default Previewer;
