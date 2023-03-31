import React, { useEffect, useRef } from "react";
import './LightCursor.css';
import { throttle } from 'lodash';

const LightCursor = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        document.getElementById("circle").style.opacity = "0";
    }, []);

    useEffect(() => {
        const throttledPositionCircle = throttle(positionCircle, 4);
        document.addEventListener('mousemove', throttledPositionCircle);
        return () => {
            document.removeEventListener('mousemove', throttledPositionCircle);
        }
    }, []);

    function positionCircle(e) {
        let bodyX = e.clientX / 25;
        let bodyY = e.clientY / 25;

        document.body.style.backgroundPositionX = `${bodyX}px`;
        document.body.style.backgroundPositionY = `${bodyY}px`;

        if (circleRef.current) {
            circleRef.current.style.left = `${e.clientX}px`;
            circleRef.current.style.top = `${e.clientY}px`;
        }
    }

    return (
        <div
            id="circle"
            ref={circleRef}
            style={{ position: 'fixed', opacity: 0 }}
        ></div>
    );
};

export default LightCursor;
