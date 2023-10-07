import React from 'react'
import { comments } from '../data/comments'

function IndividualComment({ comment }) {
    return (
        <div >
            <h3>{comment.name}</h3>
            <h3>{comment.email}</h3>
            <h3>{comment.body}</h3>
        </div>
    )
}

export default IndividualComment

export async function getStaticPaths() {

    return {
        paths: [
            { params: { commentid: "1" } },
            { params: { commentid: "2" } },
            { params: { commentid: "3" } }
        ],
        fallback: false,
    }
}


export async function getStaticProps(context) {

    const { commentid } = context.params

    const singleComment = comments.filter(comment => comment.id === Number(commentid))

    return {
        props: {
            comment: singleComment[0]
        }
    }
}

// but same data for all its make it dynamic
// here we had successfully recrive data of single comment we page data prerender