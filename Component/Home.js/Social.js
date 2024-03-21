import React from "react";
import './Social.css';


const Social = () => {
    return (
        <section className="social">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 sect">
                        <div className="col-lg-12 col-md-12">
                            <a href="">Register</a>
                            <a href="">Forum</a>
                            <a href="">Affiliate</a>
                            <a href="">FAQ</a>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 icons">
                        <div className="col-lg-12 col-md-12">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-square-x-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-square-whatsapp"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <span>
                            &#169; 2024. Taste It. All rights reseved.
                        </span>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Social;