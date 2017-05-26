import React from "react";

const Loading = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h2>Create your snippet's HTML, CSS and Javascript in the editor tabs</h2>
                    <div id="loading">
                        <ul className="bokeh">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export default Loading;