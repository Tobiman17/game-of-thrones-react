import React, { useEffect, useState } from "react";
import "./RingCursor.css";

const RingCursor = (props) => {
    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        function handleMouseMove(event) {
            const { pageX: x, pageY: y } = event;
            setCursorPos({ x: x - 60, y: y - 60 });
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                id="dragCursor"
                className="custom-cursor"
                style={{
                    display: props.isDotHovered ? "none" : "flex",
                    transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
                }}
            >
            ZIEHEN
            </div>
        </>
    );
};

export default RingCursor;
