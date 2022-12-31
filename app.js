import React from "react";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const header = React.createElement("h1", { id: "header" }, "Hello from React");

root.render(header);
