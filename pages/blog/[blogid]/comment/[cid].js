import { useRouter } from 'next/router'
import React from 'react'

function Comment() {
    const router = useRouter()
    const { cid, blogid } = router.query

    return (
        <div>Comment id is: {cid} of blog {blogid}</div>
    )
}

export default Comment