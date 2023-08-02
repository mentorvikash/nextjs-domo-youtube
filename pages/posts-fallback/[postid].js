import React from 'react'
import { useRouter } from 'next/router'

function SinglePost({ user }) {

    const router = useRouter()

    if (router.isFallback) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h2>{user.title}</h2>
            <h6>{user.body}</h6>
        </div>
    )
}

export default SinglePost

export const getStaticPaths = async () => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    const users = await response.json()

    const pathArry = users.map(user => {
        return { params: { postid: `${user.id}` } }
    })

    const newArry = pathArry.slice(0, 3)

    return {
        paths: newArry,
        fallback: "blocking",  // false | true | "blocking"
    }
}

export async function getStaticProps(context) {
    const { params } = context
    console.log({ params })
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const user = await response.json()

    if (!user.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            user: user,
        }
    }
}