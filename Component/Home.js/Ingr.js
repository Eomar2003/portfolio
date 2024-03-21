import React from "react";
import './Ingr.css';
import ingr from './../../assets/Ingre.png';

const Ingr = () => {
    return (
        <>
            <section className="ingr">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ingr_text">
                            <h2>
                                We make everything by hand with the best possible ingredients.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <ul>
                                <li>
                                    Etiam sed dolor ac diam volutpat.
                                </li>
                                <li>
                                    Erat volutpat aliquet imperdiet.
                                </li>
                                <li>
                                    purus a odio finibus bibendum.
                                </li>
                            </ul>
                            <button> <a href="">Learn More</a></button>
                        </div>
                        <div className="col-md-6 ingr_img">
                            <img src={ingr} title=""></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className="watch">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>
                            When a man's stomach is full it makes no <br/>difference whether he is rich or poor.
                            </h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                            </p>
                            <a href="">Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ingr;