import React from 'react'

function UserData({ user }) {
    return (
        <>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <br />
        </>
    )
}

export default UserData