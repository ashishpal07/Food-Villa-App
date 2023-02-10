import React from "react";
import ReactDom, {createRoot} from "react-dom/client"


const title = (
    <h1 id="title" key="h1">
        Food Villa
    </h1>
);

const HeaderComponent = () => (
    <div>
        <h2>
            React Functional Component
        </h2>
        <h2>
            Namste React
        </h2>
    </div>
)


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);