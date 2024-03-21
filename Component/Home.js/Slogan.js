import React from "react";
import './Slogan.css'
import slogan from './../../assets/pexels-dana-tentis-691114.jpg';
const Slogan = ()=>{
    return(
        <section className="slogan">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={slogan} title=""></img>
                    </div>
                    <div className="col-md-6 text">
                        <h2>
                        We pride ourselves on making real food from the best ingredients.
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus <br/>bibendum in sit amet leo. Mauris feugiat erat tellus.
                        </p>
                        <button>
                            <a href="">
                                Learn More
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Slogan;