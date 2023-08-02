import React from 'react'

function UserData({ user }) {
    return (<>
        <h3  >{user.name}</h3>
        <h3 >{user.email}</h3>

    </>
    )
}

export default UserData

// Component and Pages are different from each other, as beacuse they both share different properties