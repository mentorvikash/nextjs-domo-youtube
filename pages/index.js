import React, { useEffect, useState } from "react";
import Link from "next/link";
import DrawingCanvas from "@/components/react_canvas";

function HomePage() {
  const [index, setIndex] = useState(0);

  const information = [
    "SWR is a data fetching library used to do everything Related api handeling"];

  useEffect(() => {
    console.log("infolen", information.length);
    console.log("index", index);
  }, [index]);
  return (
    <>
      <div>
        <Link href="/news">News</Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "600",
        }}
      >
        <h2 style={{ padding: 0, paddingRight: "10px" }}>
          SWR Data fetching {" "}
        </h2>
        <h2 style={{ padding: 0, color: "gray" }}> | Revive Coding</h2>
      </div>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          border: "1px solid black",
        }}
      >
        <button
          style={{ alignSelf: "center" }}
          onClick={() => index > 0 && setIndex((prev) => prev - 1)}
        >
          {" "}
          Prev
        </button>
        <div
          style={{
            // border: "1px solid red",
            margin: "2rem",
            height: "300px",
            width: "80vw",
            display: "flex",
            justifyContent: "start",
            backgroundColor: "grey",
            color: "white",
            borderRadius: "12px",
            boxShadow: "2px 3px 12px gray",
            padding: "4rem",
            overflowY: "auto",
          }}
        >
          <div
            style={{ alignSelf: "center", fontSize: "52px", fontWeight: 600 }}
          >
            {information[index]}
          </div>
        </div>
        <button
          style={{ alignSelf: "center" }}
          onClick={() =>
            index != information.length - 1 && setIndex((prev) => prev + 1)
          }
        >
          Next
        </button>
      </div>
      <div style={{ border: "3px solid black", borderRadius: "10px", display: "inline-block", marginTop: "10px" }} >
        <DrawingCanvas />
      </div>
    </>
  );
}

export default HomePage;


