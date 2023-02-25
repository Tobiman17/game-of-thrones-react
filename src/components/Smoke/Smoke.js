import React, { useEffect } from "react";
import './Smoke.css';



const Smoke = () => {

    useEffect(() => {
        const handleScroll = () => {

            const divs = document.getElementById("smokeContainer");
            const divsTop = document.getElementById("smokeContainerTop");
            const limit = 600;
            const st = window.pageYOffset || document.documentElement.scrollTop;

            if (st <= limit) {
                divs.style.opacity = 0.3 + st / limit;
                divsTop.style.opacity = 0.3 + st / limit;
            }

            if (st > 600) {
                divs.style.opacity = 1;
                divsTop.style.opacity = 1;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id={"smokeContainer"} className="smokeContainer">
                <div className="clouds">
                    <div className="clouds-1"></div>
                    <div className="clouds-2"></div>
                </div>
            </div>

            <div id={"smokeContainerTop"} className="smokeContainer">
                <div className="clouds">
                    <div className="clouds-1"></div>
                    <div className="clouds-2"></div>
                </div>
            </div>
        </>
    );
};

export default Smoke;