import React from 'react'

function Index({ post }) {

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )

}

export default Index

export const getStaticPaths = async () => {

    // const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    // const data = await response.json()

    // const paths = data.map((post) => {
    //     return {
    //         params: {
    //             postid: `${post.id}`
    //         }
    //     }
    // })


    return {
        paths: [
            { params: { postid: "1" } },
            { params: { postid: "2" } },
            { params: { postid: "3" } },
            // { params: { postid: "4" } },
            // { params: { postid: "5" } },
        ],
        // paths: paths,
        fallback: "blocking"
    }
}


export const getStaticProps = async (context) => {

    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)

    const data = await response.json()
    return {
        props: {
            post: data
        }
    }
}