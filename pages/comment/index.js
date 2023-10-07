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

    // delete Function

    async function handleDelete(id) {
        // create a delete request
        const response = await fetch(`http://localhost:3000/api/comments/${id}`, {
            method: 'DELETE',
        })
        const data = await response.json()

        if (data.success) {
            // alert("successfully deleted")
            // we call this to get updated record of commmet after commnet successfully deleted
            getAllComments()
        }
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
                        <div style={{ display: "flex" }} key={index}>
                            <button onClick={() => handleDelete(comment.id)} >Delete</button>
                            <h4>comment {index}: {comment.body}</h4>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Index




// lets implement this to our UI With a delete button
// add a delete button before each comment
// add the delete Function
// now lets test our UI and fix error if any
// that means our fucntion not work properly 
// lets fix this issue

// Let's Create a Catch all routes
// all parameters can be caught in one file lets see how?

// Let's create a seperate page to access individual comments data.
// But we will pre render the data by using getstaticprops