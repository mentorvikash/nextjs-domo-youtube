import React from 'react'

function Category({ newslist, category }) {
    return (
        <>
            <h2>All news related to {category}</h2>
            {
                newslist.map((news, index) => {
                    return <>
                        <h3 key={index}>{news.title} | {news.category} </h3>
                    </>
                })
            }
        </>
    )
}

export default Category

export const getServerSideProps = async (context) => {

    const { params } = context
    console.log(params)
    const res = await fetch(`http://localhost:4000/news?category=${params.category}`)
    const newslist = await res.json()

    return {
        "props": {
            newslist: newslist,
            category: params.category

        }
    }
}