import React from 'react'

function Category({ newslist, category }) {
    return (
        <>
            <h1>List of news from {category} category  </h1>
            {
                newslist.map((news, index) => <>
                    <h3 key={index}>{news.title}</h3>
                </>)
            }

        </>
    )
}

export default Category

// successful implemented server side rendering with next js
export const getServerSideProps = async (context) => {
    // destructure to get params value
    const { req, res, params, query } = context
    const { category } = params

    res.setHeader('Set-cookie', ['name=rccoding'])

    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const newslist = await response.json()

    // passed data by props
    return {
        props: {
            newslist: newslist,
            category: category
        }
    }
}

// lets create our build to see how it behaviors
// use npm run build to create build