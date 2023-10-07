import React, { useState } from 'react'


function Index() {

    const [comments, setComments] = useState([])
    // a state to store our comment
    const [comment, setComment] = useState([])


    // create a function to get all comments
    const getAllComments = async () => {
        const response = await fetch("http://localhost:3000/api/comments")
        const data = await response.json()
        // set the data to a start
        setComments(data.comments)
    }

    // create a post request to send our data 
    const submitComment = async () => {
        const response = await fetch("http://localhost:3000/api/comments",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment })
            })

        const data = response.json();
        console.log(data)
    }

    return (
        <>
            {/* create a input box to create new comment */}
            <div>
                <input type='text' value={comment} onChange={(event) => setComment(event.target.value)} />
                <button onClick={submitComment} >Submit Comment </button>
            </div>
            <button onClick={getAllComments} >Get Comments</button>
            {
                // Render comments here | lets only render comments
                comments && comments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <h4>comment {index}: {comment.body}</h4>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Index