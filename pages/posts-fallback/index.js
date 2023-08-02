import Link from 'next/link'
import React from 'react'

function PostList({ postdata }) {
    return (
        <div>
            <h1>PostList</h1>
            {
                postdata && postdata.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts-fallback/${post.id}`} >
                                <h3>{post.title}</h3>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const postdata = await response.json()
    return {
        props: {
            postdata: postdata
        }
    }
}