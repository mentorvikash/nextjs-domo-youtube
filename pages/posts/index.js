import React from 'react'
import Link from 'next/link'

function index({ posts }) {

    return (
        <>
            <h1>Master</h1>

            <div>
                {
                    posts?.map((post, index) => {
                        return (
                            <>
                                <h2 key={index}>
                                    <Link href={`/posts/${post.id}`} passHref >
                                        {post.title}
                                    </Link>
                                </h2>
                                <hr />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default index

export async function getStaticProps() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")

    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}