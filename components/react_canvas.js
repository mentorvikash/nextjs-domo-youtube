import React, { useState, useRef } from 'react';
import { Stage, Layer, Line } from 'react-konva';

const DrawingCanvas = () => {
    const [lines, setLines] = useState([]);
    const [lineHistory, setLineHistory] = useState([]);
    const [redoHistory, setRedoHistory] = useState([]); // New redo history
    const [isDrawing, setIsDrawing] = useState(false);
    const [selectedColor, setSelectedColor] = useState('black'); // Default color
    const stageRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        const { x, y } = e.target.getStage().getPointerPosition();
        setLines([...lines, { points: [x, y], color: selectedColor }]);
        // Clear redo history when a new drawing is made
        setRedoHistory([]);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing) return;

        const newPoint = e.target.getStage().getPointerPosition();
        let lastLine = lines[lines.length - 1];
        lastLine.points = lastLine.points.concat([newPoint.x, newPoint.y]);

        // Update the state with the modified line
        const newLines = [...lines];
        newLines.splice(lines.length - 1, 1, lastLine);
        setLines(newLines);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
        if (lines.length > 0) {
            // Save the current drawing action to the history
            setLineHistory([...lineHistory, lines]);
        }
    };

    const handleClearClick = () => {
        // Clear the lines and both history arrays
        setLines([]);
        setLineHistory([]);
        setRedoHistory([]);
    };

    const handleUndoClick = () => {
        if (lineHistory.length > 0) {
            // Pop the last drawing action from history
            const lastAction = lineHistory[lineHistory.length - 1];
            setLineHistory(lineHistory.slice(0, -1));
            // Add it to the redo history
            setRedoHistory([...redoHistory, lastAction]);
            // Set the lines to the previous state
            setLines(lastAction);
        }
    };

    const handleRedoClick = () => {
        if (redoHistory.length > 0) {
            // Pop the last redo action from redo history
            const lastRedoAction = redoHistory[redoHistory.length - 1];
            setRedoHistory(redoHistory.slice(0, -1));
            // Add it to the history and set the lines accordingly
            setLineHistory([...lineHistory, lastRedoAction]);
            setLines(lastRedoAction);
        }
    };

    return (
        <div>
            <div>
                <label>Select Color:</label>
                <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="violet">Violet</option>
                </select>
                <button onClick={handleUndoClick}>Undo</button>
                <button onClick={handleRedoClick}>Redo</button>
            </div>
            <Stage
                width={1050}
                height={450}
                onMouseDown={handleMouseDown}
                onMousemove={handleMouseMove}
                onMouseUp={handleMouseUp}
                ref={stageRef}
            >
                <Layer>
                    {lines.map((line, i) => (
                        <Line
                            key={i}
                            points={line.points}
                            stroke={line.color}
                            strokeWidth={2}
                            tension={0.5}
                            lineCap="round"
                            globalCompositeOperation="source-over"
                        />
                    ))}
                </Layer>
            </Stage>
            <button onClick={handleClearClick}>Clear Drawing</button>
        </div>
    );
};

export default DrawingCanvas;
