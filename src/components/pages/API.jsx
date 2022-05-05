import React, { useEffect, useState } from 'react'
import GitUsers from './GitUsers'
import Loading from './Loading'

export default function API() {
    const [showUser, setShowUser] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        try {
            const response = await fetch("https://api.github.com/users")
            setLoading(false)
            setShowUser(await response.json())
        } catch (error) {
            setLoading(false)
            console.log("Error in fetching API", error)
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return (
            < Loading />
        )
    }

    return (
        <>
            <GitUsers showUser={showUser} />
        </>
    )
}
