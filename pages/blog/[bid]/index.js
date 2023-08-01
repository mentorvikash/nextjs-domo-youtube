import React from 'react'
import { useRouter } from 'next/router'

function SingleBlog() {
    const router = useRouter()
    const { bid } = router.query

    return (
        <div>this is our blog {bid}</div>
    )
}

export default SingleBlog