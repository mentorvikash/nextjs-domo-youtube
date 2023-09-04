import React from 'react'
import { useRouter } from 'next/router'

function Index() {

    const router = useRouter()
    const params = router.query.params
    console.log(params)

    if (params?.length === 2 && params[1] === "review") {
        return <h1> this is all review of product {params[0]} </h1>
    }

    if (params?.length === 3 && params[1] === "review") {
        return <h1> this is {params[2]}  review of product {params[0]} </h1>
    }

    return (
        <div>The product id is {params ? params[0] : ""}</div>
    )
}

export default Index