import { useRouter } from 'next/router'
import React from 'react'

function Index() {
    const router = useRouter()
    const { blogid } = router.query

    return (
        <div>thi is my {blogid} blog </div>
    )
}

export default Index