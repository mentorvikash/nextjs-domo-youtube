import React from 'react'
import { useRouter } from 'next/router'

function Index() {
    const router = useRouter()
    const params = router.query.params
    console.log(params)


    if (params?.length === 3 && params[1] === "review") {
        return <div>The product id is {params[0]} and review id is {params[2]}</div>
    }

    if (params?.length === 2 && params[1] === "review") {
        return <div>The product id is {params[0]} and all our reviews are: </div>

    }

    return (
        <div>The product id is {params ? params[0] : ""}</div>
    )
}

export default Index