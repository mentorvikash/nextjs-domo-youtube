import React from 'react'

function index(props) {

    return (
        <>
            <h1>User Page</h1>
            <p>{props.name}</p>
            <p>{props.subscribe}</p>
            <div>
                {
                    props.userData?.map(user => {
                        return (
                            <>
                                <h2>{user.name}</h2>
                                <h3>{user.email}</h3>
                                <br />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default index

export async function getStaticProps() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const data = await response.json()

    return {
        props: {
            name: "revive codings",
            subscribe: "why don' you subscribe",
            userData: data

        }
    }
}