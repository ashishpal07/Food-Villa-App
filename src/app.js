
import React from "react";
import ReactDom, {createRoot} from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// import * as XYZ from "./components/Header";


// config deiven UI

const AppLayOut = () => {
    return (
        <>
          <HeaderComponent />
          <Body />
          <Footer />
        </>
    );
};


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);