import React, {useEffect, useState} from "react";
import './LightCursor.css';

const LightCursor = () => {
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
        document.getElementById("circle").style.opacity = "0";
    }, []);

    useEffect(() => {
        function positionCircle(e) {
            setCirclePosition({ x: e.clientX, y: e.clientY });
            let bodyX = e.clientX / 25;
            let bodyY = e.clientY / 25;

            document.body.style.backgroundPositionX = `${bodyX}px`;
            document.body.style.backgroundPositionY = `${bodyY}px`;
        }

        document.addEventListener('mousemove', positionCircle);

        return () => {
            document.removeEventListener('mousemove', positionCircle);
        };
    }, []);

    return (
        <>
            <div
                id="circle"
                style={{ position: 'fixed', left: circlePosition.x, top: circlePosition.y }}
            ></div>
        </>
    );
};

export default LightCursor;