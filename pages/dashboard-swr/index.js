import React, { useEffect, useState } from 'react'

function Dashboard() {

    const [data, setData] = useState({})
    const [isLoding, setIsLoding] = useState(true)

    useEffect(() => {

        const fetchDashboardData = async () => {

            try {
                const res = await fetch("http://localhost:4000/dashboard")
                const data = await res.json()
                setData(data)
                setIsLoding(false)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchDashboardData()

    }, [])

    console.log(data)

    if (isLoding) {
        return <h1>Loding...</h1>
    }

    return (
        <div>
            <h2>numberOfLikes : {data.numberOfLikes}</h2>
            <h2>numberOfComments : {data.numberOfComments}</h2>
            <h2>impressions : {data.impressions}</h2>
            <h2>views : {data.views}</h2>
            <h2>followersCount : {data.followersCount}</h2>
            <h2>friendsCount : {data.friendsCount}</h2>
            <h2>numberOfPosts : {data.numberOfPosts}</h2>
        </div>
    )
}

export default Dashboard


// data.numberOfPosts
// data.numberOfLikes
// data.numberOfComments
// data.impressions
// data.views
// data.followersCount
// data.friendsCount

