import React from 'react'
import UserData from '@/components/userData'
import { promises as fs } from 'fs';


function Users(props) {
    const users = props.usersData
    const extdata = props.extdata

    console.log({ props })
    return (
        <div>
            {
                users?.map(user => {
                    return (
                        <div key={user.id}>
                            < UserData user={user} />
                        </div>

                    )
                })
            }
        </div>
    )
}

export async function getStaticProps() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await users.json()
    const extdata = await fs.readFile("./data/userdata.json", "utf-8")
    return {
        props: {
            usersData: data,
            extradata: JSON.parse(extdata),
        }
    }
}

export default Users

// First have to use getStatic props then pass the following properties willing to pass into the component by use of props
// Remember defining the getStaticProps function we have to export it.
// Can only be used insit pages folder 