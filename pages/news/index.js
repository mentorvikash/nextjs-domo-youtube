import React from 'react'

function NewsList({ newslist }) {


    return (
        <>
            <h1>News list: </h1>
            {
                newslist.map(news => <>
                    <h3>{news.title} | {news.category}</h3>
                </>)
            }
        </>
    )
}

export default NewsList


export const getServerSideProps = async () => {
    const data = await fetch("http://localhost:4000/news");
    const newslist = await data.json();

    return {
        props: {
            newslist: newslist
        }
    }
}