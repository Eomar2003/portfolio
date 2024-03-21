import React from "react";
import { Carousel } from "react-bootstrap";
import './Slide.css'
import img1 from './../../assets/s (1).jpg'
import img2 from './../../assets/s (2).jpg'
import img3 from './../../assets/s (3).jpg'

const Slide = () => {
    return (
        <section className="slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <Carousel>
                            <Carousel.Item>
                                <img src={img1} />                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={img2} />                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={img3} />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

        </section>

    )
}



export default Slide;