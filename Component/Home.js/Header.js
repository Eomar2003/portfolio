import React from "react";
import './Header.css';


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>The perfect choice <br />for you</h2>
                        <p>The best choice for your health and taste just taste it.</p>
                        <button className="b-one">Order Now</button>
                        <button className="b-two">Learn More</button>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header;