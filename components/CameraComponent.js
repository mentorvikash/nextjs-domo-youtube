import React from 'react';
import Webcam from 'react-webcam';

const CameraComponent = () => {
    const webcamRef = React.useRef(null);

    return (
        <div style={{
            // border: "1px solid red",
            borderRadius: "17rem",
            display: "flex",
            overflow: "hidden",
            width: "18rem",
            // left: ["13px", "62%"],
            justifyContent: "center",
            height: "18rem",
            alignItems: "center",
            position: "fixed",
            bottom: "0%",
            right: "12px",
            transform: 'scaleX(-1)'
        }}>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={640}
                height={480}
            />
        </div>
    );
};

export default CameraComponent;
