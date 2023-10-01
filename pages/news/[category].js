import React from 'react'

function Category({ newslist, category }) {
    return (
        <>
            <h1>List of news from {category} category  </h1>
            {
                newslist.map(news => <>
                    <h3>{news.title}</h3>
                </>)
            }

        </>
    )
}

export default Category

// successful implemented server side rendering with next js
export const getServerSideProps = async (context) => {
    // destructure to get params value
    const { category } = context.params
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