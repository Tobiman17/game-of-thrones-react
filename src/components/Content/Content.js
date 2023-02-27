import React from "react";
import './Content.css';

const Content = ({ quote, description }) => {
    return (
        <>
            <section className="customSectionContainer">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-end align-items-center">
                                <div className="text quote">{quote}</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-end align-items-center">
                                <div className="text normalTextContainer">{description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content;