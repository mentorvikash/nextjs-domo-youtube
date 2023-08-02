import React from 'react'

function SinglePost({ user }) {
    return (
        <div>
            <h2>{user.title}</h2>
            <h6>{user.body}</h6>
        </div>
    )
}

export default SinglePost

export const getStaticPaths = (path) => {

    return {
        paths: [
            {
                params: { postid: "1" }
            },
            {
                params: { postid: "2" }
            },
            {
                params: { postid: "3" }
            }
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    console.log({ params })
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const user = await response.json()

    return {
        props: {
            user: user,
        }
    }
}