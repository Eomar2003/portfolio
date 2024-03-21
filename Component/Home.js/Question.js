import React from "react";
import './Question.css';

const Question = () => {
    return (
        <>
                <section className="question">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <h3>
                            Do you bake breads containing animal fats or products?
                        </h3>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h3>
                            Is Foodera Bread really baked fresh each day?
                        </h3>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h3>
                            When are you opening a shop near me?
                        </h3>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h3>
                            Can I order your products online?
                        </h3>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </div>

                </div>
            </div>
        </section>
        <section className="cover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 item">
                        <h3>
                        Baked fresh daily by bakers with passion.
                        </h3>
                    </div>
                    <div className="col-lg-6 col-md-6 item">
                        <button>
                            <a href="">
                                Learn More
                            </a>
                            </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Question;