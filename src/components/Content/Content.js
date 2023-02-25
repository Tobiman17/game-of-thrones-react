import React from "react";
import './Content.css';

const Content = (props) => {
    return (
        <>
            <section className="customSectionContainer" style={{paddingBottom: "3000px"}}>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center justify-content-end h-100">
                                <div className="text quote">
                                    {props.quote}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-end align-items-center h-100">
                                <div className="text normalTextContainer">
                                    {props.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content;