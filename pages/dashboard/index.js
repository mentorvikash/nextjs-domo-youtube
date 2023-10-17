import React, { useEffect, useState } from 'react'
import useSWR from 'swr'



const fetcher = (...args) => fetch(...args).then(res => res.json())


function Dashboard() {

    const { data, error, isLoading } = useSWR('http://localhost:4000/dashboard', fetcher)

    if (error) {
        return <h2>{error.message}</h2>
    }

    console.log({ data })

    if (isLoading) {
        return <h2>Reoading...</h2>
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

