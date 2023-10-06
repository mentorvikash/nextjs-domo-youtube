import React from 'react'

function Index({ newslist }) {

    return (
        <div>
            <h2>list of news at present</h2>
            {
                newslist.map((news, index) => {
                    return <>
                        <h3 key={index} >{news.title} | {news.category} </h3>
                    </>
                })
            }
        </div>
    )
}

export default Index

export const getServerSideProps = async () => {

    const res = await fetch("http://localhost:4000/news")
    const newslist = await res.json()

    return {
        "props": {
            newslist: newslist
        }
    }
}