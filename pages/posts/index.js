import React from 'react'
import Link from 'next/link'

function index({ products }) {

    return (
        <>
            <h1>Master</h1>

            <div>
                {
                    products?.map((product, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <h2 >
                                        <Link href={`/posts/${product.id}`} passHref >
                                            {product.title + " " + product.price}
                                        </Link>
                                    </h2>
                                </div>

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

    const response = await fetch("http://localhost:4000/products")

    const data = await response.json()

    return {
        props: {
            products: data
        }
    }
}