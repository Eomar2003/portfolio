import React from "react";
import './Product.css';
import Data from "../Data";


const Product = () => {
    const productitems = Data.map((items) => {
        return (
            <div className="col-md-4">
                <div className="box">
                    <img src={items.img} />
                    <h5>{items.title}</h5>
                    <span>{items.time}</span>
                    <h6>{items.price}</h6>
                    <span className="p_price">{items.pprice}</span>
                </div>
                <button>
                    <a href="">Order Now</a>
                </button>
            </div>
        )
    })
    return (
        <section className="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Explore Our Foods</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {productitems}
                </div>
            </div>
        </section>
        
    )
}



export default Product;