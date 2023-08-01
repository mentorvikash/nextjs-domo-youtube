import React from 'react'
import { useRouter } from 'next/router'

function SingleComment() {
    const router = useRouter()
    const { cid, bid } = router.query

    return (
        <div>This is my {bid} post and have comment {cid}</div>
    )
}

export default SingleComment