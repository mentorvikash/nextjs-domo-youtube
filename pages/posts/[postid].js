import React from 'react'
import { useRouter } from 'next/router'

function Index({ product }) {

    const router = useRouter()

    if (router.isFallback) {
        return <h2>Loding....</h2>
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <p>{product.category}</p>
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
        ],
        fallback: true
    }
}


export const getStaticProps = async (context) => {

    const { params } = context
    const response = await fetch(`http://localhost:4000/products/${params.postid}`)

    const data = await response.json()
    return {
        props: {
            product: data
        },
        revalidate: 30,

    }
}