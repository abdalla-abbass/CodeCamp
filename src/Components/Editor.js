import React from "react";

function Editor(props) {
    return (
        <div id="editor">
            <h2>Editor</h2>
            <textarea onChange={props.ChangeHandler}></textarea>
        </div>
    );
}

export default Editor;
