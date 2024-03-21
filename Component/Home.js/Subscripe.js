import React from "react";
import './Subscripe.css';


const Subscripe = () => {
    return (
        <section className="subscripe">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>
                            Hurry up! Subscribe our newsletter and get 25% Off
                        </h2>
                        <p>
                            Limited time offer for this month. No credit card required.
                        </p>
                    </div>
                    <div className="col-lg-12 col-md-12 btnn">
                        <input placeholder="Email@...." ></input>
                        <button>
                            <a href="">
                                Subscribe
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Subscripe;