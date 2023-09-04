import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function SingleBlog() {
    const router = useRouter()
    const { bid } = router.query

    return (
        <>
            <div>this is our blog {bid}</div>
            <Link href="/profile">Back</Link>
        </>
    )
}

export default SingleBlog